// ─────────────────────────────────────────────────────────────────────────────
// Traducciones Oficiales — i18n Dictionary  (ES / EN)
// ─────────────────────────────────────────────────────────────────────────────

export type Locale = 'es' | 'en'

export const TRANSLATIONS = {
    es: {
        // ── Meta ──────────────────────────────────────────────────────────────────
        meta: {
            title: 'Traductores Oficiales en Bogotá | Traducciones Oficiales',
            description:
                'Agencia de traducciones oficiales, juramentadas y certificadas en Bogotá desde 2010. Documentos jurídicos, académicos, técnicos y médicos. Entrega en 24–72 h.',
            keywords:
                'traducciones bogotá, traducciones juramentadas, traductores oficiales colombia, traducción certificada bogotá',
        },

        // ── Navbar ────────────────────────────────────────────────────────────────
        nav: {
            services: 'Servicios',
            how: '¿Cómo funciona?',
            testimonials: 'Clientes',
            contact: 'Contacto',
            cta: 'Cotizar ahora',
            langLabel: 'EN',
        },

        // ── Hero ──────────────────────────────────────────────────────────────────
        hero: {
            badge: 'Traductores Juramentados Certificados',
            h1a: 'Traducciones',
            h1b: 'Oficiales',
            h1c: 'que Abren Puertas al Mundo',
            subtitle: 'Más de 14 años avalando documentos jurídicos, académicos y técnicos en Bogotá. Precisión legal garantizada para trámites internacionales.',
            ctaPrimary: 'Cotizar Mi Documento',
            ctaWhatsapp: 'WhatsApp',
            stat1number: '+5.000',
            stat1label: 'Documentos entregados',
            stat2number: '+40',
            stat2label: 'Idiomas disponibles',
            stat3number: '14',
            stat3label: 'Años de experiencia',
            badge2a: 'Avalado por el Ministerio',
            badge2b: 'de Relaciones Exteriores de Colombia',
        },

        // ── Trust Bar ─────────────────────────────────────────────────────────────
        trust: {
            t1: 'Traducciones con fe pública',
            t2: 'Entrega en 24–72 horas',
            t3: '14 años de experiencia',
            t4: 'Garantía de calidad',
            t5: '+5.000 clientes satisfechos',
        },

        // ── Services ──────────────────────────────────────────────────────────────
        services: {
            sectionLabel: 'Nuestros Servicios',
            h2: 'Traducción Especializada para Cada Necesidad',
            subtitle: 'Manejamos todo tipo de documentos con la rigurosidad técnica y legal que cada caso requiere. Traductores certificados en más de 40 idiomas.',
            cta: 'Solicitar cotización',
            items: [
                {
                    slug: 'juridicos',
                    title: 'Documentos Jurídicos y Legales',
                    description: 'Contratos, escrituras, poderes notariales, resoluciones judiciales y documentos legales con plena validez internacional.',
                    icon: 'Scale',
                },
                {
                    slug: 'juramentados',
                    title: 'Traducciones Juramentadas',
                    description: 'Traducciones con fe pública ante el Ministerio de Relaciones Exteriores de Colombia. El único tipo válido para trámites oficiales.',
                    icon: 'BadgeCheck',
                },
                {
                    slug: 'academicos',
                    title: 'Documentos Académicos',
                    description: 'Títulos, diplomas, certificados y transcripts para procesos de homologación, becas y admisiones universitarias nacionales e internacionales.',
                    icon: 'GraduationCap',
                },
                {
                    slug: 'identificacion',
                    title: 'Documentos de Identificación',
                    description: 'Pasaportes, cédulas, actas de nacimiento, matrimonio y defunción con la precisión requerida por entidades gubernamentales.',
                    icon: 'BadgeCheck',
                },
                {
                    slug: 'tecnicos',
                    title: 'Técnicos y Científicos',
                    description: 'Manuales, patentes, reportes de laboratorio y documentación científica con terminología especializada y consistente.',
                    icon: 'Microscope',
                },
                {
                    slug: 'medicos',
                    title: 'Médicos y Farmacéuticos',
                    description: 'Historias clínicas, prospectos, estudios clínicos y documentación farmacéutica con rigor terminológico médico.',
                    icon: 'HeartPulse',
                },
                {
                    slug: 'financieros',
                    title: 'Documentos Financieros',
                    description: 'Estados financieros, extractos bancarios, cartas de crédito y documentación contable para comercio exterior.',
                    icon: 'Briefcase',
                },
                {
                    slug: 'publicitarios',
                    title: 'Marketing y Publicitarios',
                    description: 'Catálogos, sitios web, campañas y material corporativo adaptados culturalmente para cada mercado objetivo.',
                    icon: 'Briefcase',
                },
            ],
        },

        // ── Process ───────────────────────────────────────────────────────────────
        process: {
            sectionLabel: 'Proceso Simple',
            h2: '¿Cómo Funciona?',
            subtitle: 'Cuatro pasos sencillos para obtener tu traducción oficial.',
            steps: [
                { n: '01', title: 'Envía tu documento', desc: 'Contáctanos por WhatsApp o completa el formulario con los detalles de tu traducción.' },
                { n: '02', title: 'Recibe tu cotización', desc: 'En menos de 24 horas recibirás una cotización personalizada con precio y plazo de entrega.' },
                { n: '03', title: 'Confirmación y pago', desc: 'Una vez apruebas la cotización, comenzamos inmediatamente con la traducción.' },
                { n: '04', title: 'Entrega garantizada', desc: 'Recibes el documento traducido y certificado, listo para cualquier trámite oficial.' },
            ],
        },

        // ── Testimonials ──────────────────────────────────────────────────────────
        testimonials: {
            sectionLabel: 'Lo Que Dicen Nuestros Clientes',
            h2: 'Confianza Respaldada por Resultados',
            subtitle: 'Más de 5.000 clientes han confiado en nosotros para sus documentos más importantes.',
        },

        // ── Contact ───────────────────────────────────────────────────────────────
        contact: {
            sectionLabel: 'Contáctanos',
            h2a: 'Obtén Tu Cotización',
            h2b: 'Gratuita',
            subtitle: 'Estamos listos para ayudarte. Cuéntanos sobre tu documento y te daremos una cotización personalizada sin compromiso.',
            labelPhone: 'Teléfono / WhatsApp',
            labelEmail: 'Correo Electrónico',
            labelAddress: 'Dirección',
            whatsappBtn: 'Chatear por WhatsApp',
        },

        // ── Form ──────────────────────────────────────────────────────────────────
        form: {
            title: 'Solicitar Cotización',
            subtitle: 'Cuéntanos sobre tu documento y te respondemos en 24 horas.',
            nombre: 'Nombre completo',
            email: 'Correo electrónico',
            telefono: 'Teléfono / WhatsApp',
            tipoDoc: 'Tipo de documento',
            idiomaOrigen: 'Idioma de origen',
            idiomaDest: 'Idioma de destino',
            nombreArch: 'Nombre del documento',
            descripcion: 'Descripción adicional',
            urgente: '🚀 Necesito entrega urgente (en menos de 48 horas)',
            submit: 'Solicitar Cotización Gratuita',
            sending: 'Enviando...',
            selectDoc: 'Seleccionar...',
            selectLang: 'Seleccionar...',
            placeholderNombre: 'Tu nombre completo',
            placeholderEmail: 'correo@ejemplo.com',
            placeholderTelefono: '+57 312 3902406',
            placeholderArchivo: 'Ej: contrato_sociedad.pdf',
            placeholderDesc: 'Cuéntanos más sobre tu proyecto: uso final, plazos, número de páginas...',
            successTitle: '¡Solicitud Enviada!',
            successText: 'Gracias por contactarnos. Te responderemos en menos de 24 horas con una cotización personalizada.',
            successBtn: 'Enviar otra solicitud',
            required: 'Campo requerido',
            errorNombre: 'El nombre debe tener al menos 2 caracteres',
            errorEmail: 'Correo electrónico inválido',
            errorTipoDoc: 'Selecciona el tipo de documento',
            errorOrigen: 'Selecciona el idioma de origen',
            errorDestino: 'Selecciona el idioma de destino',
        },

        // ── Footer ────────────────────────────────────────────────────────────────
        footer: {
            tagline: 'Agencia de traducciones oficiales con más de 14 años. Precisión, confianza y puntualidad en cada documento.',
            colServices: 'Servicios',
            colContact: 'Contacto',
            whatsapp: 'WhatsApp Directo',
            copy: 'Todos los derechos reservados.',
            dev: 'Desarrollado con ❤️ en Bogotá',
        },

        // ── Blog ──────────────────────────────────────────────────────────────────
        blog: {
            sectionLabel: 'Blog y Guías',
            h2: 'Centro de Recursos para Traducciones',
            subtitle: 'Artículos expertos sobre trámites migratorios, requisitos académicos y consejos para sus traducciones oficiales.',
            readMore: 'Leer artículo',
            category: 'Categoría',
            published: 'Publicado el',
            noPosts: 'No se encontraron artículos en este idioma.',
            back: 'Volver al blog',
            sidebar: {
                title: '¿Necesita una traducción?',
                desc: 'Cotice su documento oficial hoy mismo con entrega rápida y respaldo legal.',
                cta: 'Solicitar Cotización',
            }
        },

        // ── Shared ────────────────────────────────────────────────────────────────
        shared: {
            waText: 'Hola%2C%20necesito%20información%20sobre%20una%20traducción%20oficial',
            waHeroText: 'Hola%2C%20necesito%20una%20traducción%20juramentada',
        },
    },

    // ════════════════════════════════════════════════════════════════════════════
    en: {
        meta: {
            title: 'Official Translators in Bogotá | Official Translations',
            description:
                'Official, sworn and certified translation agency in Bogotá since 2010. Legal, academic, technical and medical documents. Delivery in 24–72 h.',
            keywords:
                'translations bogota, sworn translations colombia, official translators bogota, certified translation colombia',
        },

        nav: {
            services: 'Services',
            how: 'How it works',
            testimonials: 'Clients',
            contact: 'Contact',
            cta: 'Get a quote',
            langLabel: 'ES',
        },

        hero: {
            badge: 'Certified Sworn Translators',
            h1a: 'Official',
            h1b: 'Translations',
            h1c: 'That Open Doors to the World',
            subtitle: 'Over 14 years certifying legal, academic and technical documents in Bogotá. Guaranteed legal precision for international procedures.',
            ctaPrimary: 'Quote My Document',
            ctaWhatsapp: 'WhatsApp',
            stat1number: '+5,000',
            stat1label: 'Documents delivered',
            stat2number: '+40',
            stat2label: 'Languages available',
            stat3number: '14',
            stat3label: 'Years of experience',
            badge2a: 'Endorsed by the Ministry',
            badge2b: 'of Foreign Affairs of Colombia',
        },

        trust: {
            t1: 'Translations with public faith',
            t2: 'Delivery in 24–72 hours',
            t3: '14 years of experience',
            t4: 'Quality guarantee',
            t5: '+5,000 satisfied clients',
        },

        services: {
            sectionLabel: 'Our Services',
            h2: 'Specialized Translation for Every Need',
            subtitle: 'We handle all types of documents with the technical and legal rigor each case requires. Certified translators in over 40 languages.',
            cta: 'Request a quote',
            items: [
                { slug: 'juridicos', title: 'Legal Documents', description: 'Contracts, deeds, powers of attorney, court rulings and legal documents with full international validity.', icon: 'Scale' },
                { slug: 'juramentados', title: 'Sworn Translations', description: 'Translations with public faith before the Colombian Ministry of Foreign Affairs. The only type accepted for official procedures.', icon: 'BadgeCheck' },
                { slug: 'academicos', title: 'Academic Documents', description: 'Degrees, diplomas, certificates and transcripts for recognition processes, scholarships and university admissions.', icon: 'GraduationCap' },
                { slug: 'identificacion', title: 'Identity Documents', description: 'Passports, ID cards, birth, marriage and death certificates with the precision required by government entities.', icon: 'BadgeCheck' },
                { slug: 'tecnicos', title: 'Technical & Scientific', description: 'Manuals, patents, lab reports and scientific documentation with specialized and consistent terminology.', icon: 'Microscope' },
                { slug: 'medicos', title: 'Medical & Pharmaceutical', description: 'Clinical records, package inserts, clinical studies and pharmaceutical documentation with precise medical terminology.', icon: 'HeartPulse' },
                { slug: 'financieros', title: 'Financial Documents', description: 'Financial statements, bank statements, letters of credit and accounting documentation for foreign trade.', icon: 'Briefcase' },
                { slug: 'publicitarios', title: 'Marketing & Advertising', description: 'Catalogs, websites, campaigns and corporate materials culturally adapted for each target market.', icon: 'Briefcase' },
            ],
        },

        process: {
            sectionLabel: 'Simple Process',
            h2: 'How Does It Work?',
            subtitle: 'Four simple steps to get your official translation.',
            steps: [
                { n: '01', title: 'Send your document', desc: 'Contact us via WhatsApp or fill out the form with the details of your translation.' },
                { n: '02', title: 'Receive your quote', desc: 'Within 24 hours you will receive a personalized quote with price and delivery date.' },
                { n: '03', title: 'Confirmation & payment', desc: 'Once you approve the quote, we immediately begin the translation.' },
                { n: '04', title: 'Guaranteed delivery', desc: 'You receive the translated and certified document, ready for any official procedure.' },
            ],
        },

        testimonials: {
            sectionLabel: 'What Our Clients Say',
            h2: 'Trust Backed by Results',
            subtitle: 'More than 5,000 clients have trusted us for their most important documents.',
        },

        contact: {
            sectionLabel: 'Contact Us',
            h2a: 'Get Your',
            h2b: 'Free Quote',
            subtitle: 'We are ready to help you. Tell us about your document and we will give you a personalized quote with no commitment.',
            labelPhone: 'Phone / WhatsApp',
            labelEmail: 'Email Address',
            labelAddress: 'Address',
            whatsappBtn: 'Chat on WhatsApp',
        },

        form: {
            title: 'Request a Quote',
            subtitle: 'Tell us about your document and we will respond within 24 hours.',
            nombre: 'Full name',
            email: 'Email address',
            telefono: 'Phone / WhatsApp',
            tipoDoc: 'Document type',
            idiomaOrigen: 'Source language',
            idiomaDest: 'Target language',
            nombreArch: 'Document name',
            descripcion: 'Additional description',
            urgente: '🚀 I need urgent delivery (within 48 hours)',
            submit: 'Request Free Quote',
            sending: 'Sending...',
            selectDoc: 'Select...',
            selectLang: 'Select...',
            placeholderNombre: 'Your full name',
            placeholderEmail: 'email@example.com',
            placeholderTelefono: '+57 312 3902406',
            placeholderArchivo: 'e.g. contract_company.pdf',
            placeholderDesc: 'Tell us more: final use, deadlines, number of pages...',
            successTitle: 'Request Sent!',
            successText: 'Thank you for contacting us. We will respond within 24 hours with a personalized quote.',
            successBtn: 'Send another request',
            required: 'Required field',
            errorNombre: 'Name must be at least 2 characters',
            errorEmail: 'Invalid email address',
            errorTipoDoc: 'Please select the document type',
            errorOrigen: 'Please select the source language',
            errorDestino: 'Please select the target language',
        },

        footer: {
            tagline: 'Official translation agency with over 14 years. Precision, trust and punctuality in every document.',
            colServices: 'Services',
            colContact: 'Contact',
            whatsapp: 'Direct WhatsApp',
            copy: 'All rights reserved.',
            dev: 'Made with ❤️ in Bogotá',
        },

        // ── Blog ──────────────────────────────────────────────────────────────────
        blog: {
            sectionLabel: 'Blog & Guides',
            h2: 'Resource Center for Translations',
            subtitle: 'Expert articles on immigration procedures, academic requirements and tips for your official translations.',
            readMore: 'Read article',
            category: 'Category',
            published: 'Published on',
            noPosts: 'No articles found in this language.',
            back: 'Back to blog',
            sidebar: {
                title: 'Need a translation?',
                desc: 'Quote your official document today with fast delivery and legal backing.',
                cta: 'Request a Quote',
            }
        },

        shared: {
            waText: 'Hello%2C%20I%20need%20information%20about%20an%20official%20translation',
            waHeroText: 'Hello%2C%20I%20need%20a%20sworn%20translation',
        },
    },
} as const

export type I18nDict = (typeof TRANSLATIONS)['es']

export function getDict(locale: Locale): I18nDict {
    return TRANSLATIONS[locale] as unknown as I18nDict
}

// Lista de tipos de documento por idioma
export const TIPOS_DOCUMENTO = {
    es: [
        'Contrato / Acuerdo',
        'Poder notarial',
        'Sentencia / Resolución judicial',
        'Título académico / Diploma',
        'Acta de nacimiento / Matrimonio / Defunción',
        'Pasaporte / Cédula',
        'Certificado médico / Historia clínica',
        'Manual técnico / Patente',
        'Estado financiero / Extracto bancario',
        'Documento publicitario / Marketing',
        'Otro documento',
    ],
    en: [
        'Contract / Agreement',
        'Power of attorney',
        'Court ruling / Judgment',
        'Academic degree / Diploma',
        'Birth / Marriage / Death certificate',
        'Passport / ID card',
        'Medical certificate / Clinical record',
        'Technical manual / Patent',
        'Financial statement / Bank statement',
        'Advertising / Marketing document',
        'Other document',
    ],
}

export const IDIOMAS = {
    es: ['Español', 'Inglés', 'Francés', 'Alemán', 'Italiano', 'Portugués', 'Chino (Mandarín)', 'Japonés', 'Árabe', 'Otro'],
    en: ['Spanish', 'English', 'French', 'German', 'Italian', 'Portuguese', 'Chinese (Mandarin)', 'Japanese', 'Arabic', 'Other'],
}
