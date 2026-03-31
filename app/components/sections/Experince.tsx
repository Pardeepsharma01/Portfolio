"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Briefcase } from "lucide-react";

interface ExperienceItem {
  company: string;
  location?: string;
  role: string;
  period: string;
  description: string;
  achievements: string[];
}

const experiences: ExperienceItem[] = [
  {
    company: "STRA Virtusoftech LLP",
    location: "Remote",
    role: "Frontend Developer",
    period: "Jan 2024 – Present",
    description:
      "Working on modern, scalable, and responsive web applications using React.js and Next.js in a production environment.",
    achievements: [
      "Built reusable and maintainable UI components using Tailwind CSS with full responsiveness.",
      "Integrated Firebase Authentication and Firestore for secure authentication and real-time data handling.",
      "Improved performance using code splitting, lazy loading, and server-side rendering (SSR).",
      "Collaborated with cross-functional teams in an Agile workflow using Git and GitHub.",
      "Deployed applications on Vercel and Firebase Hosting and enhanced UI/UX based on user feedback.",
    ],
  },
  {
    company: "Webcom Technologies",
    location: "On Site",
    role: "Frontend Developer Trainee",
    period: "Apr 2023 – Sep 2023",
    description:
      "Completed hands-on frontend development training focused on building responsive and interactive web applications.",
    achievements: [
      "Learned and practiced HTML, CSS, JavaScript, Bootstrap, React.js, and Core Java.",
      "Built responsive web pages and interactive UI components using React hooks.",
      "Worked on basic state management and component-based architecture.",
      "Gained foundational knowledge of Core Java, OOP concepts, and Java Swing.",
    ],
  },
];

export const Experience = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section
      id="experience"
      className="relative min-h-screen py-32 px-4"
      ref={containerRef}
    >
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold text-white mb-24"
        >
          Experience
        </motion.h2>

        <div className="relative">
          <svg
            className="absolute left-0 md:left-1/2 top-0 h-full w-1 -translate-x-1/2"
            style={{ zIndex: 0 }}
          >
            <motion.line
              x1="50%"
              y1="0"
              x2="50%"
              y2="100%"
              stroke="url(#gradient)"
              strokeWidth="2"
              style={{ pathLength }}
            />
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#6366f1" />
                <stop offset="50%" stopColor="#a855f7" />
                <stop offset="100%" stopColor="#6366f1" />
              </linearGradient>
            </defs>
          </svg>

          <div className="space-y-24">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                <div
                  className={`flex-1 ${index % 2 === 0 ? "md:text-left" : "md:text-left"}`}
                >
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="bg-linear-to-br from-gray-900/80 to-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 md:p-8"
                  >
                    <div className="flex items-start gap-3 mb-4">
                      <div className="p-2 bg-linear-to-br from-indigo-600 to-purple-600 rounded-lg">
                        <Briefcase className="w-5 h-5 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-white mb-1">
                          {exp.role}
                        </h3>
                        <p className="text-indigo-400 font-medium">
                          {exp.company}
                        </p>
                        <p className="text-indigo-400 font-medium">
                          {exp.location}
                        </p>
                        <p className="text-gray-500 text-sm mt-1">
                          {exp.period}
                        </p>
                      </div>
                    </div>
                    <p className="text-gray-400 mb-4">{exp.description}</p>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <li
                          key={i}
                          className="text-gray-300 text-sm flex items-start gap-2"
                        >
                          <span className="text-purple-400 mt-1">•</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </div>

                <div className="hidden md:flex items-center justify-center w-16">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
                    className="w-4 h-4 bg-linear-to-br from-indigo-600 to-purple-600 rounded-full border-4 border-[#050505]"
                  />
                </div>

                <div className="flex-1" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
