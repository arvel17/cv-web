"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, MapPin, Building } from "lucide-react";

const experiences = [
  {
    company: "Kalbe Farma",
    role: "Software Engineer Intern",
    location: "Jakarta, Indonesia",
    date: "Feb 2024 – Aug 2025",
    details: [
      "Developed responsive UIs with Next.js & TypeScript",
      "Integrated Supabase for authentication, storage & real-time features",
      "Collaborated with product managers & UI/UX designers",
      "Built reusable components & optimized state management",
      "Participated in code reviews and debugging",
    ],
    icon: "💼",
    color: "from-blue-400 to-purple-600",
  },
  {
    company: "BINUS University",
    role: "Final Year Project – Healthcare Appointment System",
    location: "Malang, Indonesia",
    date: "2025",
    details: [
      "Developed platform for nurses and midwives with Next.js & Supabase",
      "Implemented role-based access & real-time scheduling",
      "Applied Scrum methodology in team workflow",
    ],
    icon: "🎓",
    color: "from-purple-400 to-pink-600",
  },
];

export default function ExperienceSection() {
  const [selected, setSelected] = useState(0);

  return (
    <section
      id="experience"
      className="min-h-screen flex flex-col justify-center px-8 text-white"
    >
      <motion.h2
        className="text-5xl md:text-6xl font-bold mb-16 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-pink-400 text-transparent bg-clip-text">
          EXPERIENCE
        </span>
      </motion.h2>

      <div className="flex flex-col lg:flex-row gap-12 max-w-6xl mx-auto w-full">
        {/* Left Sidebar */}
        <motion.div
          className="flex flex-col border-l border-gray-700 lg:w-1/3"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {experiences.map((exp, index) => (
            <motion.button
              key={index}
              onClick={() => setSelected(index)}
              className={`px-6 py-4 text-left hover:bg-gray-800/50 transition-all duration-300 ${
                selected === index
                  ? "glass text-white border-l-2 border-purple-400"
                  : "text-gray-400"
              }`}
              whileHover={{ x: 5 }}
            >
              <div className="flex items-center gap-3">
                <span className="text-2xl">{exp.icon}</span>
                <div>
                  <div className="font-medium text-sm">{exp.company}</div>
                  <div className="text-xs opacity-70">{exp.role}</div>
                </div>
              </div>
            </motion.button>
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
          <div className="glass p-8 rounded-xl">
            {/* Header */}
            <div className="mb-6">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-3xl">{experiences[selected].icon}</span>
                <h3 className="text-2xl font-semibold text-white">
                  {experiences[selected].role}
                </h3>
              </div>

              <div className="flex flex-wrap gap-4 text-sm text-gray-400">
                <div className="flex items-center gap-2">
                  <Building size={16} />
                  {experiences[selected].company}
                </div>
                <div className="flex items-center gap-2">
                  <MapPin size={16} />
                  {experiences[selected].location}
                </div>
                <div className="flex items-center gap-2">
                  <Calendar size={16} />
                  {experiences[selected].date}
                </div>
              </div>
            </div>

            {/* Details */}
            <div className="space-y-4">
              <h4 className="text-lg font-medium text-purple-400 mb-3">
                Key Responsibilities:
              </h4>
              {experiences[selected].details.map((detail, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="flex items-start gap-3 text-gray-300"
                >
                  <div className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-400 to-blue-400 mt-2 flex-shrink-0"></div>
                  <span>{detail}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
