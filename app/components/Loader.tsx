"use client";
import { motion } from "framer-motion";

export const Loader = () => {
  return (
    <div className="fixed inset-0 z-9999 flex items-center justify-center bg-black">
      
      {/* Background glow */}
      <div className="absolute w-75 h-75 bg-indigo-600/20 blur-3xl rounded-full" />
      <div className="absolute w-50 h-50 bg-purple-600/20 blur-3xl rounded-full" />

      {/* Main Loader */}
      <motion.div
        className="relative flex flex-col items-center gap-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        {/* Animated Ring */}
        <motion.div
          className="w-16 h-16 rounded-full border-2 border-transparent border-t-indigo-500 border-r-purple-500"
          animate={{ rotate: 360 }}
          transition={{
            repeat: Infinity,
            duration: 1,
            ease: "linear",
          }}
        />

        {/* Logo / Name */}
        <motion.h1
          className="text-xl font-semibold bg-linear-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          Pardeep Sharma
        </motion.h1>

        {/* Loading text */}
        <motion.p
          className="text-sm text-gray-400 tracking-widest"
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{ repeat: Infinity, duration: 1.2 }}
        >
          LOADING...
        </motion.p>
      </motion.div>
    </div>
  );
};