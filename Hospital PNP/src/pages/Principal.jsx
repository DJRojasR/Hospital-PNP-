import React from 'react'
import Header from '../components/Principal/Header/Header.jsx'
import Footer from '../components/Principal/Footer/Footer.jsx'
import Director from '../components/Principal/Director/Director.jsx'
import Contacto from '../components/Principal/Contacto/Contacto.jsx'
import Especialidades from '../components/Principal/Especialidades/Especialidades.jsx'

const Principal = () => {
  return (
    <>
      <Header />
      <Especialidades/>
      <Director/>
      <Contacto/>
      <Footer />
    </>
  )
}

export default Principal