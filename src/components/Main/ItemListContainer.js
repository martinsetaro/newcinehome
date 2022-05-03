import '../Main/main.scss';
import ItemList from './ItemList';
import React,{useState,useEffect} from 'react'
import Peliculas from '../../mock/Peliculas'
import FadeLoader from "react-spinners/FadeLoader";
import { Link, useParams } from 'react-router-dom';
import Seleccion from './Seleccion';


const data= Peliculas;

const ItemListContainer = ({name}) => {


  const [peliculas,setPeliculas] = useState([])
  const [cargando , setCargando] = useState(true);
    let [color, setColor] = useState("#ffab23");


  useEffect(()=>{
  
      const promesa = new Promise((resolve) => {

            setTimeout(()=>{
                 resolve(Peliculas)
                  console.log("Descarga exitosa")

 setCargando(false)   
  setPeliculas(Peliculas)

                 },2000)
  })
    
     
  
      
  
  
  },[]);

   


  
  if(cargando){
    return(
      <div className="contenedor_cargando">
        <FadeLoader color={color} size={240}/>   
      </div>
    )}
  return ( 
      <div className="listContainer">
        <div className="selectores">
           <Seleccion pelicula={peliculas}/>
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