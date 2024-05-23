/** @type {import('next').NextConfig} */
const prefix = process.env.NODE_ENV === 'production' ? 'https://kimmainsain.github.io/Solotrip/' : ''

const nextConfig = {
  images: {
    unoptimized: true,
  },
  output: "export",
  assetPrefix: prefix,
};

module.exports = nextConfig;
