import type { NextConfig } from "next";
import { resolve } from "path";

const projectRoot = resolve(__dirname);

const nextConfig: NextConfig = {
  transpilePackages: ["@willow/ui-kit", "@willow/icons"],
  turbopack: {
    root: projectRoot,
    resolveAlias: {
      tailwindcss: resolve(projectRoot, "node_modules/tailwindcss"),
    },
  },
};

export default nextConfig;
