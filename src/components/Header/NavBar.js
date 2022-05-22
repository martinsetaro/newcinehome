import CartWidget from '../Header/CartWidget';
import { Link} from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="nav__principal">
        <Link to="/" className='nav__link'>Inicio</Link>
        <a href="https://www.sensacine.com/peliculas/estrenos/es/" rel="nofollow noopener noreferrer" target="_blank" className="enlaces">Estrenos</a>
        <Link to="/contacto" className="enlaces">Contacto</Link>
        <CartWidget/>
    </nav>

  )
}

export default NavBar