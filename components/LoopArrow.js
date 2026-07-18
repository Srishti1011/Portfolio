"use client";

import { motion } from "framer-motion";

export default function LoopArrow() {
  return (
    <svg
      width="340"
      height="180"
      viewBox="0 0 340 180"
      xmlns="http://www.w3.org/2000/svg"
      className="overflow-visible"
    >
      <motion.path
        d="
          M25 145
          C25 35, 155 20, 185 85
          C205 135, 145 150, 145 88
          C145 40, 220 30, 305 40
        "
        fill="none"
        stroke="#171310"
        strokeWidth="8"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{
          duration: 1.6,
          ease: "easeInOut",
        }}
      />

      <motion.path
        d="M285 25 L325 40 L285 55"
        fill="none"
        stroke="#171310"
        strokeWidth="8"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{
          duration: 0.3,
          delay: 1.35,
        }}
      />
    </svg>
  );
}