"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Stamp from "./Stamp";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("about");
  const [showNavbar, setShowNavbar] = useState(true);
  const [mobileOpen, setMobileOpen] = useState(false);

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

        const mostVisible = Object.entries(ratios).reduce((a, b) =>
          b[1] > a[1] ? b : a
        );

        if (mostVisible[1] > 0) {
          setActiveSection(mostVisible[0]);
        }
      },
      { threshold: [0, 0.25, 0.45, 0.6, 0.75, 1] }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  // Hide / reveal navbar
  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < 100) {
        setShowNavbar(true);
      } else {
        if (currentScrollY > lastScrollY + 10) {
          setShowNavbar(false);
          setMobileOpen(false); // close menu if user scrolls away
        }
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
      animate={{ opacity: 1, y: showNavbar ? 0 : -120 }}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className="fixed top-6 left-1/2 z-50 w-[92%] max-w-6xl -translate-x-1/2 rounded-2xl border border-black/10 bg-[#F3EEE3]/85 px-6 py-4 backdrop-blur-md shadow-lg"
    >
      <div className="flex items-center justify-between">
        <Stamp text="CURRENTLY BUILDING" rotate={0} />

        {/* desktop links */}
        <div className="hidden items-center gap-8 text-sm uppercase tracking-widest md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`relative transition-colors duration-300 ${
                activeSection === link.href.substring(1)
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

        {/* mobile hamburger toggle */}
        <button
          onClick={() => setMobileOpen((open) => !open)}
          className="md:hidden text-[#171310]"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* mobile dropdown menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden md:hidden"
          >
            <div className="mt-4 flex flex-col gap-4 border-t border-black/10 pt-4 text-sm uppercase tracking-widest">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={`transition-colors duration-300 ${
                    activeSection === link.href.substring(1)
                      ? "text-[#2B5D5C]"
                      : "text-[#171310]"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}