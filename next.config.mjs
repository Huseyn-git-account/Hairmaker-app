/** @type {import('next').NextConfig} */
// Only GitHub Pages needs the /Hairmaker-app subpath (capital H matches repo
// name exactly). Local dev and Vercel use root paths, so gate by GITHUB_ACTIONS.
const isGitHubPages = process.env.GITHUB_ACTIONS === "true";
const basePath = isGitHubPages ? "/Hairmaker-app" : "";

const nextConfig = {
  // Static export for GitHub Pages (outputs to ./out, no server needed).
  output: "export",
  // Project site lives under /Hairmaker-app on GitHub Pages.
  basePath,
  assetPrefix: isGitHubPages ? "/Hairmaker-app/" : undefined,
  // Serve /about/ style URLs so Pages routing works without a server.
  trailingSlash: true,
  // next/image optimization needs a server — serve images as-is.
  images: { unoptimized: true },
  // Expose the same base path to client code for public asset URLs.
  env: { NEXT_PUBLIC_BASE_PATH: basePath },
};

export default nextConfig;


