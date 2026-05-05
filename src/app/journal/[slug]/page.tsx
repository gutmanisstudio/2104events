"use client";

import Link from "next/link";
import PageHeader from "@/components/pages/PageHeader";
import { useLocale } from "@/hooks/useLocale";

export default function JournalEntry() {
  const [lang] = useLocale();
  return (
    <>
      <PageHeader
        eyebrow={lang === "EN" ? "Journal" : "Journal"}
        title={lang === "EN" ? "Essay\ncoming soon." : "Essay\nkommer snart."}
        lede={
          lang === "EN"
            ? "We're still drafting this one. Check back next week."
            : "Vi skriver fortsatt på denne. Sjekk tilbake neste uke."
        }
      />
      <section style={{ padding: "20px 24px 100px" }}>
        <div style={{ maxWidth: 1320, margin: "0 auto" }}>
          <Link
            href="/journal"
            data-hover
            className="mono"
            style={{ color: "var(--accent)", textDecoration: "none" }}
          >
            ← {lang === "EN" ? "Back to journal" : "Tilbake til journal"}
          </Link>
        </div>
      </section>
    </>
  );
}
