import React from 'react'
import { motion } from 'framer-motion'
import { useState } from 'react'
import './Especialidades.css'
import corazon from '../../../../src/assets/Iconos/cardiaco.png'
import piel from '../../../../src/assets/Iconos/depilacion.png'
import estomago from '../../../../src/assets/Iconos/estomago.png'
import quemadura from '../../../../src/assets/Iconos/quemadura.png'
import sendocrino from '../../../../src/assets/Iconos/sendocrino.png'
import urologia from '../../../../src/assets/Iconos/urologia.png'
 
// especialidades agrupadas por categoría
const categorias = [
  {
    id: 1,
    nombre: 'Especialidades Médicas',
    especialidades: [
      { id: 1,  icon: '🤧',        nombre: 'Alergia e Inmunología',    descripcion: 'Alergias y sistema inmune.'       },
      { id: 2,  icon: '🫀',        nombre: 'Cardiología',              descripcion: 'Enfermedades del corazón.'        },
      { id: 3,  icon: piel,        nombre: 'Dermatología',             descripcion: 'Enfermedades de la piel.'         },
      { id: 4,  icon: sendocrino,  nombre: 'Endocrinología',           descripcion: 'Hormonas y metabolismo.'          },
      { id: 5,  icon: '🦠',        nombre: 'Enfermedades Infecciosas', descripcion: 'Tratamiento de infecciones.'      },
      { id: 6,  icon: estomago,    nombre: 'Gastroenterología',        descripcion: 'Sistema digestivo.'               },
      { id: 7,  icon: '🩸',        nombre: 'Hematología',              descripcion: 'Enfermedades de la sangre.'       },
      { id: 8,  icon: '🩺',        nombre: 'Medicina Interna',         descripcion: 'Atención integral de adultos.'    },
      { id: 9,  icon: '🧠',        nombre: 'Neurología',               descripcion: 'Sistema nervioso.'                },
      { id: 10, icon: '🌬️',        nombre: 'Neumología',               descripcion: 'Sistema respiratorio.'            },
      { id: 11, icon: '🎗️',        nombre: 'Oncología',                descripcion: 'Tratamiento del cáncer.'          },
      { id: 12, icon: '🦵',        nombre: 'Reumatología',             descripcion: 'Enfermedades de articulaciones.'  },
    ],
  },
  {
    id: 2,
    nombre: 'Materno Infantil',
    especialidades: [
      { id: 13, icon: '👶', nombre: 'Cirugía Pediátrica',             descripcion: 'Cirugías en niños.'           },
      { id: 14, icon: '🏥', nombre: 'Cuidados Intensivos Pediátricos',descripcion: 'UCI pediátrica.'              },
      { id: 15, icon: '🤰', nombre: 'Ginecología',                    descripcion: 'Salud femenina.'              },
      { id: 16, icon: '👶', nombre: 'Medicina Pediátrica',            descripcion: 'Atención médica infantil.'    },
      { id: 17, icon: '🍼', nombre: 'Neonatología',                   descripcion: 'Atención a recién nacidos.'   },
      { id: 18, icon: '🤱', nombre: 'Obstetricia',                    descripcion: 'Atención del embarazo.'       },
      { id: 19, icon: '🧬', nombre: 'Reproducción Humana',            descripcion: 'Fertilidad y reproducción.'   },
    ],
  },
  {
    id: 3,
    nombre: 'Especialidades Quirúrgicas',
    especialidades: [
      { id: 20, icon: quemadura, nombre: 'Cirugía Plástica y Quemados',       descripcion: 'Reconstrucción y quemaduras.'    },
      { id: 21, icon: '🩼',      nombre: 'Ortopedia y Traumatología',          descripcion: 'Lesiones óseas.'                 },
      { id: 22, icon: '💉',      nombre: 'Anestesiología y Centro Quirúrgico', descripcion: 'Soporte en cirugías.'            },
      { id: 23, icon: '🧑‍⚕️',    nombre: 'Cirugía General',                   descripcion: 'Procedimientos quirúrgicos.'     },
      { id: 24, icon: corazon,   nombre: 'Cirugía de Tórax y Cardiovascular',  descripcion: 'Cirugía cardíaca.'               },
      { id: 25, icon: '🧠',      nombre: 'Neurocirugía',                       descripcion: 'Cirugía del sistema nervioso.'   },
      { id: 26, icon: '👁️',      nombre: 'Oftalmología',                       descripcion: 'Salud visual.'                   },
      { id: 27, icon: '🗣️',      nombre: 'Cirugía de Cabeza y Cuello',         descripcion: 'Zona cabeza/cuello.'             },
      { id: 28, icon: urologia,  nombre: 'Urología',                           descripcion: 'Sistema urinario.'               },
      { id: 29, icon: '👂',      nombre: 'Otorrinolaringología',               descripcion: 'Oído, nariz y garganta.'         },
    ],
  },
  {
    id: 4,
    nombre: 'Emergencias y Apoyo',
    especialidades: [
      { id: 30, icon: '🚑', nombre: 'Emergencia',        descripcion: 'Atención inmediata.'        },
      { id: 31, icon: '🏥', nombre: 'Cuidados Intensivos',descripcion: 'UCI general.'               },
      { id: 32, icon: '🥗', nombre: 'Soporte Nutricional',descripcion: 'Apoyo alimenticio clínico.' },
    ],
  },
  {
    id: 5,
    nombre: 'Diagnóstico y Tratamiento',
    especialidades: [
      { id: 33, icon: '👩‍⚕️', nombre: 'Asistencia Social',           descripcion: 'Apoyo social al paciente.' },
      { id: 34, icon: '🩻',   nombre: 'Diagnóstico por Imágenes',    descripcion: 'Rayos X, TAC, etc.'        },
      { id: 35, icon: '🩸',   nombre: 'Hemoterapia y Banco de Sangre',descripcion: 'Transfusiones.'            },
      { id: 36, icon: '♿',   nombre: 'Medicina de Rehabilitación',  descripcion: 'Recuperación física.'      },
      { id: 37, icon: '🍎',   nombre: 'Nutrición',                   descripcion: 'Plan alimenticio.'         },
      { id: 38, icon: '😁',   nombre: 'Odontoestomatología',         descripcion: 'Salud bucal.'              },
      { id: 39, icon: '🔬',   nombre: 'Patología Clínica',           descripcion: 'Análisis clínicos.'        },
      { id: 40, icon: '🧫',   nombre: 'Anatomía Patológica',         descripcion: 'Estudio de tejidos.'       },
      { id: 41, icon: '💭',   nombre: 'Psicología',                  descripcion: 'Salud mental.'             },
      { id: 42, icon: '💊',   nombre: 'Farmacia',                    descripcion: 'Medicamentos.'             },
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
                {/* ── ICON: si es imagen PNG usa <img>, si es emoji usa <span> ── */}
                {item.icon?.includes?.('/') ? (
                  <img
                    src={item.icon}
                    alt={item.nombre}
                    className="especialidad-icon-img"
                  />
                ) : (
                  <span className="especialidad-icon">{item.icon}</span>
                )}

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
 