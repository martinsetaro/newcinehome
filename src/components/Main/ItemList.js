import React,{useState,useEffect} from 'react'
import Peliculas from '../../mock/Peliculas'
import Item from './Item'

const ItemList = () => {
const [peliculas,setPeliculas] = useState([])

// const promesa = new Promise((resolve) => {
    
//         resolve(Peliculas)
//         console.log("Descarga exitosa")
    
// })
    
    
    

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
      <div className='listadoItems'>
    {peliculas.map(pelicula =>(
        <Item nombre={pelicula.nombre} imagen={pelicula.imagen} info={pelicula.info} key={pelicula.id}/>
    ))}
   
</div>
  )
}

export default ItemList