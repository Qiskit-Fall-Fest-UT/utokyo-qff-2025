import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
  // Optional: set when deploying to GitHub Pages project site
  ...(basePath
    ? {
        basePath,
        assetPrefix: basePath
      }
    : {}),
};

const withNextIntl = createNextIntlPlugin();

export default withNextIntl(nextConfig);
