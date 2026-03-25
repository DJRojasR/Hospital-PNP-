import React from 'react'
import Header from '../Header/Header.jsx'
import Footer from '../Footer/Footer.jsx'
import Contacto from '../Contacto/Contacto.jsx'
import Especialidades from '../Especialidades/Especialidades.jsx'


const Principal = () => {
  return (
    <>
      <Header />
      <Especialidades/>
      <Contacto/>
      <Footer />
    </>
  )
}

export default Principal