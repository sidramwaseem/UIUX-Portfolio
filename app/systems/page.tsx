import { caseStudies } from "@/lib/case-studies";
import CaseStudyCard from "@/components/systems/CaseStudyCard";

export default function SystemsPage() {
  return (
    <main className="page-container pt-24 pb-24 md:pt-28 lg:pt-32">
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
          <CaseStudyCard key={study.slug} study={study} />
        ))}
      </div>
    </main>
  );
}
