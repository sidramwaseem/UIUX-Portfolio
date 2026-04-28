"use client";

import { motion, useReducedMotion } from "framer-motion";

interface SectionProps {
  id: string;
  index: number;
  heading: string;
  children: React.ReactNode;
}

export default function Section({ id, index, heading, children }: SectionProps) {
  const reduced = useReducedMotion();

  return (
    <motion.section
      id={id}
      className="scroll-mt-28 border-t border-[#D9D7D2] pt-14 md:pt-16"
      initial={reduced ? false : { opacity: 0, y: 18 }}
      whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
    >
      {/* Eyebrow */}
      <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.14em] text-ink-disabled">
        {String(index).padStart(2, "0")} — {heading}
      </p>

      {/* Section heading */}
      <h2 className="mb-8 font-serif text-[28px] leading-[1.15] text-ink md:text-[32px]">
        {heading}
      </h2>

      {/* Content */}
      <div className="space-y-5 text-[16px] leading-[1.75] text-ink-secondary md:text-[17px]">
        {children}
      </div>
    </motion.section>
  );
}

/* Reusable prose paragraph — keeps parent clean */
export function Prose({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[16px] leading-[1.75] text-ink-secondary md:text-[17px]">
      {children}
    </p>
  );
}

/* Pull quote — highlight a key insight or user quote */
export function Callout({
  children,
  attribution,
}: {
  children: React.ReactNode;
  attribution?: string;
}) {
  return (
    <figure className="my-8 border-l-2 border-accent pl-6">
      <blockquote className="text-[17px] italic leading-[1.65] text-ink md:text-[18px]">
        {children}
      </blockquote>
      {attribution && (
        <figcaption className="mt-3 font-mono text-[11px] uppercase tracking-[0.08em] text-ink-disabled">
          {attribution}
        </figcaption>
      )}
    </figure>
  );
}
