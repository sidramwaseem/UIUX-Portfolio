"use client";

import { useState, useMemo } from "react";
import { shots, ALL_CATEGORIES } from "@/lib/shots";
import type { ShotCategory } from "@/lib/shots";
import ShotCard from "./ShotCard";

type Filter = ShotCategory | "All";

export default function ShotsGrid() {
  const [active, setActive] = useState<Filter>("All");

  const filtered = useMemo(
    () => (active === "All" ? shots : shots.filter((s) => s.category === active)),
    [active]
  );

  const countFor = (cat: ShotCategory) =>
    shots.filter((s) => s.category === cat).length;

  return (
    <div>
      {/* Filter pills */}
      <div className="mb-10 flex flex-wrap gap-2">
        <FilterPill
          label="All"
          count={shots.length}
          active={active === "All"}
          onClick={() => setActive("All")}
        />
        {ALL_CATEGORIES.map((cat) => (
          <FilterPill
            key={cat}
            label={cat}
            count={countFor(cat)}
            active={active === cat}
            onClick={() => setActive(cat)}
          />
        ))}
      </div>

      {/* Masonry grid — CSS columns, no JS layout engine needed */}
      <div
        key={active}
        className="columns-1 gap-4 sm:columns-2 lg:columns-3 [column-fill:_balance]"
      >
        {filtered.map((shot) => (
          <div key={shot.id} className="mb-4 break-inside-avoid">
            <ShotCard shot={shot} />
          </div>
        ))}
      </div>

      {/* Empty state */}
      {filtered.length === 0 && (
        <p className="py-20 text-center font-mono text-[13px] uppercase tracking-[0.1em] text-ink-disabled">
          No shots in this category yet
        </p>
      )}
    </div>
  );
}

interface FilterPillProps {
  label: string;
  count: number;
  active: boolean;
  onClick: () => void;
}

function FilterPill({ label, count, active, onClick }: FilterPillProps) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-2 rounded-full border px-4 py-1.5 font-mono text-[12px] uppercase tracking-[0.08em] transition-all duration-150 ${
        active
          ? "border-ink bg-ink text-white"
          : "border-[#D9D7D2] text-ink-secondary hover:border-ink hover:text-ink"
      }`}
    >
      {label}
      <span
        className={`tabular-nums transition-colors duration-150 ${
          active ? "text-white/60" : "text-ink-disabled"
        }`}
      >
        {count}
      </span>
    </button>
  );
}
