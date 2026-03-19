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
    link: 'tel:+51011234567',
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

      </div>
    </section>
  )
}

export default Contacto