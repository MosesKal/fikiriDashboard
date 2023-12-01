/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  swcMinify: true,
  basePath: isProd ? '/nowa/preview' : undefined,
  assetPrefix : isProd ? 'https://nextjs.spruko.com/nowa/preview/' : undefined,
  images: {
    loader: 'imgix',
    path: '/',
  },
}

module.exports = nextConfig
