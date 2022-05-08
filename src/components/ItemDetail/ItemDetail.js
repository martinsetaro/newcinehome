
import ItemCount from '../ItemCount/ItemCount'
import React, {useState}  from "react";
import '../ItemDetail/itemDetail.scss'



const ItemDetail = ({pelicula}) => {
 
  const [contador,setContador]= useState(0)
 
 
 
  
  

  const addContador =(count)=>{

    setContador(count);
  }



  return (
    <div className="descripcion_item">
      <div className="descripcion_item_imagen">
        <div className="descripcion_imagen">
          <img src={pelicula.imagen} alt={pelicula.nombre} title={pelicula.nombre}/>
       </div>
      </div>
      <div className="card_informacion">
        <div className="card_info">
          <h2>{pelicula.nombre}</h2>
          <p>{pelicula.info}</p>
          <p className="card_info_protagonistas">Protagonistas: {pelicula.protagonistas}</p>
          <h4>Fecha de estreno: {pelicula.anio}</h4>
        </div>
        <div className="precio_pago">
          <div className="titulo_precio">
          <h3>Valor ${pelicula.precio}</h3>
          </div>
          <div className="boton_compra">
          <ItemCount stock={5} initial={0} addCounter={addContador}/>
          
</div>

        </div>

      </div>
    
    </div>
  )
}

export default ItemDetail