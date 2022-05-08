import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import FadeLoader from "react-spinners/FadeLoader";
import Peliculas from '../../mock/Peliculas';
import '../Main/main.scss';
import ItemList from './ItemList';



const data= Peliculas;

const ItemListContainer = ({name}) => {


  const [peliculas,setPeliculas] = useState([])
  const [cargando , setCargando] = useState(true)
    let [color, setColor] = useState("#ffab23");
    const {id}= useParams();


  useEffect(()=>{
    const promesa = new Promise((resolve,reject)=>{
      setTimeout(()=>{
        if(id){
          let peliculasFiltradas=Peliculas.filter((item)=> item.genero === id);
          resolve(peliculasFiltradas);
        }
        resolve(Peliculas);
},2000)
  })
  
  promesa.then((pelicula) =>{
    setCargando(false);
    setPeliculas(pelicula)
  })

  },[id,peliculas])
  


   


  
  if(cargando){
    return(
      <div className="contenedor_cargando">
        <FadeLoader color={color} size={240}/>   
      </div>
    )}
  return ( 
      <div className="listContainer">
        <div className="selectores">
          <h2>Generos</h2>
        <Link to={`/peliculas/categoria/accion`}><h3>Accion</h3></Link>
        <Link to={`/peliculas/categoria/drama`}><h3>Drama</h3></Link>
        <Link to={`/peliculas/categoria/ciencia ficcion`}><h3>Ciencia Ficcion</h3></Link>
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