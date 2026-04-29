"use client";

import { useEffect, useState } from "react";
import { useCursor, type CursorMode } from "./CursorContext";

// ─── mode definitions ─────────────────────────────────────────────────────────

interface ModeItem {
  id:    CursorMode;
  label: string;
  Icon:  React.FC<{ active: boolean }>;
}

const MODES: ModeItem[] = [
  {
    id:    "gradient",
    label: "Gradient",
    Icon:  ({ active }) => (
      <span
        className="block h-[20px] w-[20px] rounded-full transition-shadow duration-200"
        style={{
          background: "linear-gradient(135deg, #c084fc 0%, #f472b6 50%, #60a5fa 100%)",
          boxShadow: active ? "0 0 12px rgba(192,132,252,0.65)" : "none",
        }}
      />
    ),
  },
  {
    id:    "glitter",
    label: "Glitter",
    Icon:  ({ active }) => (
      <span
        className="text-[20px] leading-none transition-all duration-200"
        style={{
          color:      "#FFD700",
          textShadow: active
            ? "0 0 8px #FFD700, 0 0 20px #FFD70080"
            : "0 0 6px #FFD70060",
        }}
      >
        ✦
      </span>
    ),
  },
  {
    id:    "flower",
    label: "Flower",
    Icon:  () => (
      <span className="text-[20px] leading-none">🌸</span>
    ),
  },
  {
    id:    "butterfly",
    label: "Butterfly",
    Icon:  () => (
      <span className="text-[20px] leading-none">🦋</span>
    ),
  },
];

// ─── component ────────────────────────────────────────────────────────────────

export default function CursorModeBar() {
  const { mode, setMode } = useCursor();
  const [hasMouse, setHasMouse] = useState(false);
  const [mounted,  setMounted]  = useState(false);

  useEffect(() => {
    setMounted(true);
    setHasMouse(!window.matchMedia("(hover: none)").matches);
  }, []);

  if (!mounted || !hasMouse) return null;

  return (
    <div
      role="toolbar"
      aria-label="Cursor trail style"
      className="fixed bottom-8 left-1/2 z-[9997] -translate-x-1/2"
    >
      {/* Ambient glow — decorative */}
      <div
        className="absolute inset-0 -z-10 rounded-3xl opacity-35 blur-2xl"
        style={{ background: "linear-gradient(135deg, #c084fc50, #f472b650, #60a5fa50)" }}
      />

      {/* Glass bar */}
      <div
        className="flex items-stretch gap-1 rounded-3xl p-1.5 backdrop-blur-2xl"
        style={{
          background: "rgba(255, 255, 255, 0.12)",
          border: "1px solid rgba(255, 255, 255, 0.28)",
          boxShadow: "0 8px 32px rgba(0,0,0,0.10), inset 0 1px 0 rgba(255,255,255,0.20)",
        }}
      >
        {MODES.map(({ id, label, Icon }) => {
          const active = mode === id;
          return (
            <button
              key={id}
              onClick={() => setMode(id)}
              aria-pressed={active}
              aria-label={`Switch to ${label} trail`}
              className={[
                "group relative flex flex-col items-center gap-2 rounded-2xl px-5 py-3",
                "transition-all duration-200 ease-out",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40",
                active ? "hover:opacity-95" : "hover:bg-white/20",
              ].join(" ")}
              style={
                active
                  ? {
                      background: "rgba(255, 255, 255, 0.72)",
                      boxShadow: "0 2px 12px rgba(0,0,0,0.07), inset 0 1px 0 rgba(255,255,255,0.90)",
                    }
                  : undefined
              }
            >
              {/* Icon */}
              <div className="flex h-[20px] w-[20px] items-center justify-center">
                <Icon active={active} />
              </div>

              {/* Label */}
              <span
                className={[
                  "select-none font-mono text-[16px] uppercase tracking-[0.06em]",
                  "transition-colors duration-200",
                  active
                    ? "text-ink"
                    : "text-ink/45 group-hover:text-ink/70",
                ].join(" ")}
              >
                {label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
