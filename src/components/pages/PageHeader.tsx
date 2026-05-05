import Reveal from "@/components/primitives/Reveal";

type PageHeaderProps = {
  eyebrow: string;
  title: string;
  lede?: string;
  stamp?: string[];
};

export default function PageHeader({ eyebrow, title, lede, stamp }: PageHeaderProps) {
  return (
    <section
      style={{
        padding: "180px 24px 60px",
        position: "relative",
      }}
    >
      <div
        style={{
          maxWidth: 1320,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: stamp ? "1fr auto" : "1fr",
          gap: 40,
          alignItems: "flex-end",
        }}
      >
        <div>
          <Reveal>
            <div
              className="mono"
              style={{
                color: "var(--fg-mute)",
                marginBottom: 22,
                display: "flex",
                alignItems: "center",
                gap: 10,
              }}
            >
              <span
                style={{
                  width: 22,
                  height: 1,
                  background: "var(--accent)",
                }}
              />
              {eyebrow}
            </div>
          </Reveal>
          <Reveal delay={60}>
            <h1
              className="serif"
              style={{
                fontSize: "clamp(56px, 8.4vw, 148px)",
                lineHeight: 0.92,
                margin: 0,
                fontWeight: 300,
                letterSpacing: "-0.045em",
                whiteSpace: "pre-line",
              }}
            >
              {title.split("\n").map((l, i) => (
                <span key={i} style={{ display: "block" }}>
                  {i % 2 === 1 ? (
                    <em style={{ fontStyle: "italic", color: "var(--accent)" }}>
                      {l}
                    </em>
                  ) : (
                    l
                  )}
                </span>
              ))}
            </h1>
          </Reveal>
          {lede && (
            <Reveal delay={120}>
              <p
                style={{
                  marginTop: 28,
                  maxWidth: 640,
                  fontSize: 17,
                  lineHeight: 1.6,
                  color: "var(--fg-soft)",
                }}
              >
                {lede}
              </p>
            </Reveal>
          )}
        </div>

        {stamp && (
          <Reveal delay={180}>
            <div
              style={{
                transform: "rotate(-6deg)",
                border: "2px solid var(--accent)",
                color: "var(--accent)",
                padding: "16px 22px",
                textAlign: "center",
                fontFamily: "var(--font-mono), monospace",
                fontSize: 11,
                lineHeight: 1.5,
                letterSpacing: "0.14em",
                boxShadow: "inset 0 0 0 1px var(--bg)",
                maxWidth: 240,
              }}
            >
              {stamp.map((line, i) => (
                <div
                  key={i}
                  style={{
                    fontWeight: i === 0 ? 700 : 400,
                    fontSize: i === stamp.length - 1 ? 9 : 11,
                    opacity: i === stamp.length - 1 ? 0.7 : 1,
                    marginTop: i === stamp.length - 1 ? 8 : 0,
                  }}
                >
                  {line}
                </div>
              ))}
            </div>
          </Reveal>
        )}
      </div>
    </section>
  );
}
