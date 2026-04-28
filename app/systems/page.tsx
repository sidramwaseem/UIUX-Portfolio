import Link from "next/link";
import { caseStudies } from "@/lib/case-studies";

export default function SystemsPage() {
  return (
    <main className="mx-auto max-w-page px-6 pb-20 pt-28 md:px-12 md:pt-32 lg:px-20">
      <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.14em] text-ink-disabled">
        UX &amp; product design
      </p>
      <h1 className="font-serif text-[48px] leading-[1.04] text-ink md:text-[64px]">
        Case Studies
      </h1>
      <p className="mt-4 max-w-[44ch] text-[15px] leading-[1.65] text-ink-secondary">
        In-depth process documentation — from problem framing through to shipped solutions.
      </p>

      <div className="mt-16 divide-y divide-[#D9D7D2]">
        {caseStudies.map((study) => (
          <Link
            key={study.slug}
            href={`/systems/${study.slug}`}
            className="group flex flex-col gap-3 py-10 transition-opacity duration-150 hover:opacity-70 md:flex-row md:items-start md:justify-between md:gap-12"
          >
            <div className="flex-1">
              <div className="mb-3 flex flex-wrap gap-2">
                {study.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-[#D9D7D2] px-3 py-0.5 font-mono text-[10px] uppercase tracking-[0.08em] text-ink-secondary"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <h2 className="font-serif text-[24px] leading-[1.2] text-ink md:text-[28px]">
                {study.title}
              </h2>
              <p className="mt-2 max-w-[52ch] text-[14px] leading-[1.65] text-ink-secondary">
                {study.subtitle}
              </p>
            </div>

            <div className="shrink-0 text-left md:text-right">
              <p className="font-mono text-[11px] uppercase tracking-[0.1em] text-ink-disabled">
                {study.year}
              </p>
              <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.1em] text-ink-disabled">
                {study.readingTime}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
