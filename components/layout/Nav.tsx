"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const NAV_LINKS = [
  { label: "Case Studies", href: "/systems" },
  { label: "Social Media Work", href: "/surfaces" },
  { label: "Shots", href: "/shots" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <nav
        className={`fixed inset-x-0 top-0 z-50 flex h-16 items-center justify-between px-6 transition-all duration-300 md:px-12 lg:px-20 ${
          scrolled || menuOpen
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
                  <span className="absolute -bottom-0.5 left-0 h-px w-full bg-[#FF6B6B]" />
                )}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile hamburger button */}
        <button
          className="flex h-10 w-10 flex-col items-center justify-center gap-[5px] md:hidden"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          <span
            className={`block h-[1.5px] w-5 bg-ink transition-all duration-300 ${
              menuOpen ? "translate-y-[6.5px] rotate-45" : ""
            }`}
          />
          <span
            className={`block h-[1.5px] w-5 bg-ink transition-all duration-300 ${
              menuOpen ? "opacity-0 scale-x-0" : ""
            }`}
          />
          <span
            className={`block h-[1.5px] w-5 bg-ink transition-all duration-300 ${
              menuOpen ? "-translate-y-[6.5px] -rotate-45" : ""
            }`}
          />
        </button>
      </nav>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 z-40 flex flex-col bg-[#FFF6EE] px-6 pb-12 pt-16 md:hidden"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.22, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <ul className="mt-8 flex flex-col">
              {NAV_LINKS.map(({ label, href }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className={`block border-b border-[#D9D7D2] py-5 font-serif text-[28px] leading-[1.1] tracking-[-0.02em] transition-opacity duration-150 hover:opacity-60 ${
                      pathname === href ? "text-[#FF6B6B]" : "text-ink"
                    }`}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-auto">
              <a
                href="mailto:sidraw24@gmail.com"
                className="font-mono text-[12px] uppercase tracking-[0.1em] text-ink-disabled transition-colors hover:text-ink-secondary"
              >
                Get in touch →
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
