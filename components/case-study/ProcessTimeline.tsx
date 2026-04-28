import type { ProcessStep } from "@/lib/types";
import ImagePlaceholder from "./ImagePlaceholder";

interface ProcessTimelineProps {
  steps: ProcessStep[];
}

export default function ProcessTimeline({ steps }: ProcessTimelineProps) {
  return (
    <div className="relative mt-2 space-y-10 pl-7 before:absolute before:left-0 before:top-2 before:h-[calc(100%-16px)] before:w-px before:bg-[#D9D7D2]">
      {steps.map((step) => (
        <div key={step.phase} className="relative">
          {/* Timeline dot */}
          <div className="absolute -left-[29px] top-[6px] h-2 w-2 rounded-full border-2 border-accent bg-bg" />

          {/* Phase label */}
          <p className="mb-2 font-mono text-[11px] uppercase tracking-[0.1em] text-accent">
            {step.phase}
          </p>

          {/* Description */}
          <p className="text-[15px] leading-[1.7] text-ink-secondary">
            {step.description}
          </p>

          {/* Methods */}
          {step.methods && step.methods.length > 0 && (
            <ul className="mt-3 flex flex-wrap gap-2">
              {step.methods.map((m) => (
                <li
                  key={m}
                  className="rounded-md bg-[#EDECEA] px-2.5 py-1 font-mono text-[11px] tracking-wide text-ink-secondary"
                >
                  {m}
                </li>
              ))}
            </ul>
          )}

          {/* Image placeholders */}
          {step.imageSlots && step.imageSlots.length > 0 && (
            <div className="mt-6 space-y-4">
              {step.imageSlots.map((img) => (
                <ImagePlaceholder key={img.slot} {...img} />
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
