import type { Metadata } from "next";
import ScrollProgress from "@/components/case-study/ScrollProgress";
import TableOfContents from "@/components/case-study/TableOfContents";
import CaseStudyHeader from "@/components/case-study/CaseStudyHeader";
import Section, { Prose, Callout } from "@/components/case-study/Section";
import ImagePlaceholder from "@/components/case-study/ImagePlaceholder";

export const metadata: Metadata = {
  title: "Right-Click Filter Indication — Sidra Waseem",
  description:
    "Making a hidden interaction visible in a data-heavy B2B warehouse platform.",
};

const TOC_ITEMS = [
  { id: "overview", label: "Overview" },
  { id: "problem", label: "Problem" },
  { id: "context", label: "Context & Constraints" },
  { id: "exploration", label: "Exploration" },
  { id: "final-solution", label: "Final Solution" },
  { id: "outcome", label: "Outcome" },
  { id: "reflection", label: "Reflection" },
];

const STUDY_META = {
  title: "Right-Click Filter Indication",
  subtitle: "Making a hidden interaction visible in a data-heavy system.",
  tags: ["UX Design", "B2B"] as import("@/lib/types").Tag[],
  year: "—",
  duration: "—",
  role: "—",
  client: "Confidential — B2B Warehouse Platform",
  readingTime: "~5 min read",
};

export default function RightClickFilterIndicationPage() {
  return (
    <>
      <ScrollProgress />

      <main className="animate-fade-in page-container pb-24 pt-24 md:pt-28">
        <CaseStudyHeader study={STUDY_META} />

        <div className="flex gap-16 lg:gap-20">
          <TableOfContents items={TOC_ITEMS} />

          <div className="min-w-0 flex-1 space-y-16 md:space-y-20">

            {/* 01 — Overview */}
            <Section id="overview" index={1} heading="Overview">
              <Prose>
                This project focused on improving the discoverability and usability of a right-click
                filter feature in a B2B warehouse platform. The functionality already existed —
                but users were either unaware of it, or couldn&apos;t interpret results once filters
                were applied.
              </Prose>
              <Prose>
                The goal wasn&apos;t to redesign the system. It was to surface what was already
                there and make it legible.
              </Prose>
              <ImagePlaceholder
                slot="1.1"
                src="/images/case-studies/Right-Click%20Filter/1.1.png"
                alt="Data table with no filter indication — the default state users encountered"
                caption="Table with no filter indication — the default state users encountered."
              />
            </Section>

            {/* 02 — Problem */}
            <Section id="problem" index={2} heading="Problem">
              <Prose>
                The system allowed users to filter table data through a right-click action.
                But nothing in the interface indicated the feature was there — and nothing
                showed what had happened after a filter was applied.
              </Prose>
              <Prose>
                In data-heavy workflows where users depend on accuracy and control, invisible
                state creates real confusion. Filtered results appeared without any explanation,
                making the system feel unpredictable.
              </Prose>

              <ul className="mt-2 space-y-3">
                {[
                  "No indication that right-click filtering existed",
                  "No visibility into which filters were currently active",
                  "No way to review, edit, or clear applied filters",
                  "No system feedback — results changed without explanation",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-[15px] leading-[1.6] text-ink-secondary"
                  >
                    <span className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-[#FF6B6B]" />
                    {item}
                  </li>
                ))}
              </ul>

              <div className="rounded-xl border border-[#D9D7D2] bg-white px-7 py-6">
                <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.12em] text-ink-disabled">
                  Problem statement
                </p>
                <p className="text-[16px] leading-[1.65] text-ink">
                  Users could filter table data using right-click — but there was no indication
                  the feature existed, no visibility into which filters were active, and no way
                  to review or remove them. Filtered results appeared without explanation.
                </p>
              </div>

              <ImagePlaceholder
                slot="2.1"
                src="/images/case-studies/Right-Click%20Filter/2.1.png"
                alt="Table showing lack of system feedback — no visible filter state or affordance"
                caption="The table as users saw it — no filter state, no affordance, no feedback."
              />
            </Section>

            {/* 03 — Context & Constraints */}
            <Section id="context" index={3} heading="Context & Constraints">
              <Prose>
                This wasn&apos;t a greenfield problem. The solution had to work within a system
                already in production, used across multiple modules with established patterns.
              </Prose>

              <ul className="mt-2 space-y-3">
                {[
                  "The product was built on Angular — any solution had to fit within that ecosystem",
                  "A strict design system was in place with limited room for new patterns",
                  "Tables were dense and used across many modules — changes had to scale",
                  "Performance was a concern; tables already handled heavy data rendering",
                  "Any layout changes had to avoid breaking existing table structures",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-[15px] leading-[1.6] text-ink-secondary"
                  >
                    <span className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-[#FF6B6B]" />
                    {item}
                  </li>
                ))}
              </ul>

              <Callout>
                I had to solve for clarity without adding meaningful cost to the system — technically or visually.
              </Callout>
            </Section>

            {/* 04 — Exploration */}
            <Section id="exploration" index={4} heading="Exploration">
              <Prose>
                The exploration moved through two distinct directions before landing on the final approach.
                Each revealed something — either about user needs, technical limits, or both.
              </Prose>

              <div className="space-y-12">
                {/* Direction 01 */}
                <div className="space-y-4">
                  <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-[#FF6B6B]">
                    Direction 01 — Chip-Based Filters
                  </p>
                  <Prose>
                    The first approach was to surface applied filters as chips above the table.
                    This pattern is widely understood: it makes filter logic explicit, is easy
                    to scan at a glance, and handles multiple filters without cluttering the layout.
                  </Prose>
                  <Prose>
                    The design showed active filters as chips — each displaying the column, condition,
                    and value — with horizontal scrolling for multiple filters and a single
                    &ldquo;Clear All&rdquo; action to reset.
                  </Prose>
                  <ImagePlaceholder
                    slot="3.1"
                    src="/images/case-studies/Right-Click%20Filter/3.1.png"
                    alt="Initial chip-based filter design showing column, condition, and value per chip"
                    caption="Initial chip-based design — each chip surfaced the full filter logic."
                  />
                </div>

                {/* Constraint hit */}
                <div className="space-y-4">
                  <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-ink-disabled">
                    Constraint Hit — Performance
                  </p>
                  <Prose>
                    During review, the development team raised a concern: rendering dynamic chips
                    alongside already-heavy tables would add meaningful performance overhead.
                    Scaling this across modules made the risk harder to ignore.
                  </Prose>
                  <Prose>
                    The chip approach couldn&apos;t move forward as designed. I needed to find
                    something that preserved clarity without the rendering cost.
                  </Prose>
                </div>

                {/* Direction 02 */}
                <div className="space-y-4">
                  <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-[#FF6B6B]">
                    Direction 02 — Funnel Icon
                  </p>
                  <Prose>
                    To reduce both UI and technical overhead, I explored a lighter alternative:
                    a funnel icon placed in the table header. It required minimal layout changes,
                    aligned with the existing design system, and was straightforward to implement.
                  </Prose>
                  <Prose>
                    I designed three states — default, hover (with a tooltip explaining right-click
                    filtering), and active (showing applied filters in a small popup). Technically
                    viable. But it introduced a new problem: it improved discoverability slightly,
                    without making filters easy to understand at a glance.
                  </Prose>
                  <ImagePlaceholder
                    slot="4.1"
                    src="/images/case-studies/Right-Click%20Filter/4.1.png"
                    alt="Funnel icon in three states: default, hover with tooltip, and active with popup"
                    caption="Funnel icon — default, hover, and active states."
                  />
                  <ImagePlaceholder
                    slot="4.2"
                    src="/images/case-studies/Right-Click%20Filter/4.2.png"
                    alt="Tooltip and popup behavior showing applied filter details on hover and click"
                    caption="Tooltip and popup behavior on hover and active states."
                  />
                </div>

                {/* Client feedback */}
                <div className="space-y-4">
                  <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-ink-disabled">
                    Client Review
                  </p>
                  <Prose>
                    Both directions were presented alongside a text-plus-actions variant. Given
                    the options, the client preferred chips — because they were the easiest to
                    read and understand, even for users unfamiliar with the feature.
                  </Prose>
                  <Callout attribution="Client review — filter indication options">
                    The funnel icon was technically lighter, but chips made the state immediately
                    readable. Clarity won.
                  </Callout>
                  <Prose>
                    This validated the original direction. The question became: could chips be
                    made to work within the performance constraints?
                  </Prose>
                </div>
              </div>
            </Section>

            {/* 05 — Final Solution */}
            <Section id="final-solution" index={5} heading="Final Solution">
              <Prose>
                Instead of abandoning chips, I reworked them to fit within the constraints.
                The goal was to reduce rendering overhead without sacrificing the clarity that
                made chips the preferred option.
              </Prose>

              <div className="space-y-5">
                <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-ink-disabled">
                  Key changes
                </p>
                <ul className="space-y-3">
                  {[
                    "Simplified chip structure to reduce rendering cost",
                    "Improved visual hierarchy between column, condition, and value",
                    "Tightened spacing to keep the layout compact across dense tables",
                    "Optimized scrolling behavior for multiple active filters",
                    "Minimized dynamic updates to avoid unnecessary re-renders",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-[15px] leading-[1.6] text-ink-secondary"
                    >
                      <span className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-[#FF6B6B]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <ImagePlaceholder
                slot="5.1"
                src="/images/case-studies/Right-Click%20Filter/5.1.png"
                alt="Refined chip design with simplified structure and clearer column, condition, value hierarchy"
                caption="Refined chip design — simplified structure with clearer filter hierarchy."
              />
              <ImagePlaceholder
                slot="5.2"
                src="/images/case-studies/Right-Click%20Filter/5.2.png"
                alt="Multiple active filter chips with horizontal scroll and Clear All action"
                caption="Multiple active filters with horizontal scroll and Clear All action."
              />

              <Prose>
                The result balanced three things that had been in tension throughout the project:
                clarity for the user, feasibility for the team, and consistency with the design system.
              </Prose>

              <div className="space-y-4">
                <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-ink-disabled">
                  Shipped experience
                </p>
                <Prose>
                  The final state makes the filtering feature visible, shows which filters are
                  active, and gives users a direct way to review and remove them — without
                  adding layout overhead or breaking existing table patterns.
                </Prose>
                <ImagePlaceholder
                  slot="6.1"
                  src="/images/case-studies/Right-Click%20Filter/6.1.png"
                  alt="Final integrated UI showing filter chips surfaced inline above the data table"
                  caption="Final integrated UI — filter chips surfaced inline with table context."
                />
              </div>
            </Section>

            {/* 06 — Outcome */}
            <Section id="outcome" index={6} heading="Outcome">
              <Prose>
                The solution made an existing feature usable. Users no longer had to guess
                whether a filter was applied — the system communicated its state clearly.
              </Prose>

              <ul className="mt-2 space-y-3">
                {[
                  "Improved discoverability of an existing but hidden feature",
                  "Reduced confusion in filtered data states across the platform",
                  "Better alignment between user expectations and system behavior",
                  "A scalable pattern reusable across all table-based modules",
                  "Shipped within Angular and performance constraints without layout changes",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-[15px] leading-[1.6] text-ink-secondary"
                  >
                    <span className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-[#FF6B6B]" />
                    {item}
                  </li>
                ))}
              </ul>
            </Section>

            {/* 07 — Reflection */}
            <Section id="reflection" index={7} heading="Reflection">
              <Prose>
                This project wasn&apos;t about adding a new feature — it was about fixing something
                that already existed but wasn&apos;t usable. That distinction shaped every decision.
              </Prose>
              <Prose>
                The most useful thing I did wasn&apos;t finding the right visual pattern. It was
                staying in the tension between three things that kept pulling in different directions:
                what users needed, what the system could support, and what could scale.
              </Prose>
              <Callout>
                The final solution came from iterating across all three constraints simultaneously —
                not resolving one at the expense of the others.
              </Callout>
              <Prose>
                Chips weren&apos;t the easiest answer technically. But they were the right one for
                users. Making them work within the constraints — rather than replacing them with
                something simpler — was the real design challenge.
              </Prose>
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
