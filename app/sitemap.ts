import { MetadataRoute } from 'next'
import content from '@/data/content.json'

/**
 * Next.js sitemap generator optimized for kavvo.store.
 * This file is automatically transformed into XML (application/xml) with the correct headers.
 */
export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://kavvo.store'

    // 1. Static Routes (Primary business focus)
    const staticRoutes = [
        { url: '', priority: 1.0 },
        { url: '/nosotros', priority: 0.8 },
        { url: '/contacto', priority: 0.8 },
        { url: '/asesoria', priority: 0.8 },
        { url: '/sectores', priority: 0.8 },
        { url: '/blog', priority: 0.6 },
    ].map((route) => ({
        url: `${baseUrl}${route.url}`,
        lastModified: new Date(),
        changeFrequency: 'daily' as const,
        priority: route.priority,
    }))

    // 2. Dynamic Services (Critical business pages)
    const serviceRoutes = content.servicios.map((servicio) => ({
        url: `${baseUrl}/servicios/${servicio.slug}`,
        lastModified: new Date(),
        changeFrequency: 'daily' as const,
        priority: 0.8,
    }))

    // 3. Dynamic Sectors
    const sectorRoutes = content.sectores.map((sector) => ({
        url: `${baseUrl}/sectores/${sector.slug}`,
        lastModified: new Date(),
        changeFrequency: 'daily' as const,
        priority: 0.8,
    }))

    // 4. Dynamic Blog (Informational, lower SEO selling priority)
    const blogRoutes = content.blog.map((post) => {
        // Ensure date is valid for XML sitemap standards
        const postDate = post.fecha ? new Date(post.fecha) : new Date()
        return {
            url: `${baseUrl}/blog/${post.slug}`,
            lastModified: postDate,
            changeFrequency: 'weekly' as const,
            priority: 0.5,
        }
    })

    // Output unified sitemap (excluding legal/testing as requested for focus)
    return [...staticRoutes, ...serviceRoutes, ...sectorRoutes, ...blogRoutes]
}
