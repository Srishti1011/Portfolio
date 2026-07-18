"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer
      className="mx-auto mt-20 max-w-6xl px-6 py-8 text-center text-sm text-black/60"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      © {new Date().getFullYear()} Srishti Kaushal. All rights reserved.
    </motion.footer>
  );
}

