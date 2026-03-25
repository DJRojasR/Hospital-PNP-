// src/components/Noticias/pages/index.js
import Noticia1 from './Noticia1'
import Noticia2 from './Noticia2'
import Noticia3 from './Noticia3'
import Noticia4 from './Noticia4'
import Noticia5 from './Noticia5'
import Noticia6 from './Noticia6'
import ImagenNot2 from '../../../assets/noticias/cancerdecuello.jpg'

// Mapeo de IDs a componentes de contenido (cada uno con su formato único)
export const noticiasContenido = {
  '1': Noticia1,
  '2': Noticia2,
  '3': Noticia3,
  '4': Noticia4,
  '5': Noticia5,
  '6': Noticia6,
}

// Metadatos de cada noticia (para la lista)
export const noticiasMetadata = {
  '1': {
    id: '1',
    title: 'Hospital PNP implementa nuevo protocolo de atención al paciente',
    excerpt: 'Se inicia la implementación del protocolo de atención integral con nuevas medidas orientadas a mejorar la calidad del servicio brindado al personal policial y sus familias.',
    imageUrl: 'https://images.unsplash.com/photo-1576091160550-2173f7f869?w=800&h=450&fit=crop',
    date: new Date('2026-03-18'),
    category: 'Institucionales',
    author: 'Departamento de Comunicaciones',
    featured: true,
  },
  '2': {
    id: '2',
    title: 'Campaña de prevención cardiovascular para efectivos policiales',
    excerpt: 'El área de cardiología lanzó una campaña de chequeos preventivos gratuitos para detectar factores de riesgo en el personal activo de la PNP.',
    imageUrl: ImagenNot2,
    date: new Date('2026-03-14'),
    category: 'Salud',
    author: 'Área de Cardiología',
    featured: false,
  },
  '3': {
    id: '3',
    title: 'Ceremonia de reconocimiento al personal médico destacado',
    excerpt: 'El Hospital PNP celebró su ceremonia anual de reconocimiento, donde se distinguió a profesionales de la salud por su dedicación y excelencia en el servicio.',
    imageUrl: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=800&h=450&fit=crop',
    date: new Date('2026-03-10'),
    category: 'Eventos',
    author: 'Dirección del Hospital',
    featured: false,
  },
  '4': {
    id: '4',
    title: 'Jornada de capacitación en primeros auxilios avanzados',
    excerpt: 'Más de 80 efectivos policiales participaron en la jornada de capacitación en técnicas de primeros auxilios avanzados dictada por especialistas del hospital.',
    imageUrl: 'https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?w=800&h=450&fit=crop',
    date: new Date('2026-03-05'),
    category: 'Capacitación',
    author: 'Jefatura de Docencia',
    featured: false,
  },
  '5': {
    id: '5',
    title: 'Nuevo servicio de telemedicina disponible para pacientes',
    excerpt: 'A partir de este mes el hospital ofrece consultas médicas virtuales para facilitar el acceso a la atención especializada desde cualquier punto del país.',
    imageUrl: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=800&h=450&fit=crop',
    date: new Date('2026-02-28'),
    category: 'Salud',
    author: 'Departamento de Comunicaciones',
    featured: false,
  },
  '6': {
    id: '6',
    title: 'Firma de convenio interinstitucional con el Ministerio de Salud',
    excerpt: 'El Hospital PNP "Luis N. Sáenz" firmó un convenio de cooperación con el MINSA para fortalecer la atención especializada y el intercambio de conocimientos médicos.',
    imageUrl: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&h=450&fit=crop',
    date: new Date('2026-02-20'),
    category: 'Institucionales',
    author: 'Dirección del Hospital',
    featured: false,
  },
}

// Convertir a array para facilitar el filtrado
export const noticiasArray = Object.values(noticiasMetadata).sort((a, b) => b.date - a.date)

// Helper para obtener noticia por ID con su contenido
export const getNoticiaById = (id) => {
  const metadata = noticiasMetadata[id]
  const Content = noticiasContenido[id]
  
  if (!metadata || !Content) return null
  
  return {
    ...metadata,
    Content
  }
}