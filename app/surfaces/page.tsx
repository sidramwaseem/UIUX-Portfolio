import type { Metadata } from "next";
import SurfacesClient from "@/components/surfaces/SurfacesClient";

export const metadata: Metadata = {
  title: "Surfaces — Sidra Waseem",
  description: "Marketing and brand design — whitepapers, landing pages, and social media systems.",
};

export default function SurfacesPage() {
  return (
    <main className="mx-auto max-w-page px-6 pb-24 pt-24 md:px-12 md:pt-28 lg:px-20">
      <SurfacesClient />
    </main>
  );
}
