import type { MetadataRoute } from 'next'

const baseUrl = 'https://portfolio-2-0-puce-tau.vercel.app'

export default function sitemap(): MetadataRoute.Sitemap {
    const routes = ['', '/projects', '/about', '/contact']

    return routes.map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
    }))
}
