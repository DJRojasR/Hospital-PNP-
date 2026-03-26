import React, { useState } from 'react'
import { MdLocationOn, MdPhone } from 'react-icons/md'
import './Atencion.css'
import { motion } from 'framer-motion'

// datos de todas las redes y sus unidades
const redes = [
  {
    id: 1,
    nombre: 'Lima Norte',
    unidades: [
      { id: 1, nombre: 'Pol. San Martín de Porres', direccion: 'Jirón El Chaco 2850, San Martín de Porres 15101', link: 'https://maps.app.goo.gl/SUkjWsVFvMqHhv7W7',                          telefono: '(01) 568-7216' },
      { id: 2, nombre: 'Pol. San Diego',             direccion: 'Santo Tomas De Aquino 385, Lima 15113',  link: 'https://maps.app.goo.gl/Ha1Je4MTc3rAs6bA8',                                        telefono: '(01) 552-5169' },
      { id: 3, nombre: 'Pol. PNP Huacho',                direccion: 'altura cdra 9 de la, Av. 28 de julio N° 103, Santa María 15137', link:'https://maps.app.goo.gl/EnykenZeXNtALusm7',                          telefono: '(01) 232-5119' },
      { id: 4, nombre: 'PMP. EETSP. Puente Piedra',  direccion: 'Auxiliar Panamericana Norte 26, Puente Piedra 15117 (Dentro de las instalaciones)',link:'https://maps.app.goo.gl/FpATRzMPF3xxdQvz9', telefono: '—' },
      { id: 5, nombre: 'PMP. Independencia',         direccion: '23 de Diciembre 104, Independencia 15333', link:'https://maps.app.goo.gl/NGt2DfaspqPUbXiL9', telefono: '(01) 521-6185' },
      { id: 6, nombre: 'Pol. Carabayllo',            direccion: 'Urb. Edwin Vasquez Cam. Mz. G1, Lt. 15 Urb. ENACE',      link:'https://maps.app.goo.gl/SQsYtKT6BTFJA4mw8',            telefono: '(01) 487-1957' },
    ],
  },
  {
    id: 2,
    nombre: 'Lima Sur',
    unidades: [
      { id: 1, nombre: 'Pol. Chorrillos',        direccion: 'Av. Chorrillos Cdra. 5', link:'https://maps.app.goo.gl/RGMm4TzuZptZKh9u8',                                                           telefono: '(01) 467-5766' },
      { id: 2, nombre: 'Policlínico Juan José Rodríguez Lazo',          direccion: 'Av. Guardia Peruana 8, Chorrillos 15054',         link:'https://maps.app.goo.gl/Pqd2PMXbbGxNNSNN8',                       telefono: '(01) 467-1207' },
      { id: 3, nombre: 'Policlínico PNP San Borja-Posta Médica',         direccion: 'Av. de las Artes Nte. 332, San Borja 15036',       link:'https://maps.app.goo.gl/b57RsttXZageHWJXA',                                                 telefono: '—' },
      { id: 4, nombre: 'Posta De Sanidad PNP-CAÑETE',            direccion: 'Carr. Cañete Yauyos 148A, Nuevo Imperial 15723',     link:'https://maps.app.goo.gl/aU98MqwfTySbxgPb6',                             telefono: '(01) 284-8487' },
      { id: 5, nombre: 'Pol. EETS. San Bartolo', direccion: 'Dentro de las instalaciones de la Escuela Técnico Superior Femenina PNP – San Bartolo', link:'https://maps.app.goo.gl/gewWWKJwZASCyaB2A', telefono: '—' },
    ],
  },
  {
    id: 3,
    nombre: 'Lima Centro',
    unidades: [
      { id: 1, nombre: 'Clin. Odo. «Angamos»',   direccion: 'Av. Angamos Este 815, Surquillo 15047',    link: 'https://maps.app.goo.gl/L3uy9M55eSFam1C87',                              telefono: '(01) 241-6130' },
      { id: 2, nombre: 'Pol. «W. Rosales León»', direccion: 'Av. Andrés Aramburú 550, Surquillo 15047. Espalda del Complejo Policial – Surquillo',link: 'https://maps.app.goo.gl/m3fkeKz7S5YgScak7', telefono: '(01) 222-6318' },
      { id: 3, nombre: 'Pol. COIP – DIRINCRI',   direccion: 'Av. España Cdra. 3. Edificio «15 de Setiembre» Lima',      link: 'https://maps.app.goo.gl/7sqGyPsZ4mkHxNCU7',      telefono: '—' },
    ],
  },
  {
    id: 4,
    nombre: 'Lima Este',
    unidades: [
      { id: 1, nombre: 'Policlinico PNP Zarate',     direccion: 'Av. Las Flores de Primavera 1548. Urb. San Hilarión',     link:'https://maps.app.goo.gl/Xp2jsbKcmYQFfBXR8',     telefono: '(01) 375-0905' },                    
      { id: 2, nombre: 'PMP. Chaclacayo', direccion: 'Jr. El Rosario 591. Dentro de la Comisaría de Chaclacayo',link:'https://maps.app.goo.gl/GK5i119NtKwh5ftr6',     telefono: '(01) 358-1151' },
      { id: 3, nombre: 'TP. Monterrico',  direccion: 'Av. Manuel Olguín. Altura cdra. 6 (ref: dentro de CPNP Monterrico)',link:'https://maps.app.goo.gl/rnxohd93LzEUcpX79', telefono: '(01) 434-1389' },
    ],
  },
  {
    id: 5,
    nombre: 'Lima Oeste',
    unidades: [
      { id: 1, nombre: 'Pol. Callao',     direccion: 'Av. La Paz Cdra. 11 – Callao (ref: a una cdra de Av. Sta. Rosa)',link:'https://maps.app.goo.gl/RvWFnRLn87HV3P2SA', telefono: '(01) 453-0464 / (01) 429-1323' },
      { id: 2, nombre: 'Pol. VIPOL',      direccion: 'Av. Los Nenúfares Cdra. 4, Urb. VIPOL – Callao',    link:'https://maps.app.goo.gl/hKHmy1yiZ3LDmwPf8',             telefono: '(01) 574-1788' },
      { id: 3, nombre: 'PMP. Ventanilla', direccion: 'Av. Pedro Beltrán Cdra. 10 Nº386, Urb. Satélite – Ventanilla', link:'https://maps.app.goo.gl/t9rdsCGTdHkZ5yjMA',  telefono: '(01) 553-6129' },
      { id: 4, nombre: 'PMP. DIRAVPOL',   direccion: 'Av. Elmer Faucett N°3900 (ref: al lado de Lima Cargo)',     link:'https://maps.app.goo.gl/bBWKHJYCASXH36Ld9',      telefono: '(01) 538-8348' },
    ],
  },
]


const Ipress = () => {
  
  const [redActiva, setRedActiva] = useState(1)
  const redSeleccionada = redes.find(r => r.id === redActiva)

  return (
    <section className="ipress">
      <div className="ipress-container">

        {/* título con animación */}
        <motion.div
          className="ipress-container-mov"
          initial={{ opacity: 0, y: -24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <h2 className="ipress-titulo">IPRESS PNP Lima</h2>
          <p className="ipress-subtitulo">Centros de Salud de Sanidad Policial</p>

          <div className="ipress-tabs">
            {redes.map((red) => (
              <button
                key={red.id}
                className={`ipress-tab ${redActiva === red.id ? 'activa' : ''}`}
                onClick={() => setRedActiva(red.id)}
              >
                {red.nombre}
              </button>
            ))}
          </div>
        </motion.div>

        {/* cards con fadeUp igual que Especialidades */}
        <ul className="ipress-lista">
          {redSeleccionada.unidades.map((unidad, index) => (
            <motion.li
              key={`${redActiva}-${unidad.id}`}  
              className="ipress-item"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08, duration: 0.4, ease: 'easeOut' }}
            >
              <span className="ipress-icono">
                <MdLocationOn size={22} />
              </span>

              <div className="ipress-info">
                <span className="ipress-label">{unidad.nombre}</span>
                <span className="ipress-valor">
                  <a href={unidad.link} target="_blank" rel="noopener noreferrer" className="contacto-valor">
                    {unidad.direccion}
                  </a>
                </span>
                {unidad.telefono !== '—' && (
                  <span className="ipress-telefono">
                    <MdPhone size={13} />
                    <span className="ipress-tel-link">{unidad.telefono}</span>
                  </span>
                )}
              </div>
            </motion.li>
          ))}
        </ul>

      </div>
    </section>
  )
}

export default Ipress