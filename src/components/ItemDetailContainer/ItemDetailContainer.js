import ItemDetail from "../ItemDetail/ItemDetail";
import React, {useState, useEffect} from "react"
import Peliculas from "../../mock/Peliculas";
import FadeLoader from "react-spinners/FadeLoader";
import { useParams } from "react-router-dom";
import '../ItemDetailContainer/itemDetailContainer.scss'
import {db} from '../../FireBase/FireBase'


const ItemDetailContainer = () => {
    const [pelicula , setPelicula] = useState([]);
    const [cargando , setCargando] = useState(true);
    let [color, setColor] = useState("#ffab23");
    const {id} = useParams();

    console.log(id);

    

    useEffect(()=>{

      const promesa = new Promise((resolve) => {
        setTimeout(()=>{
          let peliculaFiltrada=Peliculas.filter((item)=> item.id == id);
          console.log(peliculaFiltrada);
          resolve(peliculaFiltrada);
          
            console.log("Descarga exitosa")
        },2000)
      })
      promesa.then((data)=>{
         setCargando(false)
          setPelicula(data)
      } )
       
  
    },[id,pelicula])

   
  
if(cargando){
  return(
    <div className="contenedor_cargando">
      <FadeLoader color={color} size={240}/>   
    </div>
  )}




    return (
      
      <div className="listDetailContainer">
        <ItemDetail pelicula={pelicula[0]}/>
        
    </div>
  )
}

export default ItemDetailContainer