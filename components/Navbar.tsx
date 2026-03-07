'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { ChevronDown, MessageCircle, Globe, Menu, X } from 'lucide-react'
import type { Locale } from '@/lib/i18n'
import { cn } from '@/lib/utils'

// ── Estructura del menú (coincide exactamente con las imágenes) ──────────────

const NAV_ITEMS = {
    servicios: {
        label: { es: 'Servicios', en: 'Services' },
        items: [
            { slug: 'traduccion-oficial', es: 'Traducción Oficial', en: 'Official Translation' },
            { slug: 'traduccion-academica', es: 'Traducción Académica', en: 'Academic Translation' },
            { slug: 'traduccion-registro-civil', es: 'Registro Civil', en: 'Civil Registry' },
            { slug: 'traduccion-legal', es: 'Jurídica / Legal', en: 'Legal / Juridical' },
            { slug: 'traduccion-financiera', es: 'Financiera', en: 'Financial' },
            { slug: '', es: 'Ver todos', en: 'View all', href: '/#servicios' },
        ],
    },
    sectores: {
        label: { es: 'Sectores', en: 'Sectors' },
        items: [
            { slug: 'juridico', es: 'Legal', en: 'Legal' },
            { slug: 'medico', es: 'Médico', en: 'Medical' },
            { slug: 'academico', es: 'Académico', en: 'Academic' },
            { slug: 'financiero-seguros', es: 'Financiero', en: 'Financial' },
            { slug: 'it-software', es: 'Tecnológico', en: 'Technological' },
            { slug: 'cientifico', es: 'Científico', en: 'Scientific' },
            { slug: '', es: 'Ver detalles', en: 'View details', href: '/sectores' },
        ],
    },
}

interface NavbarProps {
    locale: Locale
    currentPath?: string
}

export default function Navbar({ locale, currentPath = '' }: NavbarProps) {
    const [mobileOpen, setMobileOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handler = () => setScrolled(window.scrollY > 20)
        window.addEventListener('scroll', handler, { passive: true })
        return () => window.removeEventListener('scroll', handler)
    }, [])

    const otherLocale: Locale = locale === 'es' ? 'en' : 'es'
    const switchUrl = currentPath
        ? `${currentPath}${currentPath.includes('?') ? '&' : '?'}lang=${otherLocale}`
        : `/?lang=${otherLocale}`

    return (
        <>
            <header
                className={cn(
                    "sticky top-0 z-[100] w-full bg-white/95 backdrop-blur-md border-b border-gray-200 transition-all duration-300 shadow-[0_1px_12px_rgba(26,58,108,0.07)]",
                    scrolled && "shadow-[0_2px_24px_rgba(26,58,108,0.12)] bg-white/100"
                )}
            >
                <div className="container mx-auto px-5 md:px-10 lg:px-16 flex items-center justify-between py-3.5 gap-6">
                    {/* Brand */}
                    <Link href={`/?lang=${locale}`} className="flex shrink-0 items-center gap-1.5 md:gap-2 no-underline group">
                        <Image
                            src="/logo-nuevo.png"
                            alt="WOT Traducciones"
                            width={90} height={90}
                            priority={true}
                            loading="eager"
                            className="w-[52px] h-[52px] md:w-[72px] md:h-[72px] xl:w-[80px] xl:h-[80px] rounded-md object-contain drop-shadow-sm transition-transform duration-300 group-hover:scale-105"
                        />
                        <div className="text-[#0c1a35] font-serif text-[1.1rem] md:text-[1.45rem] font-extrabold leading-none tracking-tight">
                            WOT {locale === 'es' ? 'Traducciones' : 'Translations'}
                        </div>
                    </Link>

                    {/* Desktop nav */}
                    <nav className="hidden lg:block" aria-label={locale === 'es' ? 'Menú principal' : 'Main menu'}>
                        <ul className="flex items-center gap-7 list-none m-0 p-0">
                            {/* Inicio */}
                            <li>
                                <Link href={`/?lang=${locale}`} className="group text-gray-700 text-sm font-medium hover:text-blue-700 relative flex items-center transition-colors">
                                    {locale === 'es' ? 'Inicio' : 'Home'}
                                    <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-yellow-500 rounded-sm transition-all duration-300 group-hover:w-full"></span>
                                </Link>
                            </li>

                            {/* Servicios — dropdown */}
                            <li className="relative group">
                                <button className="text-gray-700 text-sm font-medium group-hover:text-blue-700 relative flex items-center gap-1 transition-colors cursor-pointer bg-transparent border-none p-0">
                                    {NAV_ITEMS.servicios.label[locale]}
                                    <ChevronDown size={13} className="transition-transform duration-200 group-hover:rotate-180" />
                                    <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-yellow-500 rounded-sm transition-all duration-300 group-hover:w-full"></span>
                                </button>
                                <div className="absolute top-full left-0 mt-3 hidden w-56 flex-col overflow-hidden rounded-xl bg-white shadow-[0_10px_40px_rgba(0,0,0,0.12)] border border-gray-100 group-hover:flex transition-opacity opacity-0 group-hover:opacity-100 animate-in fade-in zoom-in-95" role="menu">
                                    {NAV_ITEMS.servicios.items.map((item, idx) => (
                                        <Link
                                            key={item.slug || `srv-${idx}`}
                                            href={item.href ? (item.href.includes('?') ? `${item.href}&lang=${locale}` : `${item.href}?lang=${locale}`) : `/servicios/${item.slug}?lang=${locale}`}
                                            className="px-5 py-3 text-sm text-gray-700 font-medium hover:bg-blue-50 hover:text-blue-700 transition-colors border-b border-gray-50 last:border-0"
                                            role="menuitem"
                                        >
                                            {item[locale]}
                                        </Link>
                                    ))}
                                </div>
                            </li>

                            {/* Sectores — dropdown */}
                            <li className="relative group">
                                <button className="text-gray-700 text-sm font-medium group-hover:text-blue-700 relative flex items-center gap-1 transition-colors cursor-pointer bg-transparent border-none p-0">
                                    {NAV_ITEMS.sectores.label[locale]}
                                    <ChevronDown size={13} className="transition-transform duration-200 group-hover:rotate-180" />
                                    <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-yellow-500 rounded-sm transition-all duration-300 group-hover:w-full"></span>
                                </button>
                                <div className="absolute top-full left-0 mt-3 hidden w-52 flex-col overflow-hidden rounded-xl bg-white shadow-[0_10px_40px_rgba(0,0,0,0.12)] border border-gray-100 group-hover:flex transition-opacity opacity-0 group-hover:opacity-100 animate-in fade-in zoom-in-95" role="menu">
                                    {NAV_ITEMS.sectores.items.map((item, idx) => (
                                        <Link
                                            key={item.slug || `sec-${idx}`}
                                            href={item.href
                                                ? (item.href.includes('?') ? `${item.href}&lang=${locale}` : `${item.href}?lang=${locale}`)
                                                : (item.slug ? `/sectores/${item.slug}?lang=${locale}` : `/sectores?lang=${locale}`)
                                            }
                                            className="px-5 py-3 text-sm text-gray-700 font-medium hover:bg-blue-50 hover:text-blue-700 transition-colors border-b border-gray-50 last:border-0"
                                            role="menuitem"
                                        >
                                            {item[locale]}
                                        </Link>
                                    ))}
                                </div>
                            </li>

                            {/* Asesoría */}
                            <li>
                                <Link href={`/asesoria?lang=${locale}`} className="group text-blue-700 text-sm font-semibold hover:text-blue-800 relative flex items-center transition-colors">
                                    {locale === 'es' ? 'Asesoría' : 'Advisory'}
                                    <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-yellow-500 rounded-sm transition-all duration-300 group-hover:w-full"></span>
                                </Link>
                            </li>

                            {/* Blog */}
                            <li>
                                <Link href={`/blog?lang=${locale}`} className="group text-gray-700 text-sm font-medium hover:text-blue-700 relative flex items-center transition-colors">
                                    Blog
                                    <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-yellow-500 rounded-sm transition-all duration-300 group-hover:w-full"></span>
                                </Link>
                            </li>

                            {/* Nosotros */}
                            <li>
                                <Link href={`/nosotros?lang=${locale}`} className="group text-gray-700 text-sm font-medium hover:text-blue-700 relative flex items-center transition-colors">
                                    {locale === 'es' ? 'Nosotros' : 'About'}
                                    <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-yellow-500 rounded-sm transition-all duration-300 group-hover:w-full"></span>
                                </Link>
                            </li>

                            {/* CTA */}
                            <li>
                                <Link
                                    href={`/contacto?lang=${locale}`}
                                    className="inline-flex items-center justify-center gap-1.5 px-5 py-2.5 rounded-md bg-[#1a3a6c] hover:bg-[#122040] text-white font-extrabold text-[0.82rem] tracking-wider uppercase no-underline transition-all duration-200 shadow-[0_2px_12px_rgba(26,58,108,0.3)] hover:-translate-y-px hover:shadow-[0_4px_18px_rgba(26,58,108,0.4)] whitespace-nowrap"
                                >
                                    {locale === 'es' ? 'CONTACTO' : 'CONTACT'}
                                </Link>
                            </li>

                            {/* Lang toggle */}
                            <li>
                                <Link
                                    href={switchUrl}
                                    title={otherLocale === 'en' ? 'Switch to English' : 'Cambiar a Español'}
                                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border-2 border-blue-700 text-blue-700 text-[0.78rem] font-bold hover:bg-blue-700 hover:text-white transition-colors duration-200 no-underline whitespace-nowrap"
                                >
                                    <Globe size={13} />
                                    {otherLocale.toUpperCase()}
                                </Link>
                            </li>
                        </ul>
                    </nav>

                    {/* Mobile hamburger */}
                    <div className="flex lg:hidden items-center gap-3">
                        <Link
                            href={switchUrl}
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border-2 border-blue-700 text-blue-700 text-xs font-bold hover:bg-blue-700 hover:text-white transition-colors duration-200 no-underline whitespace-nowrap"
                        >
                            <Globe size={12} />
                            {otherLocale.toUpperCase()}
                        </Link>
                        <button
                            className="flex items-center justify-center p-1.5 bg-transparent border-2 border-gray-300 rounded-md text-blue-900 transition-colors hover:border-blue-700 hover:text-blue-700 cursor-pointer"
                            onClick={() => setMobileOpen((v) => !v)}
                            aria-label={mobileOpen ? 'Cerrar menú' : 'Abrir menú'}
                            aria-expanded={mobileOpen}
                        >
                            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
                        </button>
                    </div>
                </div>
            </header>

            {/* Mobile menu Drawer */}
            {mobileOpen && (
                <>
                    {/* Backdrop */}
                    <div className="fixed inset-0 z-[150] bg-[#0c1a35]/40 backdrop-blur-sm lg:hidden animate-in fade-in" onClick={() => setMobileOpen(false)} aria-hidden="true" />

                    {/* Drawer */}
                    <div className="fixed inset-y-0 right-0 z-[200] w-[85%] max-w-sm bg-white overflow-y-auto shadow-2xl lg:hidden flex flex-col animate-in slide-in-from-right duration-300" role="dialog" aria-label="Menú móvil">
                        <div className="flex items-center justify-between px-5 py-5 border-b border-gray-100 bg-white sticky top-0 z-10">
                            <div className="flex items-center gap-2">
                                <Image src="/logo-nuevo.png" alt="WOT" width={32} height={32} className="w-8 h-8 rounded-md" />
                                <span className="font-serif font-bold text-[#0c1a35] text-lg">WOT Traducciones</span>
                            </div>
                            <button onClick={() => setMobileOpen(false)} className="p-1.5 text-gray-400 hover:text-blue-700 hover:bg-blue-50 rounded-md transition-colors" aria-label="Cerrar menú">
                                <X size={24} />
                            </button>
                        </div>

                        <nav className="flex flex-col flex-1 pb-6">
                            <Link href={`/?lang=${locale}`} className="block px-5 py-4 text-gray-800 font-semibold text-base no-underline border-b border-gray-100 hover:bg-blue-50 hover:text-blue-700 transition-colors" onClick={() => setMobileOpen(false)}>
                                {locale === 'es' ? 'Inicio' : 'Home'}
                            </Link>

                            <div className="border-b border-gray-200">
                                <div className="px-5 pt-3.5 pb-1.5 text-[0.7rem] font-extrabold uppercase tracking-widest text-gray-400">
                                    {NAV_ITEMS.servicios.label[locale]}
                                </div>
                                {NAV_ITEMS.servicios.items.map((item, idx) => (
                                    <Link
                                        key={item.slug || `srv-mo-${idx}`}
                                        href={item.href ? (item.href.includes('?') ? `${item.href}&lang=${locale}` : `${item.href}?lang=${locale}`) : `/servicios/${item.slug}?lang=${locale}`}
                                        className="block px-5 py-2.5 pl-8 text-sm font-medium text-gray-700 border-b border-gray-100 last:border-0 hover:bg-blue-50 hover:text-blue-700 transition-colors no-underline"
                                        onClick={() => setMobileOpen(false)}
                                    >
                                        {item[locale]}
                                    </Link>
                                ))}
                            </div>

                            <div className="border-b border-gray-200">
                                <div className="px-5 pt-3.5 pb-1.5 text-[0.7rem] font-extrabold uppercase tracking-widest text-gray-400">
                                    {NAV_ITEMS.sectores.label[locale]}
                                </div>
                                {NAV_ITEMS.sectores.items.map((item, idx) => (
                                    <Link
                                        key={item.slug || `sec-mo-${idx}`}
                                        href={item.href
                                            ? (item.href.includes('?') ? `${item.href}&lang=${locale}` : `${item.href}?lang=${locale}`)
                                            : (item.slug ? `/sectores/${item.slug}?lang=${locale}` : `/sectores?lang=${locale}`)
                                        }
                                        className="block px-5 py-2.5 pl-8 text-sm font-medium text-gray-700 border-b border-gray-100 last:border-0 hover:bg-blue-50 hover:text-blue-700 transition-colors no-underline"
                                        onClick={() => setMobileOpen(false)}
                                    >
                                        {item[locale]}
                                    </Link>
                                ))}
                            </div>

                            <Link href={`/asesoria?lang=${locale}`} className="block px-5 py-4 text-blue-700 font-bold text-base no-underline border-b border-gray-100 hover:bg-blue-50 hover:text-blue-800 transition-colors" onClick={() => setMobileOpen(false)}>
                                {locale === 'es' ? 'Asesoría' : 'Advisory'}
                            </Link>
                            <Link href={`/blog?lang=${locale}`} className="block px-5 py-4 text-gray-800 font-semibold text-base no-underline border-b border-gray-100 hover:bg-blue-50 hover:text-blue-700 transition-colors" onClick={() => setMobileOpen(false)}>
                                Blog
                            </Link>
                            <Link href={`/nosotros?lang=${locale}`} className="block px-5 py-4 text-gray-800 font-semibold text-base no-underline border-b border-gray-100 hover:bg-blue-50 hover:text-blue-700 transition-colors" onClick={() => setMobileOpen(false)}>
                                {locale === 'es' ? 'Nosotros' : 'About'}
                            </Link>

                            <div className="p-5">
                                <Link
                                    href={`/contacto?lang=${locale}`}
                                    className="w-full inline-flex items-center justify-center gap-1.5 px-5 py-3.5 rounded-md bg-[#1a3a6c] hover:bg-[#122040] text-white font-extrabold text-sm tracking-widest uppercase no-underline transition-all duration-200 shadow-[0_2px_12px_rgba(26,58,108,0.3)]"
                                    onClick={() => setMobileOpen(false)}
                                >
                                    {locale === 'es' ? 'CONTACTO' : 'CONTACT'}
                                </Link>
                            </div>

                            <Link
                                href={`https://wa.me/573123902406`}
                                className="flex items-center justify-center gap-2 px-5 py-4 bg-[#25d366] hover:bg-[#1eb358] text-white font-semibold text-base transition-colors no-underline mt-auto"
                                target="_blank" rel="noopener noreferrer"
                                onClick={() => setMobileOpen(false)}
                            >
                                <MessageCircle size={18} />
                                WhatsApp
                            </Link>
                        </nav>
                    </div>
                </>
            )}
        </>
    )
}
