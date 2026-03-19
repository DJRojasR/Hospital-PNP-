import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Principal/Navbar/Navbar.jsx'
import Header from './components/Principal/Header/Header.jsx'
import './App.css'
// importa los componentes que vayas creando
import CuadroDeHonor from './components/Nosotros/CuadroDeHonor/Cuadrodehonor.jsx'
import Mision from './components/Nosotros/Mision/Mision.jsx'


const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        {/* ruta raíz — página de inicio */}
        <Route path="/" element={<Header />} />

        {/* /principal también muestra el Header */}
        <Route path="/principal" element={<Header />} />

        {/* estas las descomenta cuando crees los componentes */}
        <Route path="/nosotros" element={<Mision />} />
        <Route path="/cuadro-de-honor" element={<CuadroDeHonor />} />
        {/* <Route path="/servicios" element={<Servicios />} /> */}
        {/* <Route path="/atencion" element={<Atencion />} /> */}
        {/* <Route path="/noticias" element={<Noticias />} /> */}

        {/* si ninguna ruta coincide muestra esto */}
        <Route path="*" element={<h2 style={{padding:'2rem'}}>Página no encontrada</h2>} />
      </Routes>
    </div>
  )
}

export default App