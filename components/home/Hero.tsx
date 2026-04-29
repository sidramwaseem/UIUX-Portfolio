"use client";

import { useEffect, useState } from "react";

const ROLES = ["UI/UX Designer", "Product Designer", "UI Developer", "Vibe Coder"] as const;

const HOLD_MS  = 3000;
const EXIT_MS  = 400;
const ENTER_MS = 540;

const exitStyle: React.CSSProperties = {
  opacity: 0,
  transform: "translateY(-6px)",
  transition: `opacity ${EXIT_MS}ms ease, transform ${EXIT_MS}ms ease`,
};

const enterStyle: React.CSSProperties = {
  animation: `roleIn ${ENTER_MS}ms cubic-bezier(0.22, 1, 0.36, 1) both`,
};

export default function Hero() {
  const [index, setIndex]       = useState(0);
  const [isExiting, setExiting] = useState(false);

  useEffect(() => {
    const id = setInterval(() => {
      setExiting(true);
      setTimeout(() => {
        setIndex((i) => (i + 1) % ROLES.length);
        setExiting(false);
      }, EXIT_MS);
    }, HOLD_MS + EXIT_MS);

    return () => clearInterval(id);
  }, []);

  return (
    <section
      className="relative flex h-screen w-full flex-col justify-end px-6 pb-12 md:px-12 md:pb-16 lg:px-20 lg:pb-20"
      style={{
        background:
          "linear-gradient(to right, rgba(255,107,107,0.22) 0%, #FFF6EE 55%, rgba(255,107,107,0.12) 100%)",
      }}
    >

      {/* Name + animated role — bottom-left anchor */}
      <div>
        <h1 className="font-serif text-[50px] leading-[1.05] tracking-[-0.02em] text-ink">
          Sidra Waseem
        </h1>

        {/* Designation — matches name size, animates in brand primary */}
        <div
          className="mt-1 h-[55px] overflow-hidden"
          aria-live="polite"
          aria-atomic="true"
        >
          <span
            key={index}
            className="block font-serif text-[50px] leading-[1.05] tracking-[-0.02em] whitespace-nowrap"
            style={{ color: "#FF6B6B", ...(isExiting ? exitStyle : enterStyle) }}
          >
            {ROLES[index]}
          </span>
        </div>

        <p className="mt-6 max-w-sm text-[16px] leading-relaxed text-ink-secondary">
          I design systems that feel inevitable —<br />
          usually after rethinking them three times.
        </p>
      </div>

      {/* Whimsical one-liner — bottom-right, for compositional balance */}
      <p className="absolute bottom-12 right-6 text-right font-mono text-[9px] uppercase leading-[1.8] tracking-[0.16em] text-ink-disabled md:bottom-16 md:right-12 lg:bottom-20 lg:right-20">
        Designing things people use.<br />
        Occasionally on purpose.
      </p>
    </section>
  );
}
