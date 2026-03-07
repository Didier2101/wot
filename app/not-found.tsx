import Link from 'next/link'
import { ArrowLeft, Home, MessageCircle, FileQuestion } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function NotFound() {
    // We assume default locale is 'es' since we don't have a reliable way 
    // to detect locale in a generic 404 without client-side or specific params.
    const locale = 'es'

    return (
        <div className="bg-[#0A192F] min-h-screen flex flex-col">
            <Navbar locale={locale} currentPath="/404" />

            <main className="flex-grow flex items-center justify-center relative overflow-hidden py-32">
                {/* Background Decorative Element */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(212,175,55,0.08)_0%,transparent_70%)] pointer-events-none" />

                <div className="container mx-auto px-5 text-center relative z-10">
                    <div className="w-24 h-24 rounded-sm bg-[#D4AF37]/10 border border-[#D4AF37]/20 flex items-center justify-center text-[#D4AF37] mx-auto mb-12 shadow-2xl animate-in fade-in zoom-in duration-1000">
                        <FileQuestion size={48} />
                    </div>

                    <h1 className="text-7xl md:text-9xl font-serif font-bold text-white mb-6 tracking-tighter opacity-10">
                        404
                    </h1>

                    <h2 className="text-4xl md:text-6xl font-serif font-bold text-white mb-8 tracking-tight mt-[-60px] md:mt-[-100px]">
                        {locale === 'es' ? 'Página no encontrada' : 'Page Not Found'}
                    </h2>

                    <p className="text-gray-400 text-xl font-light mb-16 max-w-xl mx-auto leading-relaxed tracking-wide">
                        {locale === 'es'
                            ? 'Lo sentimos, la ruta que busca no existe o ha sido movida a una nueva ubicación corporativa.'
                            : 'Sorry, the page you looking for doesn\'t exist or has been moved to a new corporate location.'}
                    </p>

                    <div className="flex flex-wrap items-center justify-center gap-6">
                        <Link
                            href={`/?lang=${locale}`}
                            className="inline-flex items-center justify-center gap-3 px-10 py-4 rounded-sm bg-[#D4AF37] text-[#0A192F] font-bold text-[13px] uppercase tracking-[0.2em] transition-all duration-300 hover:bg-white hover:text-[#0A192F] shadow-2xl"
                        >
                            <Home size={18} />
                            {locale === 'es' ? 'Volver al Inicio' : 'Back to Home'}
                        </Link>
                        <Link
                            href={`/contacto?lang=${locale}`}
                            className="inline-flex items-center justify-center gap-3 px-10 py-4 rounded-sm bg-transparent border border-[#D4AF37] text-[#D4AF37] font-bold text-[13px] uppercase tracking-[0.2em] transition-all duration-300 hover:bg-[#D4AF37] hover:text-[#0A192F]"
                        >
                            <MessageCircle size={18} />
                            {locale === 'es' ? 'Consultar Soporte' : 'Contact Support'}
                        </Link>
                    </div>
                </div>
            </main>

            <Footer locale={locale} />
        </div>
    )
}
