'use client'

import { Globe } from 'lucide-react'
import type { Locale } from '@/lib/i18n'

interface LangToggleProps {
    targetLocale: Locale
    label: string  // "EN" o "ES"
}

export default function LangToggle({ targetLocale, label }: LangToggleProps) {
    function handleSwitch() {
        const url = new URL(window.location.href)
        url.searchParams.set('lang', targetLocale)
        window.location.href = url.toString()
    }

    return (
        <button
            className="lang-btn"
            onClick={handleSwitch}
            title={targetLocale === 'en' ? 'Switch to English' : 'Cambiar a Español'}
            aria-label={targetLocale === 'en' ? 'Switch to English' : 'Cambiar a Español'}
            id="lang-toggle-btn"
        >
            <Globe size={13} />
            {label}
        </button>
    )
}
