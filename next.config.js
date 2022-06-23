/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["upload.wikimedia.org", "swapi.dev", "static.wikia.nocookie.net"]
  }
}

module.exports = nextConfig
