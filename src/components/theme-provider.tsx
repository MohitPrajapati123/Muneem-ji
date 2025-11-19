// src/components/theme-provider.tsx
"use client";

import type { ReactNode } from "react";

type ThemeProviderProps = {
  children: ReactNode;
};

export function ThemeProvider({ children }: ThemeProviderProps) {
  // Simple pass-through – abhi koi external theme library nahi
  return <>{children}</>;
}
