'use client'

import Image from 'next/image'
import { useState, useEffect } from 'react'
import {
  Scale, BadgeCheck, Microscope, GraduationCap, Briefcase, HeartPulse,
  MessageCircle, Star, Shield, Clock, Award,
  CheckCircle, ArrowRight, ChevronRight,
} from 'lucide-react'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { getDict, type Locale } from '@/lib/i18n'
import { useSearchParams } from 'next/navigation'
import { Suspense } from 'react'

// ── Icon map ───────────────────────────────────────────────────────────────
const ICON_MAP: Record<string, React.ReactNode> = {
  Scale: <Scale size={22} />,
  BadgeCheck: <BadgeCheck size={22} />,
  Microscope: <Microscope size={22} />,
  GraduationCap: <GraduationCap size={22} />,
  Briefcase: <Briefcase size={22} />,
  HeartPulse: <HeartPulse size={22} />,
}

// ── Testimonials (static data) ─────────────────────────────────────────────
const TESTIMONIALS = [
  {
    id: '1', name: 'María Camila Rondón', role: 'Abogada', company: 'Rondón & Asociados',
    content: 'Excelente servicio. Entregaron la traducción juramentada en 24 horas con total precisión legal. Los recomiendo ampliamente.',
    rating: 5,
  },
  {
    id: '2', name: 'Carlos Medina', role: 'Empresario', company: 'Importaciones Medina SAS',
    content: 'Necesitaba documentos en inglés para un contrato con proveedores europeos. WOT cumplió perfectamente mis expectativas.',
    rating: 5,
  },
  {
    id: '3', name: 'Valentina Torres', role: 'Estudiante de Maestría', company: 'U. de los Andes',
    content: 'Tradujeron mis diplomas y notas en tiempo récord para mi solicitud de visa. Proceso muy profesional.',
    rating: 5,
  },
]

const PHONE_WA = '573123902406'

// ── Stars ──────────────────────────────────────────────────────────────────
function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-1 text-yellow-500 mb-4">
      {Array.from({ length: count }).map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
    </div>
  )
}

// ── FileTextIcon fallback ──────────────────────────────────────────────────
function FileTextIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
    </svg>
  )
}

// ── Main client component ──────────────────────────────────────────────────
function HomeContent() {
  const searchParams = useSearchParams()
  const [mounted, setMounted] = useState(false)

  const langParam = searchParams.get('lang')
  const locale: Locale = (langParam === 'en' || langParam === 'es') ? langParam : 'es'

  useEffect(() => {
    // Avoid cascading render warning by deferring state update
    Promise.resolve().then(() => setMounted(true))
  }, [])

  const t = getDict(locale)

  if (!mounted) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-8 h-8 rounded-full border-4 border-slate-200 border-t-yellow-500 animate-spin" />
      </div>
    )
  }

  const services = t.services.items

  return (
    <>
      <Navbar locale={locale} currentPath="/" />

      <main className="font-sans antialiased text-slate-800">
        {/* ════════════════════ HERO ════════════════════ */}
        <section className="relative min-h-[90vh] flex flex-col justify-center py-20 lg:py-32" id="inicio">
          <Image
            src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2000&auto=format&fit=crop"
            alt="Fondo Traducciones Documentación"
            fill
            priority
            className="object-cover object-center z-0"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#0c1a35]/95 to-[#1a3a6c]/90 z-10" />

          <div className="container mx-auto px-5 lg:px-16 relative z-20">
            <div className="text-center max-w-[900px] mx-auto flex flex-col items-center">

              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white text-xs font-bold uppercase tracking-wider border border-white/20 shadow-sm backdrop-blur-md mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
                <BadgeCheck size={16} className="text-yellow-400" />
                {t.hero.badge}
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[4rem] font-serif font-bold text-white leading-[1.15] mb-8 animate-in fade-in slide-in-from-bottom-6 duration-700 delay-100 fill-mode-both">
                {t.hero.h1a} <em className="text-yellow-400 font-normal not-italic relative">{t.hero.h1b}</em> {t.hero.h1c}
              </h1>

              <p className="text-lg md:text-xl text-blue-100/90 mb-12 max-w-2xl mx-auto leading-relaxed animate-in fade-in slide-in-from-bottom-6 duration-700 delay-200 fill-mode-both font-light">
                {t.hero.subtitle}
              </p>

              <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6 mb-16 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-300 fill-mode-both">
                <Link
                  href={`/contacto?lang=${locale}`}
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-md bg-yellow-400 hover:bg-yellow-500 text-neutral-900 font-extrabold text-[0.85rem] uppercase tracking-wider transition-all shadow-[0_4px_14px_rgba(250,204,21,0.4)] hover:-translate-y-1 hover:shadow-[0_6px_20px_rgba(250,204,21,0.5)] whitespace-nowrap"
                >
                  {t.hero.ctaPrimary}
                  <ArrowRight size={18} />
                </Link>
                <Link
                  href={`https://wa.me/${PHONE_WA}?text=${t.shared.waHeroText}`}
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-md bg-transparent hover:bg-white/10 text-white border-2 border-white/70 font-bold text-[0.85rem] uppercase tracking-wider transition-all hover:border-white whitespace-nowrap"
                  target="_blank" rel="noopener noreferrer"
                >
                  <MessageCircle size={18} />
                  {t.hero.ctaWhatsapp}
                </Link>
              </div>

              {/* Stats */}
              <div className="flex flex-wrap justify-center gap-10 md:gap-24 text-center animate-in fade-in slide-in-from-bottom-8 duration-700 delay-500 fill-mode-both">
                {[
                  { n: t.hero.stat1number, l: t.hero.stat1label },
                  { n: t.hero.stat2number, l: t.hero.stat2label },
                  { n: t.hero.stat3number, l: t.hero.stat3label }
                ].map((s, i) => (
                  <div key={i} className="flex flex-col items-center">
                    <div className="text-4xl md:text-5xl font-serif font-bold text-yellow-400 mb-2 drop-shadow-sm">{s.n}</div>
                    <div className="text-[0.7rem] md:text-xs text-blue-100/90 font-bold tracking-[0.15em] uppercase">{s.l}</div>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </section>

        {/* ════════════════════ TRUST BAR ════════════════════ */}
        <div className="bg-[#1a3a6c] py-5 border-y border-[#122040]">
          <div className="container mx-auto px-5 lg:px-16 flex flex-wrap items-center justify-center gap-6 md:gap-12">
            {[
              { i: Shield, t: t.trust.t1 },
              { i: Clock, t: t.trust.t2 },
              { i: Award, t: t.trust.t3 },
              { i: CheckCircle, t: t.trust.t4 },
              { i: Star, t: t.trust.t5 }
            ].map((Item, idx) => (
              <div key={idx} className="flex items-center gap-2 text-white/90 text-[0.85rem] font-medium tracking-wide">
                <Item.i size={16} className="text-yellow-400 shrink-0" />
                <span>{Item.t}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ════════════════════ SERVICES ════════════════════ */}
        <section className="py-20 lg:py-28 bg-slate-50 relative" id="servicios">
          <div className="container mx-auto px-5 lg:px-16">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <div className="inline-flex items-center justify-center gap-3 text-[#1a3a6c] font-bold text-xs uppercase tracking-[0.15em] mb-4">
                <div className="w-8 h-[2px] bg-yellow-400 rounded-full" />
                {t.services.sectionLabel}
              </div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#0c1a35] mb-5 leading-tight">{t.services.h2}</h2>
              <p className="text-slate-600 text-[1.05rem] leading-relaxed">{t.services.subtitle}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {services.map((service) => (
                <article
                  key={service.slug}
                  className="group bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 relative overflow-hidden flex flex-col h-full"
                >
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-500 to-yellow-400 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out" />

                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#1a3a6c] to-[#1e4a8a] flex items-center justify-center text-yellow-400 shadow-md mb-6 shrink-0 transition-transform group-hover:scale-110">
                    {ICON_MAP[service.icon] ?? <FileTextIcon />}
                  </div>
                  <h3 className="text-[#0c1a35] font-serif font-bold text-lg lg:text-xl mb-3">{service.title}</h3>
                  <p className="text-slate-600 text-sm md:text-[0.9rem] leading-relaxed mb-6 flex-grow">{service.description}</p>

                  <Link href={`/contacto?lang=${locale}&servicio=${service.title}`} className="inline-flex items-center gap-1.5 text-xs font-bold text-[#1a3a6c] hover:text-yellow-600 uppercase tracking-wider transition-colors group/link mt-auto w-fit">
                    {t.services.cta}
                    <ChevronRight size={14} className="group-hover/link:translate-x-1.5 transition-transform" />
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ════════════════════ PROCESS ════════════════════ */}
        <section className="py-20 lg:py-28 bg-white" id="proceso">
          <div className="container mx-auto px-5 lg:px-16">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <div className="inline-flex items-center gap-3 text-[#1a3a6c] font-bold text-xs uppercase tracking-[0.15em] mb-4">
                <div className="w-8 h-[2px] bg-yellow-400 rounded-full" />
                {t.process.sectionLabel}
              </div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#0c1a35] mb-5 leading-tight">{t.process.h2}</h2>
              <p className="text-slate-600 text-[1.05rem] leading-relaxed">{t.process.subtitle}</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 relative">
              {t.process.steps.map((step) => (
                <div key={step.n} className="text-center bg-white border border-slate-100 rounded-2xl p-8 shadow-sm hover:shadow-xl hover:border-yellow-200 transition-all duration-300 hover:-translate-y-2 z-10">
                  <div className="w-16 h-16 rounded-full mx-auto bg-gradient-to-br from-[#1a3a6c] to-[#1e4a8a] text-white flex items-center justify-center font-serif text-2xl font-bold shadow-lg shadow-[#1a3a6c]/20 mb-6">
                    {step.n}
                  </div>
                  <h3 className="font-serif text-[1.1rem] font-bold text-[#0c1a35] mb-3">{step.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ════════════════════ TESTIMONIALS ════════════════════ */}
        <section className="py-20 lg:py-28 bg-[#f0f5ff] border-y border-[#e8f0fb]" id="testimonios">
          <div className="container mx-auto px-5 lg:px-16">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <div className="inline-flex items-center gap-3 text-[#1a3a6c] font-bold text-xs uppercase tracking-[0.15em] mb-4">
                <div className="w-8 h-[2px] bg-yellow-400 rounded-full" />
                {t.testimonials.sectionLabel}
              </div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#0c1a35] mb-5 leading-tight">{t.testimonials.h2}</h2>
              <p className="text-slate-600 text-[1.05rem] leading-relaxed">{t.testimonials.subtitle}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {TESTIMONIALS.map((t2) => (
                <blockquote key={t2.id} className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm hover:shadow-md hover:border-yellow-300 hover:-translate-y-1 transition-all duration-300 relative flex flex-col h-full">
                  <div className="absolute top-4 right-6 text-6xl text-blue-50 font-serif leading-none italic select-none">&quot;</div>
                  <Stars count={t2.rating} />
                  <p className="text-slate-700 italic leading-relaxed mb-6 font-medium text-[0.95rem] grow">&ldquo;{t2.content}&rdquo;</p>
                  <footer className="mt-auto border-t border-slate-100 pt-5">
                    <div className="font-bold text-[#0c1a35] text-[0.95rem] mb-1">{t2.name}</div>
                    <div className="text-sm text-slate-500 font-medium">{t2.role}{t2.company ? ` · ${t2.company}` : ''}</div>
                  </footer>
                </blockquote>
              ))}
            </div>
          </div>
        </section>

        {/* ════════════════════ CONTACT CTA ════════════════════ */}
        <section className="py-20 lg:py-28 relative overflow-hidden bg-gradient-to-br from-[#0c1a35] to-[#1a3a6c]" id="contacto">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_100%,rgba(201,162,39,0.15)_0%,transparent_60%)] pointer-events-none" />

          <div className="container mx-auto px-5 lg:px-16 relative z-10 text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-3 text-yellow-400 font-bold text-xs uppercase tracking-[0.15em] mb-6">
              {t.contact.sectionLabel}
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-[2.75rem] font-serif font-bold text-white leading-[1.15] mb-6">
              {t.contact.h2a} <span className="text-yellow-400 relative inline-block">{t.contact.h2b}<span className="absolute bottom-0 left-0 w-full h-[4px] bg-yellow-400/30 rounded-full" /></span>
            </h2>

            <p className="text-white/70 text-lg md:text-xl max-w-2xl mx-auto mb-12 font-light leading-relaxed">
              {locale === 'es'
                ? 'Solicite su cotización oficial en minutos. Atención técnica personalizada para empresas y personas naturales.'
                : 'Request your official quote in minutes. Personalized technical assistance for companies and individuals.'}
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href={`/contacto?lang=${locale}`}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-md bg-yellow-400 hover:bg-yellow-500 text-neutral-900 font-extrabold text-sm uppercase tracking-wider transition-all shadow-[0_4px_14px_rgba(250,204,21,0.3)] hover:-translate-y-1 whitespace-nowrap"
              >
                {locale === 'es' ? 'Ir al Formulario de Contacto' : 'Go to Contact Form'}
                <ArrowRight size={18} />
              </Link>
              <Link
                href={`https://wa.me/${PHONE_WA}?text=${t.shared.waText}`}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-md bg-[#25d366] hover:bg-[#1eb358] text-white font-bold text-sm uppercase tracking-wider transition-all shadow-[0_4px_14px_rgba(37,211,102,0.3)] hover:-translate-y-1 whitespace-nowrap"
                target="_blank" rel="noopener noreferrer"
              >
                <MessageCircle size={18} />
                {t.contact.whatsappBtn}
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer locale={locale} />


    </>
  )
}

export default function HomePage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <div className="w-10 h-10 rounded-full border-4 border-slate-200 border-t-[#c9a227] animate-spin" />
      </div>
    }>
      <HomeContent />
    </Suspense>
  )
}
