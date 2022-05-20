import "../Cart/cart.scss";
import CartList from "../CartList/CartList";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { contexto } from "../AppContext/AppContext";
import { useState } from "react";
import { useEffect } from "react";

const Cart = () => {
  const { cart, carroVacio } = useContext(contexto);
  const [precioTotal,setPrecioTotal]= useState()


useEffect(()=>{
   let result=0;
  for(const carro of cart){
    
    let final = carro.quantity * carro.item.precio;
    result += final
  }

 setPrecioTotal(result)

},[cart])









  return (
    <div className="carritoCompras">
      <h2>Tus compras realizadas</h2>
      {cart.length === 0 && (
        <div>
          <h2>Carrito vacio</h2>
        </div>
      )}

      <div className="contenedorItemComprados">
        <CartList    carrito={cart} />

        <div className="botonesFinalizar">
          <h3 className="precioTotal">Precio Total:${precioTotal}</h3>

          <button
            onClick={() => {
              carroVacio();
            }}
            className="vaciarCart"
          >
            Vaciar Carrito
          </button>
          <Link to="/">
            <button className="volverInicio">
              {cart.length === 0 ? "comprar" : "seguir comprando"}
            </button>
          </Link>
          <Link to="/peliculas/finalizarCompra"><button className="finalizarCompra">Finalizar Compra</button></Link>
        </div>
      </div>
    </div>
  );
};

export default Cart;
