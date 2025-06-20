// next.config.js
module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'example.com', // replace with your actual image host
        port: '',
        pathname: '/**',
      },
    ],
  },
}
