"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const NAV_LINKS = [
  { label: "Case Studies", href: "/systems" },
  { label: "Social Media Work", href: "/surfaces" },
  { label: "Shots", href: "/shots" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 flex h-16 items-center justify-between px-6 transition-all duration-300 md:px-12 lg:px-20 ${
        scrolled
          ? "bg-[#FFF6EE]/90 shadow-[0_1px_0_#D9D7D2] backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <Link
        href="/"
        className="inline-flex h-11 w-11 items-center justify-center rounded-full transition-opacity duration-150 hover:opacity-80"
        style={{ backgroundColor: "#FF6B6B" }}
        aria-label="Sidra Waseem — Home"
      >
        <span className="font-serif text-[18px] leading-none tracking-[-0.04em] text-white">SW</span>
      </Link>

      <ul className="hidden items-center gap-8 md:flex">
        {NAV_LINKS.map(({ label, href }) => (
          <li key={href}>
            <Link
              href={href}
              className={`relative py-1 text-[18px] font-medium tracking-wide transition-colors duration-150 ${
                pathname === href
                  ? "text-ink"
                  : "text-ink-secondary hover:text-ink"
              }`}
            >
              {label}
              {pathname === href && (
                <span className="absolute -bottom-0.5 left-0 h-px w-full bg-accent" />
              )}
            </Link>
          </li>
        ))}
      </ul>

      {/* Mobile: show current section or menu hint */}
      <span className="font-mono text-[18px] uppercase tracking-[0.1em] text-ink-disabled md:hidden">
        Menu
      </span>
    </nav>
  );
}
