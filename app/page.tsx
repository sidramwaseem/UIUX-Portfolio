import HomeGrid from "@/components/home/HomeGrid";

export default function HomePage() {
  return (
    <main className="mx-auto min-h-screen max-w-page px-6 pb-20 pt-28 md:px-12 md:pt-32 lg:px-20">

      {/* Hero */}
      <header className="mb-14 md:mb-16">
        <p className="mb-5 font-mono text-[11px] uppercase tracking-[0.14em] text-ink-disabled">
          Portfolio — 2024
        </p>
        <h1 className="font-serif text-[48px] leading-[1.04] text-ink md:text-[64px] lg:text-[72px]">
          Sidra Waseem
        </h1>
        <p className="mt-4 text-[16px] leading-relaxed text-ink-secondary md:text-[18px]">
          Designer of systems and surfaces.
        </p>
      </header>

      {/* Interactive workspace grid */}
      <HomeGrid />

      {/* Footer line */}
      <footer className="mt-20 flex items-center justify-between border-t border-[#D9D7D2] pt-8">
        <span className="font-mono text-[11px] uppercase tracking-[0.1em] text-ink-disabled">
          Available for work
        </span>
        <a
          href="mailto:Waseem.sidra2025@gmail.com"
          className="font-mono text-[11px] uppercase tracking-[0.1em] text-ink-secondary transition-colors duration-150 hover:text-ink"
        >
          Get in touch →
        </a>
      </footer>
    </main>
  );
}
