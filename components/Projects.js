"use client";

import { motion } from "framer-motion";

import Image from "next/image";

import Stamp from "./Stamp";

export default function Projects() {
  return (
    <section
      id="projects"
      className="mx-auto mt-32 max-w-6xl px-6"
    >
      <motion.p
        className="mb-3 font-[family-name:var(--font-space-mono)] text-sm uppercase tracking-[0.35em] text-[#2B5D5C]"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        02 / SELECTED WORK
      </motion.p>

      <div className="space-y-16 border-t border-black/20 pt-10">

        {/* Project One */}

        <motion.article
          className="grid gap-8 md:grid-cols-2"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          whileHover={{ y: -8 }}
        >
          <motion.div
            className="overflow-hidden rounded-lg border border-[#171310] shadow-xl"
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
          >

            <Image
              src="/images/phishing_detection.png"
              alt="Phishing Detection Software"
              width={600}
              height={400}
              quality={100}
              className="h-full w-full object-right"
            />

          </motion.div>

          <div>
            <Stamp text="IN PROGRESS"
              rotate={0}
            />

            <h3 className="pt-8 mb-4 text-3xl font-semibold">
              Phishing Detection Software
            </h3>

            <p className="mb-6 text-justify">
              A browser-based phishing prevention system that detects malicious websites in real time. The browser extension intercepts navigation requests, performs an initial analysis using threat intelligence and blocks high-risk websites before they load. For uncertain cases, the webpage is analyzed through a second-stage pipeline using MobileCLIP, OCR. These signals are fused using a LightGBM-based risk engine to generate a final risk score, enabling actions ranging from seamless browsing to credential protection and sandbox detonation.
            </p>

          </div>
        </motion.article>

        {/* Project Two */}

        <motion.article
          className="grid gap-8 md:grid-cols-2"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          whileHover={{ y: -8 }}
        >
          <motion.div
            className="overflow-hidden rounded-lg border border-[#171310] shadow-xl"
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
          >

            <Image
              src="/images/portfolio_site.jpg"
              alt="Portfolio Website"
              width={600}
              height={400}
              quality={100}
              className="h-full w-auto object-contain"
            />

          </motion.div>

          <div>
            <h3 className="mb-4 text-3xl font-semibold">
              Portfolio Website
            </h3>

            <p className="mb-6 text-justify">
              This portfolio is a reflection of my journey as a developer, bringing together the projects I've built, the technologies I'm learning, and the skills I'm continuously improving. Developed using Next.js, React, Tailwind CSS, and Framer Motion, it features a responsive layout, smooth animations, and a clean, modern design that prioritizes both aesthetics and usability. Beyond showcasing my work, the website demonstrates my attention to detail, and passion for creating engaging and intuitive web experiences.
            </p>

            <motion.a
              href="#"
              whileHover={{ x: 6 }}
              transition={{ duration: 0.2 }}
            >
              View Project →
            </motion.a>
          </div>
        </motion.article>

        {/*Project Three*/}

        <motion.article
          className="grid gap-8 md:grid-cols-2"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          whileHover={{ y: -8 }}
        >
          <motion.div
            className="overflow-hidden rounded-lg border border-[#171310] shadow-xl"
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
          >

            <Image
              src="/images/SehatQure.png"
              alt="SehatQure"
              width={1200}
              height={800}
              quality={100}
              className="h-full w-full object-left"
            />

          </motion.div>

          <div>

            <h3 className="mb-4 text-3xl font-semibold">
              SehatQure
            </h3>

            <p className="mb-6 text-justify">
              A comprehensive digital healthcare platform bridging the gap between patients, doctors, and urgent medical assistance. Patients can securely store their medical history and generate a unique QR code doctors can scan for instant access, while an AI-driven prioritisation system calculates urgency scores during emergencies. The platform also includes an AI consult assistant, a hospital finder based on location, and integrated appointment booking with doctors. Built with Node.js and Express, and powered by OpenAI GPT models for AI-driven healthcare insights.
            </p>

            <motion.a
              href="#"
              whileHover={{ x: 6 }}
              transition={{ duration: 0.2 }}
            >
              View Project →
            </motion.a>
          </div>
        </motion.article>

      </div>
    </section>
  );
}