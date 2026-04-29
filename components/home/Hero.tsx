"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

const ROLES = ["UI/UX Designer", "Product Designer", "UI Developer", "Vibe Coder"] as const;

const HOLD_MS = 2800;

export default function Hero() {
  const [index, setIndex] = useState(0);
  const reduced = useReducedMotion();

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % ROLES.length);
    }, HOLD_MS);
    return () => clearInterval(id);
  }, []);

  return (
    <section
      className="relative flex h-screen w-full flex-col justify-end pb-12 md:pb-16 lg:pb-20"
      style={{
        background:
          "linear-gradient(to right, #FFF6EE 0%, rgba(255,107,107,0.13) 100%)",
      }}
    >
      <div className="page-container">

        {/* Name + animated role — bottom-left anchor */}
        <div>
          <h1 className="font-serif text-[36px] leading-[1.05] tracking-[-0.02em] text-ink sm:text-[48px] md:text-[64px]">
            Sidra Waseem
          </h1>

          {/* Clip window — only one role visible at a time */}
          <div
            className="relative mt-1 h-[40px] overflow-hidden sm:h-[54px] md:h-[68px]"
            aria-live="polite"
            aria-atomic="true"
          >
            <AnimatePresence initial={false}>
              <motion.span
                key={index}
                className="absolute font-serif text-[36px] leading-[1.05] tracking-[-0.02em] whitespace-nowrap sm:text-[48px] md:text-[64px]"
                style={{ color: "#FF6B6B" }}
                initial={reduced ? false : { y: "100%", opacity: 0 }}
                animate={{ y: "0%", opacity: 1 }}
                exit={reduced ? undefined : { y: "-100%", opacity: 0 }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              >
                {ROLES[index]}
              </motion.span>
            </AnimatePresence>
          </div>

          <p className="mt-6 max-w-sm text-[16px] leading-relaxed text-ink-secondary md:text-[18px] lg:text-[20px]">
            I design systems that feel inevitable —<br />
            usually after rethinking them three times.
          </p>
        </div>

        {/* Whimsical one-liner — bottom-right, for compositional balance */}
        <p className="absolute bottom-12 right-6 text-right text-[14px] leading-relaxed text-ink-secondary sm:text-[16px] md:bottom-16 md:right-12 md:text-[18px] lg:bottom-20 lg:right-20 lg:text-[20px]">
          Designing things people use.<br />
          Occasionally on purpose.
        </p>

      </div>
    </section>
  );
}
