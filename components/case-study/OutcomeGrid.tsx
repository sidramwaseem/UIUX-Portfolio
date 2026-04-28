import type { OutcomeMetric } from "@/lib/types";

interface OutcomeGridProps {
  metrics: OutcomeMetric[];
}

export default function OutcomeGrid({ metrics }: OutcomeGridProps) {
  return (
    <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {metrics.map((metric) => (
        <div
          key={metric.label}
          className="flex flex-col justify-between rounded-xl bg-card-bg p-7"
        >
          {/* Value */}
          <p className="font-serif text-[40px] leading-none text-card-text md:text-[48px]">
            {metric.value}
          </p>

          {/* Label + context */}
          <div className="mt-6">
            <p className="text-[13px] leading-[1.5] text-card-text">{metric.label}</p>
            {metric.context && (
              <p className="mt-1 font-mono text-[11px] text-card-secondary">{metric.context}</p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
