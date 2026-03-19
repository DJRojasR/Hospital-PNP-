import React from 'react'
import { motion } from 'framer-motion'
import hospitalImg from '../../../assets/hospital.jpg'
import './Header.css'

const Header = () => {
  return (
    // sección principal del header
    <section className="header">
      <div className="header-container">

        {/* ── LADO IZQUIERDO: información del hospital ── */}
        <motion.div
          className="header-info"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: 'easeInOut' }}
        >
          <h1 className="header-title">
            Hospital Nacional PNP <br />
            <span>"Luis N. Sáenz"</span>
          </h1>

          <p className="header-description">
            Brindamos atención integral ambulatoria y hospitalaria especializada
            al personal de la Policía Nacional del Perú y sus familiares,
            con humanismo, calidad e innovación.
          </p>

          {/* datos de contacto */}
          <ul className="header-contact">
            <li>
              <span className="contact-label">Dirección:</span>
              Av. Brasil Cdra. 26 s/n, Jesús María, Lima
            </li>
            <li>
              <span className="contact-label">Emergencias:</span>
              24 horas / 7 días
            </li>
            <li>
              <span className="contact-label">Consultorios:</span>
              Lunes a Viernes, 8:00 am – 4:00 pm
            </li>
          </ul>

          {/* mapa de Google Maps embebido */}
          <div className="header-map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3901.3928773336593!2d-77.0619570252795!3d-12.085234142617544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c900e56f255d%3A0xa651cc66d9dfdc35!2sHospital%20Nacional%20PNP%20Luis%20N.%20S%C3%A1enz!5e0!3m2!1ses-419!2spe!4v1773855099875!5m2!1ses-419!2spe"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación Hospital PNP"
            />
          </div>
        </motion.div>

        {/* ── LADO DERECHO: imagen del hospital ── */}
        <motion.div
          className="header-image-wrapper"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: 'easeInOut' }}
        >
          <img
            src={hospitalImg}
            alt="Hospital Nacional PNP Luis N. Sáenz"
            className="header-image"
          />
        </motion.div>

      </div>
    </section>
  )
}

export default Header