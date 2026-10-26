/* ------------------------------------------------------------------
   FILE: app/api/contact/route.ts

   Ye server par chalne wali API hai. Contact form ka data yahan aata hai,
   check hota hai, aur phir Resend ke through aapko email ja jati hai.

   Resend ki secret key sirf yahin use hoti hai (server par), isliye
   browser ya visitor ko kabhi nahi dikhti.
------------------------------------------------------------------- */

import { NextResponse } from "next/server";
import { Resend } from "resend";

/* ------------------------------------------------------------------
   RATE LIMIT: spam rokne ke liye
   Ek IP address se 5 minute me maximum 3 messages hi jaa sakte hain.
   Note: Ye memory me store hota hai. Serverless par har instance ka
   alag hota hai, lekin portfolio ke liye ye kaafi hai.
------------------------------------------------------------------- */
const RATE_LIMIT_WINDOW_MS = 5 * 60 * 1000; // 5 minute (milliseconds me)
const RATE_LIMIT_MAX = 3; // is time me max kitne messages
const hits = new Map<string, number[]>(); // IP -> pichle requests ka time

function isRateLimited(ip: string) {
  const now = Date.now();

  // Sirf pichle 5 minute ke requests rakhte hain, purane hata dete hain
  const recent = (hits.get(ip) ?? []).filter(
    (t) => now - t < RATE_LIMIT_WINDOW_MS,
  );

  // Abhi ka request bhi list me jodte hain
  recent.push(now);
  hits.set(ip, recent);

  // Agar limit se zyada ho gaye to true (matlab block karo)
  return recent.length > RATE_LIMIT_MAX;
}

/* ------------------------------------------------------------------
   HTML ESCAPE: security ke liye
   Agar koi message me <script> jaisa code daale, to email me wo
   code ki tarah nahi chalega, sirf text ki tarah dikhega.
------------------------------------------------------------------- */
function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

// Email ka simple format check: kuch@kuch.kuch
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/* ------------------------------------------------------------------
   POST handler: form submit hone par yahi function chalta hai
------------------------------------------------------------------- */
export async function POST(request: Request) {
  // 1) Secret values .env.local (ya Vercel) se padhte hain
  const apiKey = process.env.RESEND_API_KEY; // Resend ki secret key
  const toEmail = process.env.CONTACT_TO_EMAIL; // jis email par message chahiye

  // Agar dono me se koi missing hai to aage badhne ka fayda nahi
  if (!apiKey || !toEmail) {
    console.error("Missing RESEND_API_KEY or CONTACT_TO_EMAIL");
    return NextResponse.json(
      { error: "Server is not configured correctly." },
      { status: 500 },
    );
  }

  // 2) Visitor ka IP address nikalte hain (rate limit ke liye)
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0].trim() ?? "unknown";

  // Bahut zyada requests aa rahi hon to 429 (Too Many Requests) wapas bhejo
  if (isRateLimited(ip)) {
    return NextResponse.json(
      { error: "Too many messages. Please try again after a few minutes." },
      { status: 429 },
    );
  }

  // 3) Form ka data (JSON) padhte hain
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    // JSON galat format me ho to 400 (Bad Request)
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  // Har field ko safely string me badalte hain aur extra spaces hata dete hain.
  // typeof check isliye ki koi number ya object bhej kar code tod na sake.
  const name = typeof body.name === "string" ? body.name.trim() : "";
  const email = typeof body.email === "string" ? body.email.trim() : "";
  const message = typeof body.message === "string" ? body.message.trim() : "";
  const website = typeof body.website === "string" ? body.website : ""; // honeypot

  // 4) Honeypot check: ye chhupa field sirf bots bharte hain.
  // Bot ko pata na chale, isliye success jaisa jawab dete hain, par mail nahi bhejte.
  if (website) {
    return NextResponse.json({ success: true });
  }

  // 5) Validation: sab fields bhare hone chahiye
  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "Please fill in all the fields." },
      { status: 400 },
    );
  }

  // Email ka format sahi hona chahiye
  if (!EMAIL_REGEX.test(email)) {
    return NextResponse.json(
      { error: "Please enter a valid email address." },
      { status: 400 },
    );
  }

  // Lambai ki limit (frontend ki maxLength bypass ho sakti hai, isliye server par bhi check)
  if (name.length > 100 || email.length > 150 || message.length > 2000) {
    return NextResponse.json(
      { error: "Your message is too long." },
      { status: 400 },
    );
  }

  // 6) Resend ka client banate hain (secret key ke saath)
  const resend = new Resend(apiKey);

  // TEMPORARY DEBUG: terminal me dikhega ki Resend ko asli me kya value ja rahi hai.
  // Problem solve hone ke baad ye line hata dein.
  //   console.log("replyTo value:", JSON.stringify(email));

  try {
    // 7) Email bhejte hain
    const { error } = await resend.emails.send({
      // Bina domain verify kiye Resend sirf is address se bhejne deta hai
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: [toEmail], // aapka email
      replyTo: [email], // Reply dabane par seedha visitor ko jayega (array format Resend ko pasand hai)
      subject: `New portfolio message from ${name}`,
      // User ka likha hua sab kuch escapeHtml se safe karke daalte hain.
      // \n ko <br /> banate hain taaki naya line email me bhi dikhe.
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6;">
          <h2>New message from your portfolio</h2>
          <p><strong>Name:</strong> ${escapeHtml(name)}</p>
          <p><strong>Email:</strong> ${escapeHtml(email)}</p>
          <p><strong>Message:</strong></p>
          <p>${escapeHtml(message).replace(/\n/g, "<br />")}</p>
        </div>
      `,
    });

    // Resend ne khud error diya (jaise galat key ya limit)
    if (error) {
      console.error("Resend error:", error); // sirf server ke terminal me dikhta hai
      return NextResponse.json(
        { error: "Could not send your message. Please try again." },
        { status: 500 },
      );
    }

    // 8) Sab theek raha
    return NextResponse.json({ success: true });
  } catch (err) {
    // Koi unexpected error (jaise internet issue)
    console.error("Contact route error:", err);
    return NextResponse.json(
      { error: "Could not send your message. Please try again." },
      { status: 500 },
    );
  }
}
