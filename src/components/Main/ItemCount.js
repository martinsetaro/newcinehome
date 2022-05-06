import React, { useState } from 'react';



const ItemCount = ({stock,initial}) => {

    const stockP = parseInt(stock);
    const initialP = parseInt(initial);

    
    const [count, setCount] = useState(0);

    const subirCantidad = ()=>{
      if(count >= stockP){}
      else setCount(count+1)
     }

     const bajarCantidad = ()=>{
         if(count > initialP){
             setCount(count-1)
         }
        }
 return (
    <div className='counter'>
        <div className='counter__entradas'>
         <button className='btn' onClick={subirCantidad}>+</button>
        <p>{count}</p>
        <button className='btn' onClick={bajarCantidad}>-</button>
        </div>
        <button className='btn_comprar'>Añadir Carrito</button>
    </div>
  )
}

export default ItemCount;










