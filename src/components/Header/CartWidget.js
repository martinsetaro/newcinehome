import {Link} from 'react-router-dom'
import { useContext } from 'react'
import { contexto } from '../AppContext/AppContext';






const CartWidget = () => {


const {cantidad_total} =  useContext(contexto);



  return (
    <div className='indicadorCantidadProductos'>
   <Link to="/carrito"><span className="material-icons-outlined">
shopping_cart
</span></Link> 
<p className='spanIndicador'>{cantidad_total}</p>
</div>
  )
}

export default CartWidget