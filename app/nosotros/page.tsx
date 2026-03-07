import type { Metadata } from 'next'
import Link from 'next/link'
import { MessageCircle, CheckCircle, Award, Clock, Users, ArrowRight } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import type { Locale } from '@/lib/i18n'

export async function generateMetadata({ searchParams }: { searchParams: Promise<{ lang?: string }> }): Promise<Metadata> {
    const { lang } = await searchParams
    const locale: Locale = lang === 'en' ? 'en' : 'es'
    return {
        title: locale === 'es'
            ? 'Quiénes Somos | Traducciones Oficiales — Traductores Oficiales'
            : 'About Us | Official Translations — Official Translators',
        description: locale === 'es'
            ? 'Traducciones Oficiales S.A.S. — Más de una década de experiencia. Traductores oficiales certificados ante el Ministerio de Relaciones Exteriores. Bogotá, Colombia.'
            : 'Traducciones Oficiales S.A.S. — Over a decade of experience. Official translators certified before the Colombian Ministry of Foreign Affairs.',
    }
}

const STATS = [
    { value: '+5.000', es: 'Clientes satisfechos', en: 'Happy clients' },
    { value: '14', es: 'Años de experiencia', en: 'Years of experience' },
    { value: '+40', es: 'Pares de idiomas', en: 'Language pairs' },
    { value: '24h', es: 'Tiempo de respuesta', en: 'Response time' },
]

const VALUES = [
    { icon: <Award size={22} />, es: { t: 'Certificación oficial', d: 'Traductores habilitados por el Ministerio de Relaciones Exteriores de Colombia.' }, en: { t: 'Official certification', d: 'Translators authorized by the Colombian Ministry of Foreign Affairs.' } },
    { icon: <CheckCircle size={22} />, es: { t: 'Control de calidad', d: 'Doble revisión: verificamos nombres, cifras y fechas contra el original.' }, en: { t: 'Quality control', d: 'Double review: we verify names, figures and dates against the original.' } },
    { icon: <Clock size={22} />, es: { t: 'Cumplimiento de plazos', d: 'Entrega estándar 24–72 h o exprés en 12 h. Tu cita consular no puede esperar.' }, en: { t: 'Deadline compliance', d: 'Standard delivery 24–72 h or express in 12 h. Your consular appointment can\'t wait.' } },
    { icon: <Users size={22} />, es: { t: 'Equipo especializado', d: 'Traductores con formación en derecho, medicina, finanzas, TI y marketing.' }, en: { t: 'Specialized team', d: 'Translators trained in law, medicine, finance, IT and marketing.' } },
]

export default async function NosotrosPage({ searchParams }: { searchParams: Promise<{ lang?: string }> }) {
    const { lang } = await searchParams
    const locale: Locale = lang === 'en' ? 'en' : 'es'

    return (
        <>
            <Navbar locale={locale} currentPath="/nosotros" />

            <main className="font-sans antialiased text-gray-400 bg-[#0A192F]">
                {/* HERO */}
                <section className="relative py-24 lg:py-32 overflow-hidden bg-[#0A192F]" aria-label="Nosotros">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(212,175,55,0.1)_0%,transparent_70%)] pointer-events-none" />
                    <div className="container mx-auto px-5 lg:px-16 max-w-5xl text-center">
                        <nav aria-label="breadcrumb" className="flex items-center justify-center gap-2 text-sm text-white/60 mb-8 font-medium">
                            <Link href={`/?lang=${locale}`} className="text-white/80 hover:text-white transition-colors">Home</Link>
                            <span className="text-white/40">/</span>
                            <span className="text-white/95">{locale === 'es' ? 'Nosotros' : 'About'}</span>
                        </nav>

                        <div className="mx-auto w-16 h-16 rounded-sm bg-[#D4AF37]/10 border border-[#D4AF37]/20 flex items-center justify-center text-[#D4AF37] mb-8 shadow-2xl">
                            <Users size={32} />
                        </div>

                        <div className="inline-flex items-center gap-3 text-[#D4AF37] text-[10px] font-bold uppercase tracking-[0.3em] mb-8">
                            <CheckCircle size={14} />
                            TRADUCCIONES OFICIALES S.A.S.
                        </div>

                        <h1 className="text-4xl md:text-6xl lg:text-7xl text-white font-serif font-bold mb-10 leading-tight tracking-tight">
                            {locale === 'es' ? 'Traductores oficiales en Bogotá desde 2010' : 'Official translators in Bogotá since 2010'}
                        </h1>

                        <p className="text-gray-400 text-xl md:text-2xl font-light mb-10 tracking-wide max-w-3xl mx-auto leading-relaxed">
                            {locale === 'es'
                                ? 'Agencia líder especializada en soluciones lingüísticas certificadas. Traductores juramentados habilitados por el Ministerio de Relaciones Exteriores, con un enfoque inquebrantable en la excelencia.'
                                : 'Leading agency specialized in certified linguistic solutions. Sworn translators authorized by the Ministry of Foreign Affairs, with an unwavering focus on excellence.'}
                        </p>

                        <div className="flex flex-wrap items-center justify-center gap-6 mt-14">
                            <Link href={`/contacto?lang=${locale}`} className="inline-flex items-center justify-center gap-2 px-10 py-4 rounded-sm bg-[#D4AF37] text-[#0A192F] font-bold text-[13px] uppercase tracking-[0.2em] transition-all duration-300 hover:bg-white hover:text-[#0A192F] shadow-2xl">
                                {locale === 'es' ? 'Solicitar cotización' : 'Request a quote'}
                                <ArrowRight size={18} />
                            </Link>
                            <Link
                                href="https://wa.me/573123902406"
                                className="inline-flex items-center justify-center gap-3 px-10 py-4 rounded-sm bg-transparent border border-[#D4AF37] text-[#D4AF37] font-bold text-[13px] uppercase tracking-[0.2em] transition-all duration-300 hover:bg-[#D4AF37] hover:text-[#0A192F]"
                                target="_blank" rel="noopener noreferrer"
                            >
                                <MessageCircle size={18} />
                                WhatsApp Directo
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Stats */}
                <section className="bg-[#0A192F] py-14 border-y border-[#D4AF37]/10 relative z-20">
                    <div className="container mx-auto px-5 lg:px-16 grid grid-cols-2 lg:grid-cols-4 gap-8 text-center max-w-screen-xl mx-auto">
                        {STATS.map((s, index) => (
                            <div key={index} className="flex flex-col items-center justify-center">
                                <div className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-[#D4AF37] leading-none mb-3">
                                    {s.value}
                                </div>
                                <div className="text-gray-400 text-[10px] font-bold uppercase tracking-[0.2em]">
                                    {locale === 'es' ? s.es : s.en}
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Historia */}
                <section className="py-24 lg:py-32 bg-[#0A192F] border-t border-white/5">
                    <div className="container mx-auto px-5 lg:px-16 max-w-4xl">
                        <div className="grid lg:grid-cols-2 gap-20 items-start">
                            <div className="text-left">
                                <div className="inline-flex items-center gap-4 text-[#D4AF37] font-bold text-[10px] uppercase tracking-[0.4em] mb-10">
                                    <div className="w-8 h-[1px] bg-[#D4AF37]/30" />
                                    {locale === 'es' ? 'Legado' : 'Legacy'}
                                </div>
                                <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-12 tracking-tight leading-[1.1]">
                                    {locale === 'es' ? 'Más de una década traduciendo Colombia al mundo' : 'Over a decade translating Colombia to the world'}
                                </h2>
                            </div>

                            <div className="space-y-10 text-gray-400 text-lg leading-relaxed font-light tracking-wide">
                                <p>
                                    {locale === 'es'
                                        ? 'Nuestra agencia nació bajo una premisa fundamental: la excelencia no es negociable cuando se trata de trámites legales e internacionales. Durante más de 10 años, hemos sido el aliado estratégico de personas y corporaciones que requieren precisión técnica absoluta.'
                                        : 'Our agency was born under a fundamental premise: excellence is non-negotiable when it comes to legal and international procedures. For over 10 years, we have been the strategic ally of individuals and corporations requiring absolute technical precision.'}
                                </p>
                                <p>
                                    {locale === 'es'
                                        ? 'Contamos con un equipo de traductores juramentados especializados en áreas críticas. Cada documento es sometido a un riguroso proceso de control de calidad bajo estándares internacionales antes de su entrega oficial.'
                                        : 'We have a team of sworn translators specialized in critical areas. Every document undergoes a rigorous quality control process under international standards before its official delivery.'}
                                </p>

                                <div className="pt-10 border-t border-white/5">
                                    <p className="font-serif font-bold text-white text-xl mb-3">
                                        Centro Empresarial Atabanza
                                    </p>
                                    <p className="text-[#D4AF37] text-[10px] font-bold uppercase tracking-[0.2em]">
                                        Carrera 14B #161-54 Suite 1002 — Bogotá
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Valores */}
                <section className="py-24 lg:py-32 bg-[#0A192F]">
                    <div className="container mx-auto px-5 lg:px-16 max-w-screen-xl mx-auto">
                        <div className="text-center max-w-2xl mx-auto mb-20">
                            <div className="inline-flex items-center justify-center gap-4 text-[#D4AF37] font-bold text-[10px] uppercase tracking-[0.3em] mb-6">
                                <div className="w-12 h-[1px] bg-[#D4AF37]/30" />
                                {locale === 'es' ? 'Por qué elegirnos' : 'Why choose us'}
                                <div className="w-12 h-[1px] bg-[#D4AF37]/30" />
                            </div>
                            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-8 tracking-tight">
                                {locale === 'es' ? 'Nuestros pilares de calidad' : 'Our quality pillars'}
                            </h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24">
                            {VALUES.map((v, i) => (
                                <div key={i} className="group flex flex-col items-start transition-all duration-500">
                                    <div className="text-[#D4AF37] mb-8 transition-transform duration-500 group-hover:-translate-y-2">
                                        {v.icon}
                                    </div>
                                    <h3 className="text-2xl font-bold font-serif text-white mb-6 tracking-tight group-hover:text-[#D4AF37] transition-colors duration-500">
                                        {locale === 'es' ? v.es.t : v.en.t}
                                    </h3>
                                    <p className="text-gray-500 leading-relaxed font-light tracking-wide group-hover:text-gray-300 transition-colors duration-500 text-lg">
                                        {locale === 'es' ? v.es.d : v.en.d}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA final simplificado */}
                <section className="bg-[#0A192F] py-32 lg:py-40 relative overflow-hidden" id="contacto">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(212,175,55,0.1)_0%,transparent_70%)] pointer-events-none" />
                    <div className="container mx-auto px-5 lg:px-16 text-center max-w-4xl relative z-10">
                        <div className="inline-flex items-center justify-center gap-4 text-[#D4AF37] font-bold text-[10px] uppercase tracking-[0.3em] mb-10">
                            <div className="w-12 h-[1px] bg-[#D4AF37]/30" />
                            {locale === 'es' ? 'Contacto' : 'Contact'}
                            <div className="w-12 h-[1px] bg-[#D4AF37]/30" />
                        </div>
                        <h2 className="text-4xl md:text-6xl font-serif font-bold text-white mb-10 leading-tight tracking-tight">
                            {locale === 'es' ? '¿Listo para empezar?' : 'Ready to start?'}
                        </h2>
                        <p className="text-gray-400 text-xl font-light mb-16 max-w-2xl mx-auto leading-relaxed tracking-wide">
                            {locale === 'es'
                                ? 'Permítenos acompañarte en tus trámites internacionales con el nivel de rigor que mereces. Obtén una cotización formal ahora.'
                                : 'Let us accompany you in your international procedures with the level of rigor you deserve. Get a formal quote now.'}
                        </p>

                        <div className="flex flex-wrap items-center justify-center gap-6">
                            <Link href={`/contacto?lang=${locale}`} className="inline-flex items-center justify-center gap-3 px-10 py-4 rounded-sm bg-[#D4AF37] text-[#0A192F] font-bold text-[13px] uppercase tracking-[0.2em] transition-all duration-300 hover:bg-white hover:text-[#0A192F]">
                                {locale === 'es' ? 'Ir al Formulario' : 'Go to Form'}
                                <ArrowRight size={20} />
                            </Link>
                            <Link href="https://wa.me/573123902406" className="inline-flex items-center justify-center gap-3 px-10 py-4 rounded-sm bg-transparent border border-[#D4AF37] text-[#D4AF37] font-bold text-[13px] uppercase tracking-[0.2em] transition-all duration-300 hover:bg-[#D4AF37] hover:text-[#0A192F]" target="_blank" rel="noopener noreferrer">
                                <MessageCircle size={20} />
                                WhatsApp Directo
                            </Link>
                        </div>
                    </div>
                </section>
            </main>

            <Footer locale={locale} />
        </>
    )
}
