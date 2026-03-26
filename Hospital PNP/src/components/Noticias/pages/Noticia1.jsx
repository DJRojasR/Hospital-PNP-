import React from 'react'
import './styles/Noticias1.css'
import ImagenNot1 from '../../../assets/Noticias/noticia1.jpeg'

const Noticia1 = () => {
  return (
    <div className="nd-custom-content">
      
      {/* Introducción destacada */}
      <div className="bbc-intro-block">
        <p className="bbc-intro-text">
          💙✨ <strong>HOSPITAL NACIONAL PNP LUIS N. SÁENZ REALIZA EXITOSA CAMPAÑA QUIRÚRGICA EN BENEFICIO DE NUESTRA FAMILIA POLICIAL</strong>{' '} ✨💙
        </p>
        <p className="bbc-intro-sub">
          Se realizó con éxito una importante campaña quirúrgica donde se llevaron a cabo cerca de 35 procedimientos 
          en tres salas de operaciones en simultáneo, reduciendo significativamente la lista de espera.
        </p>
      </div>

      {/* Información clave */}
      <div className="bbc-key-info">
        <div className="bbc-key-item">
          <span className="bbc-key-label">📍 EVENTO</span>
          <span className="bbc-key-value">Campaña Quirúrgica Integral</span>
        </div>
        <div className="bbc-key-item">
          <span className="bbc-key-label">🏥 INSTITUCIÓN</span>
          <span className="bbc-key-value">Hospital Nacional PNP "Luis N. Sáenz"</span>
        </div>
        <div className="bbc-key-item">
          <span className="bbc-key-label">📊 PROCEDIMIENTOS</span>
          <span className="bbc-key-value">35 cirugías en 3 salas simultáneas</span>
        </div>
      </div>

      {/* Contenido principal */}
      <div className="bbc-main-content">
        
        {/* Párrafo inicial destacado */}
        <p className="bbc-first-paragraph">
          Con el firme compromiso de brindar una atención oportuna y de calidad a la familia policial, 
          el Hospital Nacional PNP "Luis N. Sáenz" llevó a cabo una exitosa campaña quirúrgica que permitió 
          realizar cerca de 35 procedimientos en tres salas de operaciones trabajando en simultáneo.
        </p>

        {/* Sección: Dirección y liderazgo */}
        <h2 className="bbc-section-title">Liderazgo institucional</h2>
        
        <p>
          Esta importante iniciativa fue liderada por la <strong>Dirección del hospital</strong>{' '}, bajo la conducción 
          del <strong>GRNL. S PNP Ricardo Jesús Tinoco Tejada</strong>{' '}, quien supervisó personalmente el desarrollo 
          de las intervenciones y reafirmó el compromiso de la institución con la salud de los efectivos policiales 
          y sus familias.
        </p>

        <div className="noticia1-director-card">
          <div className="noticia1-director-rank">GRNL. S PNP</div>
          <div className="noticia1-director-name">Ricardo Jesús Tinoco Tejada</div>
          <div className="noticia1-director-role">Director del Hospital Nacional PNP "Luis N. Sáenz"</div>
        </div>

        {/* Sección: Departamentos participantes en grid */}
        <h2 className="bbc-section-title">Un trabajo articulado que salva vidas</h2>
        
        <p>
          Gracias al trabajo articulado de los diferentes departamentos del hospital, se logró optimizar la 
          programación quirúrgica y reducir la lista de espera, garantizando una atención oportuna y de calidad 
          para nuestros pacientes. Los equipos participantes fueron:
        </p>
        
        <div className="noticia1-departments-grid">
          <div className="noticia1-department-card">
            <div className="noticia1-department-icon">🩻</div>
            <h3 className="noticia1-department-title">Departamento de Traumatología</h3>
            <p className="noticia1-department-leader">a cargo del <strong>CMDTE. S PNP Daniel Ponce De León Villanueva</strong>{' '}</p>
            <p className="noticia1-department-desc">Especialistas en cirugías ortopédicas y traumatológicas</p>
          </div>
          <div className="noticia1-department-card">
            <div className="noticia1-department-icon">🏥</div>
            <h3 className="noticia1-department-title">Centro Quirúrgico y Anestesiología</h3>
            <p className="noticia1-department-leader">liderado por la <strong>CMDTE. S PNP Rosario Margarita Carranza Gonzales</strong>{' '}</p>
            <p className="noticia1-department-desc">Garantizando la seguridad y bienestar de los pacientes durante las intervenciones</p>
          </div>
          <div className="noticia1-department-card">
            <div className="noticia1-department-icon">📋</div>
            <h3 className="noticia1-department-title">Área de MOPRI</h3>
            <p className="noticia1-department-leader">representada por la <strong>CMDTE. S PNP Yvette Sarella Nolte Pardo Figueroa</strong>{' '}</p>
            <p className="noticia1-department-desc">Coordinación y gestión de los procedimientos quirúrgicos</p>
          </div>
        </div>

        {/* ========== IMAGEN EN LA MITAD ========== */}
        <div className="noticia1-mid-image">
          <img 
            src={ImagenNot1} 
            alt="Campaña quirurgica en beneficio de nuestra familia policial"
            className="noticia1-mid-img"
          />
        </div>
        {/* Sección: Cobertura de la campaña */}

        <h2 className="bbc-section-title">Alcance y resultados de la campaña</h2>
        <p>
          La campaña quirúrgica permitió intervenir a pacientes con patologías de diversa complejidad, 
          entre las que destacan <strong>cirugías de rodilla, cadera, hombro, así como procedimientos de 
          artroscopía y colocación de prótesis</strong>{' '}. Gracias a la optimización de los recursos y la 
          coordinación entre los equipos médicos, se logró reducir en más de un 40% la lista de espera 
          acumulada en el departamento de Traumatología.
        </p>

        {/* Cita destacada */}
        <div className="bbc-quote">
          <p className="bbc-quote-text">
            Esta campaña quirúrgica demuestra que cuando trabajamos unidos con vocación de servicio, 
            podemos superar los desafíos y brindar una atención oportuna a quienes tanto lo necesitan. 
            Seguiremos impulsando estas iniciativas para el bienestar de nuestra familia policial.
          </p>
          <footer className="bbc-quote-footer">
            — <strong>GRNL. S PNP Ricardo Jesús Tinoco Tejada</strong>{' '}, Director del Hospital
          </footer>
        </div>
     

        {/* Sección: Beneficios para la familia policial */}
        <h2 className="bbc-section-title">Beneficios para nuestra familia policial</h2>
        
        <p>
          Esta campaña representó un alivio significativo para decenas de efectivos policiales y sus familiares 
          que se encontraban en espera de una intervención quirúrgica. Muchos de ellos habían postergado sus 
          cirugías debido a la alta demanda de atención, y gracias a esta iniciativa pudieron acceder a un 
          procedimiento oportuno que les permitirá retornar a sus actividades cotidianas y laborales.
        </p>

        <p>
          Los pacientes beneficiados expresaron su gratitud por la calidez humana y la calidad profesional 
          recibida, destacando la organización impecable y el acompañamiento durante todo el proceso pre y 
          postoperatorio.
        </p>

        {/* Box destacado */}
        <div className="bbc-highlight-box">
          <div className="bbc-highlight-icon">🏥</div>
          <div className="bbc-highlight-content">
            <strong>Seguimos comprometidos con una atención eficiente, continua y humana.</strong>{' '} 
            El Hospital Nacional PNP "Luis N. Sáenz" continuará desarrollando estas campañas quirúrgicas 
            con el objetivo de reducir progresivamente la lista de espera y garantizar el bienestar de 
            nuestra familia policial.
          </div>
        </div>

        {/* Sección: Próximas campañas */}
        <h2 className="bbc-section-title">Próximas iniciativas</h2>
        
        <p>
          La Dirección del hospital anunció que se continuarán realizando este tipo de campañas quirúrgicas 
          de manera periódica, ampliando la cobertura a otras especialidades como cirugía general, oftalmología 
          y urología. Se espera que para los próximos meses se realicen nuevas jornadas que permitan seguir 
          reduciendo los tiempos de espera y brindar una atención oportuna a todos los integrantes de la 
          familia policial.
        </p>

        <p>
          Para más información sobre las próximas campañas, los interesados pueden acercarse al <strong>Área de 
          MOPRI</strong>{' '} o comunicarse a los canales oficiales del hospital. ¡La salud de nuestra familia 
          policial es nuestra prioridad!
        </p>
      </div>

      {/* Footer con hashtags */}
      <div className="bbc-hashtags">
        <span className="bbc-hashtag">#CampañaQuirúrgica</span>
        <span className="bbc-hashtag">#HospitalPNPLuisNSaenz</span>
        <span className="bbc-hashtag">#SaludParaLaFamiliaPolicial</span>
        <span className="bbc-hashtag">#Traumatología</span>
        <span className="bbc-hashtag">#AtenciónOportuna</span>
        <span className="bbc-hashtag">#CompromisoInstitucional</span>
        <span className="bbc-hashtag">#ExcelenciaMédica</span>
        <span className="bbc-hashtag">#VocaciónDeServicio</span>
      </div>
    </div>
  )
}

export default Noticia1