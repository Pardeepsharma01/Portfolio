//  whatsapp link and email link added

"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useState, useRef } from "react";
import {
  Send,
  Github,
  Linkedin,
  Twitter,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";

/* ------------------------------------------------------------------
   WhatsApp "Click to Chat" settings
   - Number country code ke saath likhein, bina +, - ya space ke
   - Message pehle se WhatsApp ke text box me likha hua aayega
   - Message ko user khud Send karega (WhatsApp ka rule hai)
------------------------------------------------------------------- */
const WHATSAPP_NUMBER = "918398870943";
const WHATSAPP_MESSAGE =
  "Hi Pardeep, I came across your portfolio and I want to connect with you for a project.";

// encodeURIComponent spaces aur special characters ko URL ke liye safe bana deta hai
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  WHATSAPP_MESSAGE,
)}`;

export const Contact = () => {
  /* ------------------------------------------------------------------
     STATE: form aur UI ki current halat yahan store hoti hai
  ------------------------------------------------------------------- */

  // Kaun sa input abhi focus me hai (neeche gradient line animate karne ke liye)
  const [focusedField, setFocusedField] = useState<string | null>(null);

  // "Send Message" button ka reference (magnetic effect me position nikalne ke liye)
  const buttonRef = useRef<HTMLButtonElement>(null);

  // Form ke input values. Har field ka naam wahi hai jo input ke `name` attribute me hai
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    website: "", // honeypot: asli user ise kabhi nahi bharta, sirf bots bharte hain
  });

  // Form ki status: idle = kuch nahi hua, loading = bhej rahe hain,
  // success = mail chali gayi, error = kuch gadbad hui
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  // Error aane par user ko dikhane wala message
  const [errorMessage, setErrorMessage] = useState("");

  /* ------------------------------------------------------------------
     FORM HANDLERS
  ------------------------------------------------------------------- */

  // Jab bhi user kisi input me type kare, uski value formData me save ho jati hai
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    // [e.target.name] se pata chalta hai kaun sa field badla (name / email / message / website)
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  // Jab user "Send Message" dabaye to ye function chalta hai
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // page reload hone se rokta hai

    // Agar pehle se bhej rahe hain to dobara click ignore karo (double submit se bachav)
    if (status === "loading") return;

    setStatus("loading");
    setErrorMessage("");

    try {
      // Hamari apni API route ko data bhejte hain (app/api/contact/route.ts)
      // Resend ki key yahan nahi hai, wo server par safe rehti hai
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      // Server ka jawab padhte hain. Agar JSON na ho to khali object le lete hain
      const data = await res.json().catch(() => ({}));

      // Agar server ne error status diya (400, 429, 500 etc.) to error throw karo
      if (!res.ok) {
        throw new Error(
          data.error || "Something went wrong. Please try again.",
        );
      }

      // Sab theek raha: success dikhao aur form khali kar do
      setStatus("success");
      setFormData({ name: "", email: "", message: "", website: "" });
    } catch (err) {
      // Koi bhi error aaye to user ko message dikhao
      setStatus("error");
      setErrorMessage(
        err instanceof Error
          ? err.message
          : "Something went wrong. Please try again.",
      );
    }
  };

  /* ------------------------------------------------------------------
     MAGNETIC BUTTON EFFECT
     Jab mouse button ke paas aata hai (150px ke andar), button thoda
     mouse ki taraf khichta hai.
  ------------------------------------------------------------------- */

  // Raw mouse offset values
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // useSpring movement ko smooth aur bouncy banata hai
  const buttonX = useSpring(mouseX, { stiffness: 200, damping: 20 });
  const buttonY = useSpring(mouseY, { stiffness: 200, damping: 20 });

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (!buttonRef.current) return;

    // Button ka center point nikalte hain
    const rect = buttonRef.current.getBoundingClientRect();
    const buttonCenterX = rect.left + rect.width / 2;
    const buttonCenterY = rect.top + rect.height / 2;

    // Mouse aur button ke center ke beech ka faasla
    const distanceX = e.clientX - buttonCenterX;
    const distanceY = e.clientY - buttonCenterY;
    const distance = Math.sqrt(distanceX ** 2 + distanceY ** 2);

    if (distance < 150) {
      // Jitna paas, utna zyada pull (strength 0 se 1 ke beech)
      const strength = (150 - distance) / 150;
      mouseX.set(distanceX * strength * 0.3);
      mouseY.set(distanceY * strength * 0.3);
    } else {
      // Door hone par button apni asli jagah par wapas
      mouseX.set(0);
      mouseY.set(0);
    }
  };

  // Mouse form se bahar jaye to button ko wapas jagah par le aao
  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  /* ------------------------------------------------------------------
     DATA: "Get in Touch" cards aur social icons yahan se aate hain.
     Kuch badalna ho to sirf yahan badlein.
  ------------------------------------------------------------------- */
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "sharmaji336659@gmail.com",
      href: "mailto:sharmaji336659@gmail.com", // click par mail app khulta hai
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91-8398870943",
      href: "tel:+918398870943", // phone par click karne se call lagta hai
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Yamuna Nagar, Haryana",
      href: "#", // location ka koi link nahi hai
    },
  ];

  const socials = [
    {
      name: "GitHub",
      icon: Github,
      href: "https://github.com/Pardeepsharma01",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      href: "https://www.linkedin.com/in/pardeepsharma01/",
    },
    { name: "Twitter", icon: Twitter, href: "https://x.com/sharmaji59" },
  ];

  /* ------------------------------------------------------------------
     UI (JSX)
  ------------------------------------------------------------------- */
  return (
    <section id="contact" className="relative min-h-screen py-32 px-4">
      <div className="max-w-6xl mx-auto">
        {/* ---------- Heading ---------- */}
        {/* whileInView: scroll karke screen par aate hi animation chalta hai (sirf ek baar) */}
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold text-white mb-8"
        >
          Let's Create Together
        </motion.h2>

        {/* ---------- Intro text ---------- */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-3xl mb-20"
        >
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-4">
            Available for freelance & full-time opportunities. Open to remote
            roles worldwide.
          </p>
          <p className="text-xl md:text-2xl text-purple-300 font-light">
            Have a project in mind? Let's build something extraordinary.
          </p>
        </motion.div>

        {/* ---------- Contact form (email API se jud hua) ---------- */}
        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="space-y-8 mb-24 max-w-2xl"
          onMouseMove={handleMouseMove} // magnetic effect ke liye
          onMouseLeave={handleMouseLeave}
          onSubmit={handleSubmit} // submit par handleSubmit chalega
        >
          <div>
            <h3 className="text-3xl font-bold text-white mb-8">
              Send me a Message
            </h3>
          </div>

          {/* Name field */}
          <div className="relative">
            <input
              type="text"
              name="name" // handleChange isi naam se pehchanta hai ki kaun sa field badla
              value={formData.name} // value state se aati hai (controlled input)
              onChange={handleChange}
              required // khali chhodne par browser khud rok dega
              maxLength={100}
              placeholder="Your Name"
              onFocus={() => setFocusedField("name")}
              onBlur={() => setFocusedField(null)}
              className="w-full bg-transparent border-b-2 border-gray-700 focus:border-purple-500 outline-none py-4 text-white text-lg transition-colors placeholder-gray-600"
            />
            {/* Focus hone par neeche gradient line 0% se 100% tak badhti hai */}
            <motion.div
              className="absolute bottom-0 left-0 h-0.5 bg-linear-to-r from-indigo-600 to-purple-600"
              initial={{ width: 0 }}
              animate={{ width: focusedField === "name" ? "100%" : 0 }}
              transition={{ duration: 0.3 }}
            />
          </div>

          {/* Email field (type="email" browser me basic format check karta hai) */}
          <div className="relative">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              maxLength={150}
              placeholder="Your Email"
              onFocus={() => setFocusedField("email")}
              onBlur={() => setFocusedField(null)}
              className="w-full bg-transparent border-b-2 border-gray-700 focus:border-purple-500 outline-none py-4 text-white text-lg transition-colors placeholder-gray-600"
            />
            <motion.div
              className="absolute bottom-0 left-0 h-0.5 bg-linear-to-r from-indigo-600 to-purple-600"
              initial={{ width: 0 }}
              animate={{ width: focusedField === "email" ? "100%" : 0 }}
              transition={{ duration: 0.3 }}
            />
          </div>

          {/* Message field */}
          <div className="relative">
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              maxLength={2000}
              placeholder="Your Message"
              onFocus={() => setFocusedField("message")}
              onBlur={() => setFocusedField(null)}
              rows={5}
              className="block w-full bg-transparent border-b-2 border-gray-700 focus:border-purple-500 outline-none py-4 text-white text-lg transition-colors resize-none placeholder-gray-600"
            />
            <motion.div
              className="absolute -bottom-0.5 left-0 h-0.5 bg-linear-to-r from-indigo-600 to-purple-600"
              initial={{ width: 0 }}
              animate={{ width: focusedField === "message" ? "100%" : 0 }}
              transition={{ duration: 0.3 }}
            />
          </div>

          {/* Honeypot: ye field screen se bahar chhupa hai. Insaan ise nahi bharta,
              lekin bots sab fields bhar dete hain. Server isse bot pehchan leta hai. */}
          <input
            type="text"
            name="website"
            value={formData.website}
            onChange={handleChange}
            tabIndex={-1} // keyboard se Tab dabane par ispe focus nahi aayega
            autoComplete="off"
            aria-hidden="true"
            className="absolute -left-[9999px] h-0 w-0 opacity-0"
          />

          {/* Submit button (magnetic effect wala) */}
          <motion.button
            ref={buttonRef}
            type="submit"
            disabled={status === "loading"} // bhejte waqt dobara click nahi hoga
            style={{ x: buttonX, y: buttonY }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative group px-8 py-4 bg-linear-to-r from-indigo-600 to-purple-600 text-white rounded-full font-medium text-lg flex items-center gap-3 cursor-hover overflow-hidden w-fit disabled:opacity-60 disabled:cursor-not-allowed"
          >
            <span className="relative z-10">
              {status === "loading" ? "Sending..." : "Send Message"}
            </span>
            <Send className="w-5 h-5 relative z-10" />
            {/* Hover par dusra gradient right se slide hokar aata hai */}
            <motion.div
              className="absolute inset-0 bg-linear-to-r from-purple-600 to-indigo-600"
              initial={{ x: "100%" }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.3 }}
            />
          </motion.button>

          {/* Success ya error ka message. aria-live se screen reader bhi ise padh leta hai */}
          <div aria-live="polite">
            {status === "success" && (
              <p className="text-green-400 text-base">
                Thanks for reaching out! I'll get back to you within 24 hours.
              </p>
            )}
            {status === "error" && (
              <p className="text-red-400 text-base">{errorMessage}</p>
            )}
          </div>
        </motion.form>

        {/* ---------- Get in Touch (cards + social icons) ---------- */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-24"
        >
          <h3 className="text-3xl font-bold text-white mb-12">Get in Touch</h3>

          {/* contactInfo array se Email, Phone aur Location ke cards bante hain */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {contactInfo.map((info, index) => {
              const Icon = info.icon; // icon component ko variable me lete hain
              return (
                <motion.a
                  key={index}
                  href={info.href}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }} // cards ek ke baad ek aate hain
                  whileHover={{ y: -5 }}
                  className="group cursor-hover"
                >
                  <div className="p-6 rounded-2xl bg-linear-to-br from-indigo-900/20 to-purple-900/20 border border-indigo-500/20 group-hover:border-purple-500/50 transition-colors h-full">
                    <div className="p-3 rounded-lg bg-linear-to-br from-indigo-600/30 to-purple-600/30 border border-indigo-500/30 w-fit mb-4 group-hover:border-purple-500/50 transition-colors">
                      <Icon className="w-6 h-6 text-indigo-400 group-hover:text-purple-400 transition-colors" />
                    </div>
                    <p className="text-sm text-gray-400 mb-2">{info.label}</p>
                    <p className="text-xl text-white group-hover:text-purple-300 transition-colors font-medium">
                      {info.value}
                    </p>
                  </div>
                </motion.a>
              );
            })}
          </div>

          {/* Social media icons */}
          <div className="pt-12 border-t border-gray-800">
            <p className="text-gray-400 mb-6">Connect on social media</p>
            <div className="flex gap-4">
              {socials.map((social, index) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank" // nayi tab me khulta hai
                    rel="noopener noreferrer" // security: nayi tab ko hamare page par control nahi milta
                    aria-label={social.name} // screen reader ke liye naam
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.1, y: -5 }}
                    className="w-14 h-14 bg-linear-to-br from-indigo-600/20 to-purple-600/20 border border-indigo-500/30 hover:border-purple-500/50 rounded-full flex items-center justify-center cursor-hover group transition-colors"
                  >
                    <Icon className="w-6 h-6 text-gray-400 group-hover:text-purple-400 transition-colors" />
                  </motion.a>
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* ---------- "Ready to work together?" box (WhatsApp button yahan hai) ---------- */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="relative rounded-2xl border border-indigo-500/20 bg-linear-to-r from-indigo-900/10 via-purple-900/10 to-cyan-900/10 backdrop-blur-sm p-8 md:p-12 overflow-hidden"
        >
          {/* Peeche ka glow effect (sirf sajawat ke liye) */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-linear-to-br from-purple-600/20 to-indigo-600/20 rounded-full blur-3xl -z-10" />

          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Ready to work together?
            </h3>
            <p className="text-gray-300 text-lg mb-8">
              Whether you have a complete project in mind or just an idea, I'm
              here to help bring your vision to life. Let's create something
              amazing.
            </p>

            {/* WhatsApp button: motion.a hai, isliye click par seedha link khulta hai.
                Phone par WhatsApp app, laptop par WhatsApp Web ya desktop app khulega. */}
            <motion.a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block px-10 py-4 bg-linear-to-r from-indigo-600 to-purple-600 text-white rounded-full font-medium text-lg cursor-hover overflow-hidden relative group"
            >
              <span className="relative z-10">Start a Conversation</span>
              <motion.div
                className="absolute inset-0 bg-linear-to-r from-purple-600 to-indigo-600"
                initial={{ x: "100%" }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
