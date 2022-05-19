import React from 'react'
import { useContext } from 'react'
import { contexto } from '../AppContext/AppContext'



const CartItem = ({carro}) => {

const {removeItem} = useContext(contexto);



const valor = carro.item.precio * carro.quantity;


  return (
   
      
<div className="itemCarrito">
          <img src={carro.item.imagen} alt={carro.item.nombre} title={carro.item.nombre}/>
          <p>{carro.item.nombre}</p>
          <input type="number"  value={carro.quantity}/>
          <h3>${valor}</h3>
          <button  className="borrarItem" onClick={()=>{removeItem(carro.item.id)}}>Eliminar</button>
</div>
  
  )
}

export default CartItem