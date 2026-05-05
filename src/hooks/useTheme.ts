"use client";
import { useCallback, useEffect, useState } from "react";

export type Theme = "light" | "dark";
export type Palette = "warm" | "sage" | "ink";

const STORAGE_KEY = "2104events:theme";

type Stored = { theme: Theme; palette: Palette };

function read(): Stored {
  if (typeof window === "undefined") return { theme: "light", palette: "sage" };
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return { theme: "light", palette: "sage" };
    const parsed = JSON.parse(raw) as Partial<Stored>;
    return {
      theme: parsed.theme === "dark" ? "dark" : "light",
      palette:
        parsed.palette === "sage" || parsed.palette === "ink"
          ? parsed.palette
          : "sage",
    };
  } catch {
    return { theme: "light", palette: "sage" };
  }
}

export function useTheme() {
  const [theme, setThemeState] = useState<Theme>("light");
  const [palette, setPaletteState] = useState<Palette>("sage");

  useEffect(() => {
    const initial = read();
    setThemeState(initial.theme);
    setPaletteState(initial.palette);
  }, []);

  useEffect(() => {
    document.body.dataset.theme = theme;
    document.body.dataset.palette = palette;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({ theme, palette }));
    } catch {}
  }, [theme, palette]);

  const setTheme = useCallback((t: Theme) => setThemeState(t), []);
  const setPalette = useCallback((p: Palette) => setPaletteState(p), []);

  return [theme, setTheme, palette, setPalette] as const;
}
