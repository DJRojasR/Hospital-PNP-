import { useState } from 'react'
import { Link } from 'react-router-dom'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri'
import logo from '../../../assets/logo.png'
import { motion } from 'framer-motion'
import './Navbar.css'

// Rutas del navbar — los que tienen "dropdown" muestran un submenú
// los que no tienen "dropdown" navegan directamente con Link
const NavbMenu = [
    {id: 1, name:'PRINCIPAL', link:'/principal', delay:0.2},
    {id: 2, name:'NOSOTROS', link:'#', delay:0.3, dropdown:[
        {id: 1, name:'Misión y Visión', link:'/nosotros'},
        {id: 2, name:'Cuadro de Honor', link:'/cuadro-de-honor'},
    ]},
    {id: 3, name:'SERVICIOS EN LÍNEA', link:'/servicios', delay:0.2},
    {id: 4, name:'ATENCIÓN CALL CENTER', link:'/atencion', delay:0.2},
    {id: 5, name:'NOTICIAS', link:'/noticias', delay:0.2},
]

// Animación de entrada desde arriba — recibe un delay para que cada
// elemento del navbar aparezca uno después del otro
const SlideDown = (delay = 0) => {
    return {
        initial: {y: -50, opacity: 0},
        animate: {y: 0, opacity:1, transition:{delay: delay, duration: 0.5, ease: 'easeInOut'}},
        exit: {y: -50, opacity: 0, transition:{duration: 0.5, ease: 'easeInOut'}}
    }
}

const Navbar = () => {

  // controla si el menú hamburguesa está abierto o cerrado en móvil
  const [menuOpen, setMenuOpen] = useState(false)

  // guarda el id del dropdown abierto — null significa que ninguno está abierto
  const [dropdownOpen, setDropdownOpen] = useState(null)

  // detecta si la pantalla es móvil para decidir si usar click en el dropdown
  const isMobile = window.innerWidth <= 768

  // abre o cierra el dropdown según el id del item clickeado
  // si el id ya está abierto lo cierra (null), si no lo abre
  // solo funciona en móvil — en desktop lo maneja el hover del CSS
  const handleDropdown = (id) => {
    if (isMobile) {
      setDropdownOpen(dropdownOpen === id ? null : id)
    }
  }

  return (
    <nav>
      <div className="navbar">

        {/* Logo + título del hospital */}
        <div className="navbar-brand">
          <motion.img initial={{opacity:0}} animate={{opacity:1}} transition={{duration:0.8, delay:0.5}} src={logo} alt="logo-png" className="logo-png"/>
          
          <div className="navbar-title">
            <motion.span className="navbar-title-main" variants={SlideDown(0.5)} initial="initial" animate="animate" exit="exit">
              Hospital PNP
            </motion.span>
            <motion.span className="navbar-title-sub" variants={SlideDown(0.6)} initial="initial" animate="animate" exit="exit">
              Hospital Nacional PNP "Luis N. Sáenz"
            </motion.span>
          </div>
        </div>

        {/* Botón hamburguesa — solo visible en móvil cambia entre ícono de menú y X según el estado */}
        <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <RiCloseLine size={26} /> : <RiMenu3Line size={26} />}
        </button>

        {/* Menú principal — la clase "open" la agrega React en móvil en desktop siempre está visible */}
        <div className={`menu ${menuOpen ? 'open' : ''}`}>
          <ul className="lista">
            {NavbMenu.map((menu) => (
              <motion.li
                key={menu.id}
                // "has-dropdown" activa los estilos CSS del submenú hover en desktop
                // "dropdown-active" se puede usar para estilos extra cuando está abierto
                className={`${menu.dropdown ? 'has-dropdown' : ''} ${dropdownOpen === menu.id ? 'dropdown-active' : ''}`}
                variants={SlideDown(menu.delay)}
                initial="initial"
                animate="animate"
                exit="exit"
              >
                {/* Si tiene dropdown usa span (no navega), si no usa Link (navega) */}
                {menu.dropdown ? (
                  <span onClick={() => handleDropdown(menu.id)}>
                    {menu.name}
                    {/* flecha que rota cuando el dropdown está abierto */}
                    <span className={`arrow ${dropdownOpen === menu.id ? 'open' : ''}`}>▾</span>
                  </span>
                ) : (
                  <Link to={menu.link}>{menu.name}</Link>
                )}

                {/* Submenú — solo se renderiza si el item tiene dropdown
                    en desktop se muestra con hover (CSS)
                    en móvil se muestra con click (clase "open" de React) */}
                {menu.dropdown && (
                  <ul className={`dropdown ${dropdownOpen === menu.id ? 'open' : ''}`}>
                    {menu.dropdown.map((item) => (
                      <li key={item.id}>
                        <Link to={item.link}>{item.name}</Link>
                      </li>
                    ))}
                  </ul>
                )}
              </motion.li>
            ))}
          </ul>
        </div>

      </div>
    </nav>
  )
}

export default Navbar