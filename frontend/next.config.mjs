/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "mars.jpl.nasa.gov",
      },
    ],
  },
};

export default nextConfig;
