import { useParams, useNavigate, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { getNoticiaById } from './pages/index'
import './NoticiasDetalle.css'
 
const NoticiasDetalle = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  
  const noticia = getNoticiaById(id)
  
  if (!noticia) {
    return (
      <div className="nd-error-container">
        <motion.div 
          className="nd-error"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h2>Noticia no encontrada</h2>
          <p>Lo sentimos, la noticia que buscas no está disponible.</p>
          <Link to="/noticias" className="nd-back-link">
            ← Volver a noticias
          </Link>
        </motion.div>
      </div>
    )
  }

  const formatDate = (date) => 
    date.toLocaleDateString('es-ES', { 
      day: 'numeric', 
      month: 'long', 
      year: 'numeric' 
    })

  const ContentComponent = noticia.Content

  return (
    <motion.div 
      className="nd-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <article className="nd-article">
        {/* Botón volver */}
        <button onClick={() => navigate(-1)} className="nd-back-button">
          ← Volver
        </button>

        {/* Header */}
        <div className="nd-header">
          <span className="nd-category">{noticia.category}</span>
          <h1 className="nd-title">{noticia.title}</h1>
          <div className="nd-meta">
            <span className="nd-author">Por: {noticia.author}</span>
            <time className="nd-date">{formatDate(noticia.date)}</time>
          </div>
        </div>

        {/* Imagen destacada */}
        <div className="nd-image-container">
          <img 
            src={noticia.imageUrl} 
            alt={noticia.title}
            className="nd-image"
          />
        </div>

        {/* Contenido dinámico con formato único para cada noticia */}
        <div className="nd-content">
          <ContentComponent />
        </div>

        {/* Footer */}
        <div className="nd-footer">
          <Link to="/noticias" className="nd-more-link">
            Ver más noticias →
          </Link>
        </div>
      </article>
    </motion.div>
  )
}

export default NoticiasDetalle