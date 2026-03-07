import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'
import { createClient } from '@supabase/supabase-js'
import CookieBanner from '@/components/CookieBanner'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
  weight: ['400', '600', '700'],
})
// ── Fetch company config ───────────────────────────────────────────────────
async function getCompanyConfig(): Promise<Record<string, string>> {
  try {
    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
    )
    const { data } = await supabase.from('company_config').select('key, value')
    if (!data) return {}
    return Object.fromEntries(data.map((row) => [row.key, row.value]))
  } catch {
    return {
      company_name: 'WOT Traducciones Bogotá',
      company_phone: '+57 312 3902406',
      company_email: 'traduccionesenbogotawot@gmail.com',
      company_address: 'Carrera 14B #161-54 Torre 2/1002, Bogotá, Colombia',
      seo_title: 'Traductores Oficiales en Bogotá | WOT Traducciones',
      seo_description: 'Agencia de traducciones oficiales, juramentadas y certificadas en Bogotá desde 2010. Documentos jurídicos, académicos, técnicos y médicos. Entrega en 24–72 h.',
      seo_keywords: 'traducciones bogotá, traducciones juramentadas, traductores oficiales colombia, traducción certificada',
    }
  }
}

// ── Metadata ───────────────────────────────────────────────────────────────
export async function generateMetadata(): Promise<Metadata> {
  const config = await getCompanyConfig()
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://kavvo.store'

  return {
    title: {
      default: config.seo_title ?? 'Traductores Oficiales en Bogotá | WOT Traducciones',
      template: '%s | WOT Traducciones Bogotá',
    },
    description: config.seo_description,
    keywords: config.seo_keywords,
    authors: [{ name: 'WOT Traducciones Bogotá' }],
    creator: 'WOT Traducciones Bogotá',
    publisher: 'WOT Traducciones Bogotá',
    metadataBase: new URL(siteUrl),
    robots: {
      index: true, follow: true,
      googleBot: { index: true, follow: true },
    },
    openGraph: {
      type: 'website',
      locale: 'es_CO',
      alternateLocale: ['en_US'],
      url: siteUrl,
      title: config.seo_title,
      description: config.seo_description,
      siteName: 'WOT Traducciones Bogotá',
      images: [
        {
          url: `${siteUrl}/logo-nuevo.png`,
          width: 800,
          height: 600,
          alt: 'WOT Traducciones Logo'
        }
      ]
    },
    twitter: {
      card: 'summary_large_image',
      title: config.seo_title,
      description: config.seo_description,
      images: [`${siteUrl}/logo-nuevo.png`]
    },
    alternates: {
      canonical: siteUrl,
      languages: {
        'es-CO': `${siteUrl}/?lang=es`,
        'en-US': `${siteUrl}/?lang=en`,
      },
    },
  }
}

// ── Root layout ────────────────────────────────────────────────────────────
export default async function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const config = await getCompanyConfig()
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://kavvo.store'

  // JSON-LD — LocalBusiness + ProfessionalService
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': ['LocalBusiness', 'ProfessionalService'],
        '@id': `${siteUrl}/#organization`,
        name: config.company_name ?? 'WOT Traducciones Bogotá',
        description: config.seo_description,
        url: siteUrl,
        logo: `${siteUrl}/logo-servicio-traductores-bogota.jpg`,
        image: `${siteUrl}/logo-servicio-traductores-bogota.jpg`,
        telephone: config.company_phone ?? '+57 312 3902406',
        email: config.company_email ?? 'traduccionesenbogotawot@gmail.com',
        foundingDate: config.company_founded ?? '2010',
        address: {
          '@type': 'PostalAddress',
          streetAddress: config.company_address ?? 'Carrera 14B #161-54 Torre 2/1002',
          addressLocality: 'Bogotá',
          addressRegion: 'Cundinamarca',
          postalCode: '110221',
          addressCountry: 'CO',
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: '4.7491',
          longitude: '-74.0498',
        },
        openingHoursSpecification: [
          {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
            opens: '08:00',
            closes: '18:00',
          },
          {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Saturday'],
            opens: '09:00',
            closes: '13:00',
          },
        ],
        priceRange: '$$',
        currenciesAccepted: 'COP, USD',
        paymentAccepted: 'Cash, Credit Card, Bank Transfer',
        areaServed: {
          '@type': 'City',
          name: 'Bogotá',
          sameAs: 'https://www.wikidata.org/wiki/Q2841',
        },
        sameAs: [siteUrl, 'https://www.facebook.com/WOTTraducciones'],
        hasMap: `https://maps.google.com/?q=Carrera+14B+161-54+Torre+2+Bogota`,
        contactPoint: {
          '@type': 'ContactPoint',
          telephone: config.company_phone ?? '+57 312 3902406',
          contactType: 'customer service',
          availableLanguage: ['Spanish', 'English'],
        },
      },
      {
        '@type': 'WebSite',
        '@id': `${siteUrl}/#website`,
        url: siteUrl,
        name: config.company_name,
        description: config.seo_description,
        inLanguage: ['es-CO', 'en-US'],
        potentialAction: {
          '@type': 'SearchAction',
          target: `${siteUrl}/?q={search_term_string}`,
          'query-input': 'required name=search_term_string',
        },
      },
    ],
  }

  return (
    <html lang="es-CO" className={`${inter.variable} ${playfair.variable} scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <link rel="icon" type="image/png" href="/logo-nuevo.png" />
      </head>
      <body className="font-sans bg-white text-slate-800 antialiased overflow-x-hidden leading-relaxed">
        {children}
        <CookieBanner />
      </body>
    </html>
  )
}
