"use client";

import { motion, useReducedMotion } from "framer-motion";
import WorkspaceCard from "./WorkspaceCard";

const SECTIONS = [
  {
    index: 1,
    title: "Case Studies",
    description:
      "UX design, B2B product thinking, and complex workflow design for enterprise.",
    meta: "12 projects",
    href: "/systems",
    preview: "grid" as const,
    featured: true,
  },
  {
    index: 2,
    title: "Social Media Work",
    description:
      "Landing pages, social media, whitepapers, and marketing design.",
    meta: "8 projects",
    href: "/surfaces",
    preview: "bars" as const,
  },
  {
    index: 3,
    title: "Shots",
    description: "Visual explorations, UI experiments, and design studies.",
    meta: "24 shots",
    href: "/shots",
    preview: "dots" as const,
  },
];

const cardVariant = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.25, 0.1, 0.25, 1] },
  },
};

export default function HomeGrid() {
  const reducedMotion = useReducedMotion();

  return (
    <div>

      {/* ── Section heading ──────────────────────────────── */}
      <div className="mb-14 md:mb-16">

        {/* Line 1: whileInView on the wrapper, clip on the h2 */}
        <motion.div
          className="overflow-hidden py-[0.04em]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.8 }}
        >
          <motion.h2
            className="font-serif text-[64px] leading-[1.02] tracking-[-0.025em] text-ink md:text-[84px] lg:text-[100px]"
            variants={{
              hidden: { y: reducedMotion ? "0%" : "110%" },
              visible: { y: "0%", transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
            }}
          >
            <span style={{ color: "#FF6B6B" }}>/</span>Museum of
          </motion.h2>
        </motion.div>

        {/* Line 2 */}
        <motion.div
          className="overflow-hidden py-[0.04em]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.8 }}
        >
          <motion.h2
            className="font-serif text-[64px] leading-[1.02] tracking-[-0.025em] text-ink md:text-[84px] lg:text-[100px]"
            variants={{
              hidden: { y: reducedMotion ? "0%" : "110%" },
              visible: { y: "0%", transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.08 } },
            }}
          >
            my Work<span style={{ color: "#FF6B6B" }}>!</span>
          </motion.h2>
        </motion.div>

      </div>

      {/* ── Bento grid ───────────────────────────────────── */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-5">

        <motion.div
          className="md:row-span-2"
          variants={cardVariant}
          initial={reducedMotion ? "visible" : "hidden"}
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          whileHover={reducedMotion ? undefined : { y: -4, transition: { duration: 0.2, ease: "easeOut" } }}
        >
          <WorkspaceCard {...SECTIONS[0]} />
        </motion.div>

        {SECTIONS.slice(1).map((section, i) => (
          <motion.div
            key={section.href}
            variants={cardVariant}
            initial={reducedMotion ? "visible" : "hidden"}
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: (i + 1) * 0.1 }}
            whileHover={reducedMotion ? undefined : { y: -4, transition: { duration: 0.2, ease: "easeOut" } }}
            className="h-full"
          >
            <WorkspaceCard {...section} />
          </motion.div>
        ))}

      </div>
    </div>
  );
}
