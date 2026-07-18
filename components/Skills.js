"use client";

import { motion } from "framer-motion";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const card = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

export default function Skills() {
  return (
    <motion.section
      id="skills"
      className="mx-auto mt-32 max-w-6xl px-6"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={container}
    >
      <motion.p
        variants={card}
        className="mb-3 font-[family-name:var(--font-space-mono)] text-sm uppercase tracking-[0.35em] text-[#2B5D5C]"
      >
        03 / SKILLS
      </motion.p>

      <motion.div
        className="grid gap-8 border-t border-black/20 pt-10"
        variants={container}
      >
        <motion.div
          variants={card}
          transition={{ duration: 0.6 }}
          whileHover={{ y: -8 }}
          className="border p-8"
        >
          <h3 className="mb-5 text-2xl font-semibold">Technical Skills</h3>

          <ul className="grid grid-cols-2 gap-x-15 gap-y-3 list-disc pl-5 text-black/70 marker:text-black/70">
            <li>
              <span className="font-semibold text-black">Languages:</span> Python, C, HTML, CSS
            </li>
            <li>
              <span className="font-semibold text-black">Tools:</span> GitHub, VS Code, Burp Suite
            </li>
            <li>
              <span className="font-semibold text-black">Frameworks:</span> Next.js
            </li>
            <li>
              <span className="font-semibold text-black">Libraries:</span> Pandas, NumPy, Scikit-learn, Matplotlib
            </li>
          </ul>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}