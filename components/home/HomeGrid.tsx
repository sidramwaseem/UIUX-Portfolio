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
  {
    index: 4,
    title: "About",
    description: "Background, process, tools, and how I approach design.",
    meta: "—",
    href: "/about",
    preview: "none" as const,
  },
];

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.09,
      delayChildren: 0.15,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

export default function HomeGrid() {
  const reducedMotion = useReducedMotion();

  return (
    <motion.div
      className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-5"
      variants={container}
      initial={reducedMotion ? "visible" : "hidden"}
      animate="visible"
    >
      {SECTIONS.map((section) => (
        <motion.div
          key={section.href}
          variants={item}
          whileHover={
            reducedMotion ? undefined : { y: -4, transition: { duration: 0.2, ease: "easeOut" } }
          }
          className="h-full"
        >
          <WorkspaceCard {...section} />
        </motion.div>
      ))}
    </motion.div>
  );
}
