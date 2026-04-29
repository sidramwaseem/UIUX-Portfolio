import type { Metadata } from "next";
import { Inter, Fraunces } from "next/font/google";
import Nav from "@/components/layout/Nav";
import CustomCursor from "@/components/cursor/CustomCursor";
import CursorModeBar from "@/components/cursor/CursorModeBar";
import { CursorProvider } from "@/components/cursor/CursorContext";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  axes: ["opsz"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sidra Waseem — Designer",
  description:
    "Portfolio of Sidra Waseem — designer of B2B systems, product workflows, and marketing surfaces.",
  icons: {
    icon: { url: "/icon.png", type: "image/png", sizes: "200x200" },
  },
  openGraph: {
    title: "Sidra Waseem — Designer",
    description: "Designer of systems and surfaces.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${fraunces.variable}`}>
      <body className="font-sans" suppressHydrationWarning>
        <CursorProvider>
          <CustomCursor />
          <CursorModeBar />
        </CursorProvider>
        <Nav />
        {children}
      </body>
    </html>
  );
}
