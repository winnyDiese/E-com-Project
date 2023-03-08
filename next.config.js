/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env:{
    MONGODB_URL:"mongodb://127.0.0.1:27017/ecomm"
  }
}

module.exports = nextConfig
