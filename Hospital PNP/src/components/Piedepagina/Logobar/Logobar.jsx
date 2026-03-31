import React from 'react'
import ministerio from '../../../assets/ministeriodelinterior.png'
import policia from '../../../assets/policiaperuana.png'
import ministeriosa from '../../../assets/ministeriodesalud.png'
import susalud from '../../../assets/susalud.png'
import saludpol from '../../../assets/saludpol.png'
import dirsapol from '../../../assets/dirsapol.png'
import './Logobar.css'


const logos = [
  { id: 1, src: ministerio, alt: 'Ministerio del Interior', url:'https://www.gob.pe/mininter' },
  { id: 2, src: policia, alt: 'Policía Peruana', url:'https://www.gob.pe/pnp' },
  { id: 3, src: ministeriosa, alt: 'Ministerio de Salud', url:'https://www.gob.pe/minsa' },
  { id: 4, src: susalud, alt: 'SUSALUD', url:'https://www.gob.pe/susalud' },
  { id: 5, src: saludpol, alt: 'Saludpol', url:'https://www.gob.pe/saludpol/' },
  { id: 6, src: dirsapol, alt: 'DIRSAPOL', url:'https://dirsapolpnp.gob.pe/' },
];


const Logobar = () => {
  return (
    <div className="logobar">
      <span className="logobar-label">Instituciones vinculadas</span>
      <div className="logobar-viewport">
        <div className="logobar-track">
          {logos.map((logo) => (
            <div className="logobar-item" key={logo.id}>
              <a href={logo.url} target="_blank" rel="noopener noreferrer" aria-label={`Ir al sitio oficial de ${logo.alt}`}>
                <img src={logo.src} alt={logo.alt} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Logobar
