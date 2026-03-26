import React from 'react'
import './styles/Noticias4.css'
//import nefrologia from '../../../assets/noticias/nefrologia.jpeg'
import hemo from '../../../assets/noticias/rinonE.jpeg'
import nefro from '../../../assets/noticias/rinonP.jpeg'

const Noticia5 = () => {
  return (
    <div className="nd-custom-content">
      
      {/* Introducción destacada */}
      <div className="bbc-intro-block">
        <p className="bbc-intro-text">
          💜 <strong>DÍA MUNDIAL DEL RIÑÓN: CUIDAR TUS RIÑONES ES CUIDAR TU VIDA</strong>{' '} 💜
        </p>
        <p className="bbc-intro-sub">
          El Departamento de Nefrología del Hospital Nacional PNP Luis N. Sáenz realizó una jornada de concientización 
          para promover el cuidado de la salud renal y la prevención de enfermedades.
        </p>
      </div>

      {/* Información clave */}
      <div className="bbc-key-info">
        <div className="bbc-key-item">
          <span className="bbc-key-label">💜 EVENTO</span>
          <span className="bbc-key-value">Día Mundial del Riñón</span>
        </div>
        <div className="bbc-key-item">
          <span className="bbc-key-label">🏥 INSTITUCIÓN</span>
          <span className="bbc-key-value">Hospital Nacional PNP "Luis N. Sáenz"</span>
        </div>
        <div className="bbc-key-item">
          <span className="bbc-key-label">📅 FECHA</span>
          <span className="bbc-key-value">Segundo jueves de marzo</span>
        </div>
        <div className="bbc-key-item">
          <span className="bbc-key-label">👩‍⚕️ A CARGO</span>
          <span className="bbc-key-value">CMDTE. S PNP Natalie Córdova Villafuerte</span>
        </div>
      </div>

      {/* Contenido principal */}
      <div className="bbc-main-content">
        <h2 className="bbc-section-title">Jornada de concientización por la salud renal</h2>
        
        <p className="bbc-first-paragraph">
          En el marco del <strong>Día Mundial del Riñón</strong>{' '}, que se conmemora cada segundo jueves de marzo, 
          el <strong>Departamento de Nefrología</strong>{' '} del Hospital Nacional PNP Luis N. Sáenz, a cargo de la 
          <strong> CMDTE. S PNP Natalie Córdova Villafuerte</strong>{' '}, realizó una jornada de concientización orientada 
          a promover el cuidado de la salud renal y la prevención de enfermedades que muchas veces se detectan cuando 
          ya están en etapas avanzadas.
        </p>

        {/* Cita destacada */}
        <div className="bbc-quote">
          <p className="bbc-quote-text">
            La prevención es clave para reducir la incidencia de enfermedades renales. Debemos adoptar hábitos saludables 
            y realizar chequeos médicos periódicos, especialmente en personas con factores de riesgo.
          </p>
          <footer className="bbc-quote-footer">
            — <strong>CMDTE. S PNP Natalie Córdova Villafuerte</strong>{' '}, Jefa del Departamento de Nefrología
          </footer>
        </div>

        <h2 className="bbc-section-title">Ocho reglas para cuidar tus riñones</h2>
        
        <p>
          Durante la actividad, la <strong>CMDTE. S PNP Natalie Córdova Villafuerte</strong>{' '} destacó que la prevención 
          es fundamental, recomendando seguir las ocho reglas de cuidado del riñón:
        </p>

        {/* Lista de reglas */}
        <div className="bbc-rules-list">
          <div className="bbc-rules-grid">
            <div className="bbc-rule-item">✅ Mantenerse activo</div>
            <div className="bbc-rule-item">🥗 Llevar una alimentación saludable</div>
            <div className="bbc-rule-item">🩸 Controlar el azúcar en sangre</div>
            <div className="bbc-rule-item">❤️ Monitorear la presión arterial</div>
            <div className="bbc-rule-item">💧 Mantenerse hidratado</div>
            <div className="bbc-rule-item">🚭 No fumar</div>
            <div className="bbc-rule-item">💊 Evitar la automedicación</div>
            <div className="bbc-rule-item">🏥 Realizar chequeos médicos periódicos</div>
          </div>
        </div>

        <h2 className="bbc-section-title">Campaña de concientización integral</h2>
        
        <p>
          Asimismo, el <strong>Servicio de Hemodiálisis</strong>{' '} del Departamento de Nefrología desarrolló una 
          campaña de concientización dirigida a pacientes y al público en general, con la participación de especialistas 
          en nefrología, psicología y nutrición, quienes brindaron.
        </p>

        <div className="bbc-gallery-item">
          <img src={hemo} alt="Campaña de concientización en Hemodiálisis" />
        </div>

        <h2 className="bbc-section-title">Integración y estilo de vida activo</h2>
        
        <p>
          La jornada culminó con un momento de integración y actividad física junto a la 
          <strong> CMDTE. S PNP Natalie Córdova Villafuerte</strong>{' '}, el equipo del Departamento de Nefrología 
          y los asistentes, con un baile dirigido por <strong>Willie Obregón</strong>{' '}, promoviendo así un estilo 
          de vida activo y saludable.
        </p>

        <div className="bbc-gallery-item">
          <img src={nefro} alt="Actividad física con el equipo de Nefrología" />
        </div>

        {/* Box destacado */}
        <div className="bbc-highlight-box">
          <div className="bbc-highlight-icon">💧</div>
          <div className="bbc-highlight-content">
            <strong>Cuidar tus riñones hoy es asegurar tu salud mañana.</strong>{' '}
            La detección temprana y los hábitos saludables pueden marcar la diferencia en la calidad de vida 
            de las personas con enfermedades renales.
          </div>
        </div>

        <h2 className="bbc-section-title">Compromiso con la salud de la familia policial</h2>
        
        <p>
          De esta manera, el <strong>Hospital Nacional PNP Luis N. Sáenz</strong>{' '} reafirma su compromiso con 
          la prevención y el cuidado de la salud de toda la familia policial, promoviendo espacios de educación, 
          concientización y atención integral que contribuyen al bienestar de quienes dedican su vida al servicio del país.
        </p>

        <p>
          La institución continuará desarrollando actividades que fortalezcan la cultura de prevención y el 
          autocuidado, entendiendo que la salud renal es fundamental para una vida plena y activa.
        </p>
      </div>

      {/* Hashtags */}
      <div className="bbc-hashtags">
        <span className="bbc-hashtag">#DiaMundialDelRiñon</span>
        <span className="bbc-hashtag">#SaludRenal</span>
        <span className="bbc-hashtag">#CuidemosNuestrosRiñones</span>
        <span className="bbc-hashtag">#PrevenciónEsSalud</span>
        <span className="bbc-hashtag">#HospitalNacionalPNP</span>
        <span className="bbc-hashtag">#HNPNPLuisNSaenz</span>
        <span className="bbc-hashtag">#PoliciaNacionalDelPeru</span>
        <span className="bbc-hashtag">#Nefrologia</span>
        <span className="bbc-hashtag">#Hemodialisis</span>
        <span className="bbc-hashtag">#TuSaludNuestroCompromiso</span>
        <span className="bbc-hashtag">#VidaSaludable</span>
      </div>

    </div>
  )
}

export default Noticia5