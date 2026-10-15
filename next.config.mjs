/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export for GitHub Pages (outputs to ./out, no server needed).
  output: "export",
  // Project site lives under /Hairmaker-app (capital H matches repo name exactly).
  basePath: "/Hairmaker-app",
  assetPrefix: "/Hairmaker-app/",
  // Serve /about/ style URLs so Pages routing works without a server.
  trailingSlash: true,
  // next/image optimization needs a server — serve images as-is.
  images: { unoptimized: true },
};

export default nextConfig;

