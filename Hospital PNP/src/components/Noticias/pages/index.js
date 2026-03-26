// src/components/Noticias/pages/index.js
import Noticia1 from './Noticia1'
import Noticia2 from './Noticia2'
import Noticia3 from './Noticia3'
import Noticia4 from './Noticia4'
import Noticia5 from './Noticia5'
import ImagenNot2 from '../../../assets//Noticias/cancerdecuello.jpg'
import ImagenNot1 from '../../../assets/Noticias/campquirur.jpeg'
import ceremonia from '../../../assets/Noticias/ceremonia.jpeg'
import capacitacion from '../../../assets/Noticias/capacitacion.jpeg'
import riñon from '../../../assets/Noticias/rinon.jpeg'


// Mapeo de IDs a componentes de contenido (cada uno con su formato único)
export const noticiasContenido = {
  '1': Noticia1,
  '2': Noticia2,
  '3': Noticia3,
  '4': Noticia4,
  '5': Noticia5,
}

// Metadatos de cada noticia (para la lista)
export const noticiasMetadata = {
  '1': {
    id: '1',
    title: 'Hospital Nacional PNP Luis N. Sáenz realiza exitosa campaña quirúrgica en beneficio de nuestra familia policial',
    excerpt: 'Se realizó con éxito una importante campaña quirúrgica donde se llevaron a cabo cerca de 35 procedimientos en tres salas de operaciones en simultáneo, reduciendo significativamente la lista de espera.',
    imageUrl: ImagenNot1,
    date: new Date('2026-03-24'),
    category: 'Institucionales',
    author: 'Dirección del Hospital',
    featured: true,
  },
  '2': {
    id: '2',
    title: 'Gran Campaña de Prevención: Juntos contra el Cáncer de Cuello Uterino',
    excerpt: 'En el marco del Día Mundial de la Prevención del Cáncer de Cuello Uterino, se llevo a cabo una importante campaña integral orientada a la prevención, detección temprana y concientización de esta enfermedad.',
    imageUrl: ImagenNot2,
    date: new Date('2026-03-21'),
    category: 'Salud',
    author: 'Departamento de Ginecología',
    featured: false,
  },
  '3': {
    id: '3',
    title: 'El Hospital Nacional PNP "Luis N. Sáenz" llevó a cabo con solemnidad la Ceremonia del Lunes Patriótico',
    excerpt: ' El Hospital Nacional PNP "Luis N. Sáenz" llevó a cabo con solemnidad la Ceremonia del Lunes Patriótico, reafirmando los valores de civismo, identidad nacional y compromiso institucional que distinguen a la familia policial.',
    imageUrl: ceremonia ,
    date: new Date('2026-03-2'),
    category: 'Eventos',
    author: 'Dirección del Hospital',
    featured: false,
  },
  '4': {
    id: '4',
    title: 'Nutrición del Hospital PNP realiza curso taller sobre dieta de alta y sistema de intercambio de alimentos',
    excerpt: ' El Departamento de Nutrición, a cargo de la señora CRNL S PNP Giulina del Castillo, viene realizando hoy 13 de marzo, un importante curso taller presencial ',
    imageUrl: capacitacion,
    date: new Date('2026-03-14'),
    category: 'Capacitación',
    author: 'Departamento de Nutrición',
    featured: false,
  },
  '5': {
    id: '5',
    title: 'Día mundial del Riñon: Cuidar tus riñones es cuidar tu vida',
    excerpt: 'A partir de este mes el hospital ofrece consultas médicas virtuales para facilitar el acceso a la atención especializada desde cualquier punto del país.',
    imageUrl: riñon,
    date: new Date('2026-02-28'),
    category: 'Salud',
    author: 'Departamento de Nefrología',
    featured: false,
  }
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