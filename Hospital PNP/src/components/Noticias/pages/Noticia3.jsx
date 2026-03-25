// src/components/Noticias/pages/Noticia4.jsx
import React from 'react'
import './styles/Noticias3.css'
import autoridades from '../../../assets/Noticias/ceremoniaAutoridades.jpeg'
import ganadores from '../../../assets/Noticias/ceremoniaPremios.jpeg'

const Noticia4 = () => {
  return (
    <div className="nd-custom-content">
      
      {/* Introducción destacada */}
      <div className="bbc-intro-block">
        <p className="bbc-intro-text">
          ✨ <strong> HOSPITAL NACIONAL PNP LUIS N. SÁENZ: LUNES PATRIÓTICO QUE FORTALECE NUESTRO ESPÍRITU INSTITUCIONAL</strong> ✨
        </p>
        <p className="bbc-intro-sub">
          El nosocomio reafirma su compromiso con los valores de civismo, identidad nacional y servicio a la familia policial.
        </p>
      </div>

      {/* Información clave */}
      <div className="bbc-key-info">
        <div className="bbc-key-item">
          <span className="bbc-key-label">📍 EVENTO</span>
          <span className="bbc-key-value">Ceremonia del Lunes Patriótico</span>
        </div>
        <div className="bbc-key-item">
          <span className="bbc-key-label">🏥 INSTITUCIÓN</span>
          <span className="bbc-key-value">Hospital Nacional PNP "Luis N. Sáenz"</span>
        </div>
        <div className="bbc-key-item">
          <span className="bbc-key-label">📅 FECHA</span>
          <span className="bbc-key-value">2 de marzo de 2026</span>
        </div>
      </div>

      {/* Contenido principal */}
      <div className="bbc-main-content">
        <h2 className="bbc-section-title">Ceremonia que fortalece el espíritu institucional</h2>
        
        <p className="bbc-first-paragraph">
          El Hospital Nacional PNP "Luis N. Sáenz" llevó a cabo con solemnidad la Ceremonia del Lunes Patriótico, 
          reafirmando los valores de civismo, identidad nacional y compromiso institucional que distinguen 
          a la familia policial.
        </p>

        <p>
          Durante esta significativa jornada, se realizó el izamiento del Pabellón Nacional, símbolo de unidad 
          y orgullo patrio, en un acto que reunió a autoridades, personal de salud y colaboradores del nosocomio.
        </p>

        {/* Cita destacada */}
        <div className="bbc-quote">
          <div className="bbc-quote-icon">"</div>
          <p className="bbc-quote-text">
            Mantener vivos los valores institucionales y la vocación de servicio es fundamental para fortalecer 
            nuestro compromiso con la familia policial y la patria.
          </p>
          <footer className="bbc-quote-footer">
            — MAY. S PNP Leonardo Rafael Ezaine Ramírez, discurso de honor
          </footer>
        </div>

        <h2 className="bbc-section-title">Participación de autoridades</h2>
        
        <p>
          La ceremonia fue presidida por el señor GRAL. S PNP Ricardo Jesús Tinoco Tejada, Director del Hospital, 
          acompañado por el CRNL. S PNP Edwin Infantes Vilca, Secretario del nosocomio, y el CNRL. S PNP David Zárate Gamarra, 
          Jefe de la Oficina de Administración.
        </p>

        {/* Galería de imágenes */}
        <div className="bbc-gallery">
          <div className="bbc-gallery-grid">
            <div className="bbc-gallery-item">
              <img src={autoridades} alt="Izamiento del Pabellón Nacional" />
            </div>

          </div>
          <p className="bbc-gallery-caption">
            Momentos destacados de la Ceremonia del Lunes Patriótico en el Hospital Nacional PNP "Luis N. Sáenz"
          </p>
        </div>

        <h2 className="bbc-section-title">Reconocimientos institucionales</h2>
        
        <p>
          Durante la ceremonia, se realizó la entrega de reconocimientos a los policías del mes, quienes destacaron 
          por su dedicación, responsabilidad y compromiso en el cumplimiento de sus funciones.
        </p>

        {/* Autoridades */}
        <div className="bbc-authorities">
          <div className="bbc-gallery-item">
              <img src={ganadores} alt="Izamiento del Pabellón Nacional" />
          </div>
        </div>
        <p>
          El Lunes Patriótico se consolida como una tradición que fortalece el espíritu institucional y reafirma 
          la identidad de todos los integrantes del hospital, promoviendo la unión, el respeto y la vocación de servicio.
        </p>
      </div>

      {/* Hashtags */}
      <div className="bbc-hashtags">
        <span className="bbc-hashtag">#LunesPatriótico</span>
        <span className="bbc-hashtag">#HospitalPNPLuisNSaenz</span>
        <span className="bbc-hashtag">#OrgulloInstitucional</span>
        <span className="bbc-hashtag">#VocaciónDeServicio</span>
        <span className="bbc-hashtag">#FamiliaPolicial</span>
        <span className="bbc-hashtag">#CompromisoYExcelencia</span>
      </div>

    </div>
  )
}

export default Noticia4