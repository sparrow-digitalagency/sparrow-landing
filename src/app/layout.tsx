import type { ReactNode } from "react";

// The real root layout (with <html lang>) lives in `app/[locale]/layout.tsx`.
// This pass-through layout exists so that `app/not-found.tsx` can render for
// requests outside the locale segment.
export default function RootLayout({ children }: { children: ReactNode }) {
  return children;
}
