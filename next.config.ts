import type { NextConfig } from "next";

/**
 * Detect GitHub Pages at build time.
 * - GITHUB_PAGES is an env we set in the Actions workflow.
 * - GITHUB_REPOSITORY is "owner/repo" (Actions default).
 */
const isGitHubPages = process.env.GITHUB_PAGES === "true";
const repo = process.env.GITHUB_REPOSITORY?.split("/")[1] ?? "";

const nextConfig: NextConfig = {
  output: "export", // static export (Next 14+)
  trailingSlash: true, // emit folder/index.html (nice for Pages)
  images: { unoptimized: true }, // no Image Optimization API on static hosts
  basePath: isGitHubPages ? `/${repo}` : undefined,
  assetPrefix: isGitHubPages ? `/${repo}/` : undefined,
};

export default nextConfig;
