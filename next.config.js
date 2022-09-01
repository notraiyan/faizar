/** @type {import('next').NextConfig} */
module.exports = {
  experimental: {
    urlImports: [],
  },
  reactStrictMode: true,
  target: "serverless",
  // env: {
  //   AWS_ACCESS_KEY_ID: process.env.AWS_ACCESS_KEY_ID,
  //   AWS_SECRET_ACCESS_KEY: process.env.AWS_SECRET_ACCESS_KEY,
  // },
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
};