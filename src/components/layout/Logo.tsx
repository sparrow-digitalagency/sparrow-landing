import { Link } from "@/i18n/navigation";
import { cn } from "@/components/ui/cn";

/** Text wordmark until the SVG logo is provided. */
export function Logo({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      className={cn(
        "flex min-h-11 items-center gap-2 font-display text-[1.0625rem] font-extrabold tracking-[-0.02em] md:text-[1.375rem]",
        className,
      )}
    >
      <span
        className="size-2.5 shrink-0 border-2 border-black bg-lime md:size-3"
        aria-hidden="true"
      />
      Sparrow.Agency
    </Link>
  );
}
