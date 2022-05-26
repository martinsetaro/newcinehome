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
        const result = resultado.docs.map((documento) => (   {id:documento.id, ...documento.data()})  
        )
        setCargando(false)
        setPeliculas(result)
    })
    .catch((error)=>{
      console.log(error)
    })
    .finally(()=>{})
  }
  else{
       const productosCollection = collection(db,"Peliculas");
       const data = query(productosCollection,where('genero','==',id));
       const datos = getDocs(data)
    datos
    .then((resultado)=>{
      const result = resultado.docs.map((documento) => ({id:documento.id, ...documento.data()})
        )
        
        setCargando(false)
        setPeliculas(result)
    })
    .catch((error)=>{
      console.log(error)
    })
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
        <div className='informacionPagina'>
          <h2>Disfruta desde la comodidad de tu casa los mejores titulos más afamados de los 80 y 90</h2>
          <h3>Titulos originales en formato Blue-Ray y DVD</h3>
          <div className='informacion_pago'>
            <div className='box'>
            <span class="material-symbols-outlined">
shopping_cart
</span>
<h3>Selecciona tu pelicula favorita y agregala al carrito de compras</h3>
            </div>
            <div className='box'>
            <span class="material-symbols-outlined">
payments
</span>
<h3>Dirigete al carrito de compras y verifica que tus compras sean las que elegistes</h3>
            </div>
            <div className='box'>
            <span class="material-symbols-outlined">
receipt_long
</span>
<h3>Finaliza la compra, confirma tus datos y listo!</h3>
            </div>
          </div>
        </div>
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