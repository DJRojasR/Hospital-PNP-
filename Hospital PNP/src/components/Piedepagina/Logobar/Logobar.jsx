import React from 'react'
import ministerio from '../../../assets/ministeriodelinterior.png'
import policia from '../../../assets/policiaperuana.png'
import ministeriosa from '../../../assets/ministeriodesalud.png'
import susalud from '../../../assets/susalud.png'
import saludpol from '../../../assets/saludpol.png'
import dirsapol from '../../../assets/dirsapol.png'
import './Logobar.css'


const logos = [
  { id: 1, src: ministerio, alt: 'Ministerio del Interior' },
  { id: 2, src: policia, alt: 'Policía Peruana' },
  { id: 3, src: ministeriosa, alt: 'Ministerio de Salud' },
  { id: 4, src: susalud, alt: 'SUSALUD' },
  { id: 5, src: saludpol, alt: 'Saludpol' },
  { id: 6, src: dirsapol, alt: 'DIRSAPOL' },
];


const Logobar = () => {
  return (
    <div className="logobar">
      <span className="logobar-label">Instituciones vinculadas</span>
      <div className="logobar-viewport">
        <div className="logobar-track">
          {logos.map((logo, i) => (
            <div className="logobar-item" key={logo.id}>
              <img src={logo.src} alt={logo.alt} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Logobar
