import React from 'react'
import { motion } from 'framer-motion'
import './Mision.css'
import ministerio from '../../../assets/ministeriodelinterior.png'
import policia from '../../../assets/policiaperuana.png'
import ministeriosa from '../../../assets/ministeriodesalud.png'
import susalud from '../../../assets/susalud.png'
import saludpol from '../../../assets/saludpol.png'
import dirsapol from '../../../assets/dirsapol.png'
import director from '../../../assets/Director.jpg'

const logos = [
  { src: ministerio, alt: 'Ministerio del Interior' },
  { src: policia, alt: 'Policía Peruana' },
  { src: ministeriosa, alt: 'Ministerio de Salud' },
  { src: susalud, alt: 'SUSALUD' },
  { src: saludpol, alt: 'Saludpol' },
  { src: dirsapol, alt: 'DIRSAPOL' },
]

const Mision = () => {
  const track = [...logos, ...logos] // duplicado para loop continuo

  
  return (
    <>
    <div className="director-container">
              {/* foto del director */}
              <motion.img   initial={{ opacity: 0, y: -24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: 'easeOut' }} src={director} alt="Director del hospital" className="foto-director"/>
      
              {/* mensaje del director */}
              <div className="director-descripcion">
      
                <motion.h2  initial={{ opacity: 0, y: -24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: 'easeOut' }} className="director-titulo">
                  Mensaje del Director
                </motion.h2>
                
                <motion.div  initial={{ opacity: 0, y: -24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, ease: 'easeOut' }}>
                  <p>Un cordial saludo para todos los miembros de la familia policial, en mi calidad de Director del Hospital Nacional PNP "Luis N. Saenz", heredero de una noble tradición de servicio y atención integral orientada a la necesidad de los pacientes y como hospital de referencia de alta calidad y abierto a las innovaciones, es de mi agrado darles la bienvenida a nuestro nuevo sitio web.</p>
                  <p>En este sitio podrán acceder a los servicios en línea y contar con la información oportuna sobre los procedimientos para su atención médica. Asimismo, conocer sobre las últimas noticias y eventos respecto a nuestro recinto hospitalario.</p>
                  <p>Sirvan estas palabras para expresar mi agradecimiento por visitar nuestro sitio web y con mucho entusiasmo esperamos que este sea un canal que nos permita conectar con ustedes y mantenerlos al tanto de los avances que el hospital va alcanzando día a día.</p>

                  {/* firma del director — cada línea separada con <br/> */}
                  <p className="director-firma">
                    Ricardo Jesús TINOCO TEJADA <br />
                    General Médico SPNP <br />
                    Director del Hospital Nacional PNP «Luis N. Sáenz»
                  </p>
                </motion.div>
               
              </div>
      
      </div>

      <div className="mv-page">
        <section className="mv-section">
          <div className="mv-container">
 
        {/* Encabezado de sección */}
        <motion.div
          className="mv-header"
          initial={{ opacity: 0, y: -24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <h1 className="mv-title">Misión y Visión</h1>
        </motion.div>
 
        {/* Tarjetas */}
        <div className="mv-grid">
 
          {/* Tarjeta Misión */}
          <motion.div
            className="mv-card"
            custom={0}
            initial="hidden"
            animate="visible"
            
          >
            
            <div className="mv-card-body">
              <h2 className="mv-card-title">Misión</h2>
              <p className="mv-card-text">
                El Hospital Nacional PNP Luís N. Sáenz PNP tiene por misión brindar atención integral
                ambulatoria y hospitalaria especializada, con énfasis en las actividades de recuperación
                y rehabilitación de la salud al personal de la Policía Nacional del Perú y sus familiares
                con derecho, con proyección a la comunidad, articulando sus actividades especializadas de
                salud con las Redes y Regiones PNP mediante el Sistema de Referencia y Contra-referencia,
                cumple sus funciones con humanismo, calidad, creatividad e innovación.
              </p>
            </div>
            <div className="mv-card-accent" />
          </motion.div>
 
          {/* Tarjeta Visión */}
          <motion.div
            className="mv-card mv-card--vision"
            custom={1}
            initial="hidden"
            animate="visible"
          >
            <div className="mv-card-body">
              <h2 className="mv-card-title">Visión</h2>
              <p className="mv-card-text">
                Ser un Hospital de Categoría III-1, acreditado, líder y de referencia nacional, que brinde
                atención integral humanista con personal altamente calificado, tecnología sanitaria innovadora
                y altos estándares de calidad.
              </p>
            </div>
            <div className="mv-card-accent" />
          </motion.div>
 
        </div>
      </div>
    </section>
    {/* Barra de logos institucionales */}
      <div className="logobar">
        <span className="logobar-label">Instituciones vinculadas</span>
        <div className="logobar-viewport">
          <div className="logobar-track">
            {track.map((logo, i) => (
              <div className="logobar-item" key={i}>
                <img src={logo.src} alt={logo.alt} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
    
    </>
    
  )
}
export default Mision


