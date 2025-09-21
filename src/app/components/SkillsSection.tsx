"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const skills = [
  {
    category: "Frontend Development",
    items: [
      { name: "Next.js", level: 90 },
      { name: "React", level: 85 },
      { name: "TypeScript", level: 80 },
      { name: "Tailwind CSS", level: 95 },
    ],
  },
  {
    category: "Backend",
    items: [{ name: "Supabase", level: 85 }],
  },
  {
    category: "Tools & Technologies",
    items: [
      { name: "ChatGPT", level: 90 },
      { name: "GitHub Copilot", level: 90 },
      { name: "Claude.ai", level: 95 },
      { name: "Cursor", level: 90 },
      { name: "Google Gemini", level: 90 },
      { name: "Visual Studio Code", level: 95 },
      { name: "Postman", level: 85 },
      { name: "Figma", level: 70 },
      { name: "Visual Paradigm", level: 90 },
      { name: "Trello", level: 85 },
      { name: "Asana", level: 85 },
    ],
  },
  {
    category: "Version Control & Collaboration",
    items: [
      { name: "Git", level: 90 },
      { name: "GitHub", level: 90 },
    ],
  },
  {
    category: "Software Design",
    items: [{ name: "UML Diagrams", level: 90 }],
  },
  {
    category: "Testing & Debugging",
    items: [
      { name: "Software Testing", level: 85 },
      { name: "Debugging & Troubleshooting", level: 80 },
    ],
  },
  {
    category: "Agile Methodologies",
    items: [
      { name: "Scrum", level: 90 },
      { name: "Agile Development", level: 90 },
    ],
  },
];

export default function SkillsSection() {
  const [selected, setSelected] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById("skills");
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="skills"
      className="min-h-screen flex flex-col justify-center px-8 text-white"
    >
      <motion.h2
        className="text-5xl md:text-6xl font-bold mb-16 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: false }}
      >
        <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-pink-400 text-transparent bg-clip-text">
          SKILLS
        </span>
      </motion.h2>

      <div className="flex flex-col lg:flex-row gap-12 max-w-6xl mx-auto w-full">
        {/* Left Sidebar */}
        <motion.div
          className="flex flex-col border-l border-gray-700 lg:w-1/3"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: false }}
        >
          {skills.map((skill, index) => (
            <button
              key={index}
              onClick={() => setSelected(index)}
              className={`px-6 py-4 text-left hover:bg-gray-800/50 transition-all duration-300 ${
                selected === index
                  ? "glass text-white border-l-2 border-purple-400"
                  : "text-gray-400"
              }`}
            >
              <div className="text-sm font-medium">{skill.category}</div>
            </button>
          ))}
        </motion.div>

        {/* Right Content */}
        <motion.div
          className="flex-1 lg:w-2/3"
          key={selected}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
        >
          <h3 className="text-2xl font-semibold mb-8 text-purple-400">
            {skills[selected].category}
          </h3>
          <div className="space-y-6">
            {skills[selected].items.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="glass p-4 rounded-lg"
              >
                <div className="flex justify-between items-center mb-2">
                  <span className="text-white font-medium">{item.name}</span>
                  <span className="text-gray-400 text-sm">{item.level}%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <motion.div
                    className="h-2 rounded-full bg-gradient-to-r from-purple-400 via-blue-400 to-pink-400"
                    initial={{ width: 0 }}
                    animate={
                      isVisible ? { width: `${item.level}%` } : { width: 0 }
                    }
                    transition={{ duration: 1.5, delay: i * 0.2 }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
