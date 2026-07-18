"use client";

import { motion } from "framer-motion";

import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Contact() {
  return (
    <motion.section
      id="contact"
      className="mx-auto mt-32 mb-20 max-w-6xl px-6"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8 }}
    >

      <motion.p
        className="mb-3 font-[family-name:var(--font-space-mono)] text-sm uppercase tracking-[0.35em] text-[#2B5D5C]"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        04 / LET'S CONNECT
      </motion.p>

      <div className="border-t border-black/20 pt-10">
        <motion.h2
          className="mb-6 text-5xl font-bold"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Want to work together?
        </motion.h2>

        <motion.p
          className="mb-25 max-w-3xl text-lg text-black/70"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          If you have a project in mind or just want to connect, I'd love to hear
          from you.
        </motion.p>

        <div className="flex items-center justify-center gap-25 mt-10">

          <motion.a
            href="https://github.com/Srishti1011"
            target="_blank"
            rel="noopener noreferrer"            
            whileHover={{ x: 8, color: "#2B5D5C" }}
            className="flex items-center gap-2 text-xl"
            transition={{ duration: 0.2 }}
          >
            <FaGithub />
            GitHub
          </motion.a>
          
          <motion.a
            href="mailto:srishtikaushal10@gmail.com"
            whileHover={{ x: 8, color: "#2B5D5C" }}
            className="flex items-center gap-2 text-xl"
            transition={{ duration: 0.2 }}
          >
            <FaEnvelope />
            srishtikaushal10@gmail.com
          </motion.a>

          <motion.a
            href="https://www.linkedin.com/in/srishti-kaushal-5a15a837a"
            target="_blank"
            rel="noopener noreferrer"            
            whileHover={{ x: 8, color: "#2B5D5C" }}
            className="flex items-center gap-2 text-xl"
            transition={{ duration: 0.2 }}
          >
            <FaLinkedin />
            LinkedIn
          </motion.a>
        </div>
      </div>
    </motion.section>
  );
}