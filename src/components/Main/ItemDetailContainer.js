import ItemDetail from "./ItemDetail";
import React, {useState, useEffect} from "react"
import Peliculas from "../../mock/Peliculas";
import FadeLoader from "react-spinners/FadeLoader";


const ItemDetailContainer = () => {
    const [peliculas , setPeliculas] = useState([]);
    const [cargando , setCargando] = useState(true);
    let [color, setColor] = useState("#ffab23");

    

    useEffect(()=>{

      const promesa = new Promise((resolve) => {
        setTimeout(()=>{
          resolve(Peliculas)
            console.log("Descarga exitosa")
        },2000)
      })
      setTimeout(()=>{
        setCargando(false)
          setPeliculas(Peliculas)
      },2000)




    },[])

   
  
if(cargando){
  return(
    <div className="contenedor_cargando">
      <FadeLoader color={color} size={240}/>   
    </div>
  )}




    return (
      
      <div className="listContainer">
        <ItemDetail nombre={peliculas[0].nombre} imagen={peliculas[0].imagen} info={peliculas[0].info} precio={peliculas[0].precio} key={peliculas[0].id} />
    </div>
  )
}

export default ItemDetailContainer