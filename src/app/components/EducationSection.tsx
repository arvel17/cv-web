"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { GraduationCap, Calendar, Award } from "lucide-react";

const educationList = [
  {
    institution: "Bina Nusantara University, Malang",
    degree: "Bachelor of Computer Science, Computer Science",
    gpa: "GPA 3.86 of 4.00 (Completed in 3.5 years)",
    honors: "Magna Cum Laude",
    date: "Aug 2021 – Feb 2025",
    icon: "🎓",
    color: "from-blue-400 to-purple-600",
  },
  {
    institution: "SMAK Kolese Santo Yusup, Malang",
    degree: "High School Diploma, MIPA",
    date: "Jul 2018 – May 2021",
    icon: "🏫",
    color: "from-purple-400 to-pink-600",
  },
];

export default function EducationSection() {
  const [selected, setSelected] = useState(0);

  return (
    <section
      id="education"
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
          EDUCATION
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
          {educationList.map((edu, index) => (
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
                <span className="text-2xl">{edu.icon}</span>
                <div>
                  <div className="font-medium text-sm">
                    {edu.institution.split(",")[0]}
                  </div>
                  <div className="text-xs opacity-70">
                    {edu.degree.split(",")[0]}
                  </div>
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
                <span className="text-3xl">{educationList[selected].icon}</span>
                <h3 className="text-2xl font-semibold text-white">
                  {educationList[selected].degree}
                </h3>
              </div>

              <div className="flex flex-wrap gap-4 text-sm text-gray-400 mb-4">
                <div className="flex items-center gap-2">
                  <GraduationCap size={16} />
                  {educationList[selected].institution}
                </div>
                <div className="flex items-center gap-2">
                  <Calendar size={16} />
                  {educationList[selected].date}
                </div>
              </div>
            </div>

            {/* Details */}
            <div className="space-y-4">
              {educationList[selected].gpa && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                  className="glass p-4 rounded-lg border border-purple-400/30"
                >
                  <div className="flex items-center gap-2 text-purple-400 mb-2">
                    <Award size={18} />
                    <span className="font-medium">Academic Achievement</span>
                  </div>
                  <p className="text-gray-300">{educationList[selected].gpa}</p>
                </motion.div>
              )}

              {educationList[selected].honors && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                  className="glass p-4 rounded-lg border border-blue-400/30"
                >
                  <div className="flex items-center gap-2 text-blue-400 mb-2">
                    <Award size={18} />
                    <span className="font-medium">Honors</span>
                  </div>
                  <p className="text-gray-300">
                    {educationList[selected].honors}
                  </p>
                </motion.div>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
