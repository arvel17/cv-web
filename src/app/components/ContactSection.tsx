"use client";

import { Mail, Linkedin, Github, Send } from "lucide-react";
import { motion } from "framer-motion";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col justify-center items-center px-8 text-white text-center relative"
    >
      {/* Decorative elements */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-purple-500/10 rounded-full blur-xl"></div>
      <div className="absolute bottom-20 right-20 w-24 h-24 bg-blue-500/10 rounded-full blur-xl"></div>

      <motion.div
        className="max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <motion.h2
          className="text-4xl md:text-6xl font-bold mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-pink-400 text-transparent bg-clip-text">
            Let&apos;s Work Together
          </span>
        </motion.h2>

        <motion.p
          className="text-gray-400 max-w-2xl mx-auto mb-12 text-lg leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          I&apos;m always open to discussing new opportunities, projects, or
          collaborations. Feel free to reach out via email or connect with me on
          LinkedIn and GitHub. Let&apos;s build something amazing together!
        </motion.p>

        {/* Contact Cards */}
        <motion.div
          className="grid md:grid-cols-3 gap-6 mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.a
            href="mailto:arvelkartawijaya@gmail.com"
            className="glass p-6 rounded-xl hover:border-purple-400/50 transition-all duration-300 group"
            whileHover={{ y: -5 }}
          >
            <div className="text-purple-400 mb-4 group-hover:scale-110 transition-transform duration-300">
              <Mail size={32} className="mx-auto" />
            </div>
            <h3 className="text-white font-semibold mb-2">Email</h3>
            <p className="text-gray-400 text-sm">arvelkartawijaya@gmail.com</p>
          </motion.a>

          <motion.a
            href="https://linkedin.com/in/arvelkartawijaya"
            target="_blank"
            className="glass p-6 rounded-xl hover:border-blue-400/50 transition-all duration-300 group"
            whileHover={{ y: -5 }}
          >
            <div className="text-blue-400 mb-4 group-hover:scale-110 transition-transform duration-300">
              <Linkedin size={32} className="mx-auto" />
            </div>
            <h3 className="text-white font-semibold mb-2">LinkedIn</h3>
            <p className="text-gray-400 text-sm">Connect with me</p>
          </motion.a>

          <motion.a
            href="https://github.com/arvel17"
            target="_blank"
            className="glass p-6 rounded-xl hover:border-pink-400/50 transition-all duration-300 group"
            whileHover={{ y: -5 }}
          >
            <div className="text-pink-400 mb-4 group-hover:scale-110 transition-transform duration-300">
              <Github size={32} className="mx-auto" />
            </div>
            <h3 className="text-white font-semibold mb-2">GitHub</h3>
            <p className="text-gray-400 text-sm">Check out my code</p>
          </motion.a>
        </motion.div>

        {/* Primary CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <a
            href="mailto:arvelkartawijaya@gmail.com"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-500 to-blue-500 px-8 py-4 rounded-xl font-semibold text-white hover:from-purple-600 hover:to-blue-600 transition-all duration-300 pulse-glow group"
          >
            <Send
              size={20}
              className="group-hover:translate-x-1 transition-transform duration-300"
            />
            Start a Conversation
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
