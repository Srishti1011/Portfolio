"use client";

import { motion, useInView } from "framer-motion";
import Image from "next/image";
import Stamp from "./Stamp";
import { useRef, useState, useEffect } from "react";

function FlipCard({
  image,
  alt,
  title,
  description,
  link,
  stamp,
  imageFit = "object-contain object-centre",       // "object-cover" | "object-contain"
  imageBg = "bg-[#171310]",          // background behind letterboxed image
  cardHeight = "aspect-[3/2]",          // e.g. "h-[420px]" or "aspect-[3/2]"
  stampPosition = "top-4 right-4",   // tailwind position classes
  textAlign = "text-justify",        // "text-left" | "text-justify" | "text-center"
  backSideBg = "bg-[#F5F1E8]",
  titleColor = "text-[#171310]",
  textColor = "text-[#171310]",
}) {
  const [flipped, setFlipped] = useState(false);
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { amount: 0.3 });

  useEffect(() => {
    if (!isInView && flipped) {
      setFlipped(false);
    }
  }, [isInView]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <motion.div
      ref={cardRef}
      className="[perspective:1600px]"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8 }}
    >
      <motion.div
        data-cursor-hover
        className={`relative w-full ${cardHeight} cursor-pointer [transform-style:preserve-3d]`}
        onClick={() => setFlipped((f) => !f)}
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        whileHover={{ scale: 1.02 }}
      >
        {/* FRONT — image */}
        <div
          className={`absolute inset-0 overflow-hidden rounded-lg border border-[#171310] shadow-xl [backface-visibility:hidden] ${imageBg}`}
        >
          <Image src={image} alt={alt} fill quality={100} className={imageFit} />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-5">
            <h3 className="text-2xl font-semibold text-white">{title}</h3>
          </div>
        </div>

        {/* BACK — description */}
        <div
          className={`absolute inset-0 flex flex-col justify-start overflow-y-auto rounded-lg border border-[#171310] ${backSideBg} p-8 shadow-xl [backface-visibility:hidden]`}
          style={{ transform: "rotateY(180deg)" }}
        >
          <div className="mb-4 flex flex-wrap items-center gap-4">
            {stamp && <Stamp text={stamp} rotate={0} />}
            <h3 className={`text-3xl font-semibold ${titleColor}`}>{title}</h3>
          </div>

          <p className={`mb-6 ${textAlign} ${textColor}`}>{description}</p>
          {link && (
            <motion.a
              href={link}
              onClick={(e) => e.stopPropagation()}
              whileHover={{ x: 6 }}
              transition={{ duration: 0.2 }}
              className="w-fit text-[#2B5D5C] font-medium"
            >
              View Project →
            </motion.a>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="mx-auto mt-32 max-w-6xl px-6">
      <motion.p
        className="mb-3 font-[family-name:var(--font-space-mono)] text-sm uppercase tracking-[0.35em] text-[#2B5D5C]"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        02 / SELECTED WORK
      </motion.p>

      {/* horizontal line, now its own element */}
      <div className="border-t border-black/20" />

      {/* hint text sits below the line */}
      <p className="mb-5 mt-6 text-base text-black/70">
        Click a card to flip it and read more →
      </p>

      <div className="grid gap-10 pt-5 md:grid-cols-2">
        {/* Project One */}
        <FlipCard
          image="/images/phishing_detection.png"
          alt="Phishing Detection Software"
          title="Phishing Detection Software"
          stamp="IN PROGRESS"
          description="A browser-based phishing prevention system that detects malicious websites in real time. The browser extension intercepts navigation requests, performs an initial analysis using threat intelligence and blocks high-risk websites before they load. For uncertain cases, the webpage is analyzed through a second-stage pipeline using MobileCLIP, OCR. These signals are fused using a LightGBM-based risk engine to generate a final risk score, enabling actions ranging from seamless browsing to credential protection and sandbox detonation."
          imageFit="object-cover object-right"
          imageBg="bg-[#171310]"
          cardHeight="aspect-[3/2]"
          stampPosition="top-4 right-4"
        />

        {/* Project Two */}
        <FlipCard
          image="/images/SehatQure.png"
          alt="SehatQure"
          title="SehatQure"
          description="A digital healthcare platform bridging the gap between patients, doctors, and urgent medical assistance. Patients can securely store their medical history and generate a unique QR code doctors can scan for instant access, while an AI-driven prioritisation system calculates urgency scores during emergencies. The platform also includes an AI consult assistant, a hospital finder based on location, and integrated appointment booking with doctors. Built with Node.js and Express, and powered by OpenAI GPT models for AI-driven healthcare insights."
          link="https://makeathon-deployed.vercel.app/"
          imageFit="object-cover object-centre"
          imageBg="bg-[#171310]"
          cardHeight="aspect-[3/2]"
        />
      </div>
    </section>
  );
}