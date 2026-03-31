"use client";
import { SmoothScroll } from "./components/SmoothScroll";
import { CustomCursor } from "./components/CustomCursor";
import { Navigation } from "./components/Navigation";
import { Hero } from "./components/sections/Hero";
import { About } from "./components/sections/About";
import { Work } from "./components/sections/Work";
import { Experience } from "./components/sections/Experince";
import { Contact } from "./components/sections/Contact";

export default function Home() {
  return (
    <SmoothScroll>
      <div className="relative min-h-screen bg-[#050505]">
        <CustomCursor />
        <Navigation />

        <main>
          <Hero />
          <About />
          <Work />
          <Experience />
          <Contact />
        </main>

        <footer className="relative py-8 px-4 border-t border-gray-800">
          <div className="max-w-7xl mx-auto text-center text-gray-500">
            <p>&copy; 2026 Pardeep Sharma. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </SmoothScroll>
  );
}
