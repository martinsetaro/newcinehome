import ItemDetail from "../ItemDetail/ItemDetail";
import React, {useState, useEffect} from "react"
import FadeLoader from "react-spinners/FadeLoader";
import { useParams } from "react-router-dom";
import '../ItemDetailContainer/itemDetailContainer.scss'
import {db} from '../../FireBase/FireBase'
import { collection,query,where, getDocs} from "firebase/firestore";


const ItemDetailContainer = () => {
    const [pelicula , setPelicula] = useState([]);
    const [cargando , setCargando] = useState(true);
   const {id} = useParams();

   useEffect(()=>{
    const productosCollection = collection(db,'Peliculas');
    const data = query(productosCollection,where('id','==',id));
    const datos = getDocs(data)
    datos
    .then((resultado)=>{
      const result = resultado.docs.map(res => res.data()
        )
        
        setCargando(false)
        setPelicula(result)
    })
    .catch((error)=>{})
    .finally(()=>{})

   },[id])


      
   
  
if(cargando){
  return(
    <div className="contenedor_cargando">
      <FadeLoader color={"#ffab23"} size={240}/>   
    </div>
  )}

    return (
      
      <div className="listDetailContainer">
        <ItemDetail pelicula={pelicula[0]}/>
        
    </div>
  )
}

export default ItemDetailContainer