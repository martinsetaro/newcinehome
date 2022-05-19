import '../Header/header.scss';
import NavBar from '../Header/NavBar';
import {Link} from 'react-router-dom';


const Header = () => {
  return (
  <div className="header">
  <Link to="/"><h1 className="header__text-logo" title="Cine Home" alt="Cine Home">Cine Home</h1></Link>
      
      <NavBar/>
      </div>
      
      
  )
}

export default Header;