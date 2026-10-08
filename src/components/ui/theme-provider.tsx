"use client";

import { useEffect } from "react";
import { ThemeProvider as NextThemesProvider, useTheme } from "next-themes";
import { type ThemeProviderProps } from "next-themes/dist/types";

function InitialSystemTheme() {
  const { theme, resolvedTheme, setTheme } = useTheme();

  useEffect(() => {
    // Use the system preference once, then retain the chosen mode.
    if (
      theme === "system" &&
      (resolvedTheme === "light" || resolvedTheme === "dark")
    ) {
      setTheme(resolvedTheme);
    }
  }, [theme, resolvedTheme, setTheme]);

  return null;
}

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return (
    <NextThemesProvider {...props}>
      <InitialSystemTheme />
      {children}
    </NextThemesProvider>
  );
}
