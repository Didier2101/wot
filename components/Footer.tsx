'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Phone, Mail, MapPin, MessageCircle, Facebook } from 'lucide-react'
import type { Locale } from '@/lib/i18n'

interface FooterProps {
    locale: Locale
}

export default function Footer({ locale }: FooterProps) {
    const year = new Date().getFullYear()

    return (
        <footer className="bg-[#0a1529] text-white pt-16">
            <div className="container mx-auto px-5 lg:px-16">
                <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1.5fr] gap-12 mb-12">
                    {/* Brand */}
                    <div>
                        <Image
                            src="/logo-servicio-traductores-bogota.jpg"
                            alt="WOT Traducciones Logo"
                            width={160}
                            height={45}
                            className="mb-6 object-contain bg-white p-1.5 rounded-md"
                        />
                        <p className="text-white/60 text-sm leading-[1.6] mb-6 max-w-sm">
                            {locale === 'es'
                                ? 'Agencia líder en traducciones oficiales y juramentadas en Bogotá. Respaldamos tus trámites internacionales con precisión técnica y validez legal desde 2010.'
                                : 'Leading agency for official and sworn translations in Bogotá. We support your international procedures with technical precision and legal validity since 2010.'}
                        </p>
                        <div className="flex gap-3">
                            <a href="https://facebook.com/WOTTraducciones" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 hover:text-yellow-400 transition-colors">
                                <Facebook size={18} />
                            </a>
                            <a href="https://wa.me/573123902406" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 hover:text-yellow-400 transition-colors">
                                <MessageCircle size={18} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-yellow-400/90 text-base font-semibold mb-6 uppercase tracking-wider">
                            {locale === 'es' ? 'Secciones' : 'Sections'}
                        </h4>
                        <ul className="flex flex-col gap-3">
                            <li><Link href={`/sectores?lang=${locale}`} className="text-white/70 hover:text-yellow-400 text-sm transition-colors">{locale === 'es' ? 'Sectores' : 'Sectors'}</Link></li>
                            <li><Link href={`/asesoria?lang=${locale}`} className="text-white/70 hover:text-yellow-400 text-sm transition-colors">{locale === 'es' ? 'Asesoría' : 'Advisory'}</Link></li>
                            <li><Link href={`/nosotros?lang=${locale}`} className="text-white/70 hover:text-yellow-400 text-sm transition-colors">{locale === 'es' ? 'Nosotros' : 'About'}</Link></li>
                            <li><Link href={`/blog?lang=${locale}`} className="text-white/70 hover:text-yellow-400 text-sm transition-colors">Blog</Link></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-yellow-400/90 text-base font-semibold mb-6 uppercase tracking-wider">
                            {locale === 'es' ? 'Contacto' : 'Contact'}
                        </h4>
                        <ul className="flex flex-col gap-4">
                            <li className="flex gap-3 items-start">
                                <MapPin size={18} className="text-yellow-400/90 shrink-0 mt-0.5" />
                                <span className="text-white/70 text-sm">Carrera 14B #161-54 Torre 2/1002, Bogotá</span>
                            </li>
                            <li className="flex gap-3 items-center">
                                <Phone size={18} className="text-yellow-400/90 shrink-0" />
                                <span className="text-white/70 text-sm">+57 312 3902406</span>
                            </li>
                            <li className="flex gap-3 items-center">
                                <Mail size={18} className="text-yellow-400/90 shrink-0" />
                                <a href="mailto:traduccionesenbogotawot@gmail.com" className="text-white/70 hover:text-yellow-400 text-sm transition-colors">traduccionesenbogotawot@gmail.com</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/10 py-6 flex justify-between items-center flex-wrap gap-4">
                    <p className="text-white/40 text-xs text-center md:text-left">
                        © {year} <strong className="font-semibold text-white/50">WOT Traducciones Bogotá</strong> — WORLD OFFICIAL TRANSLATIONS S.A.S. {locale === 'es' ? 'Todos los derechos reservados.' : 'All rights reserved.'}
                    </p>
                    <div className="flex gap-6 mx-auto md:mx-0">
                        <Link href={`/legal/privacidad?lang=${locale}`} className="text-white/40 hover:text-white/70 text-xs transition-colors">
                            {locale === 'es' ? 'Privacidad' : 'Privacy'}
                        </Link>
                        <Link href={`/legal/terminos?lang=${locale}`} className="text-white/40 hover:text-white/70 text-xs transition-colors">
                            {locale === 'es' ? 'Términos' : 'Terms'}
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}
