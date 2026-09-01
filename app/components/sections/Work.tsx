"use client";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import { ExternalLink } from "lucide-react";

interface Project {
  title: string;
  description: string;
  tags: string[];
  image: string;
  live?: string;
  github?: string;
  featured?: boolean;
  status?: string;
}

const projects: Project[] = [
  {
    title: "Portfolio Website",
    description:
      "Personal portfolio showcasing projects, skills, and modern UI design.",
    tags: ["Next.js", "Tailwind", "Framer Motion"],
    image: "/self1.png",
    live: "https://pardeep-sharma-portfolio.vercel.app/",
    github: "https://github.com/Pardeepsharma01/Portfolio",
    featured: true,
  },
  {
    title: "Internet Security Visualizer",

    description:
      "A cybersecurity tool that analyzes and visualizes public IP data and vulnerabilities using the Shodan API.",

    tags: [
      "Next js",
      "React",
      "Shodan API",
      "Data Visualization",
      "Tailwind CSS",
      "Framer Motion",
    ],

    image: "/ISV.png",

    live: "https://internet-security-visualizer.vercel.app/",
    github: "https://github.com/Pardeepsharma01/Internet-security-visualizer",

    featured: true,
  },
  {
    title: "Velvet Spark",
    description:
      "Architected a luxury jewelry platform using modern Next.js architecture, secure Supabase backend auth, fluid Redux cart workflows, and dynamic Framer Motion micro-animations.",
    tags: [
      "Next.js",
      " Tailwind CSS",
      "Framer Motion",
      "Supabase",
      "Redux",
      "Google OAuth",
    ],
    image: "/velvetspark.png",
    featured: true,
    live: "https://velvet-spark.vercel.app",
    github: "https://github.com/Pardeepsharma01/Velvet-spark",
  },
  {
    title: "Verna Genomics — Biotech Landing Experience",
    description:
      "Designed and built an immersive biotech landing page featuring interactive 3D WebGL scenes, custom easing-based motion, and a dynamic telemetry-style UI. Used an AI-assisted development workflow (Claude, Antigravity) to accelerate 3D scene scaffolding and animation logic, while independently directing the visual concept, UX flow, and technical integration.",
    tags: [
      "React Three Fiber",
      "Three.js",
      "Next.js 14",
      "Framer Motion",
      "TypeScript",
      "WebGL",
    ],
    image: "/verna.png",
    featured: true,
    live: "https://verna-genomics.vercel.app",
    github: "https://github.com/Pardeepsharma01/Verna-Genomics",
  },
  {
    title: "Craftume",
    description:
      "Architected an AI-powered SaaS resume builder featuring dynamic split-screen editing, ATS scoring workflows, Supabase auth/storage, and selectable-text PDF rendering. Followed an AI-assisted development workflow using tools like Claude, Gemini, and Antigravity to accelerate implementation, while independently owning system architecture, data flow design, and code review. Currently in active development.",
    tags: [
      "Next.js 16",
      "React 19",
      "Gemini API",
      "Supabase",
      "Redux Toolkit",
      "Tailwind CSS",
    ],
    image: "/craftume.png",
    featured: true,
    status: "Currently in active development",
    live: "https://craftume.vercel.app",
    github: "https://github.com/Pardeepsharma01/craftume",
  },
];

const ProjectCard = ({ project }: { project: Project }) => {
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });

  const rotateX = useTransform(
    mouseYSpring,
    [-0.5, 0.5],
    ["7.5deg", "-7.5deg"],
  );
  const rotateY = useTransform(
    mouseXSpring,
    [-0.5, 0.5],
    ["-7.5deg", "7.5deg"],
  );

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current || isTouchDevice) return;

    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  useEffect(() => {
    setIsTouchDevice(
      typeof window !== "undefined" &&
        ("ontouchstart" in window || navigator.maxTouchPoints > 0),
    );
  }, []);

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX: isTouchDevice ? 0 : rotateX,
        rotateY: isTouchDevice ? 0 : rotateY,
        transformStyle: "preserve-3d",
      }}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="group relative bg-linear-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl overflow-hidden cursor-hover"
    >
      {/* Image */}
      <div className="relative overflow-hidden h-64">
        <motion.img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
          initial={{ scale: 1.2 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        />
        <div className="absolute inset-0 bg-linear-to-t from-gray-900 via-gray-900/50 to-transparent" />
      </div>

      {/* Content */}
      <div className="p-6" style={{ transform: "translateZ(50px)" }}>
        <h3 className="text-2xl font-bold text-white mb-3 flex items-center gap-2">
          {project.title}
          <ExternalLink className="w-5 h-5 text-purple-400 opacity-0 group-hover:opacity-100 transition-opacity" />
        </h3>

        <p className="text-gray-400 mb-4 text-justify">{project.description}</p>
        {project.status && (
          <p className="text-purple-400 text-sm font-medium italic mb-4">
            {project.status}
          </p>
        )}

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag, i) => (
            <span
              key={i}
              className="px-3 py-1 text-xs bg-indigo-600/30 text-indigo-300 rounded-full border border-indigo-500/30"
            >
              {tag}
            </span>
          ))}
        </div>

        {/*  Buttons Added */}
        <div className="flex gap-3 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition duration-300">
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 text-sm font-medium bg-linear-to-r from-indigo-500 to-purple-500 text-white rounded-lg"
          >
            Live Demo
          </a>

          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 text-sm font-medium border border-gray-600 text-gray-300 rounded-lg"
          >
            GitHub
          </a>
        </div>
      </div>

      {/* Hover Glow */}
      <div className="absolute inset-0 pointer-events-none bg-linear-to-br from-indigo-600/0 via-purple-600/0 to-indigo-600/0 group-hover:from-indigo-600/10 group-hover:via-purple-600/10 group-hover:to-indigo-600/10 transition-all duration-500" />
    </motion.div>
  );
};

export const Work = () => {
  return (
    <section id="work" className="relative min-h-screen py-32 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold text-white mb-16"
        >
          Featured Work
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 bg-purple-600/10 rounded-full blur-[150px] pointer-events-none" />
    </section>
  );
};
