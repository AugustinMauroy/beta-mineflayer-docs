const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
});
 
module.exports = withNextra({
  basePath: '/beta-mineflayer-docs',
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
});
