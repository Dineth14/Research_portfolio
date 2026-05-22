const isProduction = process.env.NODE_ENV === "production";
const repositoryName = process.env.GITHUB_REPOSITORY?.split("/")[1] ?? "Research_portfolio";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: isProduction ? `/${repositoryName}` : "",
};

export default nextConfig;
