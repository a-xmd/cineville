module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/cineville',
  i18n: {
    locales: ['nl', 'en'],
    defaultLocale: 'nl',
    localeDetection: false,
  },
  webpack: (config) => {
    config.resolve.fallback = {
      fs: false,
    }
    return config
  },
}
