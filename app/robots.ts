import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: '*',
            allow: '/',
        },
        sitemap: 'https://portfolio-2-0-puce-tau.vercel.app/sitemap.xml',
    }
}
