import React from 'react'
import { motion } from 'framer-motion'
import { useState } from 'react'
import './Especialidades.css'
import {assets} from '../../../assets/Iconos/assets.js'
 
// especialidades agrupadas por categoría
const categorias = [
  {
    id: 1,
    nombre: 'Especialidades Médicas',
    especialidades: [
      { id: 1,  icon: assets.inmunologia,        nombre: 'Alergia e Inmunología',    descripcion: 'Alergias y sistema inmune.'       },
      { id: 2,  icon: assets.cardiologia2,        nombre: 'Cardiología',              descripcion: 'Enfermedades del corazón.'        },
      { id: 3,  icon: assets.dermatologia ,        nombre: 'Dermatología',             descripcion: 'Enfermedades de la piel.'         },
      { id: 4,  icon: assets.endocrinologia,  nombre: 'Endocrinología',           descripcion: 'Hormonas y metabolismo.'          },
      { id: 5,  icon: assets.inmunologia,        nombre: 'Enfermedades Infecciosas', descripcion: 'Tratamiento de infecciones.'      },
      { id: 6,  icon: assets.estomago,    nombre: 'Gastroenterología',        descripcion: 'Sistema digestivo.'               },
      { id: 7,  icon: assets.hematologia,        nombre: 'Hematología',              descripcion: 'Enfermedades de la sangre.'       },
      { id: 8,  icon: assets.medico,        nombre: 'Medicina Interna',         descripcion: 'Atención integral de adultos.'    },
      { id: 9,  icon: assets.neurologia,        nombre: 'Neurología',               descripcion: 'Sistema nervioso.'                },
      { id: 10, icon: assets.neumologia,        nombre: 'Neumología',               descripcion: 'Sistema respiratorio.'            },
      { id: 11, icon: assets.oncologia,        nombre: 'Oncología',                descripcion: 'Tratamiento del cáncer.'          },
      { id: 12, icon: assets.reumatologia,        nombre: 'Reumatología',             descripcion: 'Enfermedades de articulaciones.'  },
    ],
  },
  {
    id: 2,
    nombre: 'Materno Infantil',
    especialidades: [
      { id: 13, icon: assets.pediatria2, nombre: 'Cirugía Pediátrica',             descripcion: 'Cirugías en niños.'           },
      { id: 14, icon: assets.pediatria3, nombre: 'Cuidados Intensivos Pediátricos',descripcion: 'UCI pediátrica.'              },
      { id: 15, icon: assets.ginecologia, nombre: 'Ginecología',                    descripcion: 'Salud femenina.'              },
      { id: 16, icon: assets.pediatria4, nombre: 'Medicina Pediátrica',            descripcion: 'Atención médica infantil.'    },
      { id: 17, icon: assets.pediatrica, nombre: 'Neonatología',                   descripcion: 'Atención a recién nacidos.'   },
      { id: 18, icon: assets.obstetricia, nombre: 'Obstetricia',                    descripcion: 'Atención del embarazo.'       },
      { id: 19, icon: assets.fertilidad, nombre: 'Reproducción Humana',            descripcion: 'Fertilidad y reproducción.'   },
    ],
  },
  {
    id: 3,
    nombre: 'Especialidades Quirúrgicas',
    especialidades: [
      { id: 20, icon: assets.quemadura, nombre: 'Cirugía Plástica y Quemados',       descripcion: 'Reconstrucción y quemaduras.'    },
      { id: 21, icon: assets.ortopedia,      nombre: 'Ortopedia y Traumatología',          descripcion: 'Lesiones óseas.'                 },
      { id: 22, icon: assets.anestesiologia,      nombre: 'Anestesiología y Centro Quirúrgico', descripcion: 'Soporte en cirugías.'            },
      { id: 23, icon: assets.cirugia,    nombre: 'Cirugía General',                   descripcion: 'Procedimientos quirúrgicos.'     },
      { id: 24, icon: assets.cirugiacorazon,   nombre: 'Cirugía de Tórax y Cardiovascular',  descripcion: 'Cirugía cardíaca.'               },
      { id: 25, icon: assets.neurocirugia,      nombre: 'Neurocirugía',                       descripcion: 'Cirugía del sistema nervioso.'   },
      { id: 26, icon: assets.oftalmologia,      nombre: 'Oftalmología',                       descripcion: 'Salud visual.'                   },
      { id: 27, icon: assets.cirugiacabeza,      nombre: 'Cirugía de Cabeza y Cuello',         descripcion: 'Zona cabeza/cuello.'             },
      { id: 28, icon: assets.urologia,  nombre: 'Urología',                           descripcion: 'Sistema urinario.'               },
      { id: 29, icon: assets.otorrinolaringologia,      nombre: 'Otorrinolaringología',               descripcion: 'Oído, nariz y garganta.'         },
    ],
  },
  {
    id: 4,
    nombre: 'Emergencias y Apoyo',
    especialidades: [
      { id: 30, icon: assets.emergencia, nombre: 'Emergencia',        descripcion: 'Atención inmediata.'        },
      { id: 31, icon: assets.uci, nombre: 'Cuidados Intensivos',descripcion: 'UCI general.'               },
      { id: 32, icon: assets.nutricion, nombre: 'Soporte Nutricional',descripcion: 'Apoyo alimenticio clínico.' },
    ],
  },
  {
    id: 5,
    nombre: 'Diagnóstico y Tratamiento',
    especialidades: [
      { id: 33, icon: assets.asistenciasocial, nombre: 'Asistencia Social',           descripcion: 'Apoyo social al paciente.' },
      { id: 34, icon: assets.rayosx,   nombre: 'Diagnóstico por Imágenes',    descripcion: 'Rayos X, TAC, etc.'        },
      { id: 35, icon: assets.hematologia,   nombre: 'Hemoterapia y Banco de Sangre',descripcion: 'Transfusiones.'            },
      { id: 36, icon: assets.rehabilitacion,   nombre: 'Medicina de Rehabilitación',  descripcion: 'Recuperación física.'      },
      { id: 37, icon: assets.nutricion2,   nombre: 'Nutrición',                   descripcion: 'Plan alimenticio.'         },
      { id: 38, icon: assets.odonto,   nombre: 'Odontoestomatología',         descripcion: 'Salud bucal.'              },
      { id: 39, icon: assets.analisisclinico,   nombre: 'Patología Clínica',           descripcion: 'Análisis clínicos.'        },
      { id: 40, icon: assets.estudiotejido,   nombre: 'Anatomía Patológica',         descripcion: 'Estudio de tejidos.'       },
      { id: 41, icon: assets.psicologia,   nombre: 'Psicología',                  descripcion: 'Salud mental.'             },
      { id: 42, icon: assets.farmacia,   nombre: 'Farmacia',                    descripcion: 'Medicamentos.'             },
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
 