/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    apiEndpoint: process.env.API_ENDPOINT || 'http://127.0.0.1:3000',
  },
  images: {
    domains: ['raw.githubusercontent.com', '3.bp.blogspot.com'],
    formats: ['image/avif', 'image/webp'],
  },
  webpack(config) {
    const fileLoaderRule = config.module.rules.find((rule) =>
      rule.test?.test?.('.svg'),
    );

    config.module.rules.push(
      {
        ...fileLoaderRule,
        test: /\.svg$/i,
        resourceQuery: /url/,
      },
      {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        resourceQuery: { not: /url/ },
        use: ['@svgr/webpack'],
      },
    );

    fileLoaderRule.exclude = /\.svg$/i;

    return config;
  },
};

module.exports = nextConfig;
