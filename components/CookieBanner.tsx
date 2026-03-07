'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { X, Cookie } from 'lucide-react'

export default function CookieBanner() {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const consent = localStorage.getItem('cookie_consent_accepted')
        if (!consent) {
            setTimeout(() => setIsVisible(true), 0)
        }
    }, [])

    const handleAccept = () => {
        localStorage.setItem('cookie_consent_accepted', 'true')
        setIsVisible(false)
    }

    if (!isVisible) return null

    return (
        <div className="fixed bottom-0 left-0 right-0 z-[9999] bg-[#0c1a35] text-white p-4 border-t border-[#1a3a6c] shadow-[0_-10px_40px_rgba(0,0,0,0.2)] animate-in slide-in-from-bottom-5 duration-500">
            <div className="container mx-auto px-5 lg:px-8 max-w-7xl flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="flex items-start gap-4">
                    <div className="hidden md:flex shrink-0 w-10 h-10 rounded-full bg-[#1a3a6c] items-center justify-center text-yellow-400">
                        <Cookie size={20} />
                    </div>
                    <div className="text-sm text-blue-100 leading-relaxed max-w-3xl">
                        <strong>Aviso de Cookies:</strong> Utilizamos cookies estrictamente necesarias para el funcionamiento del sitio web y análisis anónimo para mejorar nuestros servicios. Al continuar navegando, usted acepta el uso de estas tecnologías conforme a nuestra <Link href="/legal/privacidad?lang=es" className="text-yellow-400 font-bold hover:underline transition-all">Política de Tratamiento de Datos</Link>.
                    </div>
                </div>

                <div className="flex items-center gap-3 shrink-0 w-full md:w-auto mt-2 md:mt-0">
                    <button
                        onClick={handleAccept}
                        className="flex-1 md:flex-none py-2 px-6 rounded-md bg-yellow-400 hover:bg-yellow-500 text-neutral-900 font-bold text-sm tracking-widest uppercase transition-all shadow-[0_2px_10px_rgba(250,204,21,0.3)] hover:-translate-y-px whitespace-nowrap"
                    >
                        Entendido
                    </button>
                    <button
                        onClick={() => setIsVisible(false)}
                        className="p-2 text-white/50 hover:text-white hover:bg-white/10 rounded-full transition-colors hidden md:block"
                        aria-label="Cerrar banner"
                    >
                        <X size={18} />
                    </button>
                </div>
            </div>
        </div>
    )
}
