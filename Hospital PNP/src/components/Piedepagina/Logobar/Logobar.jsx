import React from 'react'
import ministerio from '../../../assets/ministeriodelinterior.png'
import policia from '../../../assets/policiaperuana.png'
import ministeriosa from '../../../assets/ministeriodesalud.png'
import susalud from '../../../assets/susalud.png'
import saludpol from '../../../assets/saludpol.png'
import dirsapol from '../../../assets/dirsapol.png'
import './Logobar.css'


const logos = [
  { src: ministerio, alt: 'Ministerio del Interior' },
  { src: policia, alt: 'Policía Peruana' },
  { src: ministeriosa, alt: 'Ministerio de Salud' },
  { src: susalud, alt: 'SUSALUD' },
  { src: saludpol, alt: 'Saludpol' },
  { src: dirsapol, alt: 'DIRSAPOL' },
]


const Logobar = () => {
    const track = [...logos, ...logos] // duplicado para loop continuo

  return (
    <div className="logobar">
      <span className="logobar-label">Instituciones vinculadas</span>
      <div className="logobar-viewport">
        <div className="logobar-track">
          {logos.map((logo, i) => (
            <div className="logobar-item" key={i}>
              <img src={logo.src} alt={logo.alt} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Logobar
