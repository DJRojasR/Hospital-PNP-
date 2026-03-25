// src/components/Noticias/pages/Noticia2.jsx
import React from 'react'

const Noticia2 = () => {
  return (
    <div className="nd-custom-content">
      <div className="nd-stats-grid">
        <div className="nd-stat-card">
          <div className="nd-stat-number">500+</div>
          <div className="nd-stat-label">Efectivos atendidos</div>
        </div>
        <div className="nd-stat-card">
          <div className="nd-stat-number">80%</div>
          <div className="nd-stat-label">Reducción de riesgos</div>
        </div>
        <div className="nd-stat-card">
          <div className="nd-stat-number">15</div>
          <div className="nd-stat-label">Especialistas</div>
        </div>
      </div>

      <h2>Servicios incluidos en la campaña</h2>
      <div className="nd-services-list">
        <div className="nd-service-item">
          <span className="nd-service-icon">❤️</span>
          <div>
            <h4>Electrocardiogramas</h4>
            <p>Gratuitos para todo el personal</p>
          </div>
        </div>
        <div className="nd-service-item">
          <span className="nd-service-icon">🩺</span>
          <div>
            <h4>Evaluación cardiovascular</h4>
            <p>Factores de riesgo personalizados</p>
          </div>
        </div>
      </div>

      <div className="nd-info-box">
        <h3>📅 Horarios de atención</h3>
        <p><strong>Viernes:</strong> 8:00 - 12:00 horas</p>
        <p><strong>Lugar:</strong> Área de Cardiología, 2do piso</p>
        <p><strong>Requisitos:</strong> DNI y carnet policial</p>
      </div>
    </div>
  )
}

export default Noticia2