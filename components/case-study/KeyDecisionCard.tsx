import type { KeyDecision } from "@/lib/types";

interface KeyDecisionCardProps {
  decision: KeyDecision;
  index: number;
}

export default function KeyDecisionCard({ decision, index }: KeyDecisionCardProps) {
  const { question, options, chosen, rationale } = decision;

  return (
    <div className="rounded-xl border border-[#D9D7D2] bg-white p-7 md:p-8">
      {/* Decision number */}
      <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.14em] text-ink-disabled">
        Decision {String(index).padStart(2, "0")}
      </p>

      {/* The question */}
      <h3 className="mb-6 font-serif text-[20px] leading-[1.3] text-ink md:text-[22px]">
        {question}
      </h3>

      <div className="space-y-5">
        {/* Options considered */}
        <div>
          <p className="mb-2.5 font-mono text-[10px] uppercase tracking-[0.1em] text-ink-disabled">
            Options considered
          </p>
          <ul className="space-y-1.5">
            {options.map((opt) => (
              <li key={opt} className="flex items-start gap-2.5 text-[14px] text-ink-secondary">
                <span className="mt-[6px] h-1 w-1 shrink-0 rounded-full bg-[#D9D7D2]" />
                {opt}
              </li>
            ))}
          </ul>
        </div>

        {/* Divider */}
        <div className="h-px bg-[#EDECEA]" />

        {/* What I chose */}
        <div>
          <p className="mb-1.5 font-mono text-[10px] uppercase tracking-[0.1em] text-ink-disabled">
            What I chose
          </p>
          <p className="text-[14px] font-medium text-ink">{chosen}</p>
        </div>

        {/* Rationale — the most important part */}
        <div>
          <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.1em] text-ink-disabled">
            Rationale
          </p>
          <p className="text-[14px] leading-[1.72] text-ink-secondary">{rationale}</p>
        </div>
      </div>
    </div>
  );
}
