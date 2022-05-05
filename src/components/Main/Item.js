import { Link } from "react-router-dom"




const Item = ({nombre,imagen,peliculas}) => {




  return (
    <div className="cardPeliculas" >
     
        <h2>{nombre}</h2>
        <img src={imagen} alt={nombre}/>
       <Link to={`/pelicula/${peliculas.id}`}><button className="btn_comprarPeli">Detalle</button></Link>    

        
            
          
        
        
        
    </div>
  )
}

export default Item






  