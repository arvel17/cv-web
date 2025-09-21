"use client";

import { motion } from "framer-motion";
import { Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-8 px-8 border-t border-gray-800/50">
      <motion.div
        className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: false }}
      >
        <div className="text-gray-400 text-sm mb-4 md:mb-0">
          <p className="flex items-center gap-1">
            Made with <Heart size={14} className="text-red-400" /> by{" "}
            <span className="text-white font-medium">Arvel Kartawijaya</span>
          </p>
        </div>

        <div className="text-gray-400 text-sm">
          <p>&copy; 2025 All rights reserved.</p>
        </div>
      </motion.div>
    </footer>
  );
}
