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
                    "sticky top-0 z-[100] w-full bg-[#0A192F]/80 backdrop-blur-xl border-b border-[#D4AF37]/10 transition-all duration-300",
                    scrolled && "shadow-[0_4px_30px_rgba(0,0,0,0.3)] bg-[#0A192F]/95 border-[#D4AF37]/20"
                )}
            >
                <div className="container mx-auto px-5 md:px-10 lg:px-16 flex items-center justify-between py-3.5 gap-6">
                    {/* Brand */}
                    <Link href={`/?lang=${locale}`} className="flex shrink-0 items-center gap-1.5 md:gap-2 no-underline group">
                        <Image
                            src="/logo-nuevo.png"
                            alt="Lex Translations"
                            width={90} height={90}
                            priority={true}
                            loading="eager"
                            className="w-[52px] h-[52px] md:w-[72px] md:h-[72px] xl:w-[80px] xl:h-[80px] rounded-md object-contain drop-shadow-sm transition-transform duration-300 group-hover:scale-105"
                        />
                        <div className="text-white font-serif text-[1.15rem] md:text-[1.5rem] font-bold leading-none tracking-tight uppercase">
                            {locale === 'es' ? 'Lex Translations' : 'Lex Translations'}
                        </div>
                    </Link>

                    {/* Desktop nav */}
                    <nav className="hidden lg:block" aria-label={locale === 'es' ? 'Menú principal' : 'Main menu'}>
                        <ul className="flex items-center gap-7 list-none m-0 p-0">
                            {/* Inicio */}
                            <li>
                                <Link href={`/?lang=${locale}`} className="group text-gray-200 text-[13px] font-semibold hover:text-[#D4AF37] relative flex items-center transition-colors tracking-wide uppercase">
                                    {locale === 'es' ? 'Inicio' : 'Home'}
                                    <span className="absolute left-0 -bottom-1.5 h-[1px] w-0 bg-[#D4AF37] transition-all duration-300 group-hover:w-full"></span>
                                </Link>
                            </li>

                            {/* Servicios — dropdown */}
                            <li className="relative group">
                                <button className="text-gray-200 text-[13px] font-semibold group-hover:text-[#D4AF37] relative flex items-center gap-1 transition-colors cursor-pointer bg-transparent border-none p-0 tracking-wide uppercase">
                                    {NAV_ITEMS.servicios.label[locale]}
                                    <ChevronDown size={12} className="transition-transform duration-300 group-hover:rotate-180 text-[#D4AF37]" />
                                    <span className="absolute left-0 -bottom-1.5 h-[1px] w-0 bg-[#D4AF37] transition-all duration-300 group-hover:w-full"></span>
                                </button>
                                <div className="absolute top-full left-0 mt-5 hidden w-64 flex-col overflow-visible group-hover:flex transition-all animate-in fade-in slide-in-from-top-2 duration-300 pt-2" role="menu">
                                    {/* Bridge to prevent gap */}
                                    <div className="absolute -top-5 left-0 right-0 h-5 bg-transparent" />

                                    <div className="flex flex-col w-full overflow-hidden rounded-xl bg-[#0A192F] shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-[#D4AF37]/20">
                                        {NAV_ITEMS.servicios.items.map((item, idx) => (
                                            <Link
                                                key={item.slug || `srv-${idx}`}
                                                href={item.href ? (item.href.includes('?') ? `${item.href}&lang=${locale}` : `${item.href}?lang=${locale}`) : `/servicios/${item.slug}?lang=${locale}`}
                                                className="px-6 py-4 text-[13px] text-gray-300 font-medium hover:bg-[#D4AF37]/10 hover:text-white transition-all border-b border-white/5 last:border-0"
                                                role="menuitem"
                                            >
                                                {item[locale]}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            </li>

                            {/* Sectores — dropdown */}
                            <li className="relative group">
                                <button className="text-gray-200 text-[13px] font-semibold group-hover:text-[#D4AF37] relative flex items-center gap-1 transition-colors cursor-pointer bg-transparent border-none p-0 tracking-wide uppercase">
                                    {NAV_ITEMS.sectores.label[locale]}
                                    <ChevronDown size={12} className="transition-transform duration-300 group-hover:rotate-180 text-[#D4AF37]" />
                                    <span className="absolute left-0 -bottom-1.5 h-[1px] w-0 bg-[#D4AF37] transition-all duration-300 group-hover:w-full"></span>
                                </button>
                                <div className="absolute top-full left-0 mt-5 hidden w-56 flex-col overflow-visible group-hover:flex transition-all animate-in fade-in slide-in-from-top-2 duration-300 pt-2" role="menu">
                                    {/* Bridge to prevent gap */}
                                    <div className="absolute -top-5 left-0 right-0 h-5 bg-transparent" />

                                    <div className="flex flex-col w-full overflow-hidden rounded-xl bg-[#0A192F] shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-[#D4AF37]/20">
                                        {NAV_ITEMS.sectores.items.map((item, idx) => (
                                            <Link
                                                key={item.slug || `sec-${idx}`}
                                                href={item.href
                                                    ? (item.href.includes('?') ? `${item.href}&lang=${locale}` : `${item.href}?lang=${locale}`)
                                                    : (item.slug ? `/sectores/${item.slug}?lang=${locale}` : `/sectores?lang=${locale}`)
                                                }
                                                className="px-6 py-4 text-[13px] text-gray-300 font-medium hover:bg-[#D4AF37]/10 hover:text-white transition-all border-b border-white/5 last:border-0"
                                                role="menuitem"
                                            >
                                                {item[locale]}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            </li>

                            {/* Asesoría */}
                            <li>
                                <Link
                                    href={`/asesoria?lang=${locale}`}
                                    className={cn(
                                        "group text-[13px] font-semibold hover:text-[#D4AF37] relative flex items-center transition-colors tracking-wide uppercase",
                                        currentPath === '/asesoria' ? "text-[#D4AF37]" : "text-gray-200"
                                    )}
                                >
                                    {locale === 'es' ? 'Asesoría' : 'Advisory'}
                                    <span className={cn(
                                        "absolute left-0 -bottom-1.5 h-[1px] bg-[#D4AF37] transition-all duration-300 group-hover:w-full",
                                        currentPath === '/asesoria' ? "w-full" : "w-0"
                                    )}></span>
                                </Link>
                            </li>

                            {/* Blog */}
                            <li>
                                <Link href={`/blog?lang=${locale}`} className="group text-gray-200 text-[13px] font-semibold hover:text-[#D4AF37] relative flex items-center transition-colors tracking-wide uppercase">
                                    Blog
                                    <span className="absolute left-0 -bottom-1.5 h-[1px] w-0 bg-[#D4AF37] transition-all duration-300 group-hover:w-full"></span>
                                </Link>
                            </li>

                            {/* Nosotros */}
                            <li>
                                <Link href={`/nosotros?lang=${locale}`} className="group text-gray-200 text-[13px] font-semibold hover:text-[#D4AF37] relative flex items-center transition-colors tracking-wide uppercase">
                                    {locale === 'es' ? 'Nosotros' : 'About'}
                                    <span className="absolute left-0 -bottom-1.5 h-[1px] w-0 bg-[#D4AF37] transition-all duration-300 group-hover:w-full"></span>
                                </Link>
                            </li>

                            {/* CTA */}
                            <li>
                                <Link
                                    href={`/contacto?lang=${locale}`}
                                    className="inline-flex items-center justify-center px-6 py-2.5 rounded-sm bg-[#0A192F] border border-[#D4AF37] text-[#D4AF37] font-bold text-[12px] tracking-[0.1em] uppercase transition-all duration-300 hover:bg-[#D4AF37] hover:text-[#0A192F]"
                                >
                                    {locale === 'es' ? 'CONTACTO' : 'CONTACT'}
                                </Link>
                            </li>

                            {/* Lang toggle */}
                            <li>
                                <Link
                                    href={switchUrl}
                                    title={otherLocale === 'en' ? 'Switch to English' : 'Cambiar a Español'}
                                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-sm border border-white/20 text-gray-300 text-[11px] font-bold hover:border-[#D4AF37] hover:text-[#D4AF37] transition-all duration-300 uppercase tracking-widest bg-white/5"
                                >
                                    <Globe size={11} className="text-[#D4AF37]" />
                                    {otherLocale.toUpperCase()}
                                </Link>
                            </li>
                        </ul>
                    </nav>

                    {/* Mobile hamburger */}
                    <div className="flex lg:hidden items-center gap-3">
                        <Link
                            href={switchUrl}
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-sm border border-[#D4AF37]/30 text-[#D4AF37] text-xs font-bold bg-[#D4AF37]/5"
                        >
                            <Globe size={12} />
                            {otherLocale.toUpperCase()}
                        </Link>
                        <button
                            className="flex items-center justify-center p-2 bg-transparent border border-[#D4AF37]/40 rounded-sm text-[#D4AF37] transition-all hover:bg-[#D4AF37]/10 cursor-pointer"
                            onClick={() => setMobileOpen((v) => !v)}
                            aria-label={mobileOpen ? 'Cerrar menú' : 'Abrir menú'}
                            aria-expanded={mobileOpen}
                        >
                            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
                        </button>
                    </div>
                </div>
            </header>

            {/* Mobile menu Drawer - Improved */}
            <div
                className={cn(
                    "fixed inset-0 z-[200] lg:hidden transition-all duration-500",
                    mobileOpen ? "visible" : "invisible"
                )}
            >
                {/* Backdrop */}
                <div
                    className={cn(
                        "absolute inset-0 bg-[#0A192F]/80 backdrop-blur-sm transition-opacity duration-500",
                        mobileOpen ? "opacity-100" : "opacity-0"
                    )}
                    onClick={() => setMobileOpen(false)}
                    aria-hidden="true"
                />

                {/* Drawer */}
                <div
                    className={cn(
                        "absolute inset-y-0 right-0 w-full max-w-[340px] bg-[#0A192F] shadow-[0_0_100px_rgba(0,0,0,0.8)] border-l border-[#D4AF37]/10 flex flex-col transition-transform duration-500",
                        mobileOpen ? "translate-x-0" : "translate-x-full"
                    )}
                    role="dialog"
                    aria-label="Menú móvil"
                >
                    <div className="flex items-center justify-between px-8 py-10 border-b border-white/5">
                        <div className="flex items-center gap-3">
                            <Image src="/logo-nuevo.png" alt="Logo" width={40} height={40} className="w-12 h-12 rounded-sm" />
                            <span className="font-serif font-bold text-white text-base uppercase tracking-widest leading-none">
                                Lex<br />Translations
                            </span>
                        </div>
                        <button
                            onClick={() => setMobileOpen(false)}
                            className="p-2 text-[#D4AF37] hover:bg-white/5 rounded-sm transition-colors"
                            aria-label="Cerrar menú"
                        >
                            <X size={28} />
                        </button>
                    </div>

                    <nav className="flex flex-col flex-1 py-10 overflow-y-auto px-8 space-y-12">
                        {/* Links principales */}
                        <div className="space-y-6">
                            <Link href={`/?lang=${locale}`} className="block text-2xl font-serif font-bold text-white hover:text-[#D4AF37] transition-colors" onClick={() => setMobileOpen(false)}>
                                {locale === 'es' ? 'Inicio' : 'Home'}
                            </Link>
                            <Link href={`/nosotros?lang=${locale}`} className="block text-2xl font-serif font-bold text-white hover:text-[#D4AF37] transition-colors" onClick={() => setMobileOpen(false)}>
                                {locale === 'es' ? 'Nosotros' : 'About'}
                            </Link>
                            <Link href={`/contacto?lang=${locale}`} className="block text-2xl font-serif font-bold text-white hover:text-[#D4AF37] transition-colors" onClick={() => setMobileOpen(false)}>
                                {locale === 'es' ? 'Contacto' : 'Contact'}
                            </Link>
                        </div>

                        {/* Categorías (Servicios) */}
                        <div className="space-y-6">
                            <div className="text-[10px] font-bold text-[#D4AF37] uppercase tracking-[0.4em] flex items-center gap-4">
                                <span className="w-8 h-[1px] bg-[#D4AF37]/30" />
                                {NAV_ITEMS.servicios.label[locale]}
                            </div>
                            <div className="grid gap-4">
                                {NAV_ITEMS.servicios.items.slice(0, 5).map((item, idx) => (
                                    <Link
                                        key={item.slug || `mo-srv-${idx}`}
                                        href={`/servicios/${item.slug}?lang=${locale}`}
                                        className="text-gray-500 font-light text-lg hover:text-white transition-colors"
                                        onClick={() => setMobileOpen(false)}
                                    >
                                        {item[locale]}
                                    </Link>
                                ))}
                            </div>
                        </div>

                        {/* Footer del menú */}
                        <div className="pt-10 border-t border-white/5 mt-auto">
                            <Link
                                href={`https://wa.me/573028645014`}
                                className="flex items-center justify-center gap-3 w-full py-5 rounded-sm bg-[#D4AF37] text-[#0A192F] font-bold text-[12px] uppercase tracking-widest shadow-xl transition-all hover:bg-white"
                                target="_blank" rel="noopener noreferrer"
                                onClick={() => setMobileOpen(false)}
                            >
                                <MessageCircle size={20} />
                                Atender por WhatsApp
                            </Link>
                        </div>
                    </nav>
                </div>
            </div>
        </>
    )
}
