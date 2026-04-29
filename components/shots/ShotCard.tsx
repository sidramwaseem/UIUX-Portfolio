import Image from "next/image";
import type { Shot, ShotAspect } from "@/lib/shots";

const ASPECT_CLASS: Record<ShotAspect, string> = {
  landscape: "aspect-[4/3]",
  portrait: "aspect-[3/4]",
  square: "aspect-square",
  wide: "aspect-[16/9]",
};

interface ShotCardProps {
  shot: Shot;
}

function CardInner({ shot }: ShotCardProps) {
  const { title, tags, gradient, src, aspect } = shot;
  return (
    <div className={`relative ${ASPECT_CLASS[aspect]} overflow-hidden`}>
      {src ? (
        <Image
          src={src}
          alt={title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
          style={{ backgroundColor: gradient }}
        />
      ) : (
        <div
          className="absolute inset-0 transition-transform duration-500 ease-out group-hover:scale-[1.04]"
          style={{ background: gradient }}
        />
      )}

      <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/65 via-black/20 to-transparent p-5 opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-100">
        <div className="translate-y-2 transition-transform duration-300 ease-out group-hover:translate-y-0">
          <h3 className="text-[15px] font-medium leading-[1.35] text-white">
            {title}
          </h3>
          <ul className="mt-2.5 flex flex-wrap gap-1.5">
            {tags.map((tag) => (
              <li
                key={tag}
                className="rounded-full bg-white/20 px-2 py-0.5 font-mono text-[11px] uppercase tracking-[0.06em] text-white/85 backdrop-blur-sm"
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default function ShotCard({ shot }: ShotCardProps) {
  const { href } = shot;

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="group block overflow-hidden rounded-xl"
      >
        <CardInner shot={shot} />
      </a>
    );
  }

  return (
    <div className="group block cursor-default overflow-hidden rounded-xl">
      <CardInner shot={shot} />
    </div>
  );
}
