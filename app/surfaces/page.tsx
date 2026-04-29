import type { Metadata } from "next";
import SurfacesClient from "@/components/surfaces/SurfacesClient";

export const metadata: Metadata = {
  title: "Surfaces — Sidra Waseem",
  description: "Marketing and brand design — whitepapers, landing pages, and social media systems.",
};

export default function SurfacesPage() {
  return (
    <main className="page-container pt-24 pb-24 md:pt-28 lg:pt-32">
      <SurfacesClient />
    </main>
  );
}
