import '../Main/itemList.scss';
import ItemList from './ItemList';
import React,{useState,useEffect} from 'react'
import Peliculas from '../../mock/Peliculas'




const ItemListContainer = () => {


  const [peliculas,setPeliculas] = useState([])


  useEffect(()=>{
  
      const promesa = new Promise((resolve) => {
            setTimeout(()=>{
                 resolve(Peliculas)
                  console.log("Descarga exitosa")
                 },2000)
  })
    
     
  
      setTimeout(()=>{
  setPeliculas(Peliculas)
      },2000);
  
  
  },[]);






  return (
      
      <div className="listContainer">
    {peliculas.map(pelicula =>
        <ItemList nombre={pelicula.nombre} imagen={pelicula.imagen} info={pelicula.info} key={pelicula.id}/>
    )}
   
</div>
  )
}
      
export default ItemListContainer;