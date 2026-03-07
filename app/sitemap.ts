import { MetadataRoute } from 'next'
import content from '@/data/content.json'

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://kavvo.store'

    // Definir las rutas estáticas principales
    const staticRoutes = [
        '',
        '/nosotros',
        '/contacto',
        '/asesoria',
        '/sectores',
        '/blog',
        '/legal/privacidad',
        '/legal/terminos'
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'daily' as const,
        priority: route === '' ? 1 : 0.8,
    }))

    // Rutas dinámicas de Servicios
    const serviceRoutes = content.servicios.map((servicio) => ({
        url: `${baseUrl}/servicios/${servicio.slug}`,
        lastModified: new Date(),
        changeFrequency: 'daily' as const,
        priority: 0.9,
    }))

    // Rutas dinámicas de Sectores
    const sectorRoutes = content.sectores.map((sector) => ({
        url: `${baseUrl}/sectores/${sector.slug}`,
        lastModified: new Date(),
        changeFrequency: 'daily' as const,
        priority: 0.8,
    }))

    // Rutas dinámicas de Blog
    const blogRoutes = content.blog.map((post) => ({
        url: `${baseUrl}/blog/${post.slug}`,
        lastModified: new Date(post.fecha),
        changeFrequency: 'daily' as const,
        priority: 0.7,
    }))

    return [...staticRoutes, ...serviceRoutes, ...sectorRoutes, ...blogRoutes]
}
