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
}

const projects: Project[] = [
 {
    title: "Portfolio Website",
    description:
      "Personal portfolio showcasing projects, skills, and modern UI design.",
    tags: ["Next.js", "Tailwind", "Framer Motion"],
    image:
      "/self1.png",
      live : "https://pardeep-sharma-portfolio.vercel.app/",
      github : "https://github.com/Pardeepsharma01/Portfolio",
      featured: true
  },
  {
  title: "Internet Security Visualizer",

  description:
    "A cybersecurity tool that analyzes and visualizes public IP data and vulnerabilities using the Shodan API.",

  tags: ["Next js", "React", "Shodan API", "Data Visualization", "Tailwind CSS"],

  image: "/ISV.png",

  live: "https://internet-security-visualizer.vercel.app/",
  github: "https://github.com/Pardeepsharma01/Internet-security-visualizer",

  featured: true
},
  {
    title: "Quantum Dashboard",
    description: "Real-time data visualization with stunning 3D graphics",
    tags: ["Three.js", "Next.js", "D3"],
    image:
      "https://images.pexels.com/photos/7688339/pexels-photo-7688339.jpeg?auto=compress&cs=tinysrgb&w=800",
       featured: false
  },
  {
    title: "Motion Studio",
    description: "Creative toolkit for designers with advanced animations",
    tags: ["Framer Motion", "React", "Tailwind"],
    image:
      "https://images.pexels.com/photos/7688165/pexels-photo-7688165.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    title: "Immersive Gallery",
    description: "Virtual art gallery with WebXR experiences",
    tags: ["WebXR", "Three.js", "GSAP"],
    image:
      "https://images.pexels.com/photos/7688337/pexels-photo-7688337.jpeg?auto=compress&cs=tinysrgb&w=800",
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

    <p className="text-gray-400 mb-4">{project.description}</p>

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
