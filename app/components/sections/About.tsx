"use client";
import { motion } from "framer-motion";
import { useRef } from "react";
import { Code2, Sparkles, Zap } from "lucide-react";
import { FaHtml5, FaNodeJs, FaPiedPiper, FaReact } from "react-icons/fa6";
import {
  RiBootstrapLine,
  RiNextjsLine,
  RiSupabaseFill,
  RiTailwindCssLine,
} from "react-icons/ri";
import { TbBrandFramerMotion, TbBrandTypescript } from "react-icons/tb";
import { IoLogoFirebase } from "react-icons/io5";
import { PiFileSqlDuotone } from "react-icons/pi";
import { CiTextAlignJustify } from "react-icons/ci";

interface Technology {
  name: string;
  // icon: typeof Code2;
  icon: React.ReactNode;
}

interface TechCategory {
  title: string;
  description: string;
  color: string;
  borderColor: string;
  iconColor: string;
  technologies: Technology[];
}

export const About = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  // const { scrollYProgress } = useScroll({
  //   target: containerRef,
  //   offset: ["start end", "end start"],
  // });

  const text =
    "I am a Frontend Developer with hands-on experience building modern, responsive, and high-performance web applications. I specialize in React and Next.js, with a strong focus on clean UI, smooth animations, and scalable component architecture. I enjoy turning complex ideas into intuitive user experiences and have worked on real-world projects using Tailwind CSS, Firebase, and Supabase. I care deeply about code quality, performance, and creating interfaces that feel fast and effortless to use.Currently, I am focused on improving my skills, building impactful products, and looking for opportunities where I can contribute as a frontend developer and grow with a passionate team.";
  const words = text.split(" ");

  const techCategories: TechCategory[] = [
    {
      title: "Frontend Stack",
      description: "User-facing experiences",
      color: "from-indigo-600/20 to-indigo-400/10",
      borderColor: "border-indigo-500/30",
      iconColor: "text-indigo-400",
      technologies: [
        { name: "React", icon: <FaReact /> },
        { name: "Next.js", icon: <RiNextjsLine /> },
        { name: "TypeScript", icon: <TbBrandTypescript /> },
        { name: "Framer Motion", icon: <TbBrandFramerMotion /> },
        { name: "Tailwind CSS", icon: <RiTailwindCssLine /> },
        { name: "HTML5 & CSS3", icon: <FaHtml5 /> },
        { name: "BootStrap", icon: <RiBootstrapLine /> },
      ],
    },
    {
      title: "Backend & API's",
      description: "Server-side & integrations",
      color: "from-purple-600/20 to-purple-400/10",
      borderColor: "border-purple-500/30",
      iconColor: "text-purple-400",
      technologies: [
        { name: "Node.js (Basic) ", icon: <FaNodeJs /> },

        { name: "REST APIs", icon: <FaPiedPiper /> },
        { name: "Firebase (Auth)", icon: <IoLogoFirebase /> },
        { name: "Supabase (Auth)", icon: <RiSupabaseFill /> },
      ],
    },
    {
      title: "Database & Storage",
      description: "Data persistence & management",
      color: "from-cyan-600/20 to-cyan-400/10",
      borderColor: "border-cyan-500/30",
      iconColor: "text-cyan-400",
      technologies: [
        { name: "Supabase", icon: <RiSupabaseFill /> },

        { name: "Firebase Firestore (NoSQL)", icon: <IoLogoFirebase /> },
        { name: "SQL", icon: <PiFileSqlDuotone /> },
      ],
    },
    {
      title: "Tools & Productivity",
      description: "AI-assisted development",
      color: "from-pink-600/20 to-pink-400/10",
      borderColor: "border-pink-500/30",
      iconColor: "text-pink-400",
      technologies: [
        { name: "ChatGPT", icon: <Sparkles /> },
        { name: "Prompt Engineering", icon: <CiTextAlignJustify /> },
        { name: "GitHub Copilot", icon: <Code2 /> },
        { name: "AI-assisted Debugging", icon: <Sparkles /> },
        { name: "Code Optimization with AI", icon: <Zap /> },
      ],
    },
  ];

  const TechCard = ({
    tech,
    index,
    color,
  }: {
    tech: Technology;
    index: number;
    color: string;
  }) => {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1 }}
        whileHover={{ y: -5, scale: 1.02 }}
        className="group"
      >
        <div className="relative p-4 rounded-lg bg-linear-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 overflow-hidden cursor-hover">
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-linear-to-br from-gray-700/30 to-gray-800/30" />

          <div className="relative z-10 flex items-center gap-3">
            <div
              className={`p-2 rounded-lg bg-linear-to-br ${color} border ${
                color.split("/")[0]
              }`}
            >
              <div
                className={`w-5 h-5 ${color.split("to-")[1] || "text-white"}`}
              >
                {tech.icon}
              </div>
            </div>
            <span className="text-white font-medium text-sm">{tech.name}</span>
          </div>
        </div>
      </motion.div>
    );
  };

  return (
    <section
      id="about"
      className="relative min-h-screen py-32 px-4"
      ref={containerRef}
    >
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold text-white mb-16 "
        >
          About Me
        </motion.h2>

        <div className="mb-32">
          <p className="text-xl md:text-2xl leading-relaxed text-gray-400 font-light text-justify">
            {words.map((word, i) => (
              <motion.span key={i} className="inline">
                {word}
                {i < words.length - 1 ? " " : ""}
              </motion.span>
            ))}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {techCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              className="group"
            >
              <div
                className={`relative rounded-2xl border ${category.borderColor} bg-linear-to-br ${category.color} backdrop-blur-sm p-8 overflow-hidden h-full`}
              >
                <div
                  className={`absolute top-0 right-0 w-40 h-40 bg-linear-to-br ${category.color} rounded-full blur-3xl opacity-20 group-hover:opacity-30 transition-opacity duration-500 -z-10`}
                />

                <div className="mb-8">
                  <div className="flex items-start gap-4 mb-4">
                    <div
                      className={`p-3 rounded-lg bg-linear-to-br ${category.color} border ${category.borderColor}`}
                    >
                      <Code2 className={`w-6 h-6 ${category.iconColor}`} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-1">
                        {category.title}
                      </h3>
                      <p className="text-gray-400 text-sm">
                        {category.description}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  {category.technologies.map((tech, techIndex) => (
                    <TechCard
                      key={techIndex}
                      tech={tech}
                      index={techIndex}
                      color={category.color}
                    />
                  ))}
                </div>

                <div className="absolute inset-0 rounded-2xl border border-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-24 p-8 rounded-2xl bg-linear-to-r from-indigo-900/20 via-purple-900/20 to-cyan-900/20 border border-indigo-500/20 backdrop-blur-sm"
        >
          <h4 className="text-xl font-bold text-white mb-4">
            Core Competencies
          </h4>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "Frontend Development",
              "Responsive UI Design",
              "Component-Based Architecture",
              "Performance Optimization",
              "API Integration",
              "Authentication & Authorization",
              "State Management",
              "Modern Web Animations",
            ].map((skill, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="flex items-center gap-2 text-gray-300"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-linear-to-r from-indigo-400 to-purple-400" />
                {skill}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
