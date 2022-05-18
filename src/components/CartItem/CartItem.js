import React from 'react'
import { useContext } from 'react'
import { contexto } from '../AppContext/AppContext'
import {useState} from 'react'


const CartItem = ({carro}) => {

const {removeItem,cart} = useContext(contexto);



const valor = carro.item.precio * carro.quantity;


  return (
   
      
<div className="itemCarrito">
          <img src={carro.item.imagen} alt="" title=""/>
          <p>{carro.item.nombre}</p>
          <input type="number"  value={carro.quantity}/>
          <h3>${valor}</h3>
          <button  className="borrarItem" onClick={()=>{removeItem(carro.item.id)}}>Eliminar</button>
           </div>
  
  )
}

export default CartItem