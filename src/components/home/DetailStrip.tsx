"use client";

import { useEffect, useRef, useState } from "react";
import Media from "@/components/primitives/Media";
import { MEDIA } from "@/content/media";

export default function DetailStrip() {
  const wrapRef = useRef<HTMLElement | null>(null);
  const [t, setT] = useState(0);

  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const el = wrapRef.current;
        if (!el) return;
        const r = el.getBoundingClientRect();
        const center = r.top + r.height / 2 - window.innerHeight / 2;
        setT(Math.max(-1, Math.min(1, -center / window.innerHeight)));
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <section
      ref={wrapRef as never}
      style={{ padding: "80px 32px", overflow: "hidden" }}
    >
      <div
        className="detail-grid"
        style={{
          maxWidth: 1600,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: 24,
        }}
      >
        <div style={{ transform: `translateY(${-t * 60}px)` }}>
          <Media
            src={MEDIA.babyshower_3}
            caption="TABLESCAPE DETAIL · IVORY LINEN"
            ratio="3 / 4"
          />
        </div>
        <div style={{ transform: `translateY(${t * 30}px)`, marginTop: 60 }}>
          <Media
            src={MEDIA.foodmenu}
            caption="FLORAL — GARDEN ROSE & EUCALYPTUS"
            ratio="3 / 4"
          />
        </div>
        <div style={{ transform: `translateY(${-t * 80}px)` }}>
          <Media
            src={MEDIA.babyshower_1}
            caption="CALLIGRAPHY · MENU CARD"
            ratio="3 / 4"
          />
        </div>
      </div>
      <style>{`
        @media (max-width: 900px) {
          .detail-grid { grid-template-columns: 1fr !important; gap: 16px !important; }
          .detail-grid > div { transform: none !important; margin-top: 0 !important; }
        }
      `}</style>
    </section>
  );
}
