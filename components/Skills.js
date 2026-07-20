"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import {
  FaPython,
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaGithub,
  FaDatabase,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiC,
  SiPostgresql,
  SiScikitlearn,
  SiPandas,
  SiNumpy,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

const floatingIcons = [
  { icon: FaPython, top: "15%", left: "30%", size: 42, delay: 0 },
  { icon: SiNextdotjs, top: "30%", left: "65%", size: 36, delay: 0.6 },
  { icon: FaReact, top: "52%", left: "15%", size: 46, delay: 1.2 },
  { icon: SiPostgresql, top: "65%", left: "60%", size: 34, delay: 0.3 },
  { icon: FaGithub, top: "20%", left: "5%", size: 38, delay: 0.9 },
  { icon: VscVscode, top: "85%", left: "35%", size: 32, delay: 1.5 },
  { icon: FaHtml5, top: "45%", left: "80%", size: 30, delay: 0.4 },
  { icon: SiScikitlearn, top: "75%", left: "10%", size: 28, delay: 1.0 },
  { icon: SiC, top: "5%", left: "55%", size: 30, delay: 0.7 },
  { icon: FaCss3Alt, top: "38%", left: "45%", size: 30, delay: 1.3 },
  { icon: FaDatabase, top: "58%", left: "38%", size: 28, delay: 0.5 },
  { icon: SiPandas, top: "10%", left: "80%", size: 32, delay: 1.1 },
  { icon: SiNumpy, top: "68%", left: "82%", size: 30, delay: 0.2 },
];

const skillCategories = [
  { label: "Languages", items: "Python, C, HTML, CSS, SQL" },
  { label: "Frameworks", items: "Next.js, React.js" },
  { label: "Tools", items: "GitHub, VS Code, Burp Suite, PostgreSQL" },
  { label: "Libraries", items: "Pandas, NumPy, Scikit-learn, Matplotlib" },
];

function FloatingIcon({ Icon, top, left, size, delay }) {
  return (
    <motion.div
      className="absolute text-[#171310]/70"
      style={{ top, left }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay }}
    >
      <motion.div
        animate={{ y: [0, -14, 0], rotate: [0, 4, -4, 0] }}
        transition={{
          duration: 5 + Math.random() * 2,
          repeat: Infinity,
          ease: "easeInOut",
          delay,
        }}
      >
        <Icon size={size} />
      </motion.div>
    </motion.div>
  );
}

function BarDot({ index, total, topPx, scrollYProgress }) {
  const pointProgress = index / (total - 1 || 1);

  const scale = useTransform(
    scrollYProgress,
    [Math.max(pointProgress - 0.05, 0), pointProgress],
    [0.6, 1]
  );

  const bg = useTransform(
    scrollYProgress,
    [Math.max(pointProgress - 0.05, 0), pointProgress],
    ["#D8D0C0", "#171310"]
  );

  return (
    <motion.div
      style={{ top: topPx, scale, backgroundColor: bg }}
      className="absolute left-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-[#F5F0E6]"
    />
  );
}

export default function Skills() {
  const sectionRef = useRef(null);
  const barRef = useRef(null);
  const headingRefs = useRef([]);
  const [dotPositions, setDotPositions] = useState([]);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 0.8", "end 0.4"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const measure = () => {
    if (!barRef.current) return;
    const barTop = barRef.current.getBoundingClientRect().top;

    const positions = headingRefs.current.map((el) => {
      if (!el) return 0;
      const rect = el.getBoundingClientRect();
      return rect.top - barTop + rect.height / 2;
    });

    setDotPositions(positions);
  };

  useEffect(() => {
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  // fewer icons for the compact mobile/tablet layout
  const mobileIcons = floatingIcons.slice(0, 8);

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="mx-auto mt-32 max-w-6xl px-6"
    >
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-3 font-[family-name:var(--font-space-mono)] text-sm uppercase tracking-[0.35em] text-[#2B5D5C]"
      >
        03 / SKILLS
      </motion.p>

      <div className="flex flex-col gap-x-12 border-t border-black/20 pt-10 lg:flex-row">
        {/* left block: bar + skill points */}
        <div className="grid grid-cols-[auto_1fr] gap-x-12 lg:w-[55%]">
          <div ref={barRef} className="relative w-[6px] rounded-full bg-black/10">
            <motion.div
              style={{ height: lineHeight }}
              className="absolute top-0 left-0 w-full rounded-full bg-[#171310]"
            />

            {skillCategories.map((cat, i) => (
              <BarDot
                key={cat.label}
                index={i}
                total={skillCategories.length}
                topPx={dotPositions[i] ?? 0}
                scrollYProgress={scrollYProgress}
              />
            ))}
          </div>

          <div className="space-y-14 pb-4">
            {skillCategories.map((cat, i) => (
              <motion.div
                key={cat.label}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.6, delay: i * 0.05 }}
                onAnimationComplete={measure}
              >
                <h3
                  ref={(el) => (headingRefs.current[i] = el)}
                  className="mb-2 text-2xl font-semibold"
                >
                  {cat.label}
                </h3>
                <p className="text-black/70">{cat.items}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* right block: floating icons — full set on desktop */}
        <div className="relative mt-16 hidden min-h-[400px] flex-1 lg:mt-0 lg:block">
          {floatingIcons.map((item, i) => (
            <FloatingIcon
              key={i}
              Icon={item.icon}
              top={item.top}
              left={item.left}
              size={item.size}
              delay={item.delay}
            />
          ))}
        </div>

        {/* compact icons — mobile/tablet only, smaller area, fewer icons */}
        <div className="relative mt-12 h-[220px] w-full sm:h-[260px] lg:hidden">
          {mobileIcons.map((item, i) => (
            <FloatingIcon
              key={i}
              Icon={item.icon}
              top={item.top}
              left={item.left}
              size={Math.round(item.size * 0.65)}
              delay={item.delay}
            />
          ))}
        </div>
      </div>
    </section>
  );
}