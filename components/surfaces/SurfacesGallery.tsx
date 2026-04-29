"use client";

import { surfaces } from "@/lib/surfaces";
import SurfaceCard from "./SurfaceCard";

interface SurfacesGalleryProps {
  onLock: () => void;
}

export default function SurfacesGallery({ onLock }: SurfacesGalleryProps) {
  return (
    <div className="animate-fade-in">
      <header className="mb-12">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="mb-4 font-mono text-[12px] uppercase tracking-[0.14em] text-ink-disabled">
              Marketing &amp; brand design
            </p>
            <h1 className="font-serif text-[48px] leading-[1.04] text-ink md:text-[64px]">
              Social Media Work
            </h1>
            <p className="mt-4 max-w-[40ch] text-[16px] leading-[1.65] text-ink-secondary">
              LinkedIn carousels, infographics, and brand posts — social media design from my time at Enterprise64.
            </p>
            <p className="mt-3 font-mono text-[12px] tracking-wide text-ink-disabled">
              {surfaces.length} posts · Hover a carousel to preview slides
            </p>
          </div>

          <button
            onClick={onLock}
            title="Lock this section"
            className="mt-1 flex shrink-0 items-center gap-2 rounded-full border border-[#D9D7D2] px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.1em] text-ink-disabled transition-all duration-150 hover:border-ink hover:text-ink-secondary"
          >
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
              <rect x="2" y="5.5" width="8" height="5.5" rx="1.5" stroke="currentColor" strokeWidth="1.25" />
              <path d="M4 5.5V3.5a2 2 0 0 1 4 0v2" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" />
            </svg>
            Lock
          </button>
        </div>

        <div className="mt-10 h-px bg-[#D9D7D2]" />
      </header>

      <div className="grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
        {surfaces.map((surface) => (
          <SurfaceCard key={surface.id} surface={surface} />
        ))}
      </div>
    </div>
  );
}
