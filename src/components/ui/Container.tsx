import type { ComponentPropsWithoutRef } from "react";
import { cn } from "./cn";

/** Page container: 1280px content, 20px gutters on mobile, 40/80px on larger screens. */
export function Container({
  className,
  ...props
}: ComponentPropsWithoutRef<"div">) {
  return (
    <div
      className={cn(
        "mx-auto box-content max-w-page px-gutter md:px-10 xl:px-20",
        className,
      )}
      {...props}
    />
  );
}
