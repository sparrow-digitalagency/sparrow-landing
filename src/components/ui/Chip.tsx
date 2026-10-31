import { cn } from "./cn";

/** Chip styles for Task Selector options and service tags. */
export function chipClass(selected = false, className?: string) {
  return cn(
    "inline-flex min-h-11 items-center gap-2 border px-4 font-display text-sm font-bold transition-colors",
    selected
      ? "bg-lime text-on-accent border-black"
      : "border-line-strong bg-white hover:border-black",
    className,
  );
}
