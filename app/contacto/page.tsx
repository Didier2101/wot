import type { Metadata } from 'next'
import {
    Mail, MapPin, CheckCircle, Facebook, Linkedin
} from 'lucide-react'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import LeadForm from '@/components/LeadForm'
import { type Locale } from '@/lib/i18n'

export async function generateMetadata({ searchParams }: {
    searchParams: Promise<{ lang?: string }>
}): Promise<Metadata> {
    const { lang } = await searchParams
    const locale: Locale = lang === 'en' ? 'en' : 'es'

    return {
        title: locale === 'es' ? 'Contacto | Traducciones Oficiales' : 'Contact Us | Official Translations',
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

    const PHONE_WA = '573123902406'
    const PHONE_DISPLAY = '+57 312 3902406'
    const EMAIL = 'informacion@traduccionescertificadas.com'
    const ADDRESS = 'Carrera 14B #161-54 Torre 2/1002, Bogotá'

    return (
        <>
            <Navbar locale={locale} currentPath="/contacto" />

            <main className="font-sans text-white/90 antialiased bg-[#0A192F]">
                {/* HERO CONTACT */}
                <section className="relative py-24 lg:py-32 overflow-hidden bg-[#0A192F]" aria-label="Contacto">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(212,175,55,0.1)_0%,transparent_70%)] pointer-events-none" />
                    <div className="container mx-auto px-5 lg:px-16 max-w-5xl text-center relative z-10">
                        <nav aria-label="breadcrumb" className="flex items-center justify-center gap-2 text-sm text-white/50 mb-10 font-medium tracking-widest uppercase text-[10px]">
                            <Link href={`/?lang=${locale}`} className="hover:text-[#D4AF37] transition-colors">Home</Link>
                            <span className="text-white/20">/</span>
                            <span className="text-white/80">{locale === 'es' ? 'Contacto' : 'Contact'}</span>
                        </nav>

                        <div className="mx-auto w-16 h-16 rounded-sm bg-[#D4AF37]/10 border border-[#D4AF37]/20 flex items-center justify-center text-[#D4AF37] mb-8 shadow-2xl">
                            <Mail size={32} />
                        </div>

                        <div className="inline-flex items-center gap-3 text-[#D4AF37] text-[10px] font-bold uppercase tracking-[0.3em] mb-8">
                            <CheckCircle size={14} />
                            {locale === 'es' ? 'Atención Corporativa' : 'Corporate Support'}
                        </div>

                        <h1 className="text-4xl md:text-6xl lg:text-7xl text-white font-serif font-bold mb-10 leading-tight tracking-tight">
                            {locale === 'es' ? 'Canales de Atención' : 'Executive Support'}
                        </h1>

                        <p className="text-gray-400 text-xl font-light mb-6 tracking-wide max-w-2xl mx-auto">
                            {locale === 'es'
                                ? 'Asesoría especializada para sus proyectos de traducción oficial con la máxima rigurosidad.'
                                : 'Specialized consultancy for your official translation projects with maximum rigor.'}
                        </p>
                    </div>
                </section>

                {/* CONTACT GRID */}
                <section className="py-24 lg:py-32 bg-[#0A192F] relative overflow-hidden border-t border-white/5">
                    <div className="absolute top-0 right-0 w-1/3 h-full bg-[#D4AF37]/5 blur-[120px] rounded-full pointer-events-none" />

                    <div className="container mx-auto px-5 lg:px-16 grid lg:grid-cols-2 gap-20 lg:gap-32 relative z-10 max-w-screen-xl">

                        {/* INFO SIDE */}
                        <div className="flex flex-col">
                            <div className="inline-flex items-center gap-4 text-[#D4AF37] font-bold text-[10px] uppercase tracking-[0.3em] mb-10">
                                <div className="w-12 h-[1px] bg-[#D4AF37]/30" />
                                {locale === 'es' ? 'Información de Contacto' : 'Contact Details'}
                            </div>

                            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-16 leading-tight tracking-tight">
                                {locale === 'es' ? 'Gestión de Proyectos Inmediata' : 'Direct Project Management'}
                            </h2>

                            <div className="space-y-16">
                                {/* WhatsApp */}
                                <div className="group">
                                    <div className="text-[10px] font-bold text-[#D4AF37] uppercase tracking-[0.4em] mb-4 flex items-center gap-4">
                                        <div className="w-8 h-[1px] bg-[#D4AF37]/30" />
                                        WhatsApp
                                    </div>
                                    <Link href={`https://wa.me/${PHONE_WA}`} target="_blank" rel="noopener noreferrer" className="text-3xl md:text-4xl font-serif font-bold text-white hover:pl-4 transition-all duration-500 block">
                                        {PHONE_DISPLAY}
                                    </Link>
                                </div>

                                {/* Correo */}
                                <div className="group">
                                    <div className="text-[10px] font-bold text-[#D4AF37] uppercase tracking-[0.4em] mb-4 flex items-center gap-4">
                                        <div className="w-8 h-[1px] bg-[#D4AF37]/30" />
                                        Email
                                    </div>
                                    <Link href={`mailto:${EMAIL}`} className="text-2xl md:text-3xl font-serif font-bold text-white hover:pl-4 transition-all duration-500 block truncate">
                                        {EMAIL}
                                    </Link>
                                </div>

                                {/* Oficina */}
                                <div className="group">
                                    <div className="text-[10px] font-bold text-[#D4AF37] uppercase tracking-[0.4em] mb-4 flex items-center gap-4">
                                        <div className="w-8 h-[1px] bg-[#D4AF37]/30" />
                                        {locale === 'es' ? 'Sede' : 'HQ'}
                                    </div>
                                    <div className="text-2xl md:text-3xl font-serif font-bold text-white leading-tight">
                                        {ADDRESS}
                                    </div>
                                </div>

                                {/* Horario */}
                                <div className="group">
                                    <div className="text-[10px] font-bold text-[#D4AF37] uppercase tracking-[0.4em] mb-4 flex items-center gap-4">
                                        <div className="w-8 h-[1px] bg-[#D4AF37]/30" />
                                        {locale === 'es' ? 'Horario' : 'Hours'}
                                    </div>
                                    <div className="text-2xl font-serif font-bold text-white/80">
                                        {locale === 'es' ? 'Lun - Vie: 8am - 6pm' : 'Mon - Fri: 8am - 6pm'}
                                    </div>
                                </div>
                            </div>

                            {/* SOCIALS */}
                            <div className="mt-20 pt-10 border-t border-white/5">
                                <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-gray-500 mb-8">
                                    {locale === 'es' ? 'Redes Institucionales' : 'Institutional Socials'}
                                </h4>
                                <div className="flex gap-6">
                                    <Link href="https://facebook.com/traduccionesoficiales" target="_blank" rel="noopener noreferrer" className="w-14 h-14 flex items-center justify-center rounded-sm bg-white/5 border border-white/10 text-gray-400 hover:border-[#D4AF37] hover:text-[#D4AF37] transition-all">
                                        <Facebook size={24} />
                                    </Link>
                                    <Link href="https://linkedin.com/company/traducciones-oficiales" target="_blank" rel="noopener noreferrer" className="w-14 h-14 flex items-center justify-center rounded-sm bg-white/5 border border-white/10 text-gray-400 hover:border-[#D4AF37] hover:text-[#D4AF37] transition-all">
                                        <Linkedin size={24} />
                                    </Link>
                                </div>
                            </div>
                        </div>

                        {/* FORM SIDE */}
                        <div className="relative pt-10 border-t lg:border-t-0 lg:border-l border-white/5 lg:pl-20">
                            <div className="mb-14 relative z-10">
                                <h3 className="text-4xl font-serif font-bold text-white mb-6 tracking-tight italic">
                                    {locale === 'es' ? 'Presupuesto Formal' : 'Formal Quotation'}
                                </h3>
                                <p className="text-gray-500 font-light text-lg max-w-md leading-relaxed">
                                    {locale === 'es' ? 'Nuestro equipo técnico analizará sus documentos de inmediato para brindarle una propuesta oficial.' : 'You will receive a detailed proposal in record time.'}
                                </p>
                            </div>

                            <LeadForm locale={locale} />
                        </div>

                    </div>
                </section>

                {/* MAP PLACEHOLDER */}
                <section className="h-[500px] bg-[#0A192F] flex items-center justify-center relative overflow-hidden border-t border-white/5">
                    <div className="absolute inset-0 grayscale opacity-20 hover:opacity-40 transition-opacity duration-1000 bg-[url('https://maps.googleapis.com/maps/api/staticmap?center=4.7397,-74.0401&zoom=15&size=1920x500&maptype=roadmap&markers=color:0xD4AF37%7C4.7397,-74.0401&key=PLACEHOLDER')] bg-cover bg-center" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F] via-transparent to-[#0A192F]" />

                    <div className="relative z-10 text-center max-w-lg mx-auto px-5">
                        <div className="w-20 h-20 bg-[#D4AF37]/10 border border-[#D4AF37]/20 flex items-center justify-center mx-auto mb-10 shadow-3xl">
                            <MapPin size={40} className="text-[#D4AF37]" />
                        </div>
                        <p className="font-serif font-bold text-3xl text-white mb-4 tracking-tight">
                            {locale === 'es' ? 'Ubicación Estratégica' : 'Executive Location'}
                        </p>
                        <p className="font-light text-gray-400 text-lg leading-relaxed">{ADDRESS}</p>
                    </div>
                </section>
            </main>

            <Footer locale={locale} />
        </>
    )
}
