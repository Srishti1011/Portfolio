"use client";

import { motion } from "framer-motion";

import Image from "next/image";

import LoopArrow from "./LoopArrow";

export default function Hero() {
  return (
    <section className="pt-45 mx-auto grid max-w-6xl items-start gap-12 px-6 py-12 md:grid-cols-2">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.2,
            },
          },
        }}
      >
        <motion.p
          className="mb-8 text-sm uppercase tracking-[0.3em] text-[#2B5D5C]"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.6 }}
        >
          Aspiring Software Developer
        </motion.p>

        <motion.h1
          className="mb-6 text-6xl font-bold leading-none"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.6 }}
        >
          Hi,
          <br />
          I'm
          <br />
          Srishti
          <br />
          Kaushal.
        </motion.h1>

        <motion.p
          className="mb-8 max-w-md text-lg leading-8 text-black/70"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.6 }}
        >
          Building at the intersection of software and artificial intelligence.
        </motion.p>

        <motion.a
          href="#projects"
          className="inline-block border-2 border-black px-8 py-3 transition hover:bg-black hover:text-white"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.6 }}
          whileHover={{
            scale: 1.05,
          }}
          whileTap={{
            scale: 0.98,
          }}
        >
          View My Work
        </motion.a>
      </motion.div>

      <motion.div
        className="flex justify-center"
        initial={{ opacity: 0, x: 60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{
          duration: 0.8,
          delay: 0.4,
        }}
      >
        <motion.div
          whileHover={{ scale: 1.03 }}
          transition={{ duration: 0.3 }}
        >
          <Image
            src="/images/profile.png"
            alt="Profile"
            width={320}
            height={693}
            quality={100}
            className="rounded-2xl shadow-xl object-cover"
          />
        </motion.div>
      </motion.div>

      <div className="absolute -bottom-40 left-5">
        <div
          style={{
            transform: "scale(0.4) scaleX(-1) rotate(140deg)",
          }}
        >
          <LoopArrow />
        </div>
      </div>

    </section>
  );
}