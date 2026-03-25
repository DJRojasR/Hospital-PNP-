// src/components/Noticias/Noticias.jsx
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useNavigate } from 'react-router-dom' // 👈 Importar useNavigate
import { noticiasArray } from './pages/index' // 👈 Importar desde pages
import './Noticias.css'

const CATEGORIES = ['Todas', 'Institucionales', 'Salud', 'Eventos', 'Capacitación']

const formatDate = (date) =>
  date.toLocaleDateString('es-ES', { day: 'numeric', month: 'short', year: 'numeric' })

// Skeleton loader (igual)
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

// NewsCard modificado para incluir navegación
const NewsCard = ({ id, title, excerpt, imageUrl, date, category, author, featured = false, index = 0, onReadMore }) => {
  const handleReadMore = () => onReadMore(id)
  
  if (featured) {
    return (
      <motion.article
        className="ns-card ns-card--featured group"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.08 }}
        tabIndex={0}
        aria-label={title}
        onClick={handleReadMore}
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
          <button 
            className="ns-btn-read" 
            aria-label={`Leer más sobre: ${title}`}
            onClick={handleReadMore}
          >
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
      onClick={handleReadMore}
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
        <button 
          className="ns-btn-read ns-btn-read--sm" 
          aria-label={`Leer más sobre: ${title}`}
          onClick={handleReadMore}
        >
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

// NewsFilter (igual)
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

// Página principal modificada
const Noticias = () => {
  const [activeCategory, setActiveCategory] = useState('Todas')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate() // 👈 Hook de navegación

  const handleCategoryChange = (cat) => {
    if (cat === activeCategory) return
    setLoading(true)
    setActiveCategory(cat)
    setTimeout(() => setLoading(false), 300)
  }

  const handleReadMore = (newsId) => {
    navigate(`/noticia/${newsId}`) // 👈 Navegar al detalle
  }

  const filtered = activeCategory === 'Todas'
    ? noticiasArray  // 👈 Usar noticiasArray en lugar de newsData
    : noticiasArray.filter((n) => n.category === activeCategory)

  const featured = filtered.filter((n) => n.featured)
  const regular = filtered.filter((n) => !n.featured)

  return (
    <div className="ns-page">
      {/* Hero Section - igual */}
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

      {/* Contenido principal */}
      <main className="ns-main">
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
                      <NewsCard 
                        key={n.id} 
                        index={i} 
                        {...n} 
                        onReadMore={handleReadMore} // 👈 Pasar función
                      />
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
                      <NewsCard 
                        key={n.id} 
                        index={i} 
                        {...n} 
                        onReadMore={handleReadMore} // 👈 Pasar función
                      />
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