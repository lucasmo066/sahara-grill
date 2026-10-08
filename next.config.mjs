/** @type {import('next').NextConfig} */
const nextConfig = {
  // Isolate production verification from a running local development server.
  distDir: process.env.NEXT_BUILD_DIR || ".next",
  images: {
    deviceSizes: [
      480, 640, 750, 828, 960, 1080, 1200, 1440, 1600, 1920, 2048, 2560, 3840,
    ],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
    ],
  },
};

export default nextConfig;
