"use client";

import { motion, useReducedMotion } from "framer-motion";

const ABOUT_LINES = [
  "Product designer with a focus",
  "on B2B systems, interfaces,",
  "and the kind of craft that",
  "makes complexity feel simple.",
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.18,
    },
  },
};

const lineVariants = {
  hidden: { opacity: 0.12 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.9,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

export default function HomeAbout() {
  const reducedMotion = useReducedMotion();

  return (
    <section
      className="px-6 py-20 md:px-12 md:py-24 lg:px-20 lg:py-28"
      style={{ backgroundColor: "#FF6B6B" }}
    >
      <motion.div
        className="mx-auto max-w-page"
        variants={containerVariants}
        initial={reducedMotion ? "visible" : "hidden"}
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
      >
        {ABOUT_LINES.map((line, i) => (
          <motion.p
            key={i}
            className="font-serif text-[48px] leading-[1.12] text-ink"
            variants={lineVariants}
          >
            {line}
          </motion.p>
        ))}
      </motion.div>
    </section>
  );
}
