// src/components/Noticias/pages/Noticia1.jsx
import React from 'react'

const Noticia3 = () => {
  return (
    <div className="nd-custom-content">
      <p className="nd-intro">
        Se inicia la implementación del protocolo de atención integral con nuevas medidas 
        orientadas a mejorar la calidad del servicio.
      </p>

      <div className="nd-highlight-box">
        <h3>📋 Puntos clave del nuevo protocolo</h3>
        <ul>
          <li>✅ Reducción de tiempos de espera en un 30%</li>
          <li>✅ Atención multidisciplinaria</li>
          <li>✅ Seguimiento personalizado por 30 días</li>
          <li>✅ Historia clínica digital unificada</li>
        </ul>
      </div>

      <h2>Nueva metodología de atención</h2>
      <p>
        El nuevo protocolo incluye un enfoque multidisciplinario que involucra a todas las áreas 
        del hospital. Los pacientes ahora serán evaluados por un equipo completo de especialistas.
      </p>

      <div className="nd-gallery">
        <img src="https://images.unsplash.com/photo-1576091160550-2173f7f869?w=400&h=300&fit=crop" alt="Protocolo" />
        <img src="https://images.unsplash.com/photo-1516549655169-df83a0774514?w=400&h=300&fit=crop" alt="Atención médica" />
      </div>

      <blockquote className="nd-quote">
        "Este es un paso importante hacia la modernización de nuestros servicios."
        <footer>- Dra. Ana María Rodríguez, Directora</footer>
      </blockquote>
    </div>
  )
}

export default Noticia3