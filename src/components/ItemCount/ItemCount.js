import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { contexto } from "../AppContext/AppContext";
import '../ItemCount/itemCount.scss'






const ItemCount = ({ stock, initial, addCounter }) => {
  const { agregarProducto } = useContext(contexto);
  const [mostrarContador, setMostrarContador] = useState(true);

  const stockP = parseInt(stock);
  const initialP = parseInt(initial);

  const [count, setCount] = useState(0);

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
    agregarProducto(count);
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
          <button className="btn_inicio">
            <Link to="/">Volver a comprar</Link>
          </button>
        </div>
      )}
    </div>
  );
};

export default ItemCount;
