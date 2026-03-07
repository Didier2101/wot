import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

// Singleton del cliente para el lado del cliente (anon key)
export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Tipos de la base de datos
export type Lead = {
  id?: string
  nombre: string
  email: string
  telefono?: string
  tipo_documento: string
  idioma_origen: string
  idioma_destino: string
  descripcion?: string
  nombre_archivo?: string
  urgente?: boolean
  status?: string
  created_at?: string
}

export type Service = {
  id: string
  slug: string
  title: string
  description: string
  icon: string
  sort_order: number
  is_active: boolean
}

export type Testimonial = {
  id: string
  name: string
  role: string
  company?: string
  content: string
  rating: number
  sort_order: number
}

export type CompanyConfig = {
  key: string
  value: string
}

export type Post = {
  id: string
  slug: string
  titulo: string
  extracto: string
  contenido_html: string
  imagen_url?: string
  categoria: string
  fecha_publicacion: string
  lang: 'es' | 'en'
  created_at?: string
}
