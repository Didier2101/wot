import type { Metadata } from 'next'
import {
    Mail, MapPin, MessageCircle, Clock,
    Facebook, Linkedin, CheckCircle
} from 'lucide-react'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import LeadForm from '@/components/LeadForm'
import { getDict, type Locale } from '@/lib/i18n'

export async function generateMetadata({ searchParams }: {
    searchParams: Promise<{ lang?: string }>
}): Promise<Metadata> {
    const { lang } = await searchParams
    const locale: Locale = lang === 'en' ? 'en' : 'es'

    return {
        title: locale === 'es' ? 'Contacto | WOT Traducciones Bogotá' : 'Contact Us | WOT Translations Bogotá',
        description: locale === 'es'
            ? 'Póngase en contacto con nosotros para sus necesidades de traducción oficial en Bogotá. Ofrecemos atención rápida por WhatsApp, email y formulario.'
            : 'Get in touch with us for your official translation needs in Bogota. We offer fast support via WhatsApp, email, and form.',
    }
}

export default async function ContactoPage({ searchParams }: {
    searchParams: Promise<{ lang?: string }>
}) {
    const { lang } = await searchParams
    const locale: Locale = lang === 'en' ? 'en' : 'es'
    const t = getDict(locale)

    const PHONE_WA = '573123902406'
    const PHONE_DISPLAY = '+57 312 3902406'
    const EMAIL = 'traduccionesenbogotawot@gmail.com'
    const ADDRESS = 'Carrera 14B #161-54 Torre 2/1002, Bogotá'

    return (
        <>
            <Navbar locale={locale} currentPath="/contacto" />

            <main className="font-sans text-slate-800 antialiased">
                {/* HERO */}
                <section className="bg-gradient-to-br from-[#0c1a35] via-[#1a3055] to-[#1e4a8a] py-16 lg:py-24" aria-label="Contacto">
                    <div className="container mx-auto px-5 lg:px-16 max-w-5xl text-center">
                        <nav aria-label="breadcrumb" className="flex items-center justify-center gap-2 text-sm text-white/60 mb-8 font-medium">
                            <Link href={`/?lang=${locale}`} className="text-white/80 hover:text-white transition-colors">Home</Link>
                            <span className="text-white/40">/</span>
                            <span className="text-white/95">{locale === 'es' ? 'Contacto' : 'Contact'}</span>
                        </nav>

                        <div className="mx-auto w-16 h-16 rounded-2xl bg-gradient-to-br from-yellow-500/20 to-yellow-400/10 border border-yellow-400/20 flex items-center justify-center text-yellow-400 mb-6 shadow-[0_8px_32px_rgba(0,0,0,0.2)]">
                            <Mail size={32} />
                        </div>

                        <div className="inline-flex items-center gap-2 text-yellow-400 text-xs font-bold uppercase tracking-wider mb-6">
                            <CheckCircle size={14} />
                            {locale === 'es' ? 'Atención Inmediata' : 'Immediate Attention'}
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl text-white font-serif font-bold mb-6 leading-tight">
                            {locale === 'es' ? 'Contacto Directo' : 'Get in Touch'}
                        </h1>

                        <p className="text-yellow-400/90 text-xl font-medium mb-6">
                            {locale === 'es'
                                ? 'Estamos listos para asesorarlo en su proyecto de traducción. Elija el canal que prefiera.'
                                : 'We are ready to assist you with your translation project. Choose your preferred channel.'}
                        </p>
                    </div>
                </section>

                {/* CONTACT GRID */}
                <section className="py-20 lg:py-28 bg-slate-50 relative overflow-hidden">
                    {/* Background decoration */}
                    <div className="absolute top-0 right-0 w-1/2 h-full bg-[#1a3a6c]/5 -skew-x-12 translate-x-32" />

                    <div className="container mx-auto px-5 lg:px-16 grid lg:grid-cols-2 gap-16 lg:gap-24 relative z-10 w-full max-w-screen-xl relative z-10 mx-auto">

                        {/* INFO SIDE */}
                        <div className="max-w-xl">
                            <div className="inline-flex items-center gap-2 text-yellow-500 font-bold text-xs uppercase tracking-wider mb-4">
                                <div className="w-8 h-0.5 bg-yellow-500" />
                                {locale === 'es' ? 'Información' : 'Information'}
                            </div>
                            <h2 className="text-4xl font-serif font-bold text-[#0c1a35] mb-12">
                                {locale === 'es' ? 'Hablemos hoy mismo' : 'Let\'s talk today'}
                            </h2>

                            <div className="flex flex-col gap-10">

                                {/* WhatsApp */}
                                <div className="flex gap-6 group cursor-pointer hover:-translate-y-1 transition-transform">
                                    <div className="w-14 h-14 bg-[#1a3a6c] rounded-2xl flex items-center justify-center shrink-0 shadow-lg shadow-[#1a3a6c]/20 group-hover:bg-[#25d366] transition-colors">
                                        <MessageCircle size={28} className="text-[#e2e8f0] group-hover:text-white transition-colors" />
                                    </div>
                                    <div className="flex-1 mt-1">
                                        <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">WhatsApp</div>
                                        <a href={`https://wa.me/${PHONE_WA}`} target="_blank" rel="noopener noreferrer" className="text-2xl font-bold text-[#0c1a35] hover:text-[#25d366] transition-colors inline-block">
                                            {PHONE_DISPLAY}
                                        </a>
                                    </div>
                                </div>

                                {/* Correo */}
                                <div className="flex gap-6 group pointer-events-none sm:pointer-events-auto">
                                    <div className="w-14 h-14 bg-[#1a3a6c] rounded-2xl flex items-center justify-center shrink-0 shadow-lg shadow-[#1a3a6c]/20">
                                        <Mail size={28} className="text-[#e2e8f0]" />
                                    </div>
                                    <div className="flex-1 mt-1">
                                        <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">E-mail</div>
                                        <a href={`mailto:${EMAIL}`} className="text-lg font-bold text-[#0c1a35] hover:text-[#c9a227] transition-colors">
                                            {EMAIL}
                                        </a>
                                    </div>
                                </div>

                                {/* Oficina */}
                                <div className="flex gap-6">
                                    <div className="w-14 h-14 bg-[#1a3a6c] rounded-2xl flex items-center justify-center shrink-0 shadow-lg shadow-[#1a3a6c]/20">
                                        <MapPin size={28} className="text-[#e2e8f0]" />
                                    </div>
                                    <div className="flex-1 mt-1">
                                        <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">{locale === 'es' ? 'Oficina' : 'Office'}</div>
                                        <div className="text-lg font-bold text-[#0c1a35] leading-relaxed">
                                            {ADDRESS}
                                        </div>
                                    </div>
                                </div>

                                {/* Horario */}
                                <div className="flex gap-6">
                                    <div className="w-14 h-14 bg-[#1a3a6c] rounded-2xl flex items-center justify-center shrink-0 shadow-lg shadow-[#1a3a6c]/20">
                                        <Clock size={28} className="text-[#e2e8f0]" />
                                    </div>
                                    <div className="flex-1 mt-1">
                                        <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">{locale === 'es' ? 'Horario' : 'Hours'}</div>
                                        <div className="text-lg font-bold text-[#0c1a35]">
                                            {locale === 'es' ? 'Lun - Vie: 8:00 AM - 6:00 PM' : 'Mon - Fri: 8:00 AM - 6:00 PM'}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* SOCIALS */}
                            <div className="mt-16 pt-8 border-t border-slate-200">
                                <h4 className="text-lg font-serif font-bold text-[#0c1a35] mb-6">
                                    {locale === 'es' ? 'Síguenos en redes' : 'Follow us'}
                                </h4>
                                <div className="flex gap-4">
                                    <a href="https://facebook.com/WOTTraducciones" target="_blank" rel="noopener noreferrer" className="w-12 h-12 flex items-center justify-center rounded-full border border-slate-300 text-slate-500 hover:border-blue-600 hover:text-blue-600 hover:bg-blue-50 transition-all shadow-sm">
                                        <Facebook size={20} />
                                    </a>
                                    <a href="https://linkedin.com/company/wot-traducciones" target="_blank" rel="noopener noreferrer" className="w-12 h-12 flex items-center justify-center rounded-full border border-slate-300 text-slate-500 hover:border-blue-500 hover:text-blue-500 hover:bg-blue-50 transition-all shadow-sm">
                                        <Linkedin size={20} />
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* FORM SIDE */}
                        <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-slate-100/50">
                            <div className="text-center mb-8">
                                <div className="inline-block w-16 h-1 bg-yellow-400 rounded-full mb-6" />
                                <h3 className="text-2xl md:text-3xl font-serif font-bold text-[#0c1a35] mb-3">
                                    {locale === 'es' ? 'Envíenos un mensaje' : 'Send us a message'}
                                </h3>
                                <p className="text-slate-500">
                                    {locale === 'es' ? 'Nuestro equipo comercial se contactará con usted a la brevedad.' : 'Our sales team will contact you shortly.'}
                                </p>
                            </div>

                            {/* Integramos el nuevo LeadForm que apunta al Server Action */}
                            <LeadForm locale={locale} t={t.form} />
                        </div>

                    </div>
                </section>

                {/* MAP PLACEHOLDER */}
                <section className="h-[400px] bg-[#e2e8f0] flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-[url('https://maps.googleapis.com/maps/api/staticmap?center=4.7397,-74.0401&zoom=15&size=1920x400&maptype=roadmap&markers=color:red%7C4.7397,-74.0401&key=PLACEHOLDER')] bg-cover bg-center opacity-40 mix-blend-multiply" />
                    <div className="relative z-10 text-center text-[#0c1a35] bg-white/80 backdrop-blur-md px-10 py-8 rounded-2xl shadow-xl border border-white">
                        <MapPin size={48} className="mx-auto mb-4 text-[#1a3a6c]" />
                        <p className="font-serif font-bold text-2xl uppercase tracking-wider mb-2">
                            {locale === 'es' ? 'Ubicación Premium' : 'Premium Location'}
                        </p>
                        <p className="font-medium text-slate-600">{ADDRESS}</p>
                    </div>
                </section>
            </main>

            <Footer locale={locale} />
        </>
    )
}
