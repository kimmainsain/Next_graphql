/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "develop.cdn.solotrip.kr",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;
