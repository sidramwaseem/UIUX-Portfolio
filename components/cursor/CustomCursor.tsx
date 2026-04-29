"use client";

import { useEffect, useRef, useState } from "react";
import { useCursor, type CursorMode } from "./CursorContext";

// ─── types ────────────────────────────────────────────────────────────────────

interface Particle {
  el:       HTMLElement;
  x:        number;
  y:        number;
  vx:       number;
  vy:       number;
  born:     number;
  lifetime: number;
  rotation: number;
  rotSpeed: number;
  gravity:  number;
}

// ─── per-mode config ──────────────────────────────────────────────────────────

const FLOWERS        = ["🌸", "🌺", "🌼", "🌻"];
const GLITTER_COLORS = ["#FFD700", "#FFF9C4", "#FFFFFF", "#E8D5FF", "#C7F0FF"];
const GRAD_COLORS    = ["#c084fc", "#f472b6", "#60a5fa", "#a78bfa", "#fb923c"];

const CFG: Record<CursorMode, {
  max:      number;
  lifetime: number;
  dist:     number;
  gravity:  number;
  spread:   number;
}> = {
  gradient:  { max: 20, lifetime: 700,  dist: 14, gravity:  0.018, spread: 1.0 },
  glitter:   { max: 26, lifetime: 800,  dist: 10, gravity: -0.022, spread: 1.8 },
  flower:    { max: 14, lifetime: 1200, dist: 18, gravity:  0.028, spread: 1.4 },
  butterfly: { max: 10, lifetime: 1500, dist: 24, gravity: -0.010, spread: 0.7 },
};

// ─── particle factory ─────────────────────────────────────────────────────────

function buildParticle(mode: CursorMode, x: number, y: number): Particle {
  const cfg = CFG[mode];
  const el  = document.createElement("div");

  el.style.cssText =
    "position:absolute;top:0;left:0;pointer-events:none;" +
    "will-change:transform,opacity;line-height:1;user-select:none;";

  switch (mode) {
    case "gradient": {
      const col  = GRAD_COLORS[Math.floor(Math.random() * GRAD_COLORS.length)];
      const size = 14 + Math.random() * 18;
      el.style.width        = `${size}px`;
      el.style.height       = `${size}px`;
      el.style.borderRadius = "50%";
      el.style.background   = `radial-gradient(circle at 38% 38%, ${col}cc, ${col}00)`;
      el.style.filter       = `blur(${(size * 0.28).toFixed(1)}px)`;
      break;
    }
    case "glitter": {
      const col  = GLITTER_COLORS[Math.floor(Math.random() * GLITTER_COLORS.length)];
      const size = 8 + Math.random() * 9;
      el.textContent      = "✦";
      el.style.fontSize   = `${size}px`;
      el.style.color      = col;
      el.style.textShadow = `0 0 6px ${col}, 0 0 14px ${col}80`;
      break;
    }
    case "flower": {
      const size = 14 + Math.random() * 10;
      el.textContent    = FLOWERS[Math.floor(Math.random() * FLOWERS.length)];
      el.style.fontSize = `${size}px`;
      break;
    }
    case "butterfly": {
      const size = 16 + Math.random() * 12;
      el.textContent    = "🦋";
      el.style.fontSize = `${size}px`;
      break;
    }
  }

  const angle = Math.random() * Math.PI * 2;
  const speed = cfg.spread * (0.5 + Math.random() * 0.8);

  return {
    el, x, y,
    vx:       Math.cos(angle) * speed,
    vy:       Math.sin(angle) * speed - cfg.spread * 0.5,
    born:     performance.now(),
    lifetime: cfg.lifetime * (0.8 + Math.random() * 0.4),
    rotation: Math.random() * 360,
    rotSpeed: (Math.random() - 0.5) * (mode === "butterfly" ? 2 : 7),
    gravity:  cfg.gravity,
  };
}

// ─── component ────────────────────────────────────────────────────────────────

export default function CustomCursor() {
  const { mode }              = useCursor();
  const [visible,  setVisible]  = useState(false);
  const [hasMouse, setHasMouse] = useState(false);

  const dotRef   = useRef<HTMLDivElement>(null);
  const ringRef  = useRef<HTMLDivElement>(null);
  const trailRef = useRef<HTMLDivElement>(null);
  const blobRef  = useRef<HTMLDivElement>(null);

  const modeRef    = useRef<CursorMode>(mode);
  const mouse      = useRef({ x: -200, y: -200 });
  const ringPos    = useRef({ x: -200, y: -200 });
  const blobPos    = useRef({ x: -500, y: -500 });
  const ringScale  = useRef(1);
  const pool       = useRef<Particle[]>([]);
  const lastSpawn  = useRef({ x: 0, y: 0 });
  const rafId      = useRef(0);
  const visRef     = useRef(false);
  const hoverRef   = useRef(false);
  const reducedRef = useRef(false);

  useEffect(() => {
    setHasMouse(!window.matchMedia("(hover: none)").matches);
    reducedRef.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }, []);

  // Sync modeRef, flush stale particles, and snap blob to cursor on mode change
  useEffect(() => {
    modeRef.current = mode;
    const trail = trailRef.current;
    pool.current.forEach(p => {
      if (trail?.contains(p.el)) trail.removeChild(p.el);
    });
    pool.current = [];
    blobPos.current = { x: mouse.current.x, y: mouse.current.y };
  }, [mode]);

  useEffect(() => {
    if (!hasMouse) return;

    document.body.style.cursor = "none";

    const dot   = dotRef.current!;
    const ring  = ringRef.current!;
    const trail = trailRef.current!;

    const show = () => {
      if (!visRef.current) { visRef.current = true; setVisible(true); }
    };
    const hide = () => { visRef.current = false; setVisible(false); };

    const onOver = (e: MouseEvent) => {
      hoverRef.current = !!(e.target as HTMLElement)
        .closest("a, button, [role='button'], label, input, select, textarea");
    };

    const onMove = (e: MouseEvent) => {
      mouse.current = { x: e.clientX, y: e.clientY };
      show();

      if (reducedRef.current) return;

      // Gradient mode uses a blob, not particles
      if (modeRef.current === "gradient") return;

      const cfg = CFG[modeRef.current];
      const dx  = e.clientX - lastSpawn.current.x;
      const dy  = e.clientY - lastSpawn.current.y;
      if (dx * dx + dy * dy < cfg.dist * cfg.dist) return;
      lastSpawn.current = { x: e.clientX, y: e.clientY };

      if (pool.current.length >= cfg.max) {
        const out = pool.current.shift()!;
        if (trail.contains(out.el)) trail.removeChild(out.el);
      }

      const p = buildParticle(modeRef.current, e.clientX, e.clientY);
      trail.appendChild(p.el);
      pool.current.push(p);
    };

    document.addEventListener("mousemove",  onMove,  { passive: true });
    document.addEventListener("mouseleave", hide);
    document.addEventListener("mouseenter", show);
    document.addEventListener("mouseover",  onOver,  { passive: true });

    const loop = () => {
      const now       = performance.now();
      const { x: mx, y: my } = mouse.current;

      dot.style.transform = `translate(${mx - 4}px,${my - 4}px)`;

      const rp = ringPos.current;
      rp.x += (mx - rp.x) * 0.1;
      rp.y += (my - rp.y) * 0.1;
      ringScale.current += ((hoverRef.current ? 1.7 : 1) - ringScale.current) * 0.14;
      ring.style.transform =
        `translate(${rp.x - 16}px,${rp.y - 16}px) scale(${ringScale.current})`;

      // Gradient blob — lazily follows mouse, always tracked, opacity via React state
      const blob = blobRef.current;
      if (blob) {
        const bp = blobPos.current;
        bp.x += (mx - bp.x) * 0.055;
        bp.y += (my - bp.y) * 0.055;
        blob.style.transform = `translate(${bp.x - 250}px,${bp.y - 250}px)`;
      }

      const alive: Particle[] = [];
      for (const p of pool.current) {
        const t = (now - p.born) / p.lifetime;
        if (t >= 1) {
          if (trail.contains(p.el)) trail.removeChild(p.el);
          continue;
        }
        p.x  += p.vx;
        p.y  += p.vy;
        p.vy += p.gravity;
        p.rotation += p.rotSpeed;

        p.el.style.transform =
          `translate(${p.x}px,${p.y}px) translate(-50%,-50%) ` +
          `rotate(${p.rotation}deg) scale(${1 - t * 0.2})`;
        p.el.style.opacity = String(Math.pow(1 - t, 1.5));
        alive.push(p);
      }
      pool.current = alive;

      rafId.current = requestAnimationFrame(loop);
    };

    rafId.current = requestAnimationFrame(loop);

    return () => {
      document.body.style.cursor = "";
      document.removeEventListener("mousemove",  onMove);
      document.removeEventListener("mouseleave", hide);
      document.removeEventListener("mouseenter", show);
      document.removeEventListener("mouseover",  onOver);
      cancelAnimationFrame(rafId.current);
      pool.current.forEach(p => {
        if (trail.contains(p.el)) trail.removeChild(p.el);
      });
      pool.current = [];
    };
  }, [hasMouse]);

  if (!hasMouse) return null;

  return (
    <>
      <div
        ref={dotRef}
        className="pointer-events-none fixed left-0 top-0 z-[9999] h-2 w-2 rounded-full bg-ink will-change-transform"
        style={{ opacity: visible ? 1 : 0, transition: "opacity 200ms ease" }}
      />
      <div
        ref={ringRef}
        className="pointer-events-none fixed left-0 top-0 z-[9998] h-8 w-8 rounded-full border border-ink/40 will-change-transform"
        style={{ opacity: visible ? 1 : 0, transition: "opacity 200ms ease" }}
      />
      <div
        ref={trailRef}
        className="pointer-events-none fixed inset-0 z-[9990] overflow-hidden"
      />
      {/* Gradient blob — large ambient orb, only visible in gradient mode */}
      <div
        ref={blobRef}
        className="pointer-events-none fixed left-0 top-0 z-[9989] h-[500px] w-[500px] rounded-full will-change-transform"
        style={{
          background:
            "radial-gradient(circle at 40% 38%, rgba(255,107,107,0.28) 0%, rgba(255,120,100,0.14) 38%, rgba(255,150,120,0.06) 60%, transparent 72%)",
          filter: "blur(72px)",
          opacity: visible && mode === "gradient" ? 1 : 0,
          transition: "opacity 500ms ease",
        }}
      />
    </>
  );
}
