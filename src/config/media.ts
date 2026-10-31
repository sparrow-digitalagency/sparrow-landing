/**
 * Images used on the landing.
 *
 * The Hero currently uses a TEMPORARY neutral image (CSS, see `.hero-placeholder`
 * in globals.css). To switch to the licensed photo:
 *   1. put the optimised file into `public/images/` (e.g. hero.jpg, ≥2400px long side);
 *   2. set `src` below;
 *   3. record source, author, licence and model release in `docs/image-licenses.md`.
 * The alt text is translated in `src/messages/*.json` → `hero.imageAlt`.
 *
 * Stock photos must never be presented as Sparrow.Agency employees.
 */
export type MediaItem = {
  src: string | null;
  width: number;
  height: number;
};

export const media = {
  hero: { src: null, width: 1600, height: 2000 },
} satisfies Record<string, MediaItem>;
