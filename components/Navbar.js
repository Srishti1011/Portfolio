"use client";

import { motion } from "framer-motion";

import Stamp from "./Stamp";

import { useEffect, useState } from "react";
import Link from "next/link";


export default function Navbar() {

  const [activeSection, setActiveSection] = useState("hero");

  const links = [
    { name: "About", href: "#about" },
    { name: "Work", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.4,
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  <div className="flex gap-8">
    {links.map((link) => (
      <Link
        key={link.href}
        href={link.href}
        className={`transition-colors duration-300 ${activeSection === link.href.substring(1)
          ? "text-[#2B5D5C] font-semibold"
          : "text-[#171310]"
          }`}
      >
        {link.name}
      </Link>
    ))}
  </div>


  return (
    <motion.nav
      className="mx-auto flex max-w-6xl items-center justify-between rounded-2xl px-6 py-8 shadow-[0_8px_12px_-6px_rgba(0,0,0,0.15)]"
      initial={{ opacity: 0, y: -25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.6,
        ease: "easeOut",
      }}
    >

      <Stamp text="CURRENTLY BUILDING" rotate={0} />

      <div className="hidden gap-8 text-sm uppercase tracking-widest md:flex">
        <motion.a
          href="#about"
          whileHover={{ y: -2 }}
          transition={{ duration: 0.2 }}
        >
          About
        </motion.a>

        <motion.a
          href="#projects"
          whileHover={{ y: -2 }}
          transition={{ duration: 0.2 }}
        >
          Projects
        </motion.a>

        <motion.a
          href="#skills"
          whileHover={{ y: -2 }}
          transition={{ duration: 0.2 }}
        >
          Skills
        </motion.a>

        <motion.a
          href="#contact"
          whileHover={{ y: -2 }}
          transition={{ duration: 0.2 }}
        >
          Contact
        </motion.a>
      </div>
    </motion.nav>
  );
}