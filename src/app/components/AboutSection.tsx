import { motion } from "framer-motion";
import { Mail, Linkedin, Github } from "lucide-react";
import Image from "next/image";
export default function AboutSection() {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col md:flex-row items-center justify-center gap-12 text-white px-8 relative"
    >
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-purple-500/10 rounded-full blur-xl"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-blue-500/10 rounded-full blur-xl"></div>
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-pink-500/10 rounded-full blur-xl"></div>

      {/* Teks kiri */}
      <motion.div
        className="max-w-2xl flex-1 z-10"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.p
          className="text-lg text-gray-400 mb-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Hey, I&apos;m
        </motion.p>
        <motion.h1
          className="text-5xl md:text-7xl font-extrabold mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 1 }}
        >
          <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-pink-400 text-transparent bg-clip-text">
            Arvel Kartawijaya
          </span>
        </motion.h1>
        <motion.p
          className="text-gray-400 leading-relaxed mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 1 }}
        >
          I&apos;m a software engineer and frontend developer based in Jakarta.
          Passionate about building modern, responsive, and user-friendly web
          applications. Experienced in{" "}
          <span className="text-white font-semibold">
            Next.js, TypeScript, Tailwind CSS, and Supabase
          </span>
          .
        </motion.p>

        {/* Stats */}
        <motion.div
          className="flex gap-8 mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 1 }}
        >
          <div className="text-center">
            <div className="text-2xl font-bold text-purple-400">3.86</div>
            <div className="text-sm text-gray-400">GPA</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-400">6+</div>
            <div className="text-sm text-gray-400">Months Exp</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-pink-400">10+</div>
            <div className="text-sm text-gray-400">Projects</div>
          </div>
        </motion.div>

        {/* Contact Buttons */}
        <motion.div
          className="flex flex-wrap gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 1 }}
        >
          <a
            href="mailto:arvelkartawijaya@gmail.com"
            className="flex items-center gap-2 border border-purple-400 px-6 py-3 rounded-lg hover:bg-purple-400/10 transition-all duration-300 pulse-glow"
          >
            <Mail size={18} /> Send an email
          </a>
          <a
            href="https://linkedin.com/in/arvelkartawijaya"
            target="_blank"
            className="flex items-center gap-2 border border-blue-400 px-6 py-3 rounded-lg hover:bg-blue-400/10 transition-all duration-300 pulse-glow"
          >
            <Linkedin size={18} /> LinkedIn
          </a>
          <a
            href="https://github.com/arvel17"
            target="_blank"
            className="flex items-center gap-2 border border-pink-400 px-6 py-3 rounded-lg hover:bg-pink-400/10 transition-all duration-300 pulse-glow"
          >
            <Github size={18} /> GitHub
          </a>
        </motion.div>
      </motion.div>

      {/* Foto kanan */}
      <motion.div
        className="flex-1 flex justify-center relative"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        <div className="relative">
          {/* Glowing ring */}
          <div className="absolute inset-0 bg-gradient-to-r from-purple-400 via-blue-400 to-pink-400 rounded-2xl blur-lg opacity-30 animate-pulse"></div>
          <Image
            src="/profile.jpg"
            alt="Arvel Kartawijaya"
            width={450}
            height={450}
            className="rounded-2xl shadow-lg object-cover relative z-10 float"
          />
        </div>
      </motion.div>
    </section>
  );
}
