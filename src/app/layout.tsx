import type { Metadata } from "next";
import { fraunces, geist, mono } from "./fonts";
import LenisRoot from "@/components/chrome/LenisRoot";
import CursorDot from "@/components/primitives/CursorDot";
import "./globals.css";

export const metadata: Metadata = {
  title: "2104events — Oslo · Event Planning & Management",
  description:
    "An Oslo studio planning and producing social and corporate events with care, taste, and a calm hand.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${geist.variable} ${mono.variable}`}
    >
      <body>
        <LenisRoot>{children}</LenisRoot>
        <CursorDot />
      </body>
    </html>
  );
}
