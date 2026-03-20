import React from 'react'
import { motion } from 'framer-motion'
import { useState } from 'react'
import './Especialidades.css'
 
// especialidades agrupadas por categoría
const categorias = [
  {
    id: 1,
    nombre: 'Especialidades Médicas',
    especialidades: [
      { id: 1,  icon: '❤️',  nombre: 'Cardiología',              descripcion: 'Diagnóstico y tratamiento de enfermedades del corazón.' },
      { id: 2,  icon: '🧠',  nombre: 'Neurología',               descripcion: 'Atención de trastornos del sistema nervioso.' },
      { id: 3,  icon: '🧴',  nombre: 'Dermatología',             descripcion: 'Tratamiento de enfermedades de la piel.' },
      { id: 4,  icon: '⚖️',  nombre: 'Endocrinología',           descripcion: 'Control de hormonas y metabolismo.' },
      { id: 5,  icon: '🍽️', nombre: 'Gastroenterología',        descripcion: 'Problemas del sistema digestivo.' },
      { id: 6,  icon: '🩺',  nombre: 'Medicina Interna',         descripcion: 'Atención integral de adultos.' },
      { id: 7,  icon: '💧',  nombre: 'Nefrología',               descripcion: 'Tratamiento de enfermedades renales.' },
      { id: 8,  icon: '🌬️', nombre: 'Neumología',               descripcion: 'Enfermedades respiratorias.' },
      { id: 9,  icon: '🎗️', nombre: 'Oncología',                descripcion: 'Diagnóstico y tratamiento del cáncer.' },
      { id: 10, icon: '💭',  nombre: 'Psiquiatría',              descripcion: 'Salud mental y trastornos emocionales.' },
      { id: 11, icon: '🦴',  nombre: 'Reumatología',             descripcion: 'Enfermedades de articulaciones.' },
      { id: 12, icon: '🦠',  nombre: 'Enfermedades Infecciosas', descripcion: 'Tratamiento de infecciones.' },
      { id: 13, icon: '🤧',  nombre: 'Alergia e Inmunología',    descripcion: 'Alergias y sistema inmune.' },
    ],
  },
  {
    id: 2,
    nombre: 'Otras Áreas',
    especialidades: [
      { id: 14, icon: '👶',  nombre: 'Pediatría',                  descripcion: 'Atención médica para niños.' },
      { id: 15, icon: '🤰',  nombre: 'Ginecología y Obstetricia',  descripcion: 'Salud femenina y embarazo.' },
      { id: 16, icon: '💭',  nombre: 'Salud Mental',               descripcion: 'Apoyo psicológico y psiquiátrico.' },
      { id: 17, icon: '♿',  nombre: 'Rehabilitación',             descripcion: 'Recuperación física y terapias.' },
    ],
  },
  {
    id: 3,
    nombre: 'Especialidades Quirúrgicas',
    especialidades: [
      { id: 18, icon: '🔪',  nombre: 'Cirugía General',               descripcion: 'Procedimientos quirúrgicos generales.' },
      { id: 19, icon: '🦴',  nombre: 'Traumatología y Ortopedia',     descripcion: 'Lesiones óseas y musculares.' },
      { id: 20, icon: '🧠',  nombre: 'Neurocirugía',                  descripcion: 'Cirugías del sistema nervioso.' },
      { id: 21, icon: '❤️',  nombre: 'Cirugía Cardiovascular',        descripcion: 'Cirugía del corazón y vasos.' },
      { id: 22, icon: '👁️', nombre: 'Oftalmología',                  descripcion: 'Salud visual y ojos.' },
      { id: 23, icon: '👂',  nombre: 'Otorrinolaringología',          descripcion: 'Oído, nariz y garganta.' },
      { id: 24, icon: '🚻',  nombre: 'Urología',                      descripcion: 'Sistema urinario y reproductor masculino.' },
      { id: 25, icon: '👶',  nombre: 'Cirugía Pediátrica',            descripcion: 'Cirugías en niños.' },
      { id: 26, icon: '🔥',  nombre: 'Cirugía Plástica y Quemados',   descripcion: 'Reconstrucción y quemaduras.' },
    ],
  },
  {
    id: 4,
    nombre: 'Servicios',
    especialidades: [
      { id: 27, icon: '🧪',  nombre: 'Laboratorio Clínico',           descripcion: 'Análisis de muestras médicas.' },
      { id: 28, icon: '🩻',  nombre: 'Imágenes (Rayos X, Eco, TAC)', descripcion: 'Diagnóstico por imágenes.' },
      { id: 29, icon: '🔬',  nombre: 'Endoscopía y Colonoscopía',     descripcion: 'Exploración interna del sistema digestivo.' },
      { id: 30, icon: '🚑',  nombre: 'Emergencias 24/7',              descripcion: 'Atención inmediata las 24 horas.' },
      { id: 31, icon: '🏥',  nombre: 'UCI',                           descripcion: 'Unidad de cuidados intensivos.' },
    ],
  },
]
 
// animación de entrada para cada tarjeta
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0, transition: { delay, duration: 0.4, ease: 'easeOut' } },
})

const Especialidades = () => {
  // por defecto muestra la categoría 1 (Especialidades Médicas)
  const [categoriaActiva, setCategoriaActiva] = useState(1)

  // filtra solo la categoría seleccionada
  const categoriaSeleccionada = categorias.find(c => c.id === categoriaActiva)

  return (
    <section className="especialidades">
      <div className="especialidades-container">

        <h2 className="especialidades-titulo">Nuestras Especialidades</h2>
        <p className="especialidades-subtitulo">
          Contamos con un amplio equipo de profesionales especializados para cuidar tu salud.
        </p>

        {/* botones de categorías */}
        <div className="categorias-tabs">
          {categorias.map((categoria) => (
            <button
              key={categoria.id}
              className={`categoria-tab ${categoriaActiva === categoria.id ? 'activa' : ''}`}
              onClick={() => setCategoriaActiva(categoria.id)}
            >
              {categoria.nombre}
            </button>
          ))}
        </div>

        {/* solo muestra la categoría activa */}
        <div className="categoria-bloque">
          <div className="especialidades-grid">
            {categoriaSeleccionada.especialidades.map((item, index) => (
              <motion.div
                key={item.id}
                className="especialidad-card"
                {...fadeUp(index * 0.05)}
              >
                <span className="especialidad-icon">{item.icon}</span>
                <h4 className="especialidad-nombre">{item.nombre}</h4>
                <p className="especialidad-descripcion">{item.descripcion}</p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
export default Especialidades
 