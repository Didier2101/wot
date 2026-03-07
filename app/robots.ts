import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://kavvo.store'

    return {
        rules: {
            userAgent: '*',
            allow: '/',
            disallow: ['/api/', '/actions/'],
        },
        sitemap: `${baseUrl}/sitemap.xml`,
    }
}
