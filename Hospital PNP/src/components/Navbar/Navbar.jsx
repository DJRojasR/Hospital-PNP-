import { useState } from 'react'
import { Link } from 'react-router-dom'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri'
import logo from '../../assets/logo.png'
import { motion } from 'framer-motion'
import './Navbar.css'

// ── RUTAS DEL NAVBAR ──────────────────────────────────────────────
// Cada objeto es un item del menú:
//   · link     → ruta a la que navega (si no tiene dropdown)
//   · delay    → tiempo de espera antes de la animación de entrada
//   · dropdown → (opcional) array de subitems que forman el submenú
//                si existe, el item NO navega, solo abre/cierra el submenú
const NavbMenu = [
  { id: 1, name: 'PRINCIPAL',            link: '/principal', delay: 0.2 },
  { id: 2, name: 'NOSOTROS',             link: '#',          delay: 0.3,
    dropdown: [
      { id: 1, name: 'Conócenos',  link: '/nosotros'        },
      { id: 2, name: 'Cuadro de Honor',  link: '/cuadro-de-honor' },
    ]
  },
  { id: 3, name: 'ATENCIÓN AL PACIENTE', link: '#',  delay: 0.2 ,
     dropdown: [
      { id: 1, name: 'Centros de Salud',  link: '/atencion' },
      { id: 2, name: 'Portal',  link: '/portal' }
    ]
  },
  { id: 4, name: 'NOTICIAS',             link: '/noticias',  delay: 0.2 },
]

// ── ANIMACIÓN SLIDE DOWN ──────────────────────────────────────────
// Función que devuelve las variantes de framer-motion para que cada
// item del navbar entre cayendo desde arriba con un delay escalonado
const SlideDown = (delay = 0) => ({
  initial:  { y: -50, opacity: 0 },
  animate:  { y: 0,   opacity: 1, transition: { delay, duration: 0.5, ease: 'easeInOut' } },
  exit:     { y: -50, opacity: 0, transition: {        duration: 0.5, ease: 'easeInOut' } },
})

const Navbar = () => {

  // true  → el menú hamburguesa está desplegado (móvil)
  // false → está cerrado
  const [menuOpen, setMenuOpen] = useState(false)

  // Guarda el ID del item cuyo dropdown está abierto
  // null → ningún dropdown está abierto
  // ej: 2 → el dropdown de "NOSOTROS" está abierto
  const [dropdownOpen, setDropdownOpen] = useState(null)

  // Detecta si es móvil al momento del render
  // En desktop el dropdown se maneja con :hover en el CSS (sin JS)
  // En móvil se maneja con click (con JS) porque :hover no existe en touch
  const isMobile = window.innerWidth <= 768

  // ── TOGGLE DROPDOWN (solo móvil) ─────────────────────────────
  // Recibe el id del item clickeado:
  //   · Si ese id ya está abierto  → lo cierra (null)
  //   · Si es un id diferente      → abre ese, cierra el anterior
  // En desktop esta función no hace nada (el hover del CSS lo controla)
  const handleDropdown = (id) => {
    if (isMobile) {
      setDropdownOpen(dropdownOpen === id ? null : id)
    }
  }

  return (
    <nav>
      <div className="navbar">

        {/* ── LOGO + TÍTULO ── */}
        <div className="navbar-brand">
          <Link to="/principal">
            <motion.img
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              src={logo}
              alt="logo-png"
              className="logo-png"
            />
          </Link>

          <div className="navbar-title">
            <motion.span className="navbar-title-main" variants={SlideDown(0.5)} initial="initial" animate="animate" exit="exit">
              Hospital PNP
            </motion.span>
            <motion.span className="navbar-title-sub" variants={SlideDown(0.6)} initial="initial" animate="animate" exit="exit">
              Hospital Nacional PNP "Luis N. Sáenz"
            </motion.span>
          </div>
        </div>

        {/* ── BOTÓN HAMBURGUESA (solo móvil) ──
            Alterna entre ícono de menú (≡) e ícono de cerrar (✕)
            según el estado menuOpen */}
        <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <RiCloseLine size={26} /> : <RiMenu3Line size={26} />}
        </button>

        {/* ── MENÚ PRINCIPAL ──
            En desktop siempre visible (CSS lo controla)
            En móvil solo visible cuando menuOpen = true (clase "open") */}
        <div className={`menu ${menuOpen ? 'open' : ''}`}>
          <ul className="lista">

            {NavbMenu.map((menu) => (
              <motion.li
                key={menu.id}
                // "has-dropdown"    → activa los estilos de submenú en desktop (:hover en CSS)
                // "dropdown-active" → clase extra por si quieres estilos cuando está abierto
                className={`
                  ${menu.dropdown ? 'has-dropdown' : ''}
                  ${dropdownOpen === menu.id ? 'dropdown-active' : ''}
                `}
                variants={SlideDown(menu.delay)}
                initial="initial"
                animate="animate"
                exit="exit"
              >

                {/* ── ITEM PRINCIPAL ──────────────────────────────────
                    · Con dropdown → usa <span> (no navega, solo abre submenú)
                    · Sin dropdown → usa <Link> (navega y cierra menú móvil) */}
                {menu.dropdown ? (

                  // CASO CON DROPDOWN: click llama a handleDropdown
                  // que abre o cierra el submenú en móvil
                  <span onClick={() => handleDropdown(menu.id)}>
                    {menu.name}
                    {/* Flecha ▾ que rota 180° cuando el dropdown está abierto
                        la rotación se maneja con la clase "open" en el CSS */}
                    <span className={`arrow ${dropdownOpen === menu.id ? 'open' : ''}`}>▾</span>
                  </span>

                ) : (

                  // CASO SIN DROPDOWN: navega a la ruta y cierra el menú móvil
                  <Link to={menu.link} onClick={() => setMenuOpen(false)}>
                    {menu.name}
                  </Link>

                )}

                {/* ── SUBMENÚ (dropdown) ──────────────────────────────
                    Solo se renderiza si el item tiene la propiedad "dropdown"
                    · Desktop → se muestra con :hover (CSS), la clase "open" no importa
                    · Móvil   → se muestra solo cuando dropdownOpen === menu.id
                                lo que agrega la clase "open" y el CSS lo despliega */}
                {menu.dropdown && (
                  <ul className={`dropdown ${dropdownOpen === menu.id ? 'open' : ''}`}>
                    {menu.dropdown.map((item) => (
                      <li key={item.id}>
                        {/* Al hacer click en un subitem:
                            1. setMenuOpen(false)   → cierra el menú hamburguesa
                            2. setDropdownOpen(null) → cierra el dropdown */}
                        <Link to={item.link} onClick={() => { setMenuOpen(false), setDropdownOpen(null) }} >
                          {item.name}
                        </Link>
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