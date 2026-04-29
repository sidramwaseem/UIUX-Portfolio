import Link from "next/link";
import type { CaseStudy } from "@/lib/types";

interface CaseStudyHeaderProps {
  study: Pick<
    CaseStudy,
    "title" | "subtitle" | "tags" | "year" | "duration" | "role" | "client" | "readingTime"
  >;
}

export default function CaseStudyHeader({ study }: CaseStudyHeaderProps) {
  const { title, subtitle, tags, year, duration, role, client, readingTime } = study;

  return (
    <header className="mb-16 md:mb-20">
      {/* Back link */}
      <Link
        href="/systems"
        className="mb-10 inline-flex items-center gap-2 font-mono text-[13px] uppercase tracking-[0.1em] text-ink-disabled transition-colors duration-150 hover:text-ink-secondary"
      >
        <span className="inline-block transition-transform duration-150 group-hover:-translate-x-0.5">
          ←
        </span>
        Case Studies
      </Link>

      {/* Tags */}
      <div className="mb-6 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-[#D9D7D2] px-3 py-1 font-mono text-[12px] uppercase tracking-[0.08em] text-ink-secondary"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Title */}
      <h1 className="font-serif text-[40px] leading-[1.07] text-ink md:text-[52px] lg:text-[60px]">
        {title}
      </h1>

      {/* Subtitle */}
      <p className="mt-5 max-w-[52ch] text-[17px] leading-[1.65] text-ink-secondary md:text-[18px]">
        {subtitle}
      </p>

      {/* Divider */}
      <div className="my-10 h-px bg-[#D9D7D2]" />

      {/* Meta row */}
      <dl className="grid grid-cols-2 gap-6 sm:grid-cols-4">
        {[
          { label: "Year", value: year },
          { label: "Duration", value: duration },
          { label: "Role", value: role },
          { label: "Client", value: client },
        ].map(({ label, value }) => (
          <div key={label}>
            <dt className="mb-1 font-mono text-[12px] uppercase tracking-[0.12em] text-ink-disabled">
              {label}
            </dt>
            <dd className="text-[16px] text-ink">{value}</dd>
          </div>
        ))}
      </dl>

      {/* Reading time */}
      <p className="mt-6 font-mono text-[13px] tracking-wide text-ink-disabled">
        {readingTime}
      </p>
    </header>
  );
}
