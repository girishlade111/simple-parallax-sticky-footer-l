/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // Sub-path for GitHub Pages: https://girishlade111.github.io/simple-parallax-sticky-footer-l/
  // Remove basePath when deploying to a root domain or Vercel.
  basePath: '/simple-parallax-sticky-footer-l',
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig