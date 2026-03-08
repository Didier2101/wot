'use client'

import Image from 'next/image'
import { useState, useEffect } from 'react'
import {
  Scale, BadgeCheck, Microscope, GraduationCap, Briefcase, HeartPulse,
  MessageCircle, Star, Shield, Clock, Award,
  CheckCircle, ArrowRight,
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

// ── Service image mapper ──────────────────────────────────────────────────
const SERVICE_IMAGES: Record<string, string> = {
  'juridicos': 'https://images.unsplash.com/photo-1505664194779-8beaceb93744?q=80&w=1000&auto=format&fit=crop',
  'juramentados': 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=1000&auto=format&fit=crop',
  'academicos': 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1000&auto=format&fit=crop',
  'identificacion': 'https://images.unsplash.com/photo-1593113503874-42fcd69947ae?q=80&w=1000&auto=format&fit=crop',
  'tecnicos': 'https://images.unsplash.com/photo-1532187863486-abf51ad982d7?q=80&w=1000&auto=format&fit=crop',
  'medicos': 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1000&auto=format&fit=crop',
  'financieros': 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=1000&auto=format&fit=crop',
  'publicitarios': 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop'
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
    content: 'Necesitaba documentos en inglés para un contrato con proveedores europeos. El equipo cumplió perfectamente mis expectativas.',
    rating: 5,
  },
  {
    id: '3', name: 'Valentina Torres', role: 'Estudiante de Maestría', company: 'U. de los Andes',
    content: 'Tradujeron mis diplomas y notas en tiempo récord para mi solicitud de visa. Proceso muy profesional.',
    rating: 5,
  },
]

const PHONE_WA = '573028645014'

// ── Stars ──────────────────────────────────────────────────────────────────


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
      <div className="min-h-screen flex items-center justify-center bg-[#0A192F]">
        <div className="w-8 h-8 rounded-full border-4 border-white/10 border-t-[#D4AF37] animate-spin" />
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
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop"
            alt="Lex Translations Corporate"
            fill
            priority
            className="object-cover object-center z-0 opacity-50 grayscale-[0.3]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0A192F] via-[#0A192F]/70 to-[#0A192F] z-10" />

          <div className="container mx-auto px-5 lg:px-16 relative z-20">
            <div className="text-center max-w-[900px] mx-auto flex flex-col items-center">

              <div className="inline-flex items-center gap-3 px-6 py-2 rounded-sm bg-[#D4AF37]/10 text-[#D4AF37] text-[10px] font-bold uppercase tracking-[0.2em] border border-[#D4AF37]/20 backdrop-blur-md mb-10 animate-in fade-in slide-in-from-bottom-4 duration-1000">
                <BadgeCheck size={14} />
                {t.hero.badge}
              </div>

              <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[5rem] font-serif font-bold text-white leading-[1.1] mb-10 animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-100 fill-mode-both">
                {t.hero.h1a} <em className="text-[#D4AF37] font-normal not-italic relative">{t.hero.h1b}</em> {t.hero.h1c}
              </h1>

              <p className="text-xl md:text-2xl text-gray-300 mb-14 max-w-2xl mx-auto leading-relaxed animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-200 fill-mode-both font-light tracking-wide">
                {t.hero.subtitle}
              </p>

              <div className="flex flex-wrap items-center justify-center gap-6 mb-20 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300 fill-mode-both">
                <Link
                  href={`/contacto?lang=${locale}`}
                  className="inline-flex items-center justify-center gap-2 px-10 py-4 rounded-sm bg-[#D4AF37] text-[#0A192F] font-bold text-[13px] uppercase tracking-[0.15em] transition-all duration-300 hover:bg-white hover:text-[#0A192F] shadow-2xl"
                >
                  {t.hero.ctaPrimary}
                  <ArrowRight size={18} />
                </Link>
                <Link
                  href={`https://wa.me/${PHONE_WA}?text=${t.shared.waHeroText}`}
                  className="inline-flex items-center justify-center gap-2 px-10 py-4 rounded-sm bg-transparent border border-[#D4AF37] text-[#D4AF37] font-bold text-[13px] uppercase tracking-[0.15em] transition-all duration-300 hover:bg-[#D4AF37] hover:text-[#0A192F]"
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
                    <div className="text-5xl md:text-6xl font-serif font-bold text-white mb-3 tracking-tighter">{s.n}</div>
                    <div className="text-[10px] text-[#D4AF37] font-bold tracking-[0.3em] uppercase opacity-80">{s.l}</div>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </section>

        {/* ════════════════════ TRUST BAR ════════════════════ */}
        <div className="bg-[#0A192F] py-8 border-y border-[#D4AF37]/10">
          <div className="container mx-auto px-5 lg:px-16 flex flex-wrap items-center justify-center gap-10 md:gap-20">
            {[
              { i: Shield, t: t.trust.t1 },
              { i: Clock, t: t.trust.t2 },
              { i: Award, t: t.trust.t3 },
              { i: CheckCircle, t: t.trust.t4 },
              { i: Star, t: t.trust.t5 }
            ].map((Item, idx) => (
              <div key={idx} className="flex items-center gap-3 text-gray-400 text-[0.75rem] font-bold uppercase tracking-[0.2em]">
                <Item.i size={14} className="text-[#D4AF37] shrink-0" />
                <span>{Item.t}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ════════════════════ SERVICES ════════════════════ */}
        <section className="py-24 lg:py-32 bg-[#0A192F] relative overflow-hidden" id="servicios">
          <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-[#D4AF37]/5 blur-[120px] rounded-full pointer-events-none" />
          <div className="container mx-auto px-5 lg:px-16 relative z-10">
            <div className="text-center max-w-2xl mx-auto mb-20">
              <div className="inline-flex items-center justify-center gap-4 text-[#D4AF37] font-bold text-[10px] uppercase tracking-[0.3em] mb-6">
                <div className="w-12 h-[1px] bg-[#D4AF37]/30" />
                {t.services.sectionLabel}
                <div className="w-12 h-[1px] bg-[#D4AF37]/30" />
              </div>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6 leading-tight tracking-tight">{t.services.h2}</h2>
              <p className="text-gray-400 text-lg leading-relaxed font-light">{t.services.subtitle}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-20">
              {services.map((service) => (
                <article
                  key={service.slug}
                  className="group relative flex flex-col h-full transition-all duration-500"
                >
                  <div className="relative aspect-[4/5] overflow-hidden rounded-sm mb-8">
                    <Image
                      src={SERVICE_IMAGES[service.slug] || "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=1000&auto=format&fit=crop"}
                      alt={service.title}
                      fill
                      className="object-cover transition-transform duration-1000 group-hover:scale-110 grayscale-[0.6] group-hover:grayscale-0"
                    />
                    <div className="absolute inset-0 bg-[#0A192F]/40 group-hover:bg-transparent transition-colors duration-500" />
                    <div className="absolute bottom-6 left-6">
                      <div className="w-10 h-10 rounded-sm bg-[#D4AF37] flex items-center justify-center text-[#0A192F] shadow-2xl transition-transform duration-500 group-hover:-translate-y-2">
                        {ICON_MAP[service.icon] ?? <FileTextIcon />}
                      </div>
                    </div>
                  </div>

                  <h3 className="text-white font-serif font-bold text-2xl mb-4 tracking-tight group-hover:text-[#D4AF37] transition-colors duration-500">{service.title}</h3>
                  <p className="text-gray-500 text-sm md:text-base leading-relaxed mb-8 flex-grow font-light tracking-wide group-hover:text-gray-300 transition-colors duration-500">{service.description}</p>

                  <Link href={`/contacto?lang=${locale}&servicio=${service.title}`} className="inline-flex items-center gap-4 text-[10px] font-bold text-[#D4AF37] uppercase tracking-[0.3em] transition-all group/link mt-auto py-2">
                    <span className="relative">
                      {t.services.cta}
                      <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#D4AF37] transition-all duration-500 group-hover/link:w-full" />
                    </span>
                    <ArrowRight size={16} className="group-hover/link:translate-x-2 transition-transform duration-500" />
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ════════════════════ PROCESS ════════════════════ */}
        <section className="py-24 lg:py-32 bg-[#0A192F]" id="proceso">
          <div className="container mx-auto px-5 lg:px-16">
            <div className="text-center max-w-2xl mx-auto mb-20">
              <div className="inline-flex items-center justify-center gap-4 text-[#D4AF37] font-bold text-[10px] uppercase tracking-[0.3em] mb-6">
                <div className="w-12 h-[1px] bg-[#D4AF37]/30" />
                {t.process.sectionLabel}
                <div className="w-12 h-[1px] bg-[#D4AF37]/30" />
              </div>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6 leading-tight tracking-tight">{t.process.h2}</h2>
              <p className="text-gray-400 text-lg leading-relaxed font-light">{t.process.subtitle}</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 relative">
              {t.process.steps.map((step) => (
                <div key={step.n} className="group relative z-10 transition-all duration-500">
                  <div className="mb-10 relative">
                    <div className="text-8xl font-serif font-bold text-white/5 absolute -top-12 -left-6 group-hover:text-[#D4AF37]/10 transition-colors duration-500 italic">
                      {step.n}
                    </div>
                    <div className="w-12 h-12 rounded-sm bg-transparent border border-[#D4AF37]/20 flex items-center justify-center text-[#D4AF37] font-serif text-xl font-bold transition-all duration-500 group-hover:bg-[#D4AF37] group-hover:text-[#0A192F] group-hover:border-[#D4AF37] relative z-10">
                      {step.n}
                    </div>
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-white mb-6 tracking-tight group-hover:text-[#D4AF37] transition-colors duration-500">{step.title}</h3>
                  <p className="text-gray-500 text-base leading-relaxed font-light tracking-wide group-hover:text-gray-300 transition-colors duration-500">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ════════════════════ TESTIMONIALS ════════════════════ */}
        <section className="py-24 lg:py-32 bg-[#0A192F] border-y border-[#D4AF37]/5" id="testimonios">
          <div className="container mx-auto px-5 lg:px-16">
            <div className="text-center max-w-2xl mx-auto mb-20">
              <div className="inline-flex items-center justify-center gap-4 text-[#D4AF37] font-bold text-[10px] uppercase tracking-[0.3em] mb-6">
                <div className="w-12 h-[1px] bg-[#D4AF37]/30" />
                {t.testimonials.sectionLabel}
                <div className="w-12 h-[1px] bg-[#D4AF37]/30" />
              </div>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6 leading-tight tracking-tight">{t.testimonials.h2}</h2>
              <p className="text-gray-400 text-lg leading-relaxed font-light">{t.testimonials.subtitle}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {TESTIMONIALS.map((t2) => (
                <blockquote key={t2.id} className="bg-white/5 border border-white/5 rounded-sm p-10 shadow-2xl hover:border-[#D4AF37]/20 transition-all duration-500 relative flex flex-col h-full">
                  <div className="absolute top-6 right-8 text-5xl text-[#D4AF37]/20 font-serif leading-none italic select-none">&quot;</div>
                  <div className="flex gap-1 text-[#D4AF37] mb-6">
                    {Array.from({ length: t2.rating }).map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                  </div>
                  <p className="text-gray-200 italic leading-relaxed mb-8 font-light text-lg grow tracking-wide">&ldquo;{t2.content}&rdquo;</p>
                  <footer className="mt-auto border-t border-white/5 pt-8">
                    <div className="font-serif font-bold text-white text-lg mb-1 tracking-tight">{t2.name}</div>
                    <div className="text-[11px] text-[#D4AF37] font-bold uppercase tracking-[0.2em] opacity-80">{t2.role}{t2.company ? ` · ${t2.company}` : ''}</div>
                  </footer>
                </blockquote>
              ))}
            </div>
          </div>
        </section>

        {/* ════════════════════ CONTACT CTA ════════════════════ */}
        <section className="py-24 lg:py-40 relative overflow-hidden bg-[#0A192F]" id="contacto">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(212,175,55,0.15)_0%,transparent_70%)] pointer-events-none" />

          <div className="container mx-auto px-5 lg:px-16 relative z-10 text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center justify-center gap-4 text-[#D4AF37] font-bold text-[10px] uppercase tracking-[0.3em] mb-8">
              <div className="w-12 h-[1px] bg-[#D4AF37]/30" />
              {t.contact.sectionLabel}
              <div className="w-12 h-[1px] bg-[#D4AF37]/30" />
            </div>

            <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-white leading-[1.1] mb-8 tracking-tight">
              {t.contact.h2a} <span className="text-[#D4AF37] italic">{t.contact.h2b}</span>
            </h2>

            <p className="text-gray-400 text-lg md:text-2xl max-w-2xl mx-auto mb-16 font-light leading-relaxed tracking-wide">
              {locale === 'es'
                ? 'Solicite su cotización oficial en minutos. Atención técnica personalizada para empresas y personas naturales.'
                : 'Request your official quote in minutes. Personalized technical assistance for companies and individuals.'}
            </p>

            <div className="flex flex-wrap items-center justify-center gap-6">
              <Link
                href={`/contacto?lang=${locale}`}
                className="inline-flex items-center justify-center gap-3 px-10 py-4 rounded-sm bg-[#D4AF37] text-[#0A192F] font-bold text-[13px] uppercase tracking-[0.2em] transition-all duration-300 hover:bg-white hover:text-[#0A192F]"
              >
                {locale === 'es' ? 'Ir al Formulario' : 'Go to Form'}
                <ArrowRight size={18} />
              </Link>
              <Link
                href={`https://wa.me/${PHONE_WA}?text=${t.shared.waText}`}
                className="inline-flex items-center justify-center gap-3 px-10 py-4 rounded-sm bg-transparent border border-[#D4AF37] text-[#D4AF37] font-bold text-[13px] uppercase tracking-[0.2em] transition-all duration-300 hover:bg-[#D4AF37] hover:text-[#0A192F]"
                target="_blank" rel="noopener noreferrer"
              >
                <MessageCircle size={18} />
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

export default function HomePage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center bg-[#0A192F]">
        <div className="w-10 h-10 rounded-full border-4 border-white/10 border-t-[#D4AF37] animate-spin" />
      </div>
    }>
      <HomeContent />
    </Suspense>
  )
}
