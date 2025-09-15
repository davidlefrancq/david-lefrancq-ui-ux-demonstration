import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  productionBrowserSourceMaps: false,
  sassOptions: {
    includePaths: [path.join(__dirname, "src", "app", "assets", "scss")],
    sourceMap: false,
  },
  webpack: (config, { dev }) => {
    if (!dev) { config.devtool = false; }
    config.watchOptions = {
      poll: 1000,
      aggregateTimeout: 300,
    };
    return config;
  },
};

export default nextConfig;
