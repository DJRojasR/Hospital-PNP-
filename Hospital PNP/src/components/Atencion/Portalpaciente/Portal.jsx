import React from 'react'
import './Portal.css'
import { MdImageSearch, MdAssignment, MdCalendarMonth } from 'react-icons/md'

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

        <div className="prox-badge">Próximamente</div>

        <h2 className="prox-titulo">Nuevas funciones en camino</h2>
        <p className="prox-subtitulo">
          Estamos trabajando para brindarte una experiencia digital completa.
          Muy pronto podrás acceder a:
        </p>

        <div className="prox-cards">
          {features.map((f, i) => (
            <div className="prox-card" key={f.id}>
              <div className="prox-card-icon">{f.icon}</div>
              <h3 className="prox-card-titulo">{f.titulo}</h3>
              <p className="prox-card-desc">{f.descripcion}</p>
              <span className="prox-card-tag">En desarrollo</span>
            </div>
          ))}
        </div>

        <div className="prox-footer-note">
          🔔 Esta funcionalidad estará disponible próximamente para pacientes del Hospital Nacional PNP "Luis N. Sáenz".
        </div>

      </div>
    </section>
  )
}

export default Portal