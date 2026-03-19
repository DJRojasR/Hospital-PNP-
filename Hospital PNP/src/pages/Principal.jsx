import React from 'react'
import Header from '../components/Principal/Header/Header.jsx'
import Footer from '../components/Principal/Footer/Footer.jsx'
import Director from '../components/Principal/Director/Director.jsx'
import Contacto from '../components/Principal/Contacto/Contacto.jsx'

const Principal = () => {
  return (
    <>
      <Header />
      <Director/>
      <Contacto/>
      <Footer />
    </>
  )
}

export default Principal