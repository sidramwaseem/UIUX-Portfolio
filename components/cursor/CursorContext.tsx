"use client";

import { createContext, useContext, useState, type ReactNode } from "react";

export type CursorMode = "gradient" | "glitter" | "flower" | "butterfly";

interface CursorContextValue {
  mode:    CursorMode;
  setMode: (mode: CursorMode) => void;
}

const CursorContext = createContext<CursorContextValue>({
  mode:    "gradient",
  setMode: () => {},
});

export function CursorProvider({ children }: { children: ReactNode }) {
  const [mode, setMode] = useState<CursorMode>("gradient");
  return (
    <CursorContext.Provider value={{ mode, setMode }}>
      {children}
    </CursorContext.Provider>
  );
}

export function useCursor() {
  return useContext(CursorContext);
}
