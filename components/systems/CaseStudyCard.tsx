"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  motion,
  useMotionValue,
  useSpring,
  AnimatePresence,
  useReducedMotion,
} from "framer-motion";
import type { CaseStudy } from "@/lib/types";

type Props = {
  study: Pick<
    CaseStudy,
    "slug" | "title" | "subtitle" | "tags" | "year" | "readingTime" | "previewImage"
  >;
};

export default function CaseStudyCard({ study }: Props) {
  const { slug, title, subtitle, tags, year, readingTime, previewImage } = study;
  const [hovered, setHovered] = useState(false);
  const reduced = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);

  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const x = useSpring(rawX, { stiffness: 500, damping: 40, mass: 0.4 });
  const y = useSpring(rawY, { stiffness: 500, damping: 40, mass: 0.4 });

  function onMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    rawX.set(e.clientX - rect.left + 20);
    rawY.set(e.clientY - rect.top - 90);
  }

  return (
    <div
      ref={ref}
      className="relative"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onMouseMove={onMouseMove}
    >
      <Link
        href={`/systems/${slug}`}
        className="flex flex-col gap-3 py-10 transition-opacity duration-200 hover:opacity-70 md:flex-row md:items-start md:justify-between md:gap-12"
      >
        <div className="flex-1">
          <div className="mb-3 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-[#D9D7D2] px-3 py-0.5 font-mono text-[10px] uppercase tracking-[0.08em] text-ink-secondary"
              >
                {tag}
              </span>
            ))}
          </div>
          <h2 className="font-serif text-[24px] leading-[1.2] text-ink md:text-[28px]">
            {title}
          </h2>
          <p className="mt-2 max-w-[52ch] text-[16px] leading-[1.65] text-ink-secondary">
            {subtitle}
          </p>
        </div>

        <div className="shrink-0 text-left md:text-right">
          <p className="font-mono text-[11px] uppercase tracking-[0.1em] text-ink-disabled">
            {year}
          </p>
          <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.1em] text-ink-disabled">
            {readingTime}
          </p>
        </div>
      </Link>

      {/* Cursor-following preview — desktop only */}
      {!reduced && previewImage && (
        <AnimatePresence>
          {hovered && (
            <motion.div
              className="pointer-events-none absolute left-0 top-0 z-20 hidden w-[220px] md:block"
              style={{ x, y }}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.18, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <div className="overflow-hidden rounded-xl shadow-[0_8px_28px_rgba(0,0,0,0.11)]">
                <Image
                  src={previewImage}
                  alt={title}
                  width={440}
                  height={275}
                  className="h-auto w-full"
                />
              </div>
              <p className="mt-2 line-clamp-1 font-mono text-[10px] uppercase tracking-[0.1em] text-ink-disabled">
                {subtitle}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      )}
    </div>
  );
}
