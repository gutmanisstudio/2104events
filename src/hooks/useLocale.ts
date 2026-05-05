"use client";
import { useCallback, useEffect, useState } from "react";

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

export function useLocale() {
  const [lang, setLangState] = useState<Lang>("EN");

  useEffect(() => {
    setLangState(readCookie());
  }, []);

  const setLang = useCallback((next: Lang) => {
    writeCookie(next);
    setLangState(next);
  }, []);

  return [lang, setLang] as const;
}
