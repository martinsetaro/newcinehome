import { contexto } from "../AppContext/AppContext"
import { useContext } from "react";
import { useState } from "react";
import FadeLoader from "react-spinners/FadeLoader";







const Cart = () => {
const {precio_total, carrito} = useContext(contexto);
const [cargando, setCargando] = useState(true);
let [color, setColor] = useState("#ffab23");


setTimeout(()=>{
    setCargando(false);
},1000)


if(cargando){
    return(
        <div className="contenedor_cargando">
          <FadeLoader color={color} size={240}/>   
        </div>
      )
}

  return (
    <div>
        <h2>Carrito</h2>
        <h3>Precio Total: ${precio_total}</h3>
    </div>
  )
}

export default Cart