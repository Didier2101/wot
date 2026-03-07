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
            ? 'Quiénes Somos | WOT Traducciones — Traductores Oficiales Bogotá'
            : 'About Us | WOT Translations — Official Translators Bogotá',
        description: locale === 'es'
            ? 'WORLD OFFICIAL TRANSLATIONS S.A.S. — 14 años de experiencia. Traductores oficiales certificados ante el MRE. Bogotá, Colombia.'
            : 'WORLD OFFICIAL TRANSLATIONS S.A.S. — 14 years of experience. Official translators certified before the Colombian Ministry of Foreign Affairs.',
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

            <main className="font-sans antialiased text-slate-800">
                {/* HERO */}
                <section className="bg-gradient-to-br from-[#0c1a35] via-[#1a3055] to-[#1e4a8a] py-16 lg:py-24" aria-label="Nosotros">
                    <div className="container mx-auto px-5 lg:px-16 max-w-5xl text-center">
                        <nav aria-label="breadcrumb" className="flex items-center justify-center gap-2 text-sm text-white/60 mb-8 font-medium">
                            <Link href={`/?lang=${locale}`} className="text-white/80 hover:text-white transition-colors">Home</Link>
                            <span className="text-white/40">/</span>
                            <span className="text-white/95">{locale === 'es' ? 'Nosotros' : 'About'}</span>
                        </nav>

                        <div className="mx-auto w-16 h-16 rounded-2xl bg-gradient-to-br from-yellow-500/20 to-yellow-400/10 border border-yellow-400/20 flex items-center justify-center text-yellow-400 mb-6 shadow-[0_8px_32px_rgba(0,0,0,0.2)]">
                            <Users size={32} />
                        </div>

                        <div className="inline-flex items-center gap-2 text-yellow-400 text-xs font-bold uppercase tracking-wider mb-6">
                            <CheckCircle size={14} />
                            WORLD OFFICIAL TRANSLATIONS S.A.S.
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl text-white font-serif font-bold mb-6 leading-tight">
                            {locale === 'es' ? 'Traductores oficiales en Bogotá desde 2010' : 'Official translators in Bogotá since 2010'}
                        </h1>

                        <p className="text-yellow-400/90 text-xl font-medium mb-6">
                            {locale === 'es'
                                ? 'Empresa colombiana especializada en traducciones certificadas y oficiales. Traductores juramentados habilitados por el MRE, con enfoque en calidad, puntualidad y atención personalizada.'
                                : 'Colombian company specialized in certified and official translations. Sworn translators authorized by the MFA, focused on quality, punctuality and personalized service.'}
                        </p>

                        <div className="flex flex-wrap items-center justify-center gap-4 mt-12">
                            <Link href={`/?lang=${locale}#contacto`} className="inline-flex items-center gap-2 px-8 py-3.5 rounded-md bg-yellow-400 hover:bg-yellow-500 text-neutral-900 font-extrabold text-sm tracking-wider uppercase transition-all shadow-lg hover:-translate-y-1">
                                {locale === 'es' ? 'Solicitar cotización' : 'Request a quote'}
                                <ArrowRight size={18} />
                            </Link>
                            <Link
                                href="https://wa.me/573123902406"
                                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-md bg-[#25d366] hover:bg-[#1eb358] text-white font-extrabold text-sm tracking-wider transition-all shadow-lg hover:-translate-y-1"
                                target="_blank" rel="noopener noreferrer"
                            >
                                <MessageCircle size={18} />
                                WhatsApp
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Stats */}
                <section className="bg-[#0c1a35] py-12 border-t border-white/10 relative z-20">
                    <div className="container mx-auto px-5 lg:px-16 grid grid-cols-2 lg:grid-cols-4 gap-8 text-center max-w-screen-xl mx-auto">
                        {STATS.map((s, index) => (
                            <div key={index} className="flex flex-col items-center justify-center">
                                <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-yellow-400 leading-none mb-2">
                                    {s.value}
                                </div>
                                <div className="text-white/80 text-sm md:text-base font-medium uppercase tracking-wider">
                                    {locale === 'es' ? s.es : s.en}
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Historia */}
                <section className="py-24 bg-white">
                    <div className="container mx-auto px-5 lg:px-16 max-w-3xl text-center">
                        <div className="text-[#0c1a35] font-bold text-sm uppercase tracking-[0.15em] mb-4 flex items-center justify-center gap-2">
                            <div className="w-8 h-[2px] bg-[#c9a227] rounded-full" />
                            {locale === 'es' ? 'Nuestra historia' : 'Our story'}
                            <div className="w-8 h-[2px] bg-[#c9a227] rounded-full" />
                        </div>
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#0c1a35] mb-10">
                            {locale === 'es' ? 'Más de una década traduciendo Colombia al mundo' : 'Over a decade translating Colombia to the world'}
                        </h2>

                        <div className="space-y-6 text-slate-600 text-lg leading-relaxed text-left">
                            <p>
                                {locale === 'es'
                                    ? 'WOT Traducciones nació en Bogotá como respuesta a una necesidad real: colombianos que requerían traducciones confiables para trámites migratorios, académicos y legales. Hemos traducido más de 50.000 documentos para clientes en Colombia y el exterior.'
                                    : 'WOT Translations was born in Bogotá in response to a real need: Colombians who needed reliable translations for immigration, academic and legal procedures. We have translated over 50,000 documents for clients in Colombia and abroad.'}
                            </p>
                            <p>
                                {locale === 'es'
                                    ? 'Hoy somos un equipo de traductores juramentados especializados por área: derecho, medicina, finanzas, tecnología y marketing. Cada documento pasa por dos revisiones antes de ser entregado.'
                                    : 'Today we are a team of sworn translators specialized by area: law, medicine, finance, technology and marketing. Every document goes through two reviews before delivery.'}
                            </p>

                            <div className="mt-8 bg-blue-50 border border-blue-100 rounded-2xl p-6 text-center shadow-sm">
                                <p className="font-bold text-[#0c1a35] mb-2 flex items-center justify-center gap-2">
                                    📍 Carrera 14B #161-54, Torre 2, Oficina 1002 — Bogotá, Colombia
                                </p>
                                <p className="text-[#1a3a6c] text-sm">
                                    🕐 {locale === 'es' ? 'Lun–Vie 8am–6pm | Sáb 9am–1pm' : 'Mon–Fri 8am–6pm | Sat 9am–1pm'}
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Valores */}
                <section className="py-24 bg-slate-50 border-t border-slate-200">
                    <div className="container mx-auto px-5 lg:px-16 max-w-screen-xl mx-auto">
                        <div className="text-center max-w-2xl mx-auto mb-16">
                            <div className="text-[#0c1a35] font-bold text-sm uppercase tracking-[0.15em] mb-4 flex items-center justify-center gap-2">
                                <div className="w-8 h-[2px] bg-[#c9a227] rounded-full" />
                                {locale === 'es' ? 'Por qué elegirnos' : 'Why choose us'}
                                <div className="w-8 h-[2px] bg-[#c9a227] rounded-full" />
                            </div>
                            <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#0c1a35] mb-6">
                                {locale === 'es' ? 'Nuestros pilares de calidad' : 'Our quality pillars'}
                            </h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {VALUES.map((v, i) => (
                                <div key={i} className="bg-white border border-slate-200 rounded-2xl p-8 flex gap-6 hover:shadow-lg transition-shadow">
                                    <div className="w-14 h-14 rounded-xl bg-blue-50 text-[#1a3a6c] flex items-center justify-center shrink-0 border border-blue-100">
                                        {v.icon}
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-[#0c1a35] mb-2">
                                            {locale === 'es' ? v.es.t : v.en.t}
                                        </h3>
                                        <p className="text-slate-600 leading-relaxed">
                                            {locale === 'es' ? v.es.d : v.en.d}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA final simplificado */}
                <section className="bg-blue-50 py-24 border-y border-blue-100" id="contacto">
                    <div className="container mx-auto px-5 lg:px-16 text-center max-w-3xl">
                        <div className="text-[#0c1a35] font-bold text-sm uppercase tracking-[0.15em] mb-6 inline-flex items-center gap-3">
                            <div className="w-8 h-[2px] bg-yellow-400 rounded-full" />
                            {locale === 'es' ? 'Contacto' : 'Contact'}
                            <div className="w-8 h-[2px] bg-yellow-400 rounded-full" />
                        </div>
                        <h2 className="text-[#0c1a35] font-serif font-bold text-3xl md:text-4xl leading-tight mb-8">
                            {locale === 'es' ? '¿Listo para empezar?' : 'Ready to start?'}
                        </h2>
                        <p className="text-slate-600 text-lg md:text-xl mb-12 leading-relaxed">
                            {locale === 'es'
                                ? 'Permítenos ayudarte con tus trámites. Contáctenos para recibir una cotización formal en minutos.'
                                : 'Let us help you with your procedures. Contact us to receive a formal quote in minutes.'}
                        </p>

                        <div className="flex flex-wrap items-center justify-center gap-4">
                            <Link href={`/contacto?lang=${locale}`} className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-[#1a3a6c] hover:bg-[#122040] text-white font-bold tracking-wider transition-colors shadow-lg">
                                {locale === 'es' ? 'Ir al Formulario' : 'Go to Form'}
                                <ArrowRight size={20} />
                            </Link>
                            <Link href="https://wa.me/573123902406" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-[#25d366] hover:bg-[#1eb358] text-white font-bold tracking-wider transition-colors shadow-lg" target="_blank" rel="noopener noreferrer">
                                <MessageCircle size={20} />
                                WhatsApp
                            </Link>
                        </div>
                    </div>
                </section>
            </main>

            <Footer locale={locale} />
        </>
    )
}
