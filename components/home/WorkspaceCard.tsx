import Link from "next/link";

type PreviewType = "grid" | "bars" | "dots" | "none";

interface WorkspaceCardProps {
  index: number;
  title: string;
  description: string;
  meta: string;
  href: string;
  preview?: PreviewType;
  featured?: boolean;
}

export default function WorkspaceCard({
  index,
  title,
  description,
  meta,
  href,
  preview = "none",
  featured = false,
}: WorkspaceCardProps) {
  return (
    <Link href={href} className="group block h-full">
      <div
        className={[
          "relative flex h-full flex-col justify-between rounded-2xl border transition-all duration-300 ease-out",
          "border-[rgba(255,107,107,0.18)] hover:border-[rgba(255,107,107,0.55)]",
          "hover:shadow-[0_20px_56px_-12px_rgba(255,107,107,0.18)]",
          featured
            ? "min-h-[520px] p-10 md:min-h-0"
            : "min-h-[240px] p-7 md:min-h-[260px]",
        ].join(" ")}
        style={{
          background: featured
            ? "linear-gradient(150deg, #FFFFFF 40%, rgba(255,107,107,0.07) 100%)"
            : "#FFFFFF",
        }}
      >
        {/* Preview element — absolute top-right */}
        {preview === "grid" && <PreviewGrid featured={featured} />}
        {preview === "bars" && <PreviewBars featured={featured} />}
        {preview === "dots" && <PreviewDots featured={featured} />}

        {/* Index */}
        <span className="font-mono text-[12px] uppercase tracking-[0.12em] text-ink-disabled">
          {String(index).padStart(2, "0")}
        </span>

        {/* Title + description */}
        <div>
          <h2
            className={[
              "font-serif leading-[1.05] text-ink transition-colors duration-200 group-hover:text-[#FF6B6B]",
              featured ? "text-[44px] md:text-[56px]" : "text-[28px] md:text-[34px]",
            ].join(" ")}
          >
            {title}
          </h2>
          <p
            className={[
              "mt-3 text-[16px] leading-[26px] text-ink-secondary",
              featured ? "max-w-[40ch]" : "max-w-[32ch]",
            ].join(" ")}
          >
            {description}
          </p>
        </div>

        {/* Meta + arrow */}
        <div className="flex items-center justify-between">
          <span className="text-[13px] uppercase tracking-[0.08em] text-ink-disabled">
            {meta}
          </span>
          <span className="inline-block text-[18px] text-ink-disabled transition-all duration-200 group-hover:translate-x-1.5 group-hover:text-[#FF6B6B]">
            →
          </span>
        </div>
      </div>
    </Link>
  );
}

function PreviewGrid({ featured }: { featured?: boolean }) {
  const size = featured ? 5 : 3;
  return (
    <div
      className="absolute right-8 top-8 opacity-[0.15] transition-opacity duration-200 group-hover:opacity-40"
      style={{ display: "grid", gridTemplateColumns: `repeat(${size}, 1fr)`, gap: 6 }}
    >
      {Array.from({ length: size * size }).map((_, i) => (
        <div key={i} className="h-1.5 w-1.5 rounded-full bg-ink" />
      ))}
    </div>
  );
}

function PreviewBars({ featured }: { featured?: boolean }) {
  const bars = featured ? [56, 40, 28, 16] : [40, 28, 16];
  return (
    <div className="absolute right-8 top-8 flex flex-col items-end gap-2 opacity-[0.15] transition-opacity duration-200 group-hover:opacity-40">
      {bars.map((w, i) => (
        <div
          key={i}
          className="h-[3px] rounded-full bg-ink"
          style={{ width: w }}
        />
      ))}
    </div>
  );
}

function PreviewDots({ featured }: { featured?: boolean }) {
  const swatches = featured
    ? ["#FF6B6B", "#4D78F5", "#a78bfa", "#FFD700", "#6B6860", "#D9D7D2"]
    : ["#FF6B6B", "#4D78F5", "#a78bfa", "#FFD700"];
  return (
    <div
      className="absolute right-8 top-8 flex flex-wrap gap-1.5 opacity-60 transition-opacity duration-200 group-hover:opacity-90"
      style={{ width: featured ? 46 : 30 }}
    >
      {swatches.map((color, i) => (
        <div key={i} className="h-3 w-3 rounded-full" style={{ backgroundColor: color }} />
      ))}
    </div>
  );
}
