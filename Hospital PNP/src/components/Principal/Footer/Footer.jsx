import React from 'react'
import './Footer.css'
 
const Footer = () => {
  return (
    // footer simple con derechos reservados
    <footer className="footer">
      <div className="footer-container">
 
        {/* texto de derechos reservados */}
        <p className="footer-text">
          Copyright &copy; 2026 Hospital PNP
          <span className="footer-separator"> – </span>
          {' '}Hospital Nacional PNP "Luis N. Sáenz". Todos los derechos reservados.
        </p>
 
      </div>
    </footer>
  )
}
 
export default Footer
 
