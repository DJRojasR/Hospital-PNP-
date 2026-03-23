import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import './Noticias.css'

/* ─────────────────────────────────────────
   Datos de ejemplo — reemplaza con tu API
───────────────────────────────────────── */
const newsData = [
  {
    id: '1',
    title: 'Hospital PNP implementa nuevo protocolo de atención al paciente',
    excerpt: 'Se inicia la implementación del protocolo de atención integral con nuevas medidas orientadas a mejorar la calidad del servicio brindado al personal policial y sus familias.',
    imageUrl: 'https://images.unsplash.com/photo-1576091160550-2173f7f869?w=800&h=450&fit=crop',
    date: new Date('2026-03-18'),
    category: 'Institucionales',
    author: 'Departamento de Comunicaciones',
    featured: true,
  },
  {
    id: '2',
    title: 'Campaña de prevención cardiovascular para efectivos policiales',
    excerpt: 'El área de cardiología lanzó una campaña de chequeos preventivos gratuitos para detectar factores de riesgo en el personal activo de la PNP.',
    imageUrl: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=450&fit=crop',
    date: new Date('2026-03-14'),
    category: 'Salud',
    author: 'Área de Cardiología',
    featured: false,
  },
  {
    id: '3',
    title: 'Ceremonia de reconocimiento al personal médico destacado',
    excerpt: 'El Hospital PNP celebró su ceremonia anual de reconocimiento, donde se distinguió a profesionales de la salud por su dedicación y excelencia en el servicio.',
    imageUrl: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=800&h=450&fit=crop',
    date: new Date('2026-03-10'),
    category: 'Eventos',
    author: 'Dirección del Hospital',
    featured: false,
  },
  {
    id: '4',
    title: 'Jornada de capacitación en primeros auxilios avanzados',
    excerpt: 'Más de 80 efectivos policiales participaron en la jornada de capacitación en técnicas de primeros auxilios avanzados dictada por especialistas del hospital.',
    imageUrl: 'https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?w=800&h=450&fit=crop',
    date: new Date('2026-03-05'),
    category: 'Capacitación',
    author: 'Jefatura de Docencia',
    featured: false,
  },
  {
    id: '5',
    title: 'Nuevo servicio de telemedicina disponible para pacientes',
    excerpt: 'A partir de este mes el hospital ofrece consultas médicas virtuales para facilitar el acceso a la atención especializada desde cualquier punto del país.',
    imageUrl: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=800&h=450&fit=crop',
    date: new Date('2026-02-28'),
    category: 'Salud',
    author: 'Departamento de Comunicaciones',
    featured: false,
  },
  {
    id: '6',
    title: 'Firma de convenio interinstitucional con el Ministerio de Salud',
    excerpt: 'El Hospital PNP "Luis N. Sáenz" firmó un convenio de cooperación con el MINSA para fortalecer la atención especializada y el intercambio de conocimientos médicos.',
    imageUrl: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&h=450&fit=crop',
    date: new Date('2026-02-20'),
    category: 'Institucionales',
    author: 'Dirección del Hospital',
    featured: false,
  },
]

const CATEGORIES = ['Todas', 'Institucionales', 'Salud', 'Eventos', 'Capacitación']

/* ─────────────────────────────────────────
   Formato de fecha
───────────────────────────────────────── */
const formatDate = (date) =>
  date.toLocaleDateString('es-ES', { day: 'numeric', month: 'short', year: 'numeric' })

/* ─────────────────────────────────────────
   Skeleton loader
───────────────────────────────────────── */
const NewsCardSkeleton = () => (
  <div className="ns-skeleton" aria-hidden="true">
    <div className="ns-skeleton-img" />
    <div className="ns-skeleton-body">
      <div className="ns-skeleton-badge" />
      <div className="ns-skeleton-title" />
      <div className="ns-skeleton-line" />
      <div className="ns-skeleton-line ns-skeleton-line--short" />
    </div>
  </div>
)

/* ─────────────────────────────────────────
   NewsCard
───────────────────────────────────────── */
const NewsCard = ({ title, excerpt, imageUrl, date, category, author, featured = false, index = 0 }) => {
  if (featured) {
    return (
      <motion.article
        className="ns-card ns-card--featured group"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.08 }}
        tabIndex={0}
        aria-label={title}
      >
        <div className="ns-card-featured-img-wrap">
          <img src={imageUrl} alt={`Imagen de la noticia: ${title}`} className="ns-card-img" />
          <div className="ns-card-overlay" />
        </div>
        <div className="ns-card-featured-body">
          <div className="ns-card-top-line" />
          <span className="ns-badge">{category}</span>
          <h2 className="ns-card-title ns-card-title--featured">{title}</h2>
          <p className="ns-card-excerpt">{excerpt}</p>
          <div className="ns-card-meta">
            <span className="ns-card-author">{author}</span>
            <time className="ns-card-date" dateTime={date.toISOString()}>{formatDate(date)}</time>
          </div>
          <button className="ns-btn-read" aria-label={`Leer más sobre: ${title}`}>
            Leer más
            <svg className="ns-chevron" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
              fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>
      </motion.article>
    )
  }

  return (
    <motion.article
      className="ns-card ns-card--regular"
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      tabIndex={0}
      aria-label={title}
    >
      <div className="ns-card-regular-img-wrap">
        <img src={imageUrl} alt={`Imagen de la noticia: ${title}`} className="ns-card-img" />
        <div className="ns-card-overlay" />
        <div className="ns-card-top-line" />
      </div>
      <div className="ns-card-regular-body">
        <span className="ns-badge">{category}</span>
        <h3 className="ns-card-title ns-card-title--regular">{title}</h3>
        <p className="ns-card-excerpt ns-card-excerpt--sm">{excerpt}</p>
        <div className="ns-card-divider" />
        <div className="ns-card-meta">
          <span className="ns-card-author">{author}</span>
          <time className="ns-card-date" dateTime={date.toISOString()}>{formatDate(date)}</time>
        </div>
        <button className="ns-btn-read ns-btn-read--sm" aria-label={`Leer más sobre: ${title}`}>
          Leer más
          <svg className="ns-chevron" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
            fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>
      </div>
    </motion.article>
  )
}

/* ─────────────────────────────────────────
   NewsFilter
───────────────────────────────────────── */
const NewsFilter = ({ categories, activeCategory, onCategoryChange }) => (
  <div className="ns-filter">
    <span className="ns-filter-label">Filtrar por categoría</span>
    <div className="ns-filter-pills" role="group" aria-label="Filtros de categoría">
      {categories.map((cat) => (
        <button
          key={cat}
          className={`ns-filter-btn${activeCategory === cat ? ' ns-filter-btn--active' : ''}`}
          onClick={() => onCategoryChange(cat)}
          aria-pressed={activeCategory === cat}
        >
          {cat}
          
        </button>
      ))}
    </div>
  </div>
)

/* ─────────────────────────────────────────
   Página principal
───────────────────────────────────────── */
const Noticias = () => {
  const [activeCategory, setActiveCategory] = useState('Todas')
  const [loading, setLoading] = useState(false)

  const handleCategoryChange = (cat) => {
    if (cat === activeCategory) return
    setLoading(true)
    setActiveCategory(cat)
    setTimeout(() => setLoading(false), 300)
  }

  const filtered = activeCategory === 'Todas'
    ? newsData
    : newsData.filter((n) => n.category === activeCategory)

  const featured = filtered.filter((n) => n.featured)
  const regular  = filtered.filter((n) => !n.featured)

  return (
    <div className="ns-page">

      {/* ── Hero ── */}
      <motion.section
        className="ns-hero"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        aria-labelledby="noticias-title"
      >
        <p className="ns-hero-eyebrow">Hospital Nacional PNP "Luis N. Sáenz"</p>
        <h1 className="ns-hero-title" id="noticias-title">Noticias</h1>
        <div className="ns-hero-line" />
        <p className="ns-hero-sub">Mantente informado sobre las últimas novedades institucionales y de salud</p>
      </motion.section>

      {/* ── Contenido principal ── */}
      <main className="ns-main">

        {/* Filtros */}
        <NewsFilter
          categories={CATEGORIES}
          activeCategory={activeCategory}
          onCategoryChange={handleCategoryChange}
        />

        <AnimatePresence mode="wait">
          {loading ? (
            <motion.div
              key="skeletons"
              className="ns-grid ns-grid--regular"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {Array.from({ length: 6 }).map((_, i) => <NewsCardSkeleton key={i} />)}
            </motion.div>
          ) : filtered.length === 0 ? (
            <motion.div
              key="empty"
              className="ns-empty"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
            >
              <p>No hay noticias disponibles en esta categoría.</p>
            </motion.div>
          ) : (
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {/* Noticias destacadas */}
              {featured.length > 0 && (
                <section className="ns-section" aria-labelledby="featured-title">
                  <h2 className="ns-section-title" id="featured-title">Destacadas</h2>
                  <div className="ns-grid ns-grid--featured">
                    {featured.map((n, i) => (
                      <NewsCard key={n.id} index={i} {...n} />
                    ))}
                  </div>
                </section>
              )}

              {/* Noticias regulares */}
              {regular.length > 0 && (
                <section className="ns-section" aria-labelledby="regular-title">
                  <h2 className="ns-section-title" id="regular-title">Últimas noticias</h2>
                  <div className="ns-grid ns-grid--regular">
                    {regular.map((n, i) => (
                      <NewsCard key={n.id} index={i} {...n} />
                    ))}
                  </div>
                </section>
              )}

              {/* Cargar más */}
              <div className="ns-load-more">
                <button className="ns-btn-more">Cargar más noticias</button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </main>
    </div>
  )
}

export default Noticias