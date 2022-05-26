import React, { useState } from "react";
import { Link } from "react-router-dom";
import '../ItemCount/itemCount.scss'
import { Toaster, toast } from "react-hot-toast";







const ItemCount = ({ stock, initial, addCounter }) => {
 
  const [mostrarContador, setMostrarContador] = useState(true);

  const stockP = parseInt(stock);
  const initialP = parseInt(initial);

  const [count, setCount] = useState(initial);

  const subirCantidad = () => {
    if (count >= stockP) {
    } else setCount(count + 1);
  };

  const bajarCantidad = () => {
    if (count > initialP) {
      setCount(count - 1);
    }
  };

  const modificarContador = () => {
    toast.success("Añadido a carrito")
    addCounter(count);
    setMostrarContador(false)
    
    
  };
  return (
    <div className="contenidoCounter">
      {mostrarContador ? (
        <div className="counter">
          <div className="counter__entradas">
            <button className="btn" onClick={subirCantidad}>
              +
            </button>
            <p>{count}</p>
            <button className="btn" onClick={bajarCantidad}>
              -
            </button>
          </div>
          <button onClick={modificarContador} className="btn_comprar">
            Añadir Carrito
           
          </button>
        </div>
      ) : (
        <div className="botonInicio">
          <Toaster/>
          <button className="btn_inicio">
            <Link to="/">Volver a comprar</Link>
          </button>
          <button className="btn_inicio">
            <Link to="/carrito">Ir a carrito</Link>
          </button>
        </div>
      )}
    </div>
  );
};

export default ItemCount;
