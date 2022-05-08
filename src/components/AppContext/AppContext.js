import { createContext } from "react";
import { useState } from "react";




export const contexto = createContext();
const { Provider } = contexto;



const AppContext = ({children}) => {

    const [cantidad_total,setCantidad_total]= useState(0);
    const [precio_total,setPrecio_total]= useState(0);
    const [carrito,setCarrito]=useState([]);

    // aca creamos las funciones para enviar al componente.

const agregarProducto =(cantidad_total)=>{
    setCantidad_total(cantidad_total);
}

const eliminarProducto = ()=>{}

const vaciarCarrito = ()=>{
    setCarrito([])
}

const estaEnCarrito =()=>{}
//recorrer array con el find si es true no hace nada si es false se agrega.





   
const valorDelContexto = {

    cantidad_total,//estos son los useStates
    precio_total,//estos son los usesStates
    carrito,//estos son los usesStates
    agregarProducto,

}


    return (           //aca va la constante con las variables que voy a utilizar.
        <Provider value={valorDelContexto}> 
            {children}
        </Provider>
    );
}

export default AppContext;