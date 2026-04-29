import Link from "next/link";
type PreviewType = "grid" | "bars" | "dots" | "none";

interface WorkspaceCardProps {
  index: number;
  title: string;
  description: string;
  meta: string;
  href: string;
  preview?: PreviewType;
}

export default function WorkspaceCard({
  index,
  title,
  description,
  meta,
  href,
  preview = "none",
}: WorkspaceCardProps) {
  return (
    <Link href={href} className="group block h-full">
      <div className="relative flex h-full min-h-[320px] flex-col justify-between rounded-2xl border border-card-border bg-card-bg p-8 transition-all duration-200 ease-out group-hover:border-card-border-hover group-hover:shadow-[0_16px_48px_-16px_rgba(45,91,227,0.3)] md:min-h-[360px]">

        {/* Preview element — absolute top-right */}
        {preview === "grid" && <PreviewGrid />}
        {preview === "bars" && <PreviewBars />}
        {preview === "dots" && <PreviewDots />}

        {/* Index number */}
        <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-card-dim">
          {String(index).padStart(2, "0")}
        </span>

        {/* Title + description */}
        <div>
          <h2 className="font-serif text-[36px] leading-[1.05] text-card-text transition-colors duration-150 group-hover:text-white md:text-[42px]">
            {title}
          </h2>
          <p className="mt-3 max-w-[36ch] text-[16px] leading-[26px] text-card-secondary">
            {description}
          </p>
        </div>

        {/* Meta + arrow */}
        <div className="flex items-center justify-between">
          <span className="text-[12px] uppercase tracking-[0.08em] text-card-dim">
            {meta}
          </span>
          <span className="inline-block text-[16px] text-card-dim transition-all duration-150 group-hover:translate-x-1.5 group-hover:text-accent">
            →
          </span>
        </div>
      </div>
    </Link>
  );
}

function PreviewGrid() {
  return (
    <div className="absolute right-8 top-8 grid grid-cols-3 gap-1.5 opacity-[0.18] transition-opacity duration-200 group-hover:opacity-40">
      {Array.from({ length: 9 }).map((_, i) => (
        <div key={i} className="h-1.5 w-1.5 rounded-full bg-card-text" />
      ))}
    </div>
  );
}

function PreviewBars() {
  return (
    <div className="absolute right-8 top-8 flex flex-col items-end gap-2 opacity-[0.18] transition-opacity duration-200 group-hover:opacity-40">
      {[40, 28, 16].map((w, i) => (
        <div
          key={i}
          className="h-[3px] rounded-full bg-card-text"
          style={{ width: w }}
        />
      ))}
    </div>
  );
}

function PreviewDots() {
  const swatches = ["#4D78F5", "#8A877F", "#F0EDE8", "#2E2D2B"];
  return (
    <div
      className="absolute right-8 top-8 flex flex-wrap gap-1.5 opacity-50 transition-opacity duration-200 group-hover:opacity-80"
      style={{ width: 30 }}
    >
      {swatches.map((color, i) => (
        <div
          key={i}
          className="h-3 w-3 rounded-full"
          style={{ backgroundColor: color }}
        />
      ))}
    </div>
  );
}
