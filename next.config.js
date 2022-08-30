module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/cineville',
  webpack: (config) => {
    config.resolve.fallback = {
      fs: false,
    }
    return config
  },
}
