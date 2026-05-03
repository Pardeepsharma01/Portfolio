"use client";
import { motion, useMotionValue, useSpring, Variants } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { ChevronDown, Send } from "lucide-react";
import { FaDownload } from "react-icons/fa6";

export const Hero = () => {
const handleDownload = () => {
  const link = document.createElement("a");
  link.href = "https://drive.google.com/uc?export=download&id=11hw44heO2Q_fVXqVEpeKg-ZAUucHNnqO";
  link.target = "_blank";
  link.click();
  
};

  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });

  const buttonRef = useRef<HTMLButtonElement>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const buttonX = useSpring(mouseX, { stiffness: 200, damping: 20 });
  const buttonY = useSpring(mouseY, { stiffness: 200, damping: 20 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const intro = "Hi, I’m Pardeep Sharma";
  const headline = "Creative Frontend Developer";
  const subheadline =
    "I build fast, scalable, and user-focused web applications using React, Next.js, and Tailwind CSS — focused on performance, accessibility, and clean UI";

  const letterVariants: Variants = {
    hidden: { y: 100, opacity: 0 },
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: i * 0.05,
        duration: 0.8,
      },
    }),
  };

  const subheadlineVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: headline.length * 0.05 + 0.4,
        duration: 0.8,
      },
    },
  };

  const buttonVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: headline.length * 0.05 + 1.2,
        duration: 0.6,
      },
    },
  };

  return (
    <section className="relative min-h-screen md:min-h-[90vh] flex items-center justify-center overflow-hidden bg-black pt-28 md:pt-20 lg:pt-24 pb-24 md:pb-14">
      {/*  Mouse Follow Glow Background */}

      <div
        className="absolute inset-0 opacity-30"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(99, 102, 241, 0.4) 0%, rgba(168, 85, 247, 0.2) 40%, transparent 70%)`,
          transition: "background 0.3s ease",
        }}
      />

      <div className="relative z-10 text-center px-6">
        {/*  Intro */}

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mb-4 md:mb-6"
        >
          <span className="block text-xl uppercase tracking-widest text-purple-400 mb-2">
            Hi, I’m
          </span>

          <motion.span
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "linear",
            }}
            className="
      text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-extrabold
      bg-linear-to-r from-purple-400 via-indigo-400 to-pink-400
      bg-size-[200%_200%]
      bg-clip-text text-transparent
      drop-shadow-[0_0_25px_rgba(168,85,247,0.35)]
    "
          >
            Pardeep Sharma
          </motion.span>
        </motion.h2>

        <div className="w-12 h-0.5 bg-purple-500 mx-auto mb-4" />

        {/*  Headline */}
        <div className="overflow-hidden mb-4 md:mb-6">
          <motion.h1 className="text-[2.5rem] sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight">
            {headline.split(" ").map((word, wordIndex) => (
              <span
                key={wordIndex}
                className="inline-flex whitespace-nowrap mr-3"
              >
                {word.split("").map((char, charIndex) => (
                  <motion.span
                    key={charIndex}
                    custom={wordIndex * 10 + charIndex}
                    variants={letterVariants}
                    initial="hidden"
                    animate="visible"
                    className="inline-block"
                  >
                    {char}
                  </motion.span>
                ))}
              </span>
            ))}
          </motion.h1>
        </div>

        {/*  Subheadline */}
        <motion.p
          variants={subheadlineVariants}
          initial="hidden"
          animate="visible"
          className="text-[22px] md:text-lg lg:text-xl text-gray-300 font-light max-w-3xl mx-auto"
        >
          {subheadline}
        </motion.p>

        <motion.div
          variants={buttonVariants}
          initial="hidden"
          animate="visible"
          className="mt-8 md:mt-10 flex justify-center"
        >
          <motion.button
            ref={buttonRef}
            style={{ x: buttonX, y: buttonY }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleDownload}
            className="relative group px-8 py-4 bg-linear-to-r from-indigo-600 to-purple-600 text-white rounded-full font-medium text-lg flex items-center gap-3 cursor-hover overflow-hidden"
          >
            <span className="relative z-10">Resume</span>
            <FaDownload className="w-5 h-5 relative z-10" />

            <motion.div
              className="absolute inset-0 bg-linear-to-r from-purple-600 to-indigo-600"
              initial={{ x: "100%" }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.3 }}
            />
          </motion.button>
        </motion.div>

        {/* ⬇ Scroll indicator */}
        <div className="mt-16 lg:mt-6 md:mt-10 flex justify-center">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-purple-400 flex flex-col items-center"
          >
            <span className="text-sm uppercase tracking-wider mb-1">
              Scroll To Explore
            </span>
            <ChevronDown className="w-6 h-6" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
