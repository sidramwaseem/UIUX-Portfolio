import Image from "next/image";
import type { CaseStudyImage } from "@/lib/types";

export default function ImagePlaceholder({ slot, src, alt, caption }: CaseStudyImage) {
  return (
    <figure className="w-full">
      {src ? (
        <div className="relative w-full overflow-hidden rounded-xl">
          <Image
            src={src}
            alt={alt ?? caption ?? `Image ${slot}`}
            width={1200}
            height={800}
            className="w-full h-auto"
          />
        </div>
      ) : (
        <div className="flex h-64 w-full items-center justify-center rounded-xl border border-dashed border-[#D9D7D2] bg-[#F5F4F0] md:h-80">
          <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-ink-disabled">
            Image {slot}
          </p>
        </div>
      )}
      {caption && (
        <figcaption className="mt-3 text-center font-mono text-[11px] leading-[1.6] tracking-wide text-ink-disabled">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
