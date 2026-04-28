"use client";

import { useState, useEffect } from "react";
import { AUTH_STORAGE_KEY } from "@/lib/surfaces";
import PasswordGate from "./PasswordGate";
import SurfacesGallery from "./SurfacesGallery";

type View = "loading" | "gate" | "gallery";

export default function SurfacesClient() {
  const [view, setView] = useState<View>("loading");

  // Check persisted auth on mount — runs client-side only
  useEffect(() => {
    const authed = localStorage.getItem(AUTH_STORAGE_KEY) === "1";
    setView(authed ? "gallery" : "gate");
  }, []);

  function handleSuccess() {
    localStorage.setItem(AUTH_STORAGE_KEY, "1");
    setView("gallery");
  }

  function handleLock() {
    localStorage.removeItem(AUTH_STORAGE_KEY);
    setView("gate");
  }

  // Prevent SSR flash — render nothing until client has checked storage
  if (view === "loading") {
    return (
      <div className="flex min-h-[calc(100vh-64px)] items-center justify-center">
        <div className="h-4 w-4 animate-spin rounded-full border-2 border-[#D9D7D2] border-t-accent" />
      </div>
    );
  }

  if (view === "gate") {
    return <PasswordGate onSuccess={handleSuccess} />;
  }

  return <SurfacesGallery onLock={handleLock} />;
}
