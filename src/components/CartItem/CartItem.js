import React from 'react'
import { useContext } from 'react'
import { contexto } from '../AppContext/AppContext'


const CartItem = ({carro}) => {

const {removeItem} = useContext(contexto);





  return (
   
      
<div className="itemCarrito">
          <img src={carro.item.imagen} alt="" title=""/>
          <p>{carro.item.nombre}</p>
          <input type="number" min="1" max="99" value={carro.quantity}/>
          <h3>${carro.item.precio}</h3>
          <button className="borrarItem">Eliminar</button>
           </div>
  
  )
}

export default CartItem