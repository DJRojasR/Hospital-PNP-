import React from 'react'
import './styles/Noticias2.css'
import ImagenNot2 from '../../../assets/noticia2.jpg'

const Noticia2 = () => {
  return (
    <div className="nd-custom-content">
      
      {/* Introducción destacada */}
      <div className="bbc-intro-block">
        <p className="bbc-intro-text">
          💜✨ <strong>GRAN CAMPAÑA DE PREVENCIÓN: JUNTOS CONTRA EL CÁNCER DE CUELLO UTERINO</strong> ✨💜
        </p>
        <p className="bbc-intro-sub">
          En el marco del Día Mundial de la Prevención del Cáncer de Cuello Uterino, el Hospital Nacional PNP 
          Luis N. Sáenz realizó una exitosa jornada integral enfocada en la prevención, detección temprana y 
          concientización. Una enfermedad que puede salvar vidas si se detecta a tiempo.
        </p>
      </div>

      {/* Información clave */}
      <div className="bbc-key-info">
        <div className="bbc-key-item">
          <span className="bbc-key-label">📍 EVENTO</span>
          <span className="bbc-key-value">Campaña "Juntos Contra el Cáncer de Cuello Uterino"</span>
        </div>
        <div className="bbc-key-item">
          <span className="bbc-key-label">🏥 INSTITUCIÓN</span>
          <span className="bbc-key-value">Hospital Nacional PNP "Luis N. Sáenz"</span>
        </div>
        <div className="bbc-key-item">
          <span className="bbc-key-label">📅 FECHA</span>
          <span className="bbc-key-value">11 de marzo de 2026</span>
        </div>
      </div>

      {/* Contenido principal */}
      <div className="bbc-main-content">
        
        {/* Párrafo inicial destacado */}
        <p className="bbc-first-paragraph">
          Con una masiva participación de la familia policial y la comunidad en general, el Hospital Nacional 
          PNP "Luis N. Sáenz" reafirmó su compromiso con la salud preventiva, desplegando un completo operativo 
          médico que ofreció servicios gratuitos de tamizaje, vacunación y consejería especializada.
        </p>

        {/* Sección: Servicios destacados en formato grid */}
        <h2 className="bbc-section-title">Servicios gratuitos que salvan vidas</h2>
        <p>
          Durante esta importante jornada, se brindaron una amplia gama de servicios preventivos, permitiendo 
          que cientos de beneficiarios accedan a diagnósticos oportunos y herramientas de protección. Los 
          servicios ofrecidos incluyeron:
        </p>
        
        <div className="noticia2-services-grid">
          <div className="noticia2-service-card">
            <div className="noticia2-service-icon">🔬</div>
            <h3 className="noticia2-service-title">Tamizajes VPH</h3>
            <p className="noticia2-service-desc">Detección temprana del Virus del Papiloma Humano, principal causa del cáncer de cuello uterino</p>
          </div>
          <div className="noticia2-service-card">
            <div className="noticia2-service-icon">🩺</div>
            <h3 className="noticia2-service-title">Descarte de Cáncer de Próstata</h3>
            <p className="noticia2-service-desc">Prueba de PSA para la detección oportuna en varones</p>
          </div>
          <div className="noticia2-service-card">
            <div className="noticia2-service-icon">💉</div>
            <h3 className="noticia2-service-title">Vacunación Integral</h3>
            <p className="noticia2-service-desc">VPH, Hepatitis B, Tétanos y Fiebre Amarilla</p>
          </div>
          <div className="noticia2-service-card">
            <div className="noticia2-service-icon">🛡️</div>
            <h3 className="noticia2-service-title">Entrega de Preservativos</h3>
            <p className="noticia2-service-desc">Prevención de ITS y embarazos no planificados</p>
          </div>
          <div className="noticia2-service-card">
            <div className="noticia2-service-icon">💬</div>
            <h3 className="noticia2-service-title">Consejería Especializada</h3>
            <p className="noticia2-service-desc">Prevención de cáncer de cuello uterino y mama</p>
          </div>
        </div>

        {/* Cita destacada */}
        <div className="bbc-quote">
          <p className="bbc-quote-text">
            La prevención es nuestra mejor herramienta contra el cáncer de cuello uterino. Un diagnóstico oportuno 
            puede cambiar el rumbo de una vida y salvar familias enteras. Estamos comprometidos con acercar estos 
            servicios a nuestra familia policial.
          </p>
          <footer className="bbc-quote-footer">
            — <strong>CMDTE SPNP Ramírez López Vanessa</strong>, Jefa del Departamento de Ginecología
          </footer>
        </div>

        {/* Sección: Datos importantes sobre la enfermedad */}
        <h2 className="bbc-section-title">Datos que nos llaman a la acción</h2>
        
        <div className="noticia2-stats-container">
          <div className="noticia2-stat-card">
            <div className="noticia2-stat-number">+4,000</div>
            <div className="noticia2-stat-label">Mujeres diagnosticadas al año en Perú</div>
          </div>
          <div className="noticia2-stat-card">
            <div className="noticia2-stat-number">2°</div>
            <div className="noticia2-stat-label">Cáncer más frecuente en mujeres peruanas</div>
          </div>
          <div className="noticia2-stat-card">
            <div className="noticia2-stat-number">100%</div>
            <div className="noticia2-stat-label">Prevenible con vacunación y detección temprana</div>
          </div>
        </div>

        <p>
          Según el <strong>Ministerio de Salud</strong>, el cáncer de cuello uterino es el segundo cáncer más 
          frecuente en mujeres peruanas y representa una de las principales causas de muerte oncológica en el país. 
          Sin embargo, es una enfermedad <strong>altamente prevenible</strong> mediante la vacunación contra el VPH, 
          las pruebas de tamizaje y el tratamiento oportuno de lesiones precancerosas.
        </p>
        
        {/* ========== IMAGEN EN LA MITAD ========== */}
        <div className="noticia2-mid-image">
          <img 
            src={ImagenNot2} 
            alt="Jornada de vacunación y tamizaje durante la campaña preventiva"
            className="noticia2-mid-img"
          />
        </div>

        {/* Sección: Autoridades y organización */}
        <h2 className="bbc-section-title">Liderazgo y compromiso institucional</h2>
        
        <p>
          La jornada fue liderada por la <strong>CMDTE SPNP Ramírez López Vanessa</strong>, Jefa del Departamento 
          de Ginecología, y organizada por la <strong>CAP. SPNP Huaringa Carrión Stefany</strong>, reafirmando el 
          compromiso de nuestra institución con la salud de la familia policial.
        </p>

        <div className="noticia2-authorities-flex">
          <div className="noticia2-authority-card">
            <div className="noticia2-authority-rank">CMDTE SPNP</div>
            <div className="noticia2-authority-name">Ramírez López Vanessa</div>
            <div className="noticia2-authority-role">Jefa del Departamento de Ginecología</div>
          </div>
          <div className="noticia2-authority-card">
            <div className="noticia2-authority-rank">CAP. SPNP</div>
            <div className="noticia2-authority-name">Huaringa Carrión Stefany</div>
            <div className="noticia2-authority-role">Organizadora de la Campaña</div>
          </div>
        </div>

        {/* Sección: Beneficios y cobertura */}
        <h2 className="bbc-section-title">Cobertura y alcance de la jornada</h2>
        
        <p>
          La campaña benefició a más de <strong>300 personas entre mujeres y varones</strong> de la familia policial, 
          quienes accedieron gratuitamente a servicios que en condiciones habituales representan un costo significativo. 
          Se realizaron más de <strong>150 tamizajes de VPH</strong>, <strong>80 pruebas de PSA</strong> y se aplicaron 
          más de <strong>200 dosis de vacunas</strong> contra diversas enfermedades.
        </p>

        <p>
          Además, se entregaron más de <strong>500 preservativos</strong> y se brindó consejería personalizada a más 
          de <strong>100 asistentes</strong>, sensibilizando sobre la importancia del autoexamen, el control ginecológico 
          periódico y la vacunación contra el VPH como herramientas clave para una vida saludable.
        </p>

        {/* Box destacado */}
        <div className="bbc-highlight-box">
          <div className="bbc-highlight-icon">💜</div>
          <div className="bbc-highlight-content">
            <strong>Prevenir es vivir.</strong> Un diagnóstico a tiempo puede marcar la diferencia. 
            El Hospital Nacional PNP "Luis N. Sáenz" continuará impulsando estas campañas preventivas 
            para cuidar de tu salud y la de tu familia.
          </div>
        </div>

        {/* Sección: Próximas acciones */}
        <h2 className="bbc-section-title">Próximas campañas preventivas</h2>
        
        <p>
          El Departamento de Ginecología anunció que continuarán desarrollando este tipo de intervenciones 
          preventivas de manera periódica, con el objetivo de reducir la incidencia del cáncer de cuello uterino 
          y otras enfermedades en nuestra comunidad. Se invita a toda la familia policial a estar atenta a las 
          próximas convocatorias a través de los canales oficiales del hospital.
        </p>

        <p>
          Para más información, pueden acercarse al <strong>Departamento de Ginecología</strong> o comunicarse 
          a la central telefónica del hospital. ¡Tu salud es nuestra prioridad!
        </p>
      </div>

      {/* Footer con hashtags */}
      <div className="bbc-hashtags">
        <span className="bbc-hashtag">#JuntosContraElCáncerDeCuelloUterino</span>
        <span className="bbc-hashtag">#HospitalPNPLuisNSaenz</span>
        <span className="bbc-hashtag">#PrevenirEsVivir</span>
        <span className="bbc-hashtag">#SaludParaLaFamiliaPolicial</span>
        <span className="bbc-hashtag">#DetecciónTemprana</span>
        <span className="bbc-hashtag">#VacunaciónVPH</span>
        <span className="bbc-hashtag">#CompromisoInstitucional</span>
        <span className="bbc-hashtag">#MujeresQueCuidanMujeres</span>
      </div>
    </div>
  )
}

export default Noticia2