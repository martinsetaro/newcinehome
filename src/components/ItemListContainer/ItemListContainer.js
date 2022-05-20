import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import FadeLoader from "react-spinners/FadeLoader";
import ItemList from '../ItemList/ItemList';
import '../ItemListContainer/itemListContainer.scss'
import {db} from '../../FireBase/FireBase'
import { collection,query,where,getDocs} from 'firebase/firestore';


const ItemListContainer = () => {


  const [peliculas,setPeliculas] = useState([])
  const [cargando , setCargando] = useState(true)
  const {id}= useParams();



  useEffect(()=>{

    if(id == undefined){
        const productosCollection = collection(db,"Peliculas");
        const datos = getDocs(productosCollection);

    datos
    .then((resultado)=>{
        const result = resultado.docs.map(res => res.data()
        )
        setCargando(false)
        setPeliculas(result)
    })
    .catch((error)=>{})
    .finally(()=>{})
  }
  else{
       const productosCollection = collection(db,"Peliculas");
       const data = query(productosCollection,where('genero','==',id));
       const datos = getDocs(data)
    datos
    .then((resultado)=>{
      const result = resultado.docs.map(res => res.data()
        )
        
        setCargando(false)
        setPeliculas(result)
    })
    .catch((error)=>{})
    .finally(()=>{})




  }




  },[id])
   

  

  
  if(cargando){
    return(
      <div className="contenedor_cargando">
        <FadeLoader color={"#ffab23"} size={240}/>   
      </div>
    )}
  return ( 
      <div className="listContainer">
        <div className="selectores">
          <h2>Generos</h2>
        <Link to={`/peliculas/categorias/accion`}><h3>Accion</h3></Link>
        <Link to={`/peliculas/categorias/drama`}><h3>Drama</h3></Link>
        <Link to={`/peliculas/categorias/ciencia ficcion`}><h3>Ciencia Ficcion</h3></Link>
          </div>
        <div className='contenedor_peliculas'>
         
    {peliculas.map(pelicula =>
        <ItemList nombre={pelicula.nombre} imagen={pelicula.imagen} info={pelicula.imagen} key={pelicula.id} peliculas={pelicula} />
        
        
    )}
 
    
    </div>
   
</div>
  )
}
      
export default ItemListContainer;