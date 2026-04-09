import React from 'react'
import { MdEmail, MdLocationOn, MdPhone } from 'react-icons/md'
import { FaFacebook } from 'react-icons/fa'
import './Contacto.css'

// datos de contacto centralizados — fácil de editar
const contactoData = [
  {
    id: 1,
    icono: <MdLocationOn size={22} />,
    label: 'Dirección',
    valor: 'Av. Brasil Cdra. 26 s/n, Jesús María, Lima',
    link: null,
  },
  {
    id: 2,
    icono: <MdPhone size={22} />,
    label: 'Teléfono',
    valor: '(01) 510 3500',
    link: null,
  },
  {
    id: 3,
    icono: <MdEmail size={22} />,
    label: 'Correo electrónico',
    valor: 'relacionespublicas973@gmail.com',
    link: 'mailto:relacionespublicas973@gmail.com',
  },
  {
    id: 4,
    icono: <FaFacebook size={22} />,
    label: 'Facebook',
    valor: 'Hospital Nacional PNP Luis N. Sáenz',
    link: 'https://web.facebook.com/HospitalNacionalPNPLuisNSaenz',
  },
]

const Contacto = () => {
  return (
    <section className="contacto">
      <div className="contacto-container">

        {/* título de la sección */}
        <h2 className="contacto-titulo">Contáctanos</h2>

        {/* fila con info a la izquierda y mapa a la derecha */}
        <div className="contacto-fila">
          
        {/* lista de contactos */}
        <ul className="contacto-lista">
          {contactoData.map((item) => (
            <li key={item.id} className="contacto-item">

              {/* icono con fondo de color */}
              <span className="contacto-icono">{item.icono}</span>

              <div className="contacto-info">
                <span className="contacto-label">{item.label}</span>

                {/* si tiene link abre en nueva pestaña, si no es texto simple */}
                {item.link ? (
                  <a href={item.link} target="_blank" rel="noopener noreferrer" className="contacto-valor">
                    {item.valor}
                  </a>
                ) : (
                  <span className="contacto-valor">{item.valor}</span>
                )}
              </div>

            </li>
          ))}
        </ul>

      {/* DERECHA — mapa */}
          <div className="map-section">
            <div className="header-map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3901.3928773336593!2d-77.0619570252795!3d-12.085234142617544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c900e56f255d%3A0xa651cc66d9dfdc35!2sHospital%20Nacional%20PNP%20Luis%20N.%20S%C3%A1enz!5e0!3m2!1ses-419!2spe!4v1773855099875!5m2!1ses-419!2spe"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación Hospital PNP"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Contacto