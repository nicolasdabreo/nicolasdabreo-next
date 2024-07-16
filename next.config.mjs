import rehypePrism from '@mapbox/rehype-prism'
import nextMDX from '@next/mdx'
import remarkGfm from 'remark-gfm'

const isProd = process.env.NODE_ENV == 'production';

const nextConfig = {
  basePath: isProd ? "/nicolasdabreo-next" : "",
  output: 'export',
    images: {
    unoptimized: true
  },
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'mdx'],
}

const withMDX = nextMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [rehypePrism],
  },
})

export default withMDX(nextConfig)
