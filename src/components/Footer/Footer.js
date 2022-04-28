import { Link } from "react-router-dom"
import ItemDetailContainer from "../Main/ItemDetailContainer"
import '../Footer/footer.scss'

const Footer = () => {




  return (

    <div className="footer">
        <div className="footer__logo">
            <h2>Cine Home</h2>
        </div>
        <div className="footer__links">
    
            <h3><span class="material-symbols-outlined">
            support_agent
            </span>Movil : +545 2612572051</h3>
          </div>
    </div>
  )
}

export default Footer