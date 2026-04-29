import type { Metadata } from "next";
import ShotsGrid from "@/components/shots/ShotsGrid";

export const metadata: Metadata = {
  title: "Shots — Sidra Waseem",
  description: "Visual explorations, UI experiments, and design studies.",
};

export default function ShotsPage() {
  return (
    <main className="page-container pt-24 pb-24 md:pt-28 lg:pt-32">

      {/* Header */}
      <header className="mb-14">
        <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.14em] text-ink-disabled">
          Visual explorations
        </p>
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <h1 className="font-serif text-[48px] leading-[1.04] text-ink md:text-[64px]">
            Shots
          </h1>
          <p className="max-w-[36ch] text-[15px] leading-[1.65] text-ink-secondary sm:text-right">
            Quick visual explorations — UI studies, type experiments,
            brand directions, and work-in-progress artifacts.
          </p>
        </div>
        <div className="mt-10 h-px bg-[#D9D7D2]" />
      </header>

      {/* Grid with filter */}
      <ShotsGrid />

    </main>
  );
}
