// ─────────────────────────────────────────────────────────────────────────────
// Lex Translations — i18n Dictionary  (ES / EN)
// ─────────────────────────────────────────────────────────────────────────────

export type Locale = 'es' | 'en'

export const TRANSLATIONS = {
    es: {
        // ── Meta ──────────────────────────────────────────────────────────────────
        meta: {
            title: 'Lex Translations | Traductores Oficiales en Bogotá',
            description:
                'Lex Translations: Agencia de traducciones oficiales, juramentadas y certificadas en Bogotá desde 2010. Excelencia lingüística en documentos jurídicos y técnicos.',
            keywords:
                'traducciones bogotá, lex translations, traducciones juramentadas, traductores oficiales colombia, traducción certificada bogotá',
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
            badge: 'Lex Translations — Traductores Certificados',
            h1a: 'Excelencia en',
            h1b: 'Traducciones',
            h1c: 'que Conectan su Mundo',
            subtitle: 'Más de 14 años de experiencia como Lex Translations en Bogotá. Precisión legal y técnica garantizada para sus trámites internacionales más exigentes.',
            ctaPrimary: 'Cotizar Mi Documento',
            ctaWhatsapp: 'WhatsApp',
            stat1number: '+5.000',
            stat1label: 'Documentos entregados',
            stat2number: '+40',
            stat2label: 'Idiomas disponibles',
            stat3number: '14',
            stat3label: 'Años de experiencia',
            badge2a: 'Lex Translations — Avalado por el Ministerio',
            badge2b: 'de Relaciones Exteriores de Colombia',
        },

        // ── Trust Bar ─────────────────────────────────────────────────────────────
        trust: {
            t1: 'Traducciones con fe pública',
            t2: 'Entrega en 24–72 horas',
            t3: '14 años de Lex Translations',
            t4: 'Garantía de calidad Premium',
            t5: '+5.000 clientes satisfechos',
        },

        // ── Services ──────────────────────────────────────────────────────────────
        services: {
            sectionLabel: 'Nuestros Servicios',
            h2: 'Traducción Especializada para Cada Necesidad',
            subtitle: 'En Lex Translations manejamos todo tipo de documentos con la rigurosidad técnica que cada caso requiere. Traductores certificados en más de 40 idiomas.',
            cta: 'Solicitar cotización',
            items: [
                {
                    slug: 'juridicos',
                    title: 'Documentos Jurídicos y Legales',
                    description: 'Contratos, escrituras, poderes notariales, resoluciones judiciales y documentos legales con plena validez internacional bajo el sello Lex.',
                    icon: 'Scale',
                },
                {
                    slug: 'juramentados',
                    title: 'Traducciones Juramentadas',
                    description: 'Traducciones con fe pública ante el Ministerio de Relaciones Exteriores de Colombia. El estándar de oro para trámites oficiales.',
                    icon: 'BadgeCheck',
                },
                {
                    slug: 'academicos',
                    title: 'Documentos Académicos',
                    description: 'Títulos, diplomas, certificados y transcripts para procesos de homologación, becas y admisiones universitarias internacionales.',
                    icon: 'GraduationCap',
                },
                {
                    slug: 'identificacion',
                    title: 'Documentos de Identificación',
                    description: 'Pasaportes, cédulas, actas de nacimiento, matrimonio y defunción con la precisión absoluta que exige Lex Translations.',
                    icon: 'BadgeCheck',
                },
                {
                    slug: 'tecnicos',
                    title: 'Técnicos y Científicos',
                    description: 'Manuales, patentes, reportes de laboratorio y documentación científica con terminología especializada y rigurosa.',
                    icon: 'Microscope',
                },
                {
                    slug: 'medicos',
                    title: 'Médicos y Farmacéuticos',
                    description: 'Historias clínicas, prospectos, estudios clínicos y documentación farmacéutica con total confidencialidad y rigor médico.',
                    icon: 'HeartPulse',
                },
                {
                    slug: 'financieros',
                    title: 'Documentos Financieros',
                    description: 'Estados financieros, extractos bancarios, cartas de crédito y documentación contable para el sector corporativo internacional.',
                    icon: 'Briefcase',
                },
                {
                    slug: 'publicitarios',
                    title: 'Marketing y Publicitarios',
                    description: 'Catálogos, sitios web, campañas y material corporativo adaptados con sensibilidad cultural para mercados globales.',
                    icon: 'Briefcase',
                },
            ],
        },

        // ── Process ───────────────────────────────────────────────────────────────
        process: {
            sectionLabel: 'Proceso Simple',
            h2: '¿Cómo Funciona?',
            subtitle: 'Cuatro pasos sencillos para obtener su traducción profesional con Lex Translations.',
            steps: [
                { n: '01', title: 'Envía tu documento', desc: 'Contáctanos por WhatsApp o completa el formulario con los detalles de su proyecto.' },
                { n: '02', title: 'Recibe tu cotización', desc: 'En tiempo récord recibirá una cotización personalizada con precio y plazo de entrega ejecutivo.' },
                { n: '03', title: 'Confirmación y pago', desc: 'Una vez apruebe la cotización, nuestros traductores expertos inician el proceso de inmediato.' },
                { n: '04', title: 'Entrega de Excelencia', desc: 'Reciba el documento traducido y certificado por Lex Translations, listo para cualquier trámite legal.' },
            ],
        },

        // ── Testimonials ──────────────────────────────────────────────────────────
        testimonials: {
            sectionLabel: 'Lo Que Dicen Nuestros Clientes',
            h2: 'Confianza Respaldada por Resultados',
            subtitle: 'Lex Translations ha sido el aliado estratégico de más de 5.000 clientes en sus procesos más importantes.',
        },

        // ── Contact ───────────────────────────────────────────────────────────────
        contact: {
            sectionLabel: 'Contáctanos',
            h2a: 'Obtén Tu Cotización',
            h2b: 'Especializada',
            subtitle: 'Estamos listos para gestionar sus proyectos. Nuestros asesores le atenderán de manera inmediata y personalizada.',
            labelPhone: 'Teléfono / WhatsApp',
            labelEmail: 'Correo Electrónico',
            labelAddress: 'Dirección Principal',
            whatsappBtn: 'Chatear con Lex Translations',
        },

        // ── Form ──────────────────────────────────────────────────────────────────
        form: {
            title: 'Solicitar Cotización',
            subtitle: 'Cuéntanos sobre su proyecto y uno de nuestros expertos le responderá en minutos.',
            nombre: 'Nombre completo',
            email: 'Correo electrónico',
            telefono: 'Teléfono / WhatsApp',
            tipoDoc: 'Tipo de documento',
            idiomaOrigen: 'Idioma de origen',
            idiomaDest: 'Idioma de destino',
            nombreArch: 'Nombre del documento',
            descripcion: 'Instrucciones adicionales',
            urgente: '🚀 Necesito entrega ejecutiva (menos de 48 horas)',
            submit: 'Solicitar Cotización de Lex',
            sending: 'Enviando...',
            selectDoc: 'Seleccionar...',
            selectLang: 'Seleccionar...',
            placeholderNombre: 'Nombre y Apellido',
            placeholderEmail: 'ejemplo@lextranslations.com',
            placeholderTelefono: '+57 300 000 0000',
            placeholderArchivo: 'Ej: contrato_ejecutivo.pdf',
            placeholderDesc: 'Indíquenos uso final, plazos, número de páginas y cualquier detalle técnico...',
            successTitle: '¡Solicitud Recibida!',
            successText: 'Gracias por confiar en Lex Translations. Un asesor se pondrá en contacto con usted en breve.',
            successBtn: 'Enviar otra solicitud',
            required: 'Este campo es obligatorio',
            errorNombre: 'El nombre debe ser real',
            errorEmail: 'Correo electrónico corporativo preferido',
            errorTipoDoc: 'Seleccione el tipo de trámite',
            errorOrigen: 'Seleccione de qué idioma traduce',
            errorDestino: 'Seleccione a qué idioma traduce',
        },

        // ── Footer ────────────────────────────────────────────────────────────────
        footer: {
            tagline: 'Lex Translations: Agencia de traducciones oficiales con más de 14 años de excelencia. Precisión, confidencialidad y rigor en cada palabra.',
            colServices: 'Portafolio',
            colContact: 'Contacto Ejecutivo',
            whatsapp: 'WhatsApp Business',
            copy: 'Todos los derechos reservados.',
            dev: 'Lex Translations © Bogotá',
        },

        // ── Blog ──────────────────────────────────────────────────────────────────
        blog: {
            sectionLabel: 'Insights de Lex',
            h2: 'Centro de Recursos y Guías',
            subtitle: 'Artículos expertos sobre el mundo de la traducción oficial, apostillas y requisitos para trámites globales.',
            readMore: 'Leer insights',
            category: 'Especialidad',
            published: 'Publicado el',
            noPosts: 'No se encontraron artículos en este idioma.',
            back: 'Volver a Insights',
            sidebar: {
                title: '¿Busca una traducción de élite?',
                desc: 'Inicie su proyecto con Lex Translations hoy mismo y asegure el éxito de sus trámites.',
                cta: 'Solicitar Cotización',
            }
        },

        // ── Shared ────────────────────────────────────────────────────────────────
        shared: {
            waText: 'Hola%2C%20necesito%20asesoría%20de%20Lex%20Translations%20para%20una%20traducción',
            waHeroText: 'Hola%2C%20requiero%20una%20cotización%20ejecutiva%20de%20Lex%20Translations',
        },
    },

    // ════════════════════════════════════════════════════════════════════════════
    en: {
        meta: {
            title: 'Lex Translations | Professional Official Translators in Bogotá',
            description:
                'Lex Translations: Providing premium official, sworn and certified translation services in Bogotá since 2010. Excellence in legal and technical matters.',
            keywords:
                'lex translations, translations bogota, certified translations colombia, professional translators bogota',
        },

        nav: {
            services: 'Services',
            how: 'Process',
            testimonials: 'Clients',
            contact: 'Contact',
            cta: 'Get a quote',
            langLabel: 'ES',
        },

        hero: {
            badge: 'Lex Translations — Certified Language Experts',
            h1a: 'Excellence in',
            h1b: 'Translations',
            h1c: 'Connecting Your Global World',
            subtitle: 'Over 14 years of Lex Translations in Bogotá. Guaranteed legal and technical precision for your most demanding international procedures.',
            ctaPrimary: 'Quote My Project',
            ctaWhatsapp: 'WhatsApp',
            stat1number: '+5,000',
            stat1label: 'Documents delivered',
            stat2number: '+40',
            stat2label: 'Languages available',
            stat3number: '14',
            stat3label: 'Years of excellence',
            badge2a: 'Lex Translations — Endorsed by the Ministry',
            badge2b: 'of Foreign Affairs of Colombia',
        },

        trust: {
            t1: 'Translations with public trust',
            t2: '24–72 hours delivery window',
            t3: '14 years of Lex Translations',
            t4: 'Premium quality assurance',
            t5: '+5,000 satisfied clients',
        },

        services: {
            sectionLabel: 'Our Portfolio',
            h2: 'Specialized Translation for Every Need',
            subtitle: 'At Lex Translations we handle all types of document with the technical rigor each specific case requires. Certified translators in 40+ languages.',
            cta: 'Request a quote',
            items: [
                { slug: 'juridicos', title: 'Legal Documents', description: 'Contracts, deeds, powers of attorney, court rulings and legal documents with full international Lex validity.', icon: 'Scale' },
                { slug: 'juramentados', title: 'Sworn Translations', description: 'Translations with public faith before the Colombian Ministry of Foreign Affairs. The industry gold standard.', icon: 'BadgeCheck' },
                { slug: 'academicos', title: 'Academic Documents', description: 'Degrees, diplomas, certificates and transcripts for international homologation and university admission processes.', icon: 'GraduationCap' },
                { slug: 'identificacion', title: 'Identity Documents', description: 'Passports, ID cards, birth, marriage and death certificates with absolute Lex Translations precision.', icon: 'BadgeCheck' },
                { slug: 'tecnicos', title: 'Technical & Scientific', description: 'Manuals, patents, lab reports and scientific documentation with rigorous and specialized terminology.', icon: 'Microscope' },
                { slug: 'medicos', title: 'Medical & Pharmaceutical', description: 'Clinical records, inserts, clinical studies and pharmaceutical documentation with full confidentiality and medical rigor.', icon: 'HeartPulse' },
                { slug: 'financieros', title: 'Financial Documents', description: 'Financial statements, bank statements, letters of credit and accounting documentation for the global corporate sector.', icon: 'Briefcase' },
                { slug: 'publicitarios', title: 'Marketing & Advertising', description: 'Catalogs, websites, campaigns and corporate materials culturally adapted for global markets.', icon: 'Briefcase' },
            ],
        },

        process: {
            sectionLabel: 'Seamless Process',
            h2: 'How It Works',
            subtitle: 'Four simple steps to get your professional translation with Lex Translations.',
            steps: [
                { n: '01', title: 'Submit Documents', desc: 'Contact us via WhatsApp or fill out the form with your project details.' },
                { n: '02', title: 'Receive Expert Quote', desc: 'In record time you will receive a personalized quote with executive pricing and timeframe.' },
                { n: '03', title: 'Confirmation & Payment', desc: 'Once confirmed, our expert translators begin the process immediately.' },
                { n: '04', title: 'Elite Delivery', desc: 'Receive your Lex Translations certified document, ready for any legal or official procedure.' },
            ],
        },

        testimonials: {
            sectionLabel: 'Client Voices',
            h2: 'Trust Backed by Results',
            subtitle: 'Lex Translations has been the strategic partner for over 5,000 clients worldwide.',
        },

        contact: {
            sectionLabel: 'Connect With Us',
            h2a: 'Get Your',
            h2b: 'Expert Quote',
            subtitle: 'Ready to manage your projects. Our advisors will provide immediate and personalized executive support.',
            labelPhone: 'Phone / WhatsApp',
            labelEmail: 'Email Address',
            labelAddress: 'Main Headquarters',
            whatsappBtn: 'Chat with Lex Translations',
        },

        form: {
            title: 'Request a Quote',
            subtitle: 'Tell us about your project and one of our experts will respond in minutes.',
            nombre: 'Full Name',
            email: 'Email address',
            telefono: 'Phone / WhatsApp',
            tipoDoc: 'Document type',
            idiomaOrigen: 'Source language',
            idiomaDest: 'Target language',
            nombreArch: 'Document name',
            descripcion: 'Additional instructions',
            urgente: '🚀 Executive delivery (under 48 hours)',
            submit: 'Request Lex Quote',
            sending: 'Sending...',
            selectDoc: 'Select...',
            selectLang: 'Select...',
            placeholderNombre: 'First & Last Name',
            placeholderEmail: 'info@lextranslations.com',
            placeholderTelefono: '+1 000 000 0000',
            placeholderArchivo: 'e.g. executive_contract.pdf',
            placeholderDesc: 'Tell us usage, deadlines, page count and any technical requirements...',
            successTitle: 'Request Received!',
            successText: 'Thank you for choosing Lex Translations. An advisor will be in touch shortly.',
            successBtn: 'Submit another request',
            required: 'Required field',
            errorNombre: 'Full name is needed',
            errorEmail: 'Corporate email preferred',
            errorTipoDoc: 'Select procedure type',
            errorOrigen: 'Select source language',
            errorDestino: 'Select target language',
        },

        footer: {
            tagline: 'Lex Translations: Boutique translation agency with 14+ years of excellence. Precision, trust and rigor in every word.',
            colServices: 'Specializations',
            colContact: 'Executive Support',
            whatsapp: 'WhatsApp Business',
            copy: 'All rights reserved.',
            dev: 'Lex Translations © Bogotá',
        },

        blog: {
            sectionLabel: 'Lex Insights',
            h2: 'Resource Center & Guides',
            subtitle: 'Expert articles on global translation, apostilles and international procedure requirements.',
            readMore: 'Read insights',
            category: 'Expertise',
            published: 'Published on',
            noPosts: 'No articles found in this language.',
            back: 'Back to Insights',
            sidebar: {
                title: 'Seeking Elite Translation?',
                desc: 'Start your project with Lex Translations today and ensure your global success.',
                cta: 'Request a Quote',
            }
        },

        shared: {
            waText: 'Hello%2C%20I%20need%20Lex%20Translations%20advisory%20for%20a%20project',
            waHeroText: 'Hello%2C%20I%20require%20an%20executive%20quote%20from%20Lex%20Translations',
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
        'Contrato / Acuerdo Ejecutivo',
        'Poder notarial',
        'Sentencia / Resolución judicial',
        'Título académico / Diploma',
        'Acta de nacimiento / Matrimonio / Defunción',
        'Pasaporte / Cédula',
        'Certificado médico / Historia clínica',
        'Manual técnico / Patente',
        'Estado financiero / Corporativo',
        'Documento publicitario / Estratégico',
        'Otro documento',
    ],
    en: [
        'Executive Contract / Agreement',
        'Power of attorney',
        'Court ruling / Judgment',
        'Academic degree / Diploma',
        'Birth / Marriage / Death certificate',
        'Passport / ID card',
        'Medical certificate / Clinical record',
        'Technical manual / Patent',
        'Financial / Corporate statement',
        'Advertising / Strategic document',
        'Other document',
    ],
}

export const IDIOMAS = {
    es: ['Español', 'Inglés', 'Francés', 'Alemán', 'Italiano', 'Portugués', 'Chino (Mandarín)', 'Japonés', 'Árabe', 'Otro'],
    en: ['Spanish', 'English', 'French', 'German', 'Italian', 'Portuguese', 'Chinese (Mandarin)', 'Japanese', 'Arabic', 'Other'],
}
