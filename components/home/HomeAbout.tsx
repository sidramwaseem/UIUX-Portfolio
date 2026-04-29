"use client";

import { motion, useReducedMotion } from "framer-motion";

const ABOUT_LINES = [
  "Product designer with a focus",
  "on B2B systems, interfaces,",
  "and the kind of craft that",
  "makes complexity feel simple.",
];

export default function HomeAbout() {
  const reducedMotion = useReducedMotion();

  return (
    <section
      className="py-20 md:py-24 lg:py-28"
      style={{ backgroundColor: "#FF6B6B" }}
    >
      <div className="page-container">
        {ABOUT_LINES.map((line, i) => (
          <motion.div
            key={i}
            className="overflow-hidden py-[0.06em]"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
          >
            <motion.p
              className="font-serif text-[48px] leading-[1.12] text-ink"
              variants={{
                hidden: { y: reducedMotion ? "0%" : "115%" },
                visible: {
                  y: "0%",
                  transition: {
                    duration: 0.75,
                    ease: [0.16, 1, 0.3, 1],
                    delay: reducedMotion ? 0 : i * 0.1,
                  },
                },
              }}
            >
              {line}
            </motion.p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
