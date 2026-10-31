import Link from "next/link";
import "./globals.css";

// Fallback for requests that never reach the `[locale]` segment.
export default function GlobalNotFound() {
  return (
    <html lang="en">
      <body className="grid min-h-screen place-items-center">
        <main className="text-center">
          <p className="text-6xl font-bold text-accent">404</p>
          <Link className="mt-6 inline-block underline" href="/">
            Sparrow.Agency
          </Link>
        </main>
      </body>
    </html>
  );
}
