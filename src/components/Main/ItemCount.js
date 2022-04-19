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
        <h2>Terminator</h2>
        <img src="https://cdn.sincroguia.tv/uploads/programs/t/e/r/terminator-poster-3067_SPA-12_V.jpg" title='termi'/>
        <p className='counter__info'>En el año 2029 las máquinas dominan el mundo. Los rebeldes que luchan contra ellas tienen como líder a John Connor, un hombre que nació en los años ochenta.</p>
        <h3>Valor $300</h3>
        <p>Entradas</p>
        <div className='counter__entradas'>
         <button className='btn' onClick={subirCantidad}>+</button>
        <p>{count}</p>
        <button className='btn' onClick={bajarCantidad}>-</button>
        </div>
        <button className='btn_comprar'>Añadir</button>
    </div>
  )
}

export default ItemCount;










