// src/components/Noticias/pages/Noticia4.jsx
import React from 'react'

const Noticia3 = () => {
  return (
    <div className="nd-custom-content">
      
      {/* Introducción destacada */}
      <div className="bbc-intro-block">
        <p className="bbc-intro-text">
          🇵🇪✨ <strong>HOSPITAL NACIONAL PNP LUIS N. SÁENZ: LUNES PATRIÓTICO QUE FORTALECE NUESTRO ESPÍRITU INSTITUCIONAL</strong> ✨🇵🇪
        </p>
        <p className="bbc-intro-sub">
          El nosocomio reafirma su compromiso con los valores de civismo, identidad nacional y servicio a la familia policial.
        </p>
      </div>

      {/* Información clave en formato BBC */}
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
          <span className="bbc-key-value">Ceremonia mensual de civismo</span>
        </div>
      </div>

      {/* Contenido principal con estilo BBC */}
      <div className="bbc-main-content">
        <h2 className="bbc-section-title">Ceremonia que fortalece el espíritu institucional</h2>
        
        <p className="bbc-first-paragraph">
          El Hospital Nacional PNP "Luis N. Sáenz" llevó a cabo con solemnidad la Ceremonia del Lunes Patriótico, 
          reafirmando los valores de civismo, identidad nacional y compromiso institucional que nos distinguen 
          como familia policial.
        </p>

        <p>
          En esta significativa jornada, el <strong>Departamento de Cardiología</strong>, bajo la dirección del 
          <strong>CMDTE S PNP Arnaldo Wagner Geldres Echevarria</strong>, tuvo el honor de realizar el izamiento 
          del Pabellón Nacional, símbolo máximo de nuestra identidad y unidad como nación.
        </p>

        {/* Cita destacada */}
        <div className="bbc-quote">
          <div className="bbc-quote-icon">"</div>
          <p className="bbc-quote-text">
            El Día del Cardiólogo Peruano nos recuerda la invaluable labor de estos especialistas en el cuidado 
            del corazón y la preservación de la vida de nuestros pacientes.
          </p>
          <footer className="bbc-quote-footer">
            — <strong>MAY. S PNP Leonardo Rafael Ezaine Ramírez</strong>, durante su discurso de honor
          </footer>
        </div>

        <h2 className="bbc-section-title">Reconocimiento a la labor médica</h2>
        
        <p>
          El <strong>MAY. S PNP Leonardo Rafael Ezaine Ramírez</strong> tuvo a su cargo la lectura del discurso 
          de honor, el cual estuvo dedicado al <strong>Día del Cardiólogo Peruano</strong>. En sus palabras, 
          destacó la invaluable y abnegada labor que cumplen estos especialistas en el cuidado del corazón y la 
          preservación de la vida de nuestros pacientes.
        </p>

        <p>
          Resaltó su permanente compromiso con la excelencia médica, la ética profesional y el servicio dedicado 
          a la familia policial, elementos fundamentales que distinguen al equipo de salud de esta prestigiosa 
          institución.
        </p>

        {/* Galería de imágenes (placeholder) */}
        <div className="bbc-gallery">
          <div className="bbc-gallery-title">📸 Galería de la Ceremonia</div>
          <div className="bbc-gallery-grid">
            <div className="bbc-gallery-item">
              <div className="bbc-gallery-placeholder">
                <span>🏥</span>
                <p>Izamiento del Pabellón Nacional</p>
              </div>
            </div>
            <div className="bbc-gallery-item">
              <div className="bbc-gallery-placeholder">
                <span>🎖️</span>
                <p>Entrega de reconocimientos</p>
              </div>
            </div>
            <div className="bbc-gallery-item">
              <div className="bbc-gallery-placeholder">
                <span>👥</span>
                <p>Autoridades presentes</p>
              </div>
            </div>
          </div>
          <p className="bbc-gallery-caption">
            Momentos destacados de la Ceremonia del Lunes Patriótico en el Hospital Nacional PNP "Luis N. Sáenz"
          </p>
        </div>

        <h2 className="bbc-section-title">Autoridades que presidieron la ceremonia</h2>
        
        <p>
          La ceremonia fue presidida por el <strong>señor GRAL. S PNP Ricardo Jesús Tinoco Tejada</strong>, 
          Director del Hospital, acompañado por el <strong>CRNL. S PNP Edwin Infantes Vilca</strong>, Secretario 
          del nosocomio, y el <strong>CNRL. S PNP David Zarate Gamarra</strong>, Jefe de la Oficina de Administración.
        </p>

        {/* Tabla de autoridades */}
        <div className="bbc-authorities">
          <h3 className="bbc-authorities-title">Autoridades presentes</h3>
          <div className="bbc-authorities-grid">
            <div className="bbc-authority-card">
              <div className="bbc-authority-rank">GRAL. S PNP</div>
              <div className="bbc-authority-name">Ricardo Jesús Tinoco Tejada</div>
              <div className="bbc-authority-role">Director del Hospital</div>
            </div>
            <div className="bbc-authority-card">
              <div className="bbc-authority-rank">CRNL. S PNP</div>
              <div className="bbc-authority-name">Edwin Infantes Vilca</div>
              <div className="bbc-authority-role">Secretario del nosocomio</div>
            </div>
            <div className="bbc-authority-card">
              <div className="bbc-authority-rank">CNRL. S PNP</div>
              <div className="bbc-authority-name">David Zarate Gamarra</div>
              <div className="bbc-authority-role">Jefe de Administración</div>
            </div>
          </div>
        </div>

        <h2 className="bbc-section-title">Reconocimientos y compromiso institucional</h2>
        
        <p>
          Durante la ceremonia, se realizó la entrega de reconocimientos a los <strong>policías del mes</strong>, 
          quienes sobresalieron por su destacada labor y compromiso con la institución y la comunidad. Este gesto 
          reafirma el valor que el hospital otorga a la excelencia y dedicación de su personal.
        </p>

        <div className="bbc-highlight-box">
          <div className="bbc-highlight-icon">🇵🇪</div>
          <div className="bbc-highlight-content">
            <strong>Un acto patriótico que renueva nuestro compromiso</strong> de servir con excelencia 
            a la familia policial y a la patria.
          </div>
        </div>

        <p>
          El Lunes Patriótico se consolida como una tradición que fortalece el espíritu institucional y 
          reafirma la identidad de todos los que forman parte de esta gran familia policial. Un momento 
          para reflexionar sobre el servicio, la vocación y el compromiso con el bienestar de quienes 
          entregan su vida a la seguridad del país.
        </p>
      </div>

      {/* Footer con hashtags */}
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

export default Noticia3