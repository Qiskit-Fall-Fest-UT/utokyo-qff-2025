<!--
This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Internationalization (JA/EN with next-intl)

- Default locale: `ja` (Japanese). English available at `/en`.
- Language routes are statically exported to `/ja` and `/en`.
- Language switcher is in the navbar; the root path `/` redirects to `/ja`.

Tech details:

- Messages live in `messages/ja.json` and `messages/en.json`.
- Provider lives in `app/[locale]/layout.tsx` via `NextIntlClientProvider`.
- Pages under `app/[locale]` use `useTranslations` and `useLocale`.
- `next-intl` plugin is enabled in `next.config.ts`.

### GitHub Pages

This repo is set up to deploy to GitHub Pages via `.github/workflows/nextjs.yml`.

- If deploying to a project site (e.g. `/owner/repo`), the Pages action auto-injects a basePath; no manual change needed.
- For local builds that mimic a project base path, set `NEXT_PUBLIC_BASE_PATH`:

```bash
NEXT_PUBLIC_BASE_PATH=/utokyo-qff-2025 npm run build
```

Output lives in `out/` and can be served via `npm run preview`.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
-->

## Utokyo Qiskit Fall Fest 2025

## ハッカソンを始める前の事前準備について

Check the (https://quantum-tokyo.github.io/introduction/intro.html) note for things to do before the hackathon
