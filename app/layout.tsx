import type { Metadata } from "next";
import { Inter } from "next/font/google";
import LenisProvider from "./lenis-provider";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  // TODO: confirm final title + description with client
  title: "2104Events — Oslo event planning",
  description:
    "2104Events — Oslo-based event planning and management for social and corporate events.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable}`}>
      <body className="bg-white text-ink">
        <LenisProvider>
          <main>{children}</main>
        </LenisProvider>
      </body>
    </html>
  );
}
