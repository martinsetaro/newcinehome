import ItemDetailContainer from "./ItemDetailContainer"




const ItemDetail = ({nombre,imagen,info}) => {



  return (
    <div className="descripcion_peliculas">
       <h2>{nombre}</h2>
       <div className="imagen_peliculas">
        <img src={imagen} alt={nombre}/>
        </div>
        <p>{info}</p>
        <button className="btn_comprarPeli">Ver Pelicula</button>
    
    </div>
  )
}

export default ItemDetail