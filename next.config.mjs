/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    turbo: {
      dev: false, // ✅ This disables the DevTools panel in development
    },
  },
};

export default nextConfig;
