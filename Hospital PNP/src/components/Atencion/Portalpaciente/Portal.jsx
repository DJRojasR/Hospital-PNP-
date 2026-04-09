import React from 'react'
import './Portal.css'
import { MdImageSearch, MdAssignment, MdCalendarMonth } from 'react-icons/md'
import { motion } from 'framer-motion'

const features = [
  {
    id:1,
    icon: <MdImageSearch size={32} />,
    titulo: 'Diagnóstico por Imágenes',
    descripcion: 'Accede a tus resultados de radiografías, ecografías, tomografías y más desde cualquier lugar.',
  },
  {
    id:2,
    icon: <MdAssignment size={32} />,
    titulo: 'Resultados',
    descripcion: 'Consulta tus análisis clínicos y reportes médicos de forma rápida y segura.',
  },
  {
    id:3,
    icon: <MdCalendarMonth size={32} />,
    titulo: 'Próximas Citas',
    descripcion: 'Revisa y gestiona tus citas médicas programadas en un solo lugar.',
  },
]

const Portal = () => {
  return (
    <section className="prox-section">
      <div className="prox-container">

        {/* Animación del header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="prox-badge">Próximamente</div>

          <h2 className="prox-titulo">Nuevas funciones en camino</h2>
          <p className="prox-subtitulo">
            Estamos trabajando para brindarte una experiencia digital completa.
            Muy pronto podrás acceder a:
          </p>
        </motion.div>

        {/* Cards animadas */}
        <div className="prox-cards">
          {features.map((f, index) => (
            <motion.div
              className="prox-card"
              key={f.id}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: index * 0.1,
                duration: 0.5,
                ease: 'easeOut'
              }}
            >
              <div className="prox-card-icon">{f.icon}</div>
              <h3 className="prox-card-titulo">{f.titulo}</h3>
              <p className="prox-card-desc">{f.descripcion}</p>
              <span className="prox-card-tag">En desarrollo</span>
            </motion.div>
          ))}
        </div>

        {/* Footer animado */}
        <motion.div
          className="prox-footer-note"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          🔔 Esta funcionalidad estará disponible próximamente para pacientes del Hospital Nacional PNP "Luis N. Sáenz".
        </motion.div>

      </div>
    </section>
  )
}

export default Portal