# Sparrow Landing

Отдельный рекламный лендинг Sparrow.Agency на четырёх языках (EN / UA / PL / RU).

Этот репозиторий не связан с основным корпоративным сайтом Sparrow.Agency и не вносит в него изменений.

## Стек

Next.js 16 (App Router) · TypeScript (strict) · Tailwind CSS 4 (PostCSS) · next-intl 4 · pnpm

## Быстрый старт

```bash
pnpm install
cp .env.example .env.local
pnpm dev            # http://localhost:3000
```

| Команда               | Назначение                             |
| --------------------- | -------------------------------------- |
| `pnpm dev`            | локальная разработка                   |
| `pnpm build`          | production-сборка                      |
| `pnpm lint`           | ESLint                                 |
| `pnpm typecheck`      | генерация типов маршрутов + TypeScript |
| `pnpm check:messages` | одинаковый набор ключей во всех языках |
| `pnpm format:check`   | Prettier                               |
| `pnpm check`          | все проверки, кроме сборки             |

## Языки и URL

| URL   | Язык       | `lang` / `hreflang`  |
| ----- | ---------- | -------------------- |
| `/`   | English    | `en` (+ `x-default`) |
| `/ua` | Українська | `uk`                 |
| `/pl` | Polski     | `pl`                 |
| `/ru` | Русский    | `ru`                 |

- `/en` и `/en/*` — постоянный редирект (308) на `/` без префикса.
- Автоматического определения языка нет: ни по геолокации, ни по `Accept-Language`, ни по cookie. Язык меняется только переключателем.
- Тексты лежат в `src/messages/*.json` — отдельно для каждого языка. Статус (утверждено / черновик) — в [docs/CONTENT_STATUS.md](./docs/CONTENT_STATUS.md).

## Структура лендинга

Одна страница, порядок секций задан в `src/config/sections.ts`:

Hero → Task Selector → Services → Client Logos → Cases → Consultation CTA → Why Sparrow → Process → FAQ → Lead Form

Шесть направлений услуг — единый конфиг `src/config/services.ts`:
Websites · Meta Ads · Google Ads · SMM · SEO & GEO · Full-service Digital (акцент).
Branding & Design не является отдельным направлением.

Выбор услуги ведёт к её блоку (`/#meta-ads`) или к форме с предвыбранной услугой (`/?service=meta-ads#contact`), см. `src/lib/lead/intent.ts`. Варианты Task Selector — `src/config/task-selector.ts`.

## Структура проекта

```
src/
  app/
    [locale]/            layout, page (лендинг), not-found, [...rest]
    sitemap.ts robots.ts not-found.tsx layout.tsx globals.css (дизайн-токены)
  components/
    layout/              Header, Footer, Logo, LocaleSwitcher, MobileMenu, StickyCta
    sections/            Hero, HeroMedia, TaskSelector, ServicesSection, ClientLogos, Cases, ConsultationCta, WhySparrow, Process, Faq, LeadForm
    ui/                  Container, Section, button, LimeHighlight, Eyebrow, Chip, icons, cn
  config/                site, services, task-selector, sections, media
  i18n/                  routing, request, navigation
  lib/
    lead/intent.ts       контракт ?service= для формы (форма — Этап 2)
    seo/alternates.ts    canonical + hreflang
  messages/              en, uk, pl, ru
  proxy.ts               next-intl (без автоопределения языка)
scripts/check-messages.mjs
```

## Дизайн-система

Sparrow.Agency Visual Brand System — `src/app/globals.css` (`@theme`):

| Роль                                | Значение                                                                               |
| ----------------------------------- | -------------------------------------------------------------------------------------- |
| Фон / вспомогательный / контрастный | `#FFFFFF` / `#F7F7F3` / `#000000`                                                      |
| Текст / второстепенный / подписи    | `#000000` / `#3A3A36` / `#5F5F5A`                                                      |
| Линии                               | `#EAEAE4`                                                                              |
| Акцент                              | LIME `#D8FA65` — только заливка с чёрным текстом                                       |
| Шрифты                              | Geologica (заголовки) + Inter Tight (текст), `next/font`, latin + latin-ext + cyrillic |

Базовые компоненты — `src/components/ui`: `buttonClass` (primary / secondary / outline), `LimeHighlight`, `Eyebrow`, `chipClass`, `Section` (surface: default / muted / inverse), `Container`, иконки.

Hero (Concept A) — `src/components/sections/Hero.tsx`. Изображение подключается через `src/config/media.ts`; пока `src: null`, показывается временное нейтральное изображение. Лицензии — [docs/image-licenses.md](./docs/image-licenses.md).

На мобильных и планшетах — одна закреплённая кнопка «Получить предложение» (`StickyCta`): появляется после Hero и скрывается у формы заявки.

## Индексация

Пока `NEXT_PUBLIC_ALLOW_INDEXING` не равно `true`, `robots.txt` закрывает сайт, а страницы помечены `noindex`. Включается только при запуске production.

## Работа с репозиторием

См. [CONTRIBUTING.md](./CONTRIBUTING.md).
