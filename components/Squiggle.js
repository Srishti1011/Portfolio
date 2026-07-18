"use client";

import { motion } from "framer-motion";

export default function Squiggle() {
  return (
    <svg
      width="180"
      height="20"
      viewBox="0 0 180 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <motion.path
        d="M2 10
           C12 2, 22 18, 32 10
           S52 2, 62 10
           S82 18, 92 10
           S112 2, 122 10
           S142 18, 152 10
           S172 2, 178 10"
        stroke="#2B5D5C"
        strokeWidth="3"
        strokeLinecap="round"
        fill="none"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{
          duration: 1.2,
          ease: "easeInOut",
        }}
      />
    </svg>
  );
}