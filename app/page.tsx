import Hero from "@/components/home/Hero";
import HomeAbout from "@/components/home/HomeAbout";
import HomeGrid from "@/components/home/HomeGrid";

export default function HomePage() {
  return (
    <>
      {/* Full-bleed hero — sits outside the max-width container intentionally */}
      <Hero />

      {/* About section — full-bleed coral, flows directly from hero */}
      <HomeAbout />

      <main className="page-container pt-20 pb-24 md:pt-24 lg:pt-28">
        <HomeGrid />

        <footer className="mt-20 flex items-center justify-between border-t border-[#D9D7D2] pt-8">
          <span className="font-mono text-[18px] uppercase tracking-[0.1em] text-ink-disabled">
            Available for work
          </span>
          <a
            href="mailto:Waseem.sidra2025@gmail.com"
            className="font-mono text-[18px] uppercase tracking-[0.1em] text-ink-secondary transition-colors duration-150 hover:text-ink"
          >
            Get in touch →
          </a>
        </footer>
      </main>
    </>
  );
}
