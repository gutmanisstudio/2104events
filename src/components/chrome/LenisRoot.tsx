"use client";
import { useLenis } from "@/hooks/useLenis";

export default function LenisRoot({ children }: { children: React.ReactNode }) {
  useLenis();
  return <>{children}</>;
}
