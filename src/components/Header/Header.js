import '../Header/header.scss';
import NavBar from '../Header/NavBar';


const Header = () => {
  return (<>
  <div className="header">
      <h1 className="header__text-logo" title="Cine Home" alt="Cine Home">Cine Home</h1>
      <NavBar/>
      </div>
      </>
      
  )
}

export default Header;