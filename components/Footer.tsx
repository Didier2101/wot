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
        <footer className="bg-[#0A192F] text-white pt-24 border-t border-[#D4AF37]/10">
            <div className="container mx-auto px-5 lg:px-16">
                <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1.5fr] gap-12 mb-12">
                    {/* Brand */}
                    <div>
                        <Image
                            src="/logo-nuevo.png"
                            alt="Lex Translations Logo"
                            width={160}
                            height={60}
                            className="mb-8 object-contain"
                        />
                        <p className="text-gray-400 text-sm leading-loose mb-8 max-w-sm font-light tracking-wide">
                            {locale === 'es'
                                ? 'Agencia líder en soluciones lingüísticas certificadas. Respaldamos sus trámites internacionales con rigor técnico, validez legal y un compromiso inquebrantable con la excelencia.'
                                : 'Leading agency for certified linguistic solutions. We support your international procedures with technical rigor, legal validity, and an unwavering commitment to excellence.'}
                        </p>
                        <div className="flex gap-4">
                            <Link href="https://facebook.com/traduccionesoficiales" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-sm bg-white/5 border border-white/10 flex items-center justify-center text-white hover:border-[#D4AF37] hover:text-[#D4AF37] transition-all duration-300">
                                <Facebook size={18} />
                            </Link>
                            <Link href="https://wa.me/573028645014" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-sm bg-white/5 border border-white/10 flex items-center justify-center text-white hover:border-[#D4AF37] hover:text-[#D4AF37] transition-all duration-300">
                                <MessageCircle size={18} />
                            </Link>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-[#D4AF37] text-[10px] font-bold mb-8 uppercase tracking-[0.3em]">
                            {locale === 'es' ? 'Secciones' : 'Sections'}
                        </h4>
                        <ul className="flex flex-col gap-4">
                            <li><Link href={`/sectores?lang=${locale}`} className="text-gray-400 hover:text-[#D4AF37] text-sm transition-all duration-300 font-medium">{locale === 'es' ? 'Sectores' : 'Sectors'}</Link></li>
                            <li><Link href={`/asesoria?lang=${locale}`} className="text-gray-400 hover:text-[#D4AF37] text-sm transition-all duration-300 font-medium">{locale === 'es' ? 'Asesoría' : 'Advisory'}</Link></li>
                            <li><Link href={`/nosotros?lang=${locale}`} className="text-gray-400 hover:text-[#D4AF37] text-sm transition-all duration-300 font-medium">{locale === 'es' ? 'Nosotros' : 'About'}</Link></li>
                            <li><Link href={`/blog?lang=${locale}`} className="text-gray-400 hover:text-[#D4AF37] text-sm transition-all duration-300 font-medium">Blog</Link></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-[#D4AF37] text-[10px] font-bold mb-8 uppercase tracking-[0.3em]">
                            {locale === 'es' ? 'Contacto' : 'Contact'}
                        </h4>
                        <ul className="flex flex-col gap-6">
                            <li className="flex gap-4 items-start">
                                <MapPin size={20} className="text-[#D4AF37] shrink-0 opacity-80" />
                                <span className="text-gray-400 text-sm font-medium leading-relaxed">Carrera 18 # 1H-12<br />Bogotá, Colombia</span>
                            </li>
                            <li className="flex gap-4 items-center">
                                <Phone size={20} className="text-[#D4AF37] shrink-0 opacity-80" />
                                <span className="text-gray-400 text-sm font-medium">+57 302 8645014</span>
                            </li>
                            <li className="flex gap-4 items-center">
                                <Mail size={20} className="text-[#D4AF37] shrink-0 opacity-80" />
                                <Link href="mailto:lex@lextranslations.com" className="text-gray-400 hover:text-[#D4AF37] text-sm transition-all duration-300 font-medium">lex@lextranslations.com</Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/5 py-10 flex justify-between items-center flex-wrap gap-6">
                    <p className="text-gray-500 text-[11px] font-bold uppercase tracking-[0.2em]">
                        © {year} <span className="text-gray-400">Lex Translations</span> — Excellence in linguistics
                    </p>
                    <div className="flex gap-10">
                        <Link href={`/legal/privacidad?lang=${locale}`} className="text-gray-500 hover:text-[#D4AF37] text-[11px] font-bold uppercase tracking-[0.2em] transition-all duration-300">
                            {locale === 'es' ? 'Privacidad' : 'Privacy'}
                        </Link>
                        <Link href={`/legal/terminos?lang=${locale}`} className="text-gray-500 hover:text-[#D4AF37] text-[11px] font-bold uppercase tracking-[0.2em] transition-all duration-300">
                            {locale === 'es' ? 'Términos' : 'Terms'}
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}
