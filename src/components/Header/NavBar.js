import CartWidget from '../Header/CartWidget';

const NavBar = () => {
  return (
    <nav className="nav__principal">
        <a href="https://www.google.com.ar/" className="enlaces enlace-activo">Inicio</a>
        <a href="https://www.google.com.ar/" className="enlaces">Estrenos</a>
        <a href="https://www.google.com.ar/" className="enlaces">Contacto</a>
        <CartWidget/>
    </nav>

  )
}

export default NavBar