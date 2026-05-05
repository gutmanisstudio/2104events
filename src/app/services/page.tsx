"use client";

import PageHeader from "@/components/pages/PageHeader";
import Services from "@/components/home/Services";
import { useLocale } from "@/hooks/useLocale";

export default function ServicesPage() {
  const [lang] = useLocale();
  return (
    <>
      <PageHeader
        eyebrow={lang === "EN" ? "Services · 2104events" : "Tjenester · 2104events"}
        title={
          lang === "EN"
            ? "What we do,\nin six rooms."
            : "Hva vi gjør,\ni seks rom."
        }
        lede={
          lang === "EN"
            ? "Each service below is a separate practice — staffed by the same team, run with the same care, sized to your day."
            : "Hver tjeneste under er en egen praksis — bemannet av samme team, drevet med samme omtanke, tilpasset din dag."
        }
      />
      <Services />
    </>
  );
}
