import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

const nextConfig = {
  experimental: {
    ppr: true,
    dynamicIO: true,
    reactCompiler: true,
  },
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '~': path.join(__dirname, 'src'),
    }
    return config
  },
}

export default nextConfig
