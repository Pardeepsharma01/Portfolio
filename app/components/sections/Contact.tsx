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

export const Contact = () => {
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const buttonX = useSpring(mouseX, { stiffness: 200, damping: 20 });
  const buttonY = useSpring(mouseY, { stiffness: 200, damping: 20 });

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (!buttonRef.current) return;

    const rect = buttonRef.current.getBoundingClientRect();
    const buttonCenterX = rect.left + rect.width / 2;
    const buttonCenterY = rect.top + rect.height / 2;

    const distanceX = e.clientX - buttonCenterX;
    const distanceY = e.clientY - buttonCenterY;
    const distance = Math.sqrt(distanceX ** 2 + distanceY ** 2);

    if (distance < 150) {
      const strength = (150 - distance) / 150;
      mouseX.set(distanceX * strength * 0.3);
      mouseY.set(distanceY * strength * 0.3);
    } else {
      mouseX.set(0);
      mouseY.set(0);
    }
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "sharmaji336659@gmail.com",
      href: "mailto:sharmaji336659@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91-8398870943",
      href: "tel:+918398870943",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Yamuna Nagar, Haryana",
      href: "#",
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

  return (
    <section id="contact" className="relative min-h-screen py-32 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold text-white mb-8"
        >
          Let's Create Together
        </motion.h2>

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

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="space-y-8 mb-24 max-w-2xl"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          <div>
            <h3 className="text-3xl font-bold text-white mb-8">
              Send me a Message
            </h3>
          </div>

          <div className="relative">
            <input
              type="text"
              placeholder="Your Name"
              onFocus={() => setFocusedField("name")}
              onBlur={() => setFocusedField(null)}
              className="w-full bg-transparent border-b-2 border-gray-700 focus:border-purple-500 outline-none py-4 text-white text-lg transition-colors placeholder-gray-600"
            />
            <motion.div
              className="absolute bottom-0 left-0 h-0.5 bg-linear-to-r from-indigo-600 to-purple-600"
              initial={{ width: 0 }}
              animate={{ width: focusedField === "name" ? "100%" : 0 }}
              transition={{ duration: 0.3 }}
            />
          </div>

          <div className="relative">
            <input
              type="email"
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

          <div className="relative">
            <textarea
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

          <motion.button
            ref={buttonRef}
            type="submit"
            style={{ x: buttonX, y: buttonY }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative group px-8 py-4 bg-linear-to-r from-indigo-600 to-purple-600 text-white rounded-full font-medium text-lg flex items-center gap-3 cursor-hover overflow-hidden w-fit"
          >
            <span className="relative z-10">Send Message</span>
            <Send className="w-5 h-5 relative z-10" />
            <motion.div
              className="absolute inset-0 bg-linear-to-r from-purple-600 to-indigo-600"
              initial={{ x: "100%" }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.3 }}
            />
          </motion.button>
        </motion.form>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-24"
        >
          <h3 className="text-3xl font-bold text-white mb-12">Get in Touch</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <motion.a
                  key={index}
                  href={info.href}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
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

          <div className="pt-12 border-t border-gray-800">
            <p className="text-gray-400 mb-6">Connect on social media</p>
            <div className="flex gap-4">
              {socials.map((social, index) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
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

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="relative rounded-2xl border border-indigo-500/20 bg-linear-to-r from-indigo-900/10 via-purple-900/10 to-cyan-900/10 backdrop-blur-sm p-8 md:p-12 overflow-hidden"
        >
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
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-4 bg-linear-to-r from-indigo-600 to-purple-600 text-white rounded-full font-medium text-lg cursor-hover overflow-hidden relative group"
            >
              <span className="relative z-10">Start a Conversation</span>
              <motion.div
                className="absolute inset-0 bg-linear-to-r from-purple-600 to-indigo-600"
                initial={{ x: "100%" }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>
          </div>
        </motion.div>
      </div>

    
    </section>
  );
};
