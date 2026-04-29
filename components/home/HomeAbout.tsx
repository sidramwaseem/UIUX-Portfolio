"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";

const WORDS = (
  "Product designer with a focus on B2B systems, interfaces, " +
  "and the kind of craft that makes complexity feel simple."
).split(" ");

function Word({
  word,
  index,
  total,
  scrollYProgress,
}: {
  word: string;
  index: number;
  total: number;
  scrollYProgress: ReturnType<typeof useScroll>["scrollYProgress"];
}) {
  // Each word lights up across a rolling window of the scroll range
  const start = index / total;
  const end = start + 2 / total;

  const opacity = useTransform(scrollYProgress, [start, Math.min(end, 1)], [0.15, 1]);

  return (
    <motion.span className="mr-[0.28em] inline-block" style={{ opacity }}>
      {word}
    </motion.span>
  );
}

export default function HomeAbout() {
  const ref = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.85", "end 0.3"],
  });

  return (
    <section
      ref={ref}
      className="py-20 md:py-24 lg:py-28"
      style={{ backgroundColor: "#FF6B6B" }}
    >
      <div className="page-container">
        <p className="font-serif text-[58px] leading-[1.12] text-ink">
          {reduced
            ? WORDS.join(" ")
            : WORDS.map((word, i) => (
                <Word
                  key={i}
                  word={word}
                  index={i}
                  total={WORDS.length}
                  scrollYProgress={scrollYProgress}
                />
              ))}
        </p>
      </div>
    </section>
  );
}
