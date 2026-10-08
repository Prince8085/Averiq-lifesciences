import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /**
   * Next.js blocks cross-origin requests to dev-only assets by default. The dev
   * server initialises with hostname `localhost`, so loading the app over
   * `127.0.0.1` (as local previews and tunnels do) caused every JS chunk to be
   * served as 403 — React never hydrated and scroll-reveal content stayed at
   * opacity 0. Allow both loopback hostnames so the app hydrates either way.
   */
  allowedDevOrigins: ["localhost", "127.0.0.1"],
};

export default nextConfig;
