import ItemDetail from "./ItemDetail";
import React, {useState, useEffect} from "react"
import Peliculas from "../../mock/Peliculas";
import FadeLoader from "react-spinners/FadeLoader";
import { useParams } from "react-router-dom";


const ItemDetailContainer = () => {
    const [peliculas , setPeliculas] = useState([]);
    const [cargando , setCargando] = useState(true);
    let [color, setColor] = useState("#ffab23");

    const {id}= useParams();
    const tit = id - 1;

    

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
      
      <div className="listDetailContainer">
        <ItemDetail nombre={peliculas[`${tit}`].nombre} imagen={peliculas[`${tit}`].imagen} precio={peliculas[`${tit}`].precio} info={peliculas[`${tit}`].info}
        protagonistas={peliculas[`${tit}`].protagonistas} anio={peliculas[`${tit}`].anio} />
    </div>
  )
}

export default ItemDetailContainer