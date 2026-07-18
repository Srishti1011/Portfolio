"use client";

import { motion } from "framer-motion";

export default function Stamp({
  text = "CURRENTLY BUILDING",
  rotate = -4,
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        rotate: rotate - 8,
        scale: 0.9,
      }}
      animate={{
        opacity: 1,
        rotate,
        scale: 1,
      }}
      transition={{
        duration: 0.8,
        ease: "easeOut",
      }}
      whileHover={{
        rotate: rotate + 2,
        scale: 1.03,
      }}
      className="inline-block"
    >
      <div className="border-2 border-[#171310] bg-[#F5F0E6] px-5 py-2 shadow-sm">
        <p className="font-[family-name:var(--font-space-mono)] text-xs uppercase tracking-[0.35em] text-[#171310]">
          ● {text}
        </p>
      </div>
    </motion.div>
  );
}