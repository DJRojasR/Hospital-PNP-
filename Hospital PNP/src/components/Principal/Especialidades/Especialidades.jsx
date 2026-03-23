import React from 'react'
import { motion } from 'framer-motion'
import { GiStomach } from "react-icons/gi";
import { useState } from 'react'
import './Especialidades.css'
 
// especialidades agrupadas por categoría
const categorias = [
  {
    id: 1,
    nombre: 'Especialidades Médicas',
    especialidades: [
      { id: 1, icon: '🤧', nombre: 'Alergia e Inmunología', descripcion: 'Alergias y sistema inmune.' },
      { id: 2, icon: '❤️', nombre: 'Cardiología', descripcion: 'Enfermedades del corazón.' },
      { id: 3, icon: '🧴', nombre: 'Dermatología', descripcion: 'Enfermedades de la piel.' },
      { id: 4, icon: '⚖️', nombre: 'Endocrinología', descripcion: 'Hormonas y metabolismo.' },
      { id: 5, icon: '🦠', nombre: 'Enfermedades Infecciosas', descripcion: 'Tratamiento de infecciones.' },
      { id: 6, icon: <GiStomach/> , nombre: 'Gastroenterología', descripcion: 'Sistema digestivo.' },
      { id: 7, icon: '🩸', nombre: 'Hematología', descripcion: 'Enfermedades de la sangre.' },
      { id: 8, icon: '🩺', nombre: 'Medicina Interna', descripcion: 'Atención integral de adultos.' },
      { id: 9, icon: '🧠', nombre: 'Neurología', descripcion: 'Sistema nervioso.' },
      { id: 10, icon: '🌬️', nombre: 'Neumología', descripcion: 'Sistema respiratorio.' },
      { id: 11, icon: '🎗️', nombre: 'Oncología', descripcion: 'Tratamiento del cáncer.' },
      { id: 12, icon: '🦵',  nombre: 'Reumatología', descripcion: 'Enfermedades de articulaciones.' }
    ],
  },

  {
    id: 2,
    nombre: 'Materno Infantil',
    especialidades: [
      { id: 12, icon: '👶', nombre: 'Cirugía Pediátrica', descripcion: 'Cirugías en niños.' },
      { id: 13, icon: '🏥', nombre: 'Cuidados Intensivos Pediátricos', descripcion: 'UCI pediátrica.' },
      { id: 14, icon: '🤰', nombre: 'Ginecología', descripcion: 'Salud femenina.' },
      { id: 15, icon: '👶', nombre: 'Medicina Pediátrica', descripcion: 'Atención médica infantil.' },
      { id: 16, icon: '🍼', nombre: 'Neonatología', descripcion: 'Atención a recién nacidos.' },
      { id: 17, icon: '🤱', nombre: 'Obstetricia', descripcion: 'Atención del embarazo.' },
      { id: 18, icon: '🧬', nombre: 'Reproducción Humana', descripcion: 'Fertilidad y reproducción.' },
    ],
  },

  {
    id: 3,
    nombre: 'Especialidades Quirúrgicas',
    especialidades: [
      { id: 19, icon: '🔥', nombre: 'Cirugía Plástica y Quemados', descripcion: 'Reconstrucción y quemaduras.' },
      { id: 20, icon: '🩼', nombre: 'Ortopedia y Traumatología', descripcion: 'Lesiones óseas.' },
      { id: 21, icon: '💉', nombre: 'Anestesiología y Centro Quirúrgico', descripcion: 'Soporte en cirugías.' },
      { id: 22, icon: '🧑‍⚕️', nombre: 'Cirugía General', descripcion: 'Procedimientos quirúrgicos.' },
      { id: 23, icon: '❤️', nombre: 'Cirugía de Tórax y Cardiovascular', descripcion: 'Cirugía cardíaca.' },
      { id: 24, icon: '🧠', nombre: 'Neurocirugía', descripcion: 'Cirugía del sistema nervioso.' },
      { id: 25, icon: '👁️', nombre: 'Oftalmología', descripcion: 'Salud visual.' },
      { id: 26, icon: '🗣️', nombre: 'Cirugía de Cabeza y Cuello', descripcion: 'Zona cabeza/cuello.' },
      { id: 27, icon: '🚻', nombre: 'Urología', descripcion: 'Sistema urinario.' },
      { id: 28, icon: '👂', nombre: 'Otorrinolaringología', descripcion: 'Oído, nariz y garganta.' },
    ],
  },

  {
    id: 4,
    nombre: 'Emergencias y Apoyo',
    especialidades: [
      { id: 29, icon: '🚑', nombre: 'Emergencia', descripcion: 'Atención inmediata.' },
      { id: 30, icon: '🏥', nombre: 'Cuidados Intensivos', descripcion: 'UCI general.' },
      { id: 31, icon: '🥗', nombre: 'Soporte Nutricional', descripcion: 'Apoyo alimenticio clínico.' },
    ],
  },

  {
    id: 5,
    nombre: 'Diagnóstico y Tratamiento',
    especialidades: [
      { id: 32, icon: '👩‍⚕️', nombre: 'Asistencia Social', descripcion: 'Apoyo social al paciente.' },
      { id: 33, icon: '🩻', nombre: 'Diagnóstico por Imágenes', descripcion: 'Rayos X, TAC, etc.' },
      { id: 34, icon: '🩸', nombre: 'Hemoterapia y Banco de Sangre', descripcion: 'Transfusiones.' },
      { id: 35, icon: '♿', nombre: 'Medicina de Rehabilitación', descripcion: 'Recuperación física.' },
      { id: 36, icon: '🍎', nombre: 'Nutrición', descripcion: 'Plan alimenticio.' },
      { id: 37, icon: '😁', nombre: 'Odontoestomatología', descripcion: 'Salud bucal.' },
      { id: 38, icon: '🔬', nombre: 'Patología Clínica', descripcion: 'Análisis clínicos.' },
      { id: 39, icon: '🧫', nombre: 'Anatomía Patológica', descripcion: 'Estudio de tejidos.' },
      { id: 40, icon: '💭', nombre: 'Psicología', descripcion: 'Salud mental.' },
      { id: 41, icon: '💊', nombre: 'Farmacia', descripcion: 'Medicamentos.' },
    ],
  },
];

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
 