// Asset path helper — prefixes public asset paths with the deploy base path.
// On GitHub Pages the site lives under /Hairmaker-app, so /hero.jpg must
// become /Hairmaker-app/hero.jpg. Locally and on Vercel the prefix is empty,
// so paths stay as-is. NEXT_PUBLIC_BASE_PATH is set in next.config.mjs.
export function assetPath(path: string): string {
  const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  if (!path.startsWith("/")) return `${base}/${path}`;
  return `${base}${path}`;
}
