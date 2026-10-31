import type { ReactNode } from "react";
import { cn } from "./cn";

/** Small uppercase label above a heading, with a lime square marker. */
export function Eyebrow({
  children,
  rule = false,
  className,
}: {
  children: ReactNode;
  /** Show a thin rule after the text (desktop editorial detail). */
  rule?: boolean;
  className?: string;
}) {
  return (
    <p
      className={cn(
        "flex items-center gap-3 text-[0.6875rem] font-semibold tracking-[0.1em] uppercase md:text-[0.8125rem]",
        className,
      )}
    >
      <span
        className="size-2 shrink-0 bg-lime outline outline-1 outline-black md:size-2.5"
        aria-hidden="true"
      />
      <span>{children}</span>
      {rule && (
        <span
          className="hidden h-px w-20 bg-black md:block"
          aria-hidden="true"
        />
      )}
    </p>
  );
}
