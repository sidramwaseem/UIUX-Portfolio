"use client";

import { useEffect, useState } from "react";

const TOC_ITEMS = [
  { id: "overview", label: "Overview" },
  { id: "problem", label: "Problem" },
  { id: "my-role", label: "My Role" },
  { id: "process", label: "Process" },
  { id: "key-decisions", label: "Key Decisions" },
  { id: "outcome", label: "Outcome" },
];

export default function TableOfContents() {
  const [active, setActive] = useState("overview");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        // Find the topmost intersecting section
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible.length > 0) {
          setActive(visible[0].target.id);
        }
      },
      { rootMargin: "-15% 0% -70% 0%", threshold: 0 }
    );

    TOC_ITEMS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <aside className="sticky top-28 hidden w-44 shrink-0 lg:block">
      <p className="mb-5 font-mono text-[10px] uppercase tracking-[0.14em] text-ink-disabled">
        Contents
      </p>
      <nav>
        <ul className="space-y-3">
          {TOC_ITEMS.map(({ id, label }) => {
            const isActive = active === id;
            return (
              <li key={id}>
                <a
                  href={`#${id}`}
                  className={`flex items-center gap-3 text-[12px] uppercase tracking-[0.07em] transition-colors duration-150 ${
                    isActive
                      ? "text-ink"
                      : "text-ink-disabled hover:text-ink-secondary"
                  }`}
                >
                  <span
                    className={`h-px shrink-0 bg-current transition-all duration-200 ${
                      isActive ? "w-5 !bg-accent" : "w-3"
                    }`}
                  />
                  {label}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
}
