// ─────────────────────────────────────────────────────────────────────────────
// WOT Traducciones — Contenido estático de servicios (fallback + SSG)
// Ampliado con: Registro Civil, Médica/Farmacéutica, Documentos Personales
// ─────────────────────────────────────────────────────────────────────────────

export type ServiceSlug =
    | 'traduccion-oficial'
    | 'traduccion-academica'
    | 'traduccion-registro-civil'
    | 'traduccion-legal'
    | 'traduccion-financiera'
    | 'traduccion-identificacion'
    | 'traduccion-tecnica'
    | 'traduccion-medica'
    | 'traduccion-documentos-personales'
    | 'traduccion-publicitaria'

export interface ServiceContent {
    slug: ServiceSlug
    icono: string
    colorAcento: string
    sortOrder: number
    es: {
        titulo: string
        subtitulo: string
        descripcionSeo: string   // max 160 chars — meta description
        descripcionCorta: string   // párrafo corto (hero/card)
        keywords: string
        documentos: string[]
        useCases: string[]
        faq: { q: string; a: string }[]
    }
    en: {
        titulo: string
        subtitulo: string
        descripcionSeo: string
        descripcionCorta: string
        keywords: string
        documentos: string[]
        useCases: string[]
        faq: { q: string; a: string }[]
    }
}

export const SERVICES_CONTENT: ServiceContent[] = [
    // ── 1. TRADUCCIÓN OFICIAL ────────────────────────────────────────────────
    {
        slug: 'traduccion-oficial',
        icono: 'BadgeCheck',
        colorAcento: '#1a3a6c',
        sortOrder: 1,
        es: {
            titulo: 'Traducción Oficial',
            subtitulo: 'Documentos con sello de traductor oficial ante el Ministerio de RR.EE.',
            descripcionSeo: 'Traducciones oficiales en Bogotá: registros civiles, actas, diplomas. Traductores juramentados certificados. Entrega en 24–72 h. Validez internacional.',
            descripcionCorta: 'Traducciones con fe pública para registros civiles, actas de nacimiento, matrimonio y defunción, diplomas y certificados académicos. Validez ante entidades gubernamentales de cualquier país.',
            keywords: 'traducción oficial bogotá, traductor oficial colombia, registro civil traducción, actas traducción juridica',
            documentos: [
                'Registro civil de nacimiento',
                'Acta de matrimonio / divorcio',
                'Acta de defunción',
                'Diploma universitario',
                'Certificado de bautismo',
                'Partida de nacimiento extranjera',
                'Adopción y tutela',
            ],
            useCases: [
                'Trámites de visa para cualquier país',
                'Homologación de títulos académicos',
                'Procesos migratorios y residencia',
                'Trámites notariales internacionales',
                'Apostilla de documentos',
            ],
            faq: [
                { q: '¿Qué diferencia hay entre traducción oficial y juramentada?', a: 'La traducción oficial la realiza un traductor habilitado por el Ministerio de Relaciones Exteriores y lleva su sello y firma. La juramentada tiene valor probatorio ante entidades gubernamentales de Colombia y el exterior.' },
                { q: '¿En cuánto tiempo recibo mi traducción oficial?', a: 'El tiempo estándar es de 24 a 72 horas hábiles dependiendo del volumen. Ofrecemos servicio exprés en 12–24 horas con costo adicional.' },
                { q: '¿Necesito llevar el documento original?', a: 'Puedes enviarnos un escáner en alta resolución o PDF. Para ciertos trámites consulares puede requerirse el original, pero generalmente trabajamos con copias digitales.' },
            ],
        },
        en: {
            titulo: 'Official Translation',
            subtitulo: 'Documents with official translator seal before the Ministry of Foreign Affairs',
            descripcionSeo: 'Official translations in Bogotá: civil records, certificates, diplomas. Sworn certified translators. Delivery in 24–72 h. International validity.',
            descripcionCorta: 'Translations with public faith for civil records, birth, marriage and death certificates, diplomas and academic certificates. Valid before government entities worldwide.',
            keywords: 'official translation bogota, official translator colombia, civil record translation, sworn translation colombia',
            documentos: [
                'Birth certificate',
                'Marriage / divorce certificate',
                'Death certificate',
                'University diploma',
                'Baptism certificate',
                'Foreign birth certificate',
                'Adoption and guardianship',
            ],
            useCases: [
                'Visa applications for any country',
                'Academic degree recognition',
                'Immigration and residency processes',
                'International notarial procedures',
                'Document apostille',
            ],
            faq: [
                { q: 'How long does an official translation take?', a: 'Standard delivery is 24–72 business hours depending on volume. We offer express service in 12–24 hours at an additional cost.' },
                { q: 'Do I need to bring the original document?', a: 'You can send us a high-resolution scan or PDF. For certain consular procedures the original may be required, but generally we work with digital copies.' },
                { q: 'Is your translation accepted by embassies and consulates?', a: 'Yes. Our translators are certified before the Colombian Ministry of Foreign Affairs and our translations are accepted by embassies, consulates and government entities worldwide.' },
            ],
        },
    },

    // ── 2. TRADUCCIÓN ACADÉMICA ─────────────────────────────────────────────
    {
        slug: 'traduccion-academica',
        icono: 'GraduationCap',
        colorAcento: '#0d5c2e',
        sortOrder: 2,
        es: {
            titulo: 'Traducción Académica',
            subtitulo: 'Notas universitarias, programas de estudio y títulos para el mundo',
            descripcionSeo: 'Traducción académica en Bogotá: notas universitarias, programas de estudio, diplomas. Ideal para homologación, becas Fulbright, Erasmus+ y admisiones internacionales.',
            descripcionCorta: 'Traducimos diplomas, actas de grado, certificados de notas, programas analíticos y constancias de estudio. Respaldo formal para validación ante el MEN, ICETEX, universidades extranjeras y procesos de becas y movilidad académica.',
            keywords: 'traducción académica bogotá, traducción diplomas colombia, homologación títulos, notas universitarias traducción, becas fulbright, ICETEX traducción',
            documentos: [
                'Certificado de notas / historial académico',
                'Programa de estudios / pensum analítico',
                'Diploma universitario / título profesional',
                'Acta de grado',
                'Descripción de cursos (Credit Transfer)',
                'Carta de recomendación académica',
                'Certificado de graduación',
                'Constancia de estudios y matrícula',
            ],
            useCases: [
                'Becas Fulbright, Erasmus+ y otras becas internacionales',
                'Admisión a universidades extranjeras (EUA, Europa, Canadá)',
                'Homologación de títulos ante el MEN Colombia',
                'Procesos de visa estudiantil (F-1, Schengen)',
                'Convalidación de títulos en España',
                'Movilidad académica e intercambio universitario',
            ],
            faq: [
                { q: '¿Qué formato se usa para la traducción de mis notas universitarias?', a: 'Usamos el formato reconocido internacionalmente, conservando la estructura original del documento (tabla de calificaciones, escala de notas, etc.) y añadiendo el sello del traductor oficial.' },
                { q: '¿Pueden traducir el pensum de mi carrera?', a: 'Sí. Traducimos programas académicos completos con la descripción de cada materia. Recomendamos enviarnos el documento oficial de la universidad para garantizar fidelidad.' },
                { q: '¿La traducción es válida para el ICETEX?', a: 'Sí. Nuestras traducciones oficiales con sello de traductor juramentado son aceptadas por el ICETEX, el Ministerio de Educación Nacional y entidades equivalentes en el exterior.' },
            ],
        },
        en: {
            titulo: 'Academic Translation',
            subtitulo: 'University transcripts, study programs and degrees for the world',
            descripcionSeo: 'Academic translation in Bogotá: university transcripts, study programs, degrees. Ideal for degree recognition, Fulbright, Erasmus+ scholarships and international admissions.',
            descripcionCorta: 'We translate diplomas, degree certificates, grade transcripts, analytical programs and enrollment certificates. Backed by formal recognition for degree validation, scholarships and international academic mobility.',
            keywords: 'academic translation bogota, university transcript translation colombia, degree recognition, fulbright scholarship translation, ICETEX translation',
            documentos: [
                'University transcript / academic record',
                'Course curriculum (syllabus)',
                'University diploma / degree certificate',
                'Graduation act',
                'Course description (Credit Transfer)',
                'Academic recommendation letter',
                'Graduation certificate',
                'Enrollment and registration certificate',
            ],
            useCases: [
                'Fulbright, Erasmus+ and other international scholarships',
                'University admissions (USA, Europe, Canada)',
                'Academic degree recognition before MEN Colombia',
                'Student visa (F-1, Schengen)',
                'Degree validation in Spain',
                'Academic mobility and university exchange',
            ],
            faq: [
                { q: 'What format is used for university transcript translation?', a: 'We use the internationally recognized format, preserving the original document structure (grade table, grading scale, etc.) and adding the official translator\'s seal.' },
                { q: 'Can you translate my academic program (syllabus)?', a: 'Yes. We translate complete academic programs with each subject description. We recommend sending the official university document to ensure accuracy.' },
                { q: 'Is the translation valid for ICETEX?', a: 'Yes. Our official translations with sworn translator seal are accepted by ICETEX, the Colombian Ministry of Education and equivalent entities abroad.' },
            ],
        },
    },

    // ── 3. REGISTRO CIVIL (nuevo silo) ──────────────────────────────────────
    {
        slug: 'traduccion-registro-civil',
        icono: 'FileText',
        colorAcento: '#1a3a8c',
        sortOrder: 3,
        es: {
            titulo: 'Traducción de Registro Civil',
            subtitulo: 'El más solicitado — Actas de nacimiento, matrimonio y defunción con validez internacional',
            descripcionSeo: 'Traducción de registro civil en Bogotá: actas de nacimiento, matrimonio y defunción. Certificada para embajadas de USA, Canadá, Europa y Australia. Entrega en 24 h.',
            descripcionCorta: 'Traducciones certificadas para trámites de visa, matrimonio en el exterior o procesos notariales. Incluye traducción de Registro Civil de Nacimiento, Matrimonio y Defunción. Verificación exhaustiva de nombres, fechas, sellos y números de folio. Cumplimiento de estándares internacionales para embajadas de USA, Canadá, Australia y Europa.',
            keywords: 'traducción registro civil bogotá, registro civil nacimiento traducción, acta matrimonio traducción, traductores oficiales bogota, registro civil visa',
            documentos: [
                'Registro civil de nacimiento',
                'Registro civil de matrimonio',
                'Registro civil de defunción',
                'Acta de reconocimiento de hijo',
                'Certificado de soltería',
                'Partida de bautismo',
                'Documento de divorcio',
                'Libreta militar (para trámites)',
            ],
            useCases: [
                'Solicitud de visa USA (B1/B2, K-1)',
                'Solicitud de visa Schengen (Europa)',
                'Visa de Canadá y Australia',
                'Matrimonio en el exterior',
                'Apostilla UINL',
                'Procesos de adopción internacional',
                'Trámites notariales internacionales',
                'Doble ciudadanía / nacionalidad',
            ],
            faq: [
                { q: '¿Necesito traducción del Registro Civil para visa americana?', a: 'Sí. Para la mayoría de categorías de visa de EUA (incluyendo B1/B2, K-1 y residencia permanente) la embajada exige traducciones certificadas de documentos de estado civil como el registro de nacimiento.' },
                { q: '¿Cuáles son los estándares de las embajadas para aceptar la traducción?', a: 'Cada embajada tiene sus propios requisitos, pero en general exigen una traducción completa, fiel al original, con el sello y firma del traductor juramentado habilitado por la Cancillería colombiana. Nosotros cumplimos con todos estos estándares.' },
                { q: '¿Pueden traducir un documento con letra difícil de leer?', a: 'Sí. Tenemos experiencia con documentos antiguos o de escritura cursiva. Si hay partes ilegibles, las indicamos como "ilegible" según lo exige la norma, igual que en el original.' },
                { q: '¿Cuánto cuesta traducir un registro civil?', a: 'El precio varía según el número de páginas y la urgencia. Contáctanos con tu documento y te enviamos una cotización sin costo en menos de 1 hora.' },
            ],
        },
        en: {
            titulo: 'Civil Registry Translation',
            subtitulo: 'Most requested — Birth, marriage and death certificates with international validity',
            descripcionSeo: 'Civil registry translation in Bogotá: birth, marriage and death certificates. Certified for USA, Canada, Europe and Australia embassies. 24 h delivery.',
            descripcionCorta: 'Certified translations for visa applications, overseas marriage or notarial procedures. Includes translation of Birth, Marriage and Death Certificates. Thorough verification of names, dates, stamps and folio numbers. Compliance with international standards for embassies of USA, Canada, Australia and Europe.',
            keywords: 'civil registry translation bogota, birth certificate translation colombia, marriage certificate translation, sworn translator bogota, civil registry visa',
            documentos: [
                'Birth certificate',
                'Marriage certificate',
                'Death certificate',
                'Child recognition certificate',
                'Single status certificate',
                'Baptism certificate',
                'Divorce document',
                'Military booklet (for procedures)',
            ],
            useCases: [
                'USA Visa application (B1/B2, K-1)',
                'Schengen Visa (Europe)',
                'Canada and Australia visa',
                'Getting married abroad',
                'UINL Apostille',
                'International adoption processes',
                'International notarial procedures',
                'Dual citizenship / nationality',
            ],
            faq: [
                { q: 'Do I need a Civil Registry translation for a US visa?', a: 'Yes. For most US visa categories (including B1/B2, K-1 and permanent residency) the embassy requires certified translations of civil status documents such as birth certificates.' },
                { q: 'What are embassy standards for accepting translations?', a: 'Each embassy has its own requirements, but generally they require a complete translation faithful to the original, with the stamp and signature of a sworn translator authorized by the Colombian Foreign Ministry. We meet all these standards.' },
                { q: 'Can you translate a document with difficult-to-read handwriting?', a: 'Yes. We have experience with old documents or cursive handwriting. If any parts are illegible, we indicate them as "illegible" as required by the standard, just as in the original.' },
                { q: 'How much does a civil registry translation cost?', a: 'The price varies depending on the number of pages and urgency. Contact us with your document and we\'ll send you a free quote in less than 1 hour.' },
            ],
        },
    },

    // ── 4. TRADUCCIÓN LEGAL ─────────────────────────────────────────────────
    {
        slug: 'traduccion-legal',
        icono: 'Scale',
        colorAcento: '#7c1d1d',
        sortOrder: 4,
        es: {
            titulo: 'Traducción Legal y Jurídica',
            subtitulo: 'Contratos, poderes, sentencias y documentos corporativos',
            descripcionSeo: 'Traducción legal en Bogotá: contratos, poderes notariales, sentencias, acuerdos. Precisión jurídica para litigios internacionales, M&A y due diligence corporativo.',
            descripcionCorta: 'La traducción en el sector jurídico es fundamental para asegurar que los documentos legales sean comprendidos con precisión. Evitamos malentendidos que resulten en conflictos legales. Specializados en contratos internacionales, poderes notariales (POA), sentencias de divorcio, acuerdos comerciales, estatutos sociales, leyes y decretos.',
            keywords: 'traducción legal bogotá, traducción jurídica colombia, contrato traducción, poder notarial traducción, due diligence traducción, sentencia divorcio traducción',
            documentos: [
                'Contratos internacionales',
                'Poderes notariales (POA)',
                'Sentencias de divorcio',
                'Acuerdos de confidencialidad (NDA)',
                'Estatutos corporativos',
                'Documentos de due diligence',
                'Testamentos y sucesiones',
                'Leyes y decretos',
                'Acuerdos comerciales internacionales',
                'Documentos de arbitraje',
            ],
            useCases: [
                'Litigios y arbitrajes internacionales',
                'Fusiones y adquisiciones (M&A)',
                'Inversión extranjera directa',
                'Registro de marcas y patentes internacionales',
                'Trámites notariales en el exterior',
                'Divorcios internacionales',
            ],
            faq: [
                { q: '¿Sus traductores tienen formación jurídica?', a: 'Sí. Contamos con traductores especializados en derecho con experiencia en terminología civil, comercial, laboral e internacional. Revisión doble para garantizar precisión.' },
                { q: '¿Pueden traducir leyes y decretos completos?', a: 'Sí, manejamos documentos de cualquier extensión. Para decretos y leyes extensas coordinamos equipos de traductores para mantener plazos competitivos.' },
                { q: '¿Cómo garantizan la confidencialidad de mis documentos legales?', a: 'Firmamos acuerdos de confidencialidad (NDA) con todos nuestros clientes que lo requieran. Nuestros documentos se almacenan en entornos seguros y no se comparten con terceros.' },
            ],
        },
        en: {
            titulo: 'Legal Translation',
            subtitulo: 'Contracts, powers of attorney, court rulings and corporate documents',
            descripcionSeo: 'Legal translation in Bogotá: contracts, powers of attorney, court rulings, agreements. Legal precision for international litigation, M&A and corporate due diligence.',
            descripcionCorta: 'Translation in the legal sector is fundamental to ensuring that legal documents are understood with precision. We prevent misunderstandings that could result in legal conflicts. Specialized in international contracts, powers of attorney (POA), divorce judgments, commercial agreements, corporate bylaws, laws and decrees.',
            keywords: 'legal translation bogota, contract translation colombia, power of attorney translation, due diligence translation colombia, divorce translation',
            documentos: [
                'International contracts',
                'Powers of attorney (POA)',
                'Divorce judgments',
                'Non-disclosure agreements (NDA)',
                'Corporate bylaws',
                'Due diligence documents',
                'Wills and successions',
                'Laws and decrees',
                'International commercial agreements',
                'Arbitration documents',
            ],
            useCases: [
                'International litigation and arbitration',
                'Mergers and acquisitions (M&A)',
                'Foreign direct investment',
                'International trademark and patent registration',
                'Notarial procedures abroad',
                'International divorces',
            ],
            faq: [
                { q: 'Do your translators have legal training?', a: 'Yes. We have translators specialized in law with experience in civil, commercial, labor and international terminology. Double review to ensure accuracy.' },
                { q: 'Can you translate entire laws and decrees?', a: 'Yes, we handle documents of any length. For extensive decrees and laws, we coordinate translation teams to maintain competitive deadlines.' },
                { q: 'How do you guarantee the confidentiality of my legal documents?', a: 'We sign non-disclosure agreements (NDA) with all clients who require them. Our documents are stored in secure environments and are not shared with third parties.' },
            ],
        },
    },

    // ── 5. FINANCIAL / SEGUROS ──────────────────────────────────────────────
    {
        slug: 'traduccion-financiera',
        icono: 'Briefcase',
        colorAcento: '#1a5276',
        sortOrder: 5,
        es: {
            titulo: 'Traducción Financiera y de Seguros',
            subtitulo: 'Balances, pólizas e informes financieros con precisión IFRS',
            descripcionSeo: 'Traducción financiera en Bogotá: estados financieros, balances, pólizas de seguro, extractos bancarios. Terminología IFRS para auditorías e inversión extranjera.',
            descripcionCorta: 'Precisión terminológica para instituciones financieras globales. Traducimos balances generales, estados de resultados, pólizas de seguros, informes de auditoría y certificaciones bancarias. Terminología IFRS/NIC para inversores internacionales.',
            keywords: 'traducción financiera bogotá, balance traducción colombia, estados financieros traducción, póliza seguro traducción, IFRS traducción, auditoría traducción',
            documentos: [
                'Estados financieros (IFRS/NIC)',
                'Balance general y P&G',
                'Pólizas de seguros',
                'Extractos bancarios',
                'Carta laboral / ingresos para visa',
                'Informes de auditoría externa',
                'Certificaciones bancarias',
                'Prospectos de inversión',
                'Reportes de crédito',
            ],
            useCases: [
                'Auditorías internacionales de empresa',
                'Presentación ante bancos e inversores extranjeros',
                'Solicitudes de visa con soporte financiero',
                'Registro ante bolsas de valores internacionales',
                'Fusiones transfronterizas',
            ],
            faq: [
                { q: '¿Conocen la terminología IFRS/NIC en inglés?', a: 'Sí. Nuestros traductores financieros están capacitados en las Normas Internacionales de Información Financiera (NIIF/IFRS) y garantizan consistencia terminológica en todos los documentos.' },
                { q: '¿Pueden traducir una póliza de seguros compleja?', a: 'Sí. Nuestros traductores especializados en seguros conocen la terminología técnica de pólizas de vida, salud, responsabilidad civil y seguros corporativos.' },
            ],
        },
        en: {
            titulo: 'Financial & Insurance Translation',
            subtitulo: 'Balance sheets, policies and financial reports with IFRS precision',
            descripcionSeo: 'Financial translation in Bogotá: financial statements, balance sheets, insurance policies, bank statements. IFRS terminology for audits and foreign investment.',
            descripcionCorta: 'Terminological precision for global financial institutions. We translate balance sheets, income statements, insurance policies, audit reports and bank certifications. IFRS terminology for international investors.',
            keywords: 'financial translation bogota, financial statement translation colombia, IFRS translation, insurance policy translation colombia, audit translation',
            documentos: [
                'Financial statements (IFRS)',
                'Balance sheet and P&L',
                'Insurance policies',
                'Bank statements',
                'Work reference letter / proof of income for visa',
                'External audit reports',
                'Bank certifications',
                'Investment prospectuses',
                'Credit reports',
            ],
            useCases: [
                'International company audits',
                'Presentation to foreign banks and investors',
                'Visa applications with financial support',
                'Registration with international stock exchanges',
                'Cross-border mergers',
            ],
            faq: [
                { q: 'Do you know IFRS terminology in both languages?', a: 'Yes. Our financial translators are trained in International Financial Reporting Standards (IFRS) and guarantee terminological consistency across all documents.' },
                { q: 'Can you translate a complex insurance policy?', a: 'Yes. Our translators specialized in insurance know the technical terminology for life, health, liability and corporate insurance policies.' },
            ],
        },
    },

    // ── 6. IDENTIFICACIÓN / VISAS ───────────────────────────────────────────
    {
        slug: 'traduccion-identificacion',
        icono: 'BadgeCheck',
        colorAcento: '#4a235a',
        sortOrder: 6,
        es: {
            titulo: 'Traducción de Documentos de Identidad y Visa',
            subtitulo: 'Pasaportes, cédulas y documentación para visas Schengen, USA, UK y Canadá',
            descripcionSeo: 'Traducción de documentos de identidad en Bogotá: pasaportes, cédulas para visas Schengen, USA, UK y Canadá. Traductores certificados ante consulados. Entrega exprés.',
            descripcionCorta: 'Traducimos pasaportes, cédulas de ciudadanía, licencias de conducir y documentos de identidad. Especializados en visas Schengen, USA (B1/B2, F1), UK y Canadá. Formato aceptado por consulados y embajadas.',
            keywords: 'traducción pasaporte bogotá, traducción cédula colombia, documentos visa traducción, visa schengen traducción, visa usa traducción',
            documentos: [
                'Pasaporte colombiano',
                'Cédula de ciudadanía',
                'Tarjeta de identidad',
                'Licencia de conducción',
                'Carné de identidad extranjero',
                'Carné de vacunación',
            ],
            useCases: [
                'Visa Schengen (Europa)',
                'Visa de turismo USA (B1/B2)',
                'Visa estudiantil USA (F-1)',
                'Visa de trabajo UK',
                'Visa de residencia permanente Canadá',
                'Trámites migratorios en general',
            ],
            faq: [
                { q: '¿Necesito traducción oficial del pasaporte para la visa?', a: 'Depende del consulado. La mayoría no exige traducción del pasaporte, pero sí de otros documentos de soporte. Contáctanos y te asesoramos sin costo.' },
                { q: '¿Cuánto tiempo tarda la traducción para visa?', a: 'Entre 12 y 48 horas. Ofrecemos servicio exprés para citas consulares urgentes.' },
            ],
        },
        en: {
            titulo: 'ID & Visa Document Translation',
            subtitulo: 'Passports, ID cards and documentation for Schengen, USA, UK and Canada visas',
            descripcionSeo: 'ID document translation in Bogotá: passports, ID cards for Schengen, USA, UK and Canada visas. Certified translators accepted by consulates. Express delivery.',
            descripcionCorta: 'We translate passports, national ID cards, driver\'s licenses and identity documents. Specialized in Schengen, USA (B1/B2, F1), UK and Canada visas. Accepted by consulates and embassies.',
            keywords: 'passport translation bogota, ID card translation colombia, visa document translation, schengen visa translation, usa visa translation',
            documentos: [
                'Colombian passport',
                'National ID card',
                'Identity card',
                'Driver\'s license',
                'Foreign ID card',
                'Vaccination card',
            ],
            useCases: [
                'Schengen Visa (Europe)',
                'USA Tourist Visa (B1/B2)',
                'USA Student Visa (F-1)',
                'UK Work Visa',
                'Canada Permanent Residency Visa',
                'General immigration procedures',
            ],
            faq: [
                { q: 'Do I need an official passport translation for my visa?', a: 'It depends on the consulate. Most don\'t require a passport translation, but do require translations of supporting documents. Contact us for free advice.' },
                { q: 'How long does a visa translation take?', a: 'Between 12 and 48 hours. We offer express service for urgent consular appointments.' },
            ],
        },
    },

    // ── 7. TÉCNICA / CIENTÍFICA ─────────────────────────────────────────────
    {
        slug: 'traduccion-tecnica',
        icono: 'Microscope',
        colorAcento: '#1a5e2a',
        sortOrder: 7,
        es: {
            titulo: 'Traducción Técnica y Científica',
            subtitulo: 'Ingeniería, TI/Software, patentes y publicaciones científicas',
            descripcionSeo: 'Traducción técnica en Bogotá: manuales de ingeniería, software, APIs, patentes industriales y publicaciones científicas. Revisión por expertos en cada área técnica.',
            descripcionCorta: 'Localización de interfaces y documentación de software, traducción de manuales de ingeniería, patentes industriales y publicaciones científicas peer-reviewed. Herramientas CAT para garantizar consistencia terminológica en proyectos extensos.',
            keywords: 'traducción técnica bogotá, traducción software colombia, manual ingeniería traducción, patente traducción, publicación científica traducción',
            documentos: [
                'Manuales de usuario y servicio técnico',
                'Documentación de software / API / SDK',
                'Localización de interfaces (UI/UX)',
                'Patentes industriales (PCT)',
                'Fichas técnicas de productos',
                'Publicaciones científicas (papers)',
                'Especificaciones de ingeniería',
                'Licitaciones y propuestas técnicas',
            ],
            useCases: [
                'Registro de patentes internacionales (PCT)',
                'Licitaciones internacionales de ingeniería',
                'Publicaciones científicas peer-reviewed',
                'Expansión de software a mercados internacionales',
                'Capacitación técnica internacional',
            ],
            faq: [
                { q: '¿Pueden manejar documentación técnica muy específica?', a: 'Sí. Contamos con glosarios terminológicos por industria y trabajamos con herramientas CAT (Computer-Assisted Translation) para garantizar consistencia en proyectos extensos.' },
                { q: '¿Tienen experiencia en localización de software?', a: 'Sí. Localizamos interfaces de usuario, mensajes de error, documentación técnica y materiales de soporte. Trabajo con archivos JSON, XLIFF, PO y CSV.' },
            ],
        },
        en: {
            titulo: 'Technical & Scientific Translation',
            subtitulo: 'Engineering, IT/Software, patents and scientific publications',
            descripcionSeo: 'Technical translation in Bogotá: engineering manuals, software, APIs, industrial patents and scientific publications. Expert review in each technical area.',
            descripcionCorta: 'Interface localization and software documentation, engineering manual translation, industrial patents and peer-reviewed scientific publications. CAT tools to ensure terminological consistency in large projects.',
            keywords: 'technical translation bogota, software translation colombia, engineering manual translation, patent translation, scientific publication translation',
            documentos: [
                'User and technical service manuals',
                'Software / API / SDK documentation',
                'Interface localization (UI/UX)',
                'Industrial patents (PCT)',
                'Product data sheets',
                'Scientific publications (papers)',
                'Engineering specifications',
                'Tenders and technical proposals',
            ],
            useCases: [
                'International patent registration (PCT)',
                'International engineering tenders',
                'Peer-reviewed scientific publications',
                'Software expansion to international markets',
                'International technical training',
            ],
            faq: [
                { q: 'Can you handle very specific technical documentation?', a: 'Yes. We have industry-specific terminology glossaries and work with CAT (Computer-Assisted Translation) tools to ensure consistency in extensive projects.' },
                { q: 'Do you have experience in software localization?', a: 'Yes. We localize user interfaces, error messages, technical documentation and support materials. We work with JSON, XLIFF, PO and CSV files.' },
            ],
        },
    },

    // ── 8. MÉDICA Y FARMACÉUTICA (nuevo silo) ────────────────────────────────
    {
        slug: 'traduccion-medica',
        icono: 'Heart',
        colorAcento: '#b91c1c',
        sortOrder: 8,
        es: {
            titulo: 'Traducción Médica y Farmacéutica',
            subtitulo: 'Historias clínicas, estudios clínicos, prospectos y registros sanitarios',
            descripcionSeo: 'Traducción médica en Bogotá: historias clínicas, estudios clínicos Fase I–III, prospectos farmacéuticos, dispositivos médicos. Validez ante FDA, EMA e INVIMA.',
            descripcionCorta: 'Traducción de historias clínicas y reportes médicos para telemedicina e interconsulta. Protocolos de investigación y estudios clínicos (Fase I–III). Insertos de medicamentos, registros sanitarios y documentos para trámites ante el INVIMA, FDA y EMA.',
            keywords: 'traducción médica bogotá, historia clínica traducción, estudio clínico traducción, prospecto medicamento traducción, FDA INVIMA traducción',
            documentos: [
                'Historia clínica / epicrisis',
                'Reportes médicos y diagnósticos',
                'Estudios clínicos (Fase I–III)',
                'Prospecto de medicamentos (INN)',
                'Reportes de dispositivos médicos',
                'Protocolos de investigación',
                'Registros sanitarios (INVIMA/FDA)',
                'Consentimientos informados',
                'Resultados de laboratorio',
            ],
            useCases: [
                'Telemedicina y teleconsulta internacional',
                'Sometimiento a FDA/EMA/INVIMA',
                'Investigación clínica multicéntrica',
                'Trámites de visa por razones médicas',
                'Homologación de títulos médicos',
                'Publicaciones en revistas biomédicas',
            ],
            faq: [
                { q: '¿Tienen traductores con formación médica?', a: 'Sí. Para textos médicos y farmacéuticos trabajamos con traductores que tienen formación en ciencias de la salud o experiencia comprobada en traducción biomédica. Revisión por un segundo especialista.' },
                { q: '¿Pueden traducir una historia clínica para consulta en el exterior?', a: 'Sí. Traducimos historias clínicas, epicrisis, diagnósticos y resultados de laboratorio con los términos exactos en inglés, francés u otros idiomas. Entrega en 24–72 horas.' },
                { q: '¿La traducción es válida ante la FDA?', a: 'Sí. Nuestras traducciones cumplen con los requisitos de traducción certificada que exige la FDA para documentos regulatorios, ensayos clínicos y registros de dispositivos médicos.' },
            ],
        },
        en: {
            titulo: 'Medical & Pharmaceutical Translation',
            subtitulo: 'Clinical records, clinical studies, drug leaflets and health registrations',
            descripcionSeo: 'Medical translation in Bogotá: clinical records, Phase I–III clinical studies, pharmaceutical leaflets, medical devices. Valid for FDA, EMA and INVIMA.',
            descripcionCorta: 'Translation of clinical records and medical reports for telemedicine and referrals. Research protocols and clinical studies (Phase I–III). Drug package inserts, health registrations and documents for INVIMA, FDA and EMA submissions.',
            keywords: 'medical translation bogota, clinical record translation colombia, clinical study translation, drug leaflet translation, FDA INVIMA translation',
            documentos: [
                'Clinical record / epicrisis',
                'Medical reports and diagnoses',
                'Clinical studies (Phase I–III)',
                'Drug package inserts (INN)',
                'Medical device reports',
                'Research protocols',
                'Health registrations (INVIMA/FDA)',
                'Informed consent forms',
                'Laboratory results',
            ],
            useCases: [
                'International telemedicine and teleconsultation',
                'FDA/EMA/INVIMA submissions',
                'Multicenter clinical research',
                'Medical visa applications',
                'Medical degree recognition',
                'Biomedical journal publications',
            ],
            faq: [
                { q: 'Do you have translators with medical training?', a: 'Yes. For medical and pharmaceutical texts we work with translators who have health science training or proven experience in biomedical translation. Reviewed by a second specialist.' },
                { q: 'Can you translate a clinical record for consultation abroad?', a: 'Yes. We translate clinical records, epicrises, diagnoses and laboratory results with exact terminology in English, French or other languages. Delivery in 24–72 hours.' },
                { q: 'Is the translation valid before the FDA?', a: 'Yes. Our translations meet the certified translation requirements required by the FDA for regulatory documents, clinical trials and medical device registrations.' },
            ],
        },
    },

    // ── 9. DOCUMENTOS PERSONALES (nuevo silo) ───────────────────────────────
    {
        slug: 'traduccion-documentos-personales',
        icono: 'User',
        colorAcento: '#7c3aed',
        sortOrder: 9,
        es: {
            titulo: 'Traducción de Documentos Personales',
            subtitulo: 'Todo lo que necesitas para tu trámite personal o migratorio',
            descripcionSeo: 'Traducción de documentos personales en Bogotá: antecedentes penales, cartas laborales, partidas de nacimiento, certificados médicos. Ideal para visas y migración.',
            descripcionCorta: 'Traducción de todos los documentos personales que necesitas para tu visa, migración o trámite en el exterior: antecedentes penales, cartas laborales, declaraciones de renta, certificados de independientes, registros de propiedad y más. Rápido, económico y con validez internacional.',
            keywords: 'traducción documentos personales bogotá, antecedentes penales traducción, carta laboral traducción, declaración renta traducción, certificado médico traducción',
            documentos: [
                'Antecedentes penales (Sijín / Policía)',
                'Carta laboral y comprobante de ingresos',
                'Declaración de renta (DIAN)',
                'Certificado de propiedad',
                'Certificado médico / vacunación',
                'Carta de invitación',
                'Seguro de viaje',
                'Comprobantes de pago / estado de cuenta',
                'Documentos de seguridad social / pensión',
            ],
            useCases: [
                'Solicitud de visa turística o de trabajo',
                'Procesos de migración y reunificación familiar',
                'Estudios o trabajo en el exterior',
                'Trámites bancarios internacionales',
                'Procesos de adopción',
                'Trámites de pensión en el exterior',
            ],
            faq: [
                { q: '¿Puedo enviar mis documentos por WhatsApp o email?', a: 'Sí. Puedes enviarnos fotos o PDFs de tus documentos por WhatsApp o email. Nos aseguramos de que la imagen sea suficientemente legible antes de empezar la traducción.' },
                { q: '¿Cuánto cuesta un paquete de documentos personales para visa?', a: 'Tenemos paquetes especiales para conjuntos de documentos (visa Schengen, USA, Canadá). Contáctanos con tu lista y te cotizamos todo junto con descuento por volumen.' },
                { q: '¿Qué idiomas ofrecen además del inglés?', a: 'Traducimos al inglés, francés, italiano, portugués, alemán y otros idiomas según disponibilidad. Contáctanos para confirmar disponibilidad del idioma que necesitas.' },
            ],
        },
        en: {
            titulo: 'Personal Documents Translation',
            subtitulo: 'Everything you need for your personal or immigration process',
            descripcionSeo: 'Personal documents translation in Bogotá: criminal records, work letters, birth certificates, medical certificates. Ideal for visas and immigration.',
            descripcionCorta: 'Translation of all personal documents you need for your visa, immigration or overseas procedure: criminal records, work letters, income tax returns, self-employment certificates, property registrations and more. Fast, affordable and internationally valid.',
            keywords: 'personal documents translation bogota, criminal record translation, work letter translation, tax return translation, medical certificate translation',
            documentos: [
                'Criminal record (National Police)',
                'Work letter and proof of income',
                'Income tax return (DIAN)',
                'Property certificate',
                'Medical / vaccination certificate',
                'Invitation letter',
                'Travel insurance',
                'Bank statements / account balance',
                'Social security / pension documents',
            ],
            useCases: [
                'Tourist or work visa application',
                'Immigration and family reunification processes',
                'Studying or working abroad',
                'International banking procedures',
                'Adoption processes',
                'Overseas pension procedures',
            ],
            faq: [
                { q: 'Can I send my documents via WhatsApp or email?', a: 'Yes. You can send us photos or PDFs of your documents via WhatsApp or email. We make sure the image is sufficiently legible before starting the translation.' },
                { q: 'How much does a personal document package for a visa cost?', a: 'We have special packages for sets of documents (Schengen, USA, Canada visa). Contact us with your list and we\'ll quote everything together with a volume discount.' },
                { q: 'What languages do you offer besides English?', a: 'We translate into English, French, Italian, Portuguese, German and other languages depending on availability. Contact us to confirm availability of the language you need.' },
            ],
        },
    },

    // ── 10. PUBLICITARIA / MARKETING ────────────────────────────────────────
    {
        slug: 'traduccion-publicitaria',
        icono: 'Megaphone',
        colorAcento: '#7d6608',
        sortOrder: 10,
        es: {
            titulo: 'Traducción Publicitaria y de Marketing',
            subtitulo: 'Transcreación y localización para marcas en Colombia y el mundo',
            descripcionSeo: 'Traducción publicitaria en Bogotá: sitios web, catálogos, campañas digitales. Transcreación y localización cultural para hispanohablantes y angloparlantes.',
            descripcionCorta: 'Transcreación y localización: sitios web, catálogos de productos, e-commerce, email marketing, redes sociales y presentaciones corporativas. Adaptamos el mensaje culturalmente para conectar con tu audiencia.',
            keywords: 'traducción publicitaria bogotá, localización web colombia, transcreación marketing, catálogo traducción, e-commerce localización',
            documentos: [
                'Sitios web y landing pages',
                'Catálogos de productos',
                'Campañas de email marketing',
                'Guiones publicitarios (video/radio)',
                'Presentaciones corporativas',
                'Contenido para redes sociales',
                'Materiales de e-commerce',
                'Packaging y etiquetas de producto',
            ],
            useCases: [
                'Expansión de marca a mercados anglosajones',
                'Lanzamiento de productos en Latinoamérica',
                'Campañas digitales multilingüe',
                'E-commerce internacional (Amazon, Shopify)',
                'Relaciones públicas internacionales',
            ],
            faq: [
                { q: '¿Qué es la transcreación y en qué se diferencia de la traducción?', a: 'La transcreación va más allá de traducir palabras: adapta el mensaje, el tono y los referentes culturales para resonar con la audiencia objetivo. Ideal para publicidad y branding.' },
                { q: '¿Pueden traducir y localizar todo mi sitio web?', a: 'Sí. Trabajamos con archivos HTML, WordPress, Shopify, Webflow y otros CMS. Ofrecemos localización completa incluyendo SEO en el idioma destino.' },
            ],
        },
        en: {
            titulo: 'Advertising & Marketing Translation',
            subtitulo: 'Transcreation and localization for brands in Colombia and worldwide',
            descripcionSeo: 'Advertising translation in Bogotá: websites, catalogs, digital campaigns. Transcreation and cultural localization for Spanish and English-speaking markets.',
            descripcionCorta: 'Transcreation and localization: websites, product catalogs, e-commerce, email marketing, social media and corporate presentations. We culturally adapt your message to connect with your audience.',
            keywords: 'advertising translation bogota, website localization colombia, marketing transcreation, catalog translation, e-commerce localization',
            documentos: [
                'Websites and landing pages',
                'Product catalogs',
                'Email marketing campaigns',
                'Advertising scripts (video/radio)',
                'Corporate presentations',
                'Social media content',
                'E-commerce materials',
                'Product packaging and labels',
            ],
            useCases: [
                'Brand expansion to English-speaking markets',
                'Product launch in Latin America',
                'Multilingual digital campaigns',
                'International e-commerce (Amazon, Shopify)',
                'International public relations',
            ],
            faq: [
                { q: 'What is transcreation and how does it differ from translation?', a: 'Transcreation goes beyond translating words: it adapts the message, tone and cultural references to resonate with the target audience. Ideal for advertising and branding.' },
                { q: 'Can you translate and localize my entire website?', a: 'Yes. We work with HTML files, WordPress, Shopify, Webflow and other CMS. We offer full localization including SEO in the target language.' },
            ],
        },
    },
]

// Helper: obtener un servicio por slug
export function getServiceBySlug(slug: string): ServiceContent | undefined {
    return SERVICES_CONTENT.find((s) => s.slug === slug)
}

// Helper: slugs para generateStaticParams
export function getAllServiceSlugs(): { slug: string }[] {
    return SERVICES_CONTENT.map((s) => ({ slug: s.slug }))
}
