export interface SectorContent {
    slug: string
    icono: string
    color: string
    es: {
        nombre: string
        h1: string
        metaDescription: string
        contenidoCritico: string
        propuestaValor: string
        documentosClave?: string[]
        objetivo?: string
    }
    en: {
        nombre: string
        h1: string
        metaDescription: string
        contenidoCritico: string
        propuestaValor: string
        documentosClave?: string[]
        objetivo?: string
    }
}

export const SECTORES_CONTENT: SectorContent[] = [
    {
        slug: 'juridico',
        icono: 'Scale',
        color: '#7c1d1d',
        es: {
            nombre: 'Jurídico',
            h1: 'Traducciones Especializadas para el Sector Jurídico en Bogotá',
            metaDescription: 'Traducción legal exacta para contratos, sentencias y acuerdos. Evita malentendidos legales con traductores expertos en derecho en Bogotá.',
            contenidoCritico: 'La traducción jurídica es vital para documentos legales como contratos, sentencias, acuerdos y leyes.',
            propuestaValor: 'Una traducción exacta evita malentendidos que resulten en conflictos legales, asegura el cumplimiento de normativas internacionales y facilita la comunicación entre jurisdicciones.',
            documentosClave: ['Contratos', 'Sentencias', 'Acuerdos', 'Leyes']
        },
        en: {
            nombre: 'Legal',
            h1: 'Specialized Translations for the Legal Sector in Bogotá',
            metaDescription: 'Exact legal translation for contracts, sentences and agreements. Avoid legal misunderstandings with expert law translators in Bogotá.',
            contenidoCritico: 'Legal translation is vital for legal documents such as contracts, court rulings, agreements, and laws.',
            propuestaValor: 'Exact translation avoids misunderstandings resulting in legal conflicts, ensures compliance with international regulations, and facilitates communication between jurisdictions.',
            documentosClave: ['Contracts', 'Judgments', 'Agreements', 'Laws']
        }
    },
    {
        slug: 'financiero-seguros',
        icono: 'Briefcase',
        color: '#1a5276',
        es: {
            nombre: 'Financiero y de Seguros',
            h1: 'Traducciones Especializadas para el Sector Financiero y Seguros en Bogotá',
            metaDescription: 'Traducción para banca y seguros. Contratos, pólizas e informes financieros con precisión técnica y cumplimiento normativo internacional.',
            contenidoCritico: 'Garantiza que productos, políticas y documentos legales sean entendidos por clientes e instituciones globales.',
            propuestaValor: 'Evitar malentendidos, cumplir normativas y fortalecer la confianza internacional.',
            documentosClave: ['Contratos', 'Pólizas', 'Informes financieros', 'Términos técnicos'],
            objetivo: 'Evitar malentendidos, cumplir normativas y fortalecer la confianza internacional.'
        },
        en: {
            nombre: 'Finance & Insurance',
            h1: 'Specialized Translations for the Financial & Insurance Sector in Bogotá',
            metaDescription: 'Translation for banking and insurance. Contracts, policies and financial reports with technical precision and international compliance.',
            contenidoCritico: 'Ensuring that products, policies, and legal documents are understood by global clients and institutions.',
            propuestaValor: 'Avoid misunderstandings, comply with regulations, and strengthen international trust.',
            documentosClave: ['Contracts', 'Policies', 'Financial reports', 'Technical terms'],
            objetivo: 'Avoid misunderstandings, comply with regulations and strengthen international trust.'
        }
    },
    {
        slug: 'it-software',
        icono: 'Cpu',
        color: '#1a5e2a',
        es: {
            nombre: 'Informático y Software (IT)',
            h1: 'Traducciones Especializadas para el Sector Informático y Software en Bogotá',
            metaDescription: 'Localización de software y aplicaciones. Traducción técnica para interfaces, manuales y documentación IT en Bogotá.',
            contenidoCritico: 'Clave para que aplicaciones, interfaces y documentación sean accesibles y comprensibles en diferentes culturas.',
            propuestaValor: 'Localización de software precisa para asegurar una interacción intuitiva del usuario con las plataformas.',
        },
        en: {
            nombre: 'IT & Software',
            h1: 'Specialized Translations for the IT & Software Sector in Bogotá',
            metaDescription: 'Software and application localization. Technical translation for interfaces, manuals and IT documentation in Bogotá.',
            contenidoCritico: 'Key for applications, interfaces, and documentation to be accessible and understandable in different cultures.',
            propuestaValor: 'Precise software localization to ensure intuitive user interaction with platforms.',
        }
    },
    {
        slug: 'medico',
        icono: 'Stethoscope',
        color: '#b91c1c',
        es: {
            nombre: 'Médico',
            h1: 'Traducciones Especializadas para el Sector Médico en Bogotá',
            metaDescription: 'Traducción médica profesional: historias clínicas, investigaciones farmacéuticas y medicamentos. Precisión para salud global.',
            contenidoCritico: 'Fundamental para que la información sobre tratamientos, investigaciones y medicamentos llegue con precisión a profesionales y pacientes.',
            propuestaValor: 'Intercambio global de conocimiento médico e innovación científica.',
        },
        en: {
            nombre: 'Medical',
            h1: 'Specialized Translations for the Medical Sector in Bogotá',
            metaDescription: 'Professional medical translation: clinical records, pharmaceutical research and drugs. Precision for global health.',
            contenidoCritico: 'Fundamental for information on treatments, research, and medications to reach professionals and patients accurately.',
            propuestaValor: 'Global exchange of medical knowledge and scientific innovation.',
        }
    },
    {
        slug: 'cientifico',
        icono: 'Microscope',
        color: '#1a3a6c',
        es: {
            nombre: 'Científico',
            h1: 'Traducciones Especializadas para el Sector Científico en Bogotá',
            metaDescription: 'Traducción científica experta. Rigor terminológico para investigaciones, papers y protocolos científicos en Bogotá.',
            contenidoCritico: 'Esencial para el intercambio global de conocimiento e innovación. Se enfoca en el rigor terminológico de la investigación.',
            propuestaValor: 'Rigor terminológico garantizado para la comunidad científica internacional.',
        },
        en: {
            nombre: 'Scientific',
            h1: 'Specialized Translations for the Scientific Sector in Bogotá',
            metaDescription: 'Expert scientific translation. Terminological rigor for research, papers and scientific protocols in Bogotá.',
            contenidoCritico: 'Essential for the global exchange of knowledge and innovation. Focuses on the terminological rigor of research.',
            propuestaValor: 'Guaranteed terminological rigor for the international scientific community.',
        }
    },
    {
        slug: 'academico',
        icono: 'GraduationCap',
        color: '#0d5c2e',
        es: {
            nombre: 'Académico',
            h1: 'Traducciones Especializadas para el Sector Académico en Bogotá',
            metaDescription: 'Traducción de diplomas, notas y documentos universitarios. Apoyo para becas, homologación y admisiones internacionales en Bogotá.',
            contenidoCritico: 'Vital para procesos de movilidad académica, becas internacionales y homologación de títulos ante ministerios de educación.',
            propuestaValor: 'Aseguramos que su trayectoria académica sea reconocida sin fronteras, con precisión en títulos y calificaciones.',
            documentosClave: ['Diplomas', 'Notas Universitarias', 'Programas Analíticos', 'Cartas de Recomendación']
        },
        en: {
            nombre: 'Academic',
            h1: 'Specialized Translations for the Academic Sector in Bogotá',
            metaDescription: 'Translation of diplomas, transcripts and university documents. Support for scholarships, recognition and international admissions in Bogotá.',
            contenidoCritico: 'Vital for academic mobility processes, international scholarships and degree recognition before ministries of education.',
            propuestaValor: 'We ensure your academic trajectory is recognized without borders, with precision in degrees and grades.',
            documentosClave: ['Diplomas', 'University Transcripts', 'Study Programs', 'Recommendation Letters']
        }
    }
]
