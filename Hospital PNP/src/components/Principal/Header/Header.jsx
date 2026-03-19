import React from 'react'
import { motion } from 'framer-motion'
import hospitalImg from '../../../assets/hospital.jpg'
import './Header.css'

const Header = () => {
  return (
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