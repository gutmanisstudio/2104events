"use client";

import { useTheme, type Theme, type Palette } from "@/hooks/useTheme";
import { useLocale, type Lang } from "@/hooks/useLocale";

const swatchKeys: Array<{ key: string; varName: string; label: string }> = [
  { key: "bg", varName: "--bg", label: "bg" },
  { key: "bg-2", varName: "--bg-2", label: "bg-2" },
  { key: "fg", varName: "--fg", label: "fg" },
  { key: "fg-soft", varName: "--fg-soft", label: "fg-soft" },
  { key: "fg-mute", varName: "--fg-mute", label: "fg-mute" },
  { key: "accent", varName: "--accent", label: "accent" },
];

export default function Home() {
  const [theme, setTheme, palette, setPalette] = useTheme();
  const [lang, setLang] = useLocale();

  return (
    <main
      className="min-h-screen px-6 py-20 mx-auto"
      style={{ maxWidth: 960 }}
    >
      <header className="mb-16">
        <p className="mono mb-4" style={{ color: "var(--fg-mute)" }}>
          token smoke-test · prompt 02
        </p>
        <h1
          className="font-serif text-6xl"
          style={{ letterSpacing: "-0.04em" }}
        >
          Events composed,{" "}
          <em
            className="italic"
            style={{ color: "var(--accent)", fontWeight: 300 }}
          >
            not assembled.
          </em>
        </h1>
      </header>

      <section className="mb-12">
        <p className="mono mb-3" style={{ color: "var(--fg-mute)" }}>
          theme · palette · lang
        </p>
        <div className="flex flex-wrap gap-2">
          {(["light", "dark"] as Theme[]).map((t) => (
            <ToggleBtn
              key={t}
              active={theme === t}
              onClick={() => setTheme(t)}
            >
              {t}
            </ToggleBtn>
          ))}
          <span style={{ width: 16 }} />
          {(["warm", "sage", "ink"] as Palette[]).map((p) => (
            <ToggleBtn
              key={p}
              active={palette === p}
              onClick={() => setPalette(p)}
            >
              {p}
            </ToggleBtn>
          ))}
          <span style={{ width: 16 }} />
          {(["EN", "NO"] as Lang[]).map((l) => (
            <ToggleBtn
              key={l}
              active={lang === l}
              onClick={() => setLang(l)}
            >
              {l}
            </ToggleBtn>
          ))}
        </div>
      </section>

      <section>
        <p className="mono mb-3" style={{ color: "var(--fg-mute)" }}>
          swatches (live tokens)
        </p>
        <div
          className="grid gap-3"
          style={{ gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))" }}
        >
          {swatchKeys.map((s) => (
            <div
              key={s.key}
              className="border-paper rounded-md overflow-hidden"
              style={{ background: "var(--bg-2)" }}
            >
              <div
                style={{
                  background: `var(${s.varName})`,
                  height: 80,
                }}
              />
              <div className="p-3">
                <p
                  className="mono"
                  style={{ color: "var(--fg-mute)", fontSize: 10 }}
                >
                  {s.label}
                </p>
                <p style={{ color: "var(--fg)", fontSize: 13 }}>
                  {s.varName}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-16 grid gap-4" style={{ gridTemplateColumns: "1fr 1fr" }}>
        <div
          className="img-ph rounded-md"
          data-caption="placeholder · img-ph"
          style={{ aspectRatio: "4 / 3" }}
        />
        <div className="shadow-polaroid border-paper rounded-md p-2 pb-8" style={{ background: "var(--bg-2)" }}>
          <div
            className="img-ph rounded-sm"
            data-caption="polaroid sample"
            style={{ aspectRatio: "1" }}
          />
          <p
            className="mono mt-3 text-center"
            style={{ color: "var(--fg-mute)" }}
          >
            polaroid · shadow-polaroid
          </p>
        </div>
      </section>

      <footer className="mt-20">
        <p className="mono" style={{ color: "var(--fg-mute)" }}>
          select me — selection should use the accent color.
        </p>
      </footer>
    </main>
  );
}

function ToggleBtn({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      onClick={onClick}
      className="mono px-3 py-2 rounded-md transition-colors"
      style={{
        background: active ? "var(--accent)" : "var(--bg-2)",
        color: active ? "var(--bg)" : "var(--fg)",
        border: "1px solid var(--line-c)",
      }}
    >
      {children}
    </button>
  );
}
