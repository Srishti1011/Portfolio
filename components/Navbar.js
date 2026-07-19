"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Link from "next/link";
import Stamp from "./Stamp";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("about");
  const [showNavbar, setShowNavbar] = useState(true);

  const links = [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
  ];

  // Highlight active section
  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const ratios = {};

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          ratios[entry.target.id] = entry.isIntersecting
            ? entry.intersectionRatio
            : 0;
        });

        // pick the section with the highest visible ratio
        const mostVisible = Object.entries(ratios).reduce((a, b) =>
          b[1] > a[1] ? b : a
        );

        if (mostVisible[1] > 0) {
          setActiveSection(mostVisible[0]);
        }
      },
      {
        threshold: [0, 0.25, 0.45, 0.6, 0.75, 1],
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  // Hide / reveal navbar
  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Always show near the top
      if (currentScrollY < 100) {
        setShowNavbar(true);
      } else {
        // Hide only if user scrolls DOWN more than 10px
        if (currentScrollY > lastScrollY + 10) {
          setShowNavbar(false);
        }

        // Show only if user scrolls UP more than 10px
        if (currentScrollY < lastScrollY - 10) {
          setShowNavbar(true);
        }
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -40 }}
      animate={{
        opacity: 1,
        y: showNavbar ? 0 : -120,
      }}
      transition={{
        duration: 0.35,
        ease: "easeInOut",
      }}
      className="fixed top-6 left-1/2 z-50 flex w-[92%] max-w-6xl -translate-x-1/2 items-center justify-between rounded-2xl border border-black/10 bg-[#F3EEE3]/85 px-6 py-4 backdrop-blur-md shadow-lg"
    >
      <Stamp text="CURRENTLY BUILDING" rotate={0} />

      <div className="hidden items-center gap-8 text-sm uppercase tracking-widest md:flex">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`relative transition-colors duration-300 ${activeSection === link.href.substring(1)
                ? "text-[#2B5D5C]"
                : "text-[#171310]"
              }`}
          >
            {link.name}

            {activeSection === link.href.substring(1) && (
              <motion.div
                layoutId="navbarUnderline"
                className="absolute -bottom-1 left-0 right-0 h-[2px] bg-[#2B5D5C]"
              />
            )}
          </Link>
        ))}
      </div>
    </motion.nav>
  );
}