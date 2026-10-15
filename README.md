# Silk & Shine Studio - Hair Specialist Landing Page

A simple, elegant single-page site for a professional hair specialist
(keratin, botox, nanoplasty, bio-straightening, reconstruction, custom work).
Built with Next.js 14 (App Router) + TypeScript + Tailwind CSS + Framer Motion.
No backend, no database, no accounts - free Vercel Hobby hosting.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000 - the page is mobile-first, check it at 375px width.

Other commands:

```bash
npm run build   # production build (must pass before deploy)
npm run lint    # ESLint check
npm start       # serve the production build locally
```

## Edit all content in ONE file: src/config.ts

Everything editable lives in `src/config.ts` - no code edits needed elsewhere:

- `businessName`, `tagline`, `taglineShort`
- `hero` - title, subtitle, button labels, image path, stats
- `navLinks` - navbar anchors
- `services` - 6 items: title, description, price, duration
- `gallery` - 6 items: image path, alt text, label
- `whyPoints` - 4 points: title + text
- `faq` - 5 questions + answers
- `socials` - telegram, whatsapp, tiktok, instagram URLs
- `contact` - address, workingHours, phoneNote
- `metadata` - SEO title + description (also used for Open Graph)

Example - change a price in `src/config.ts`:

```ts
{ title: "Keratin Straightening", price: "from $95", ... }
```

Save and the whole site updates.

## Replace images

- Hero: replace `public/hero.jpg` (portrait 900x1100 recommended).
- Gallery: drop files into `public/gallery/` (600x700 recommended),
  then update the `src` paths in `src/config.ts` under `gallery`.
- Social preview: replace `public/og-cover.jpg` (1200x630).
- Favicon: replace `public/favicon.ico`.

All images use `next/image` with `sizes`; only the hero uses `priority`
for fast loading on phones (TikTok traffic).

## Deploy to Vercel for free

1. Push this folder to a GitHub repository.
2. Go to https://vercel.com - Add New - Project - Import the repo.
3. Framework preset: Next.js (auto-detected). No environment variables needed.
4. Click Deploy - Hobby plan is free, HTTPS + Open Graph included.
5. Optional: after deploy, update `metadataBase` in `src/app/layout.tsx`
   with your real domain so shared links show the correct preview.

## Project structure

```
src/config.ts              <- ALL editable content
src/app/layout.tsx         <- SEO, Open Graph, fonts, favicon
src/app/page.tsx           <- composes the 8 sections
src/app/globals.css        <- beige + gold theme
src/components/Navbar.tsx  <- sticky nav + mobile hamburger
src/components/Hero.tsx    <- headline + Telegram/WhatsApp buttons
src/components/Services.tsx
src/components/Gallery.tsx
src/components/WhyMe.tsx
src/components/Faq.tsx     <- accordion
src/components/Contact.tsx <- socials + address + hours
src/components/Footer.tsx
public/hero.jpg, public/gallery/*.jpg, public/og-cover.jpg
```
