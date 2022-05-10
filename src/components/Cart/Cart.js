import '../Cart/cart.scss'
import CartList from "../CartList/CartList";
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { contexto } from '../AppContext/AppContext';
import { useState } from 'react';


const Cart = () => {


const {cart} = useContext(contexto);


  

  return (
    
    <div className="carritoCompras">
        <h2>Tus compras realizadas</h2>
        <h2>Carrito vacio</h2>
         <CartList carrito={cart}/>
   
    <div className="botonesFinalizar">
    <h3 className="precioTotal">Precio Total:$ 300</h3>
    <button className="vaciarCart">Vaciar Carrito</button>
  <Link to="/"><button className="volverInicio">Seguir Comprando</button></Link>
  <button className="finalizarCompra">Finalizar Compra</button>
  </div>
  </div>
  
  )
}

export default Cart