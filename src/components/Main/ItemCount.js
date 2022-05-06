import React, { useState } from 'react';
import {Link} from 'react-router-dom';



const ItemCount = ({stock,initial,addCounter}) => {

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

const modificarContador=()=>{
  addCounter(count);
  let deleteCounter=document.querySelector('.counter');
  let botonInicio=document.querySelector('.btn_inicio');
  deleteCounter.remove();
  botonInicio.style.display='block';

  
  
}


 return (
    <div className='contenidoCounter'>
      <div className='counter'>
           <div className='counter__entradas'>
           <button className='btn' onClick={subirCantidad}>+</button>
          <p>{count}</p>
          <button className='btn' onClick={bajarCantidad}>-</button>
          </div>
         <button onClick={modificarContador} className='btn_comprar'>Añadir Carrito</button>
      </div>
        <div className='botonInicio'>
       <button className='btn_inicio'><Link to="/">Volver a comprar</Link></button>
        </div>
  </div>
  )
}

export default ItemCount;










