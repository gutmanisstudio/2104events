"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { COPY, type Lang } from "@/content/copy";
import { useLocale } from "@/hooks/useLocale";
import { useTheme } from "@/hooks/useTheme";

type LinkDef = { id: string; href: string; key: keyof (typeof COPY)["EN"]["nav"] };

const LINKS: LinkDef[] = [
  { id: "work", href: "/work", key: "work" },
  { id: "services", href: "/services", key: "services" },
  { id: "about", href: "/about", key: "about" },
  { id: "journal", href: "/journal", key: "journal" },
  { id: "contact", href: "/contact", key: "contact" },
];

function SunIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden>
      <circle cx="7" cy="7" r="3" />
      <path
        d="M7 1v1.5M7 11.5V13M1 7h1.5M11.5 7H13M2.5 2.5l1 1M10.5 10.5l1 1M2.5 11.5l1-1M10.5 3.5l1-1"
        strokeLinecap="round"
      />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden>
      <path d="M11 8.5A4.5 4.5 0 1 1 5.5 3a3.5 3.5 0 0 0 5.5 5.5z" strokeLinejoin="round" />
    </svg>
  );
}

export default function Nav() {
  const pathname = usePathname();
  const [lang, setLang] = useLocale();
  const [theme, setTheme] = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => setScrolled(window.scrollY > 40));
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const copy = COPY[lang];

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname?.startsWith(href);

  return (
    <>
      <header
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          padding: scrolled ? "14px 32px" : "24px 32px",
          transition:
            "padding .35s cubic-bezier(.2,.7,.3,1), background .35s, backdrop-filter .35s, border-color .35s",
          background: scrolled
            ? "color-mix(in oklab, var(--bg) 85%, transparent)"
            : "transparent",
          backdropFilter: scrolled ? "blur(14px) saturate(140%)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(14px) saturate(140%)" : "none",
          borderBottom: `1px solid ${scrolled ? "var(--line-c)" : "transparent"}`,
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            maxWidth: 1440,
            margin: "0 auto",
            gap: 16,
          }}
        >
          {/* Wordmark */}
          <Link
            href="/"
            data-hover
            style={{
              display: "flex",
              alignItems: "baseline",
              gap: 8,
              color: "var(--fg)",
              textDecoration: "none",
            }}
          >
            <span
              className="serif"
              style={{ fontSize: 22, fontWeight: 400, letterSpacing: "-0.02em" }}
            >
              2104
            </span>
            <span
              className="mono"
              style={{ fontSize: 10, color: "var(--fg-mute)", marginLeft: -2 }}
            >
              events
            </span>
            <span
              className="mono"
              style={{ fontSize: 10, color: "var(--fg-mute)", marginLeft: 6 }}
            >
              · OSL
            </span>
          </Link>

          {/* Center links — desktop */}
          <nav
            className="hidden md:flex"
            style={{ gap: 36 }}
          >
            {LINKS.map((l) => {
              const active = isActive(l.href);
              return (
                <Link
                  key={l.id}
                  href={l.href}
                  data-hover
                  style={{
                    position: "relative",
                    fontSize: 13,
                    fontWeight: 500,
                    color: active ? "var(--fg)" : "var(--fg-soft)",
                    textDecoration: "none",
                    letterSpacing: "0.01em",
                  }}
                >
                  {copy.nav[l.key]}
                  {active && (
                    <span
                      aria-hidden
                      style={{
                        position: "absolute",
                        left: 0,
                        right: 0,
                        bottom: -6,
                        height: 1,
                        background: "var(--accent)",
                      }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right cluster */}
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <button
              onClick={() => setLang(lang === "EN" ? "NO" : "EN")}
              data-hover
              className="mono"
              aria-label="Toggle language"
              style={{
                border: "1px solid var(--line-c)",
                background: "transparent",
                padding: "6px 10px",
                borderRadius: 999,
                cursor: "pointer",
                fontSize: 10,
                letterSpacing: "0.12em",
              }}
            >
              <span style={{ color: lang === "NO" ? "var(--fg)" : "var(--fg-mute)" }}>
                NO
              </span>
              <span style={{ color: "var(--fg-mute)", margin: "0 4px" }}>/</span>
              <span style={{ color: lang === "EN" ? "var(--fg)" : "var(--fg-mute)" }}>
                EN
              </span>
            </button>

            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              data-hover
              aria-label="Toggle theme"
              style={{
                width: 32,
                height: 32,
                borderRadius: 999,
                border: "1px solid var(--line-c)",
                background: "transparent",
                color: "var(--fg-soft)",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {theme === "dark" ? <SunIcon /> : <MoonIcon />}
            </button>

            <Link
              href="/contact"
              data-hover
              className="hidden sm:inline-flex"
              style={{
                padding: "10px 18px",
                borderRadius: 999,
                background: "var(--fg)",
                color: "var(--bg)",
                textDecoration: "none",
                fontSize: 13,
                fontWeight: 500,
                letterSpacing: "0.01em",
                alignItems: "center",
                gap: 6,
              }}
            >
              {copy.cta} <span aria-hidden>→</span>
            </Link>

            <button
              onClick={() => setMenuOpen((v) => !v)}
              className="md:hidden"
              data-hover
              aria-label="Open menu"
              style={{
                width: 32,
                height: 32,
                borderRadius: 999,
                border: "1px solid var(--line-c)",
                background: "transparent",
                color: "var(--fg)",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <svg width="14" height="14" viewBox="0 0 14 14" stroke="currentColor" strokeWidth="1.4" fill="none">
                {menuOpen ? (
                  <path d="M3 3l8 8M11 3l-8 8" strokeLinecap="round" />
                ) : (
                  <>
                    <path d="M2 4h10M2 10h10" strokeLinecap="round" />
                  </>
                )}
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile overlay */}
      {menuOpen && (
        <div
          className="md:hidden"
          onClick={() => setMenuOpen(false)}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 90,
            background: "var(--bg)",
            paddingTop: 100,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 20,
          }}
        >
          {LINKS.map((l) => (
            <Link
              key={l.id}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className="serif"
              style={{
                fontSize: 36,
                fontStyle: "italic",
                color: "var(--fg)",
                textDecoration: "none",
                letterSpacing: "-0.02em",
              }}
            >
              {copy.nav[l.key]}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setMenuOpen(false)}
            style={{
              marginTop: 24,
              padding: "14px 24px",
              borderRadius: 999,
              background: "var(--fg)",
              color: "var(--bg)",
              textDecoration: "none",
              fontSize: 14,
              fontWeight: 500,
            }}
          >
            {copy.cta} →
          </Link>
        </div>
      )}
    </>
  );
}
