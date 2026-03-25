// src/components/Noticias/pages/Noticia5.jsx
import React from 'react'
import './styles/Noticias4.css'
import comida from '../../../assets/noticias/capacitacionC.jpeg'
import personal from '../../../assets/noticias/capacitacionP.jpeg'
const Noticia4 = () => {
  return (
    <div className="nd-custom-content">
      
      {/* Introducción destacada */}
      <div className="bbc-intro-block">
        <p className="bbc-intro-text">
          🎓🥗 <strong>NUTRICIÓN DEL HOSPITAL NACIONAL PNP LUIS N. SÁENZ REALIZA CURSO TALLER SOBRE DIETA DE ALTA Y SISTEMA DE INTERCAMBIO DE ALIMENTOS</strong> 🥗🎓
        </p>
        <p className="bbc-intro-sub">
          El Departamento de Nutrición impulsa la educación nutricional con capacitaciones gratuitas para fortalecer la atención integral de los pacientes.
        </p>
      </div>

      {/* Información clave */}
      <div className="bbc-key-info">
        <div className="bbc-key-item">
          <span className="bbc-key-label">📍 EVENTO</span>
          <span className="bbc-key-value">Curso Taller de Nutrición</span>
        </div>
        <div className="bbc-key-item">
          <span className="bbc-key-label">🏥 INSTITUCIÓN</span>
          <span className="bbc-key-value">Hospital Nacional PNP "Luis N. Sáenz"</span>
        </div>
        <div className="bbc-key-item">
          <span className="bbc-key-label">📅 FECHA</span>
          <span className="bbc-key-value">13 de marzo de 2026</span>
        </div>
      </div>

      {/* Contenido principal */}
      <div className="bbc-main-content">
        <h2 className="bbc-section-title">Capacitación integral para nutricionistas del hospital</h2>
        
        <p className="bbc-first-paragraph">
          El <strong>Departamento de Nutrición</strong>, a cargo de la <strong>señora CRNL S PNP Giulina del Castillo</strong>, 
          viene realizando hoy 13 de marzo, un importante curso taller presencial dirigido a nutricionistas del hospital, 
          como parte del plan no escolarizado, iniciando así una serie de capacitaciones dirigidas al personal de salud 
          de la Sanidad Policial, totalmente gratuitas.
        </p>

        <p>
          La actividad se desarrolla en el comedor de Nutrición del PIP 1, donde los participantes reciben capacitación 
          sobre <strong>"Dieta de Alta con lista de intercambio de alimentos"</strong>, en una jornada académica intensiva 
          que se extenderá durante todo el día.
        </p>

        <div className="bbc-gallery-item">
          <img src={comida} alt="Izamiento del Pabellón Nacional" />
        </div>
      
        <h2 className="bbc-section-title">Programa de capacitaciones 2026</h2>
        
        <p>
          Asimismo, se ha informado que a lo largo del año se realizarán <strong>cuatro cursos adicionales</strong>, 
          también dentro del plan no escolarizado, dirigidos al personal y familiares. Esta iniciativa busca fortalecer 
          los conocimientos en nutrición clínica y promover hábitos alimenticios saludables en toda la comunidad hospitalaria.
        </p>

        <h2 className="bbc-section-title">Metodología práctica y participativa</h2>
        
        <p>
          El evento incluye <strong>concursos de elaboración de dietas y mesas de alimentos</strong>, donde los participantes 
          ponen en práctica la teoría aprendida, fortaleciendo sus conocimientos de manera dinámica y participativa. 
          Esta metodología permite a los nutricionistas aplicar de forma inmediata los conceptos adquiridos.
        </p>

        <p>
          Este curso busca promover la <strong>educación nutricional posterior al alta del paciente</strong>, con el objetivo 
          de que las personas puedan mantener una alimentación saludable, práctica y equilibrada luego de salir del hospital, 
          utilizando herramientas como porciones o raciones de alimentos que faciliten su aplicación en la vida diaria.
        </p>

        {/* Box destacado */}
        <div className="bbc-highlight-box">
          <div className="bbc-highlight-icon">🥗</div>
          <div className="bbc-highlight-content">
            <strong>Herramientas prácticas para la vida diaria</strong>
            El sistema de intercambio de alimentos permite a los pacientes y familiares gestionar porciones y raciones 
            de manera sencilla, facilitando una alimentación equilibrada después del alta hospitalaria.
          </div>
        </div>

        <h2 className="bbc-section-title">Profesionales destacados</h2>
        
        <p>
          En la jornada participan destacados profesionales de la Sanidad Policial, quienes comparten sus conocimientos 
          y experiencias con los nutricionistas asistentes durante el desarrollo del curso taller:
        </p>

         <div className="bbc-gallery-item">
          <img src={personal} alt="Izamiento del Pabellón Nacional" />
        </div>

        <h2 className="bbc-section-title">Compromiso con la excelencia educativa</h2>
        
        <p>
          De esta manera, el <strong>Hospital Nacional PNP Luis N. Sáenz</strong> continúa fortaleciendo la capacitación 
          del personal de salud, promoviendo conocimientos que contribuyen a mejorar la calidad de atención y la educación 
          del paciente de nuestra gran familia policial.
        </p>

        <p>
          La institución reafirma su compromiso con la formación continua de sus profesionales, entendiendo que la 
          excelencia en el servicio se construye con conocimiento actualizado, práctica constante y dedicación al 
          bienestar de quienes confían en nuestra atención.
        </p>
      </div>

      {/* Hashtags */}
      <div className="bbc-hashtags">
        <span className="bbc-hashtag">#HospitalPNPLuisNSáenz</span>
        <span className="bbc-hashtag">#NutriciónPNP</span>
        <span className="bbc-hashtag">#CapacitaciónEnSalud</span>
        <span className="bbc-hashtag">#NutriciónClínica</span>
        <span className="bbc-hashtag">#EducaciónEnSalud</span>
        <span className="bbc-hashtag">#AlimentaciónSaludable</span>
        <span className="bbc-hashtag">#ConteoDeCarbohidratos</span>
        <span className="bbc-hashtag">#ProfesionalesDeLaSalud</span>
        <span className="bbc-hashtag">#Nutricionistas</span>
        <span className="bbc-hashtag">#SaludPNP</span>
      </div>

    </div>
  )
}

export default Noticia4