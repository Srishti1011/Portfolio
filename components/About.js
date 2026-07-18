"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.section
      id="about"
      className="mx-auto mt-15 max-w-6xl px-6"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{
        duration: 0.8,
        ease: "easeOut",
      }}
    >
      <p className="font-[family-name:var(--font-space-mono)] mb-3 text-sm uppercase tracking-[0.35em] text-[#2B5D5C]">
        01 / WHO I AM
      </p>

      <div className="border-t border-black/20 pt-8">
        <h2 className="mb-6 text-4xl font-semibold">
          Making sense of things by making them.
        </h2>

        <p className="max-w-none text-lg leading-9 text-black/70">
          I'm Srishti - an aspiring software developer who learns best by building: if an idea crosses my mind, I'd rather start making it than read about how it's supposed to be done. I'm currently pursuing a B.Tech in Data Science and AI at TIET. What actually draws me to development is a habit of digging into the "why" behind things instead of just getting them to work - the mix of logic and craft it demands, and knowing there's always a better way to build something. Outside of building things, I love music - it's usually playing in the background while I'm deep in a project, refusing to stop until it feels right.
        </p>
      </div>
    </motion.section>
  );
}