import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getCaseStudy, getAllCaseStudySlugs } from "@/lib/case-studies";
import ScrollProgress from "@/components/case-study/ScrollProgress";
import TableOfContents from "@/components/case-study/TableOfContents";
import CaseStudyHeader from "@/components/case-study/CaseStudyHeader";
import Section, { Prose, Callout } from "@/components/case-study/Section";
import ProcessTimeline from "@/components/case-study/ProcessTimeline";
import KeyDecisionCard from "@/components/case-study/KeyDecisionCard";
import OutcomeGrid from "@/components/case-study/OutcomeGrid";
import ImagePlaceholder from "@/components/case-study/ImagePlaceholder";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllCaseStudySlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) return {};
  return {
    title: `${study.title} — Sidra Waseem`,
    description: study.subtitle,
  };
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const study = getCaseStudy(slug);

  if (!study) notFound();

  const {
    problem,
    myRole,
    process,
    keyDecisions,
    outcome,
    overview,
    overviewImages,
    problemImages,
    constraints,
    constraintImages,
    solutionOverview,
    solutionImages,
    outcomeImages,
  } = study;

  const optionalOffset = (constraints ? 1 : 0) + (solutionOverview ? 1 : 0);

  return (
    <>
      <ScrollProgress />

      <main className="animate-fade-in page-container pt-24 pb-24 md:pt-28 lg:pt-32">
        {/* Header — full width */}
        <CaseStudyHeader study={study} />

        {/* Two-column: TOC sidebar + content */}
        <div className="flex gap-16 lg:gap-20">
          <TableOfContents />

          {/* Content column */}
          <div className="min-w-0 flex-1 space-y-16 md:space-y-20">

            {/* 01 — Overview */}
            <Section id="overview" index={1} heading="Overview">
              <Prose>{overview}</Prose>
              {overviewImages?.map((img) => (
                <ImagePlaceholder key={img.slot} {...img} />
              ))}
            </Section>

            {/* 02 — Problem */}
            <Section id="problem" index={2} heading="Problem">
              <Prose>{problem.context}</Prose>
              {problem.userInsight && (
                <Callout attribution="User research — onboarding call recordings">
                  {problem.userInsight}
                </Callout>
              )}
              <div className="rounded-xl border border-[#D9D7D2] bg-white px-7 py-6">
                <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.12em] text-ink-disabled">
                  Problem statement
                </p>
                <p className="text-[16px] leading-[1.65] text-ink">{problem.statement}</p>
              </div>
              {problemImages?.map((img) => (
                <ImagePlaceholder key={img.slot} {...img} />
              ))}
            </Section>

            {/* 03 — My Role */}
            <Section id="my-role" index={3} heading="My Role">
              <Prose>{myRole.description}</Prose>
              <ul className="mt-2 space-y-3">
                {myRole.responsibilities.map((r) => (
                  <li key={r} className="flex items-start gap-3 text-[15px] leading-[1.6] text-ink-secondary">
                    <span className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-[#FF6B6B]" />
                    {r}
                  </li>
                ))}
              </ul>
            </Section>

            {/* 04 — Constraints (optional) */}
            {constraints && constraints.length > 0 && (
              <Section id="constraints" index={4} heading="Constraints">
                <ul className="mt-2 space-y-3">
                  {constraints.map((c) => (
                    <li key={c} className="flex items-start gap-3 text-[15px] leading-[1.6] text-ink-secondary">
                      <span className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-[#FF6B6B]" />
                      {c}
                    </li>
                  ))}
                </ul>
                {constraintImages?.map((img) => (
                  <ImagePlaceholder key={img.slot} {...img} />
                ))}
              </Section>
            )}

            {/* 05 — Solution (optional) */}
            {solutionOverview && (
              <Section id="solution" index={constraints ? 5 : 4} heading="Solution">
                <Prose>{solutionOverview}</Prose>
                {solutionImages?.map((img) => (
                  <ImagePlaceholder key={img.slot} {...img} />
                ))}
              </Section>
            )}

            {/* Process — index shifts based on optional sections */}
            <Section
              id="process"
              index={4 + optionalOffset}
              heading="Process"
            >
              <Prose>
                Each decision was grounded in the constraints of real-time warehouse
                operations — where errors are costly and operators need clarity above all else.
              </Prose>
              <ProcessTimeline steps={process} />
            </Section>

            {/* Key Decisions */}
            <Section
              id="key-decisions"
              index={5 + optionalOffset}
              heading="Key Decisions"
            >
              <Prose>
                These are the moments where I had to weigh competing options,
                navigate constraints, and commit to a direction. They shaped
                the final experience more than any single screen.
              </Prose>
              <div className="mt-2 space-y-5">
                {keyDecisions.map((decision, i) => (
                  <KeyDecisionCard key={i} decision={decision} index={i + 1} />
                ))}
              </div>
            </Section>

            {/* Outcome */}
            <Section
              id="outcome"
              index={6 + optionalOffset}
              heading="Outcome"
            >
              <Prose>{outcome.summary}</Prose>
              {outcome.metrics && <OutcomeGrid metrics={outcome.metrics} />}
              {outcomeImages?.map((img) => (
                <ImagePlaceholder key={img.slot} {...img} />
              ))}
              {outcome.reflection && (
                <div className="mt-10">
                  <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.12em] text-ink-disabled">
                    Reflection
                  </p>
                  <Prose>{outcome.reflection}</Prose>
                </div>
              )}
            </Section>

          </div>
        </div>

        {/* Footer nav */}
        <div className="mt-24 flex items-center justify-between border-t border-[#D9D7D2] pt-8">
          <a
            href="/systems"
            className="font-mono text-[11px] uppercase tracking-[0.1em] text-ink-disabled transition-colors duration-150 hover:text-ink-secondary"
          >
            ← Case Studies
          </a>
          <a
            href="mailto:sidraw24@gmail.com"
            className="font-mono text-[11px] uppercase tracking-[0.1em] text-ink-secondary transition-colors duration-150 hover:text-ink"
          >
            Work together →
          </a>
        </div>
      </main>
    </>
  );
}
