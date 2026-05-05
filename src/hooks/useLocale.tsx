"use client";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

export type Lang = "EN" | "NO";

const COOKIE_KEY = "locale";

function readCookie(): Lang {
  if (typeof document === "undefined") return "EN";
  const match = document.cookie.match(/(?:^|;\s*)locale=(EN|NO)/);
  return (match?.[1] as Lang) ?? "EN";
}

function writeCookie(lang: Lang) {
  if (typeof document === "undefined") return;
  document.cookie = `${COOKIE_KEY}=${lang}; path=/; max-age=${60 * 60 * 24 * 365}; samesite=lax`;
}

type Ctx = readonly [Lang, (next: Lang) => void];
const LocaleCtx = createContext<Ctx | null>(null);

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("EN");

  useEffect(() => {
    setLangState(readCookie());
  }, []);

  const setLang = useCallback((next: Lang) => {
    writeCookie(next);
    setLangState(next);
  }, []);

  return (
    <LocaleCtx.Provider value={[lang, setLang] as const}>
      {children}
    </LocaleCtx.Provider>
  );
}

export function useLocale(): Ctx {
  const ctx = useContext(LocaleCtx);
  if (!ctx) {
    return ["EN" as Lang, () => {}] as const;
  }
  return ctx;
}
