import "../Cart/cart.scss";
import CartList from "../CartList/CartList";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { contexto } from "../AppContext/AppContext";
import { useState } from "react";

const Cart = () => {
  const { cart, carroVacio } = useContext(contexto);

  

 

  

  
  
  
  
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
          <h3 className="precioTotal">Precio Total:</h3>

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
          <button className="finalizarCompra">Finalizar Compra</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
