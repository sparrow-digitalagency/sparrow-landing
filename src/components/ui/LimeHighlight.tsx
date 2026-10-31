import type { ReactNode } from "react";
import { cn } from "./cn";

/** Lime "marker" fill behind a word (black text on lime — always readable). */
export function LimeHighlight({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "bg-lime box-decoration-clone px-[0.12em] pb-[0.04em] text-on-accent",
        className,
      )}
    >
      {children}
    </span>
  );
}
