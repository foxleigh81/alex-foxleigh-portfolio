/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: 'standalone',
  webpack: function (config) {
    config.module.rules.push({
      test: /\.md$/,
      use: 'markdown-loader'
    });
    return config;
  },
  sassOptions: {
    outputStyle: 'expanded',
    indentWidth: 4,
    additionalData: `
    @use '@themes/vars' as vars;
    @use '@themes/breakpoints' as bp;
  `
  }
};

module.exports = nextConfig;
