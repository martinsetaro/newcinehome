import CartWidget from "./CartWidget"

const NavBar = () => {
  return (
    <nav className="nav__principal">
        <a href="#" className="enlaces enlace-activo">Inicio</a>
        <a href="#" className="enlaces">Estrenos</a>
        <a href="#" className="enlaces">Contacto</a>
        <CartWidget/>
    </nav>

  )
}

export default NavBar