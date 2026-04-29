"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import type { Surface } from "@/lib/surfaces";

interface SurfaceCardProps {
  surface: Surface;
}

export default function SurfaceCard({ surface }: SurfaceCardProps) {
  const { title, description, client, year, gradient, src, images } = surface;
  const isCarousel = images && images.length > 1;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (isHovered && isCarousel) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((i) => (i + 1) % images!.length);
      }, 1200);
    } else {
      if (intervalRef.current) clearInterval(intervalRef.current);
      if (!isHovered) setCurrentIndex(0);
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isHovered, isCarousel, images]);

  const currentSrc = isCarousel ? images![currentIndex] : src;

  return (
    <article
      className="group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="block overflow-hidden rounded-xl">
        <div
          className="relative aspect-square overflow-hidden"
          style={{ background: gradient }}
        >
          {currentSrc && (
            <Image
              key={currentSrc}
              src={currentSrc}
              alt={title}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-contain transition-opacity duration-300 ease-in-out"
            />
          )}

          {/* Slide progress dots */}
          {isCarousel && (
            <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-1.5 pointer-events-none">
              {images!.map((_, i) => (
                <div
                  key={i}
                  className={`h-1 rounded-full transition-all duration-300 ${
                    i === currentIndex ? "w-4 bg-white" : "w-1 bg-white/40"
                  }`}
                />
              ))}
            </div>
          )}

          {/* Slide counter */}
          {isCarousel && isHovered && (
            <div className="absolute top-3 right-3 rounded-full bg-black/50 px-2 py-0.5 font-mono text-[11px] text-white/80 backdrop-blur-sm pointer-events-none">
              {currentIndex + 1} / {images!.length}
            </div>
          )}
        </div>
      </div>

      <div className="mt-4 px-0.5">
        <div className="mb-2.5 flex items-center justify-between">
          <span className="rounded-full bg-[#FFEEEE] px-2.5 py-0.5 font-mono text-[11px] uppercase tracking-[0.08em] text-[#FF6B6B]">
            {isCarousel ? `${images!.length} slides` : "Post"}
          </span>
          <span className="font-mono text-[12px] text-ink-disabled">{year}</span>
        </div>

        <h3 className="text-[16px] font-medium leading-[1.4] text-ink transition-colors duration-150 group-hover:text-[#FF6B6B]">
          {title}
        </h3>

        <p className="mt-1.5 text-[14px] leading-[1.6] text-ink-disabled">{description}</p>

        <p className="mt-2 font-mono text-[12px] uppercase tracking-[0.07em] text-ink-disabled">
          {client}
        </p>
      </div>
    </article>
  );
}
