import React from 'react'
import { motion } from 'framer-motion'
import './Cuadrodehonor.css'
import presidente from '../../../assets/presidente.jpeg'
import ministrointerior from '../../../assets/ministrointer.jpg'
import comandantegeneral from '../../../assets/comandantegeneral.jpg'
import directorsanidad from '../../../assets/directorsani.jpg'
import subdirectorsanidad from '../../../assets/subdirecsani.jpg'
import directorhospital from '../../../assets/direchosp.jpg'

/* ─────────────────────────────────────────
   Componente reutilizable HonorCard
   Cambia src por la ruta real de cada foto
───────────────────────────────────────── */
const HonorCard = ({ src, name, role, featured = false, index = 0 }) => (
  <motion.article
    className={`hc-card${featured ? ' hc-card--featured' : ''}`}
    initial={{ opacity: 0, y: 32 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-60px' }}
    transition={{ duration: 0.55, ease: 'easeOut', delay: index * 0.1 }}
    aria-label={`${name}, ${role}`}
  >
    <div className="hc-card-top-line" />
    <div className="hc-image-wrapper">
      <img
        src={src || '/assets/honor/placeholder.jpg'}
        alt={`Fotografía oficial de ${name}`}
        className="hc-image"
      />
    </div>
    <div className="hc-info">
      <p className="hc-name">{name}</p>
      <p className="hc-role">{role}</p>
    </div>
  </motion.article>
)

/* ─────────────────────────────────────────
   Datos — reemplaza src y nombres reales
───────────────────────────────────────── */
const autoridadesNacionales = [
  { src: presidente,  name: 'José María Balcázar Zelada',           role: 'Presidente de la República' },
  { src: ministrointerior,    name: 'Hugo Alberto Begazo de Bedoya',             role: 'Ministro del Interior' },
]

const comandanciaGeneral = [
  { src: comandantegeneral,  name: 'Oscar Manuel Arriola Delgado',   role: 'Comandante General de la PNP' },
]

const direccionHospital = [
  { src: directorsanidad,  name: 'Jorge Alberto Villacorta Ruiz\nGeneral Médico SPNP',            role: 'DIRECTOR DE SANIDAD POLICIAL' },
  { src: subdirectorsanidad, name: 'Moisés Salvador Rojas Arcos\nGeneral Médico SPNP',          role: 'SUB DIRECTOR SANIDAD POLICIAL ' },
  { src: directorhospital,       name: 'Ricardo Jesus Tinoco Tejada\nGeneral Médico SPNP',        role: 'DIRECTOR DEL HOSPITAL NACIONAL PNP «LUIS N. SÁENZ» ' },
]

/* ─────────────────────────────────────────
   Separador de sección
───────────────────────────────────────── */
const SectionHeading = ({ label }) => (
  <motion.div
    className="ch-section-heading"
    initial={{ opacity: 0, y: 16 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
  >
    <span className="ch-section-label">{label}</span>
    <div className="ch-section-line" />
  </motion.div>
)

/* ─────────────────────────────────────────
   Página principal
───────────────────────────────────────── */
const Cuadrodehonor = () => (
  <div className="ch-page">

    {/* ── Hero ── */}
    <motion.header
      className="ch-hero"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
    >
      <motion.p
        className="ch-hero-eyebrow"
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.15 }}
      >
        Hospital Nacional PNP "Luis N. Sáenz"
      </motion.p>
      <motion.h1
        className="ch-hero-title"
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.25 }}
      >
        Cuadro de Honor
      </motion.h1>
      <motion.div
        className="ch-hero-line"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.7, delay: 0.45, ease: 'easeOut' }}
      />
        <p className="ch-hero-lema">
        Autoridades comprometidas con la salud y bienestar del personal policial y sus familias
        </p>

    </motion.header>

    {/* ── Cuerpo ── */}
    <main className="ch-body">

      {/* Autoridades Nacionales */}
      <section className="ch-section" aria-labelledby="autoridades-title">
        <SectionHeading label="Autoridades Nacionales" />
        <div className="ch-grid ch-grid--3">
          {autoridadesNacionales.map((p, i) => (
            <HonorCard key={i} index={i} {...p} />
          ))}
        </div>
      </section>

      {/* Comandancia General — destacada */}
      <section className="ch-section" aria-labelledby="comandancia-title">
        <SectionHeading label="Comandancia General de la Policía Nacional del Perú" />
        <div className="ch-grid ch-grid--1">
          {comandanciaGeneral.map((p, i) => (
            <HonorCard key={i} index={i}  {...p} />
          ))}
        </div>
      </section>

      {/* Dirección del Hospital */}
      <section className="ch-section" aria-labelledby="hospital-title">
        <SectionHeading label="Dirección del Hospital" />
        <div className="ch-grid ch-grid--4">
          {direccionHospital.map((p, i) => (
            <HonorCard key={i} index={i} {...p} />
          ))}
        </div>
      </section>

    </main>
  </div>
)

export default Cuadrodehonor