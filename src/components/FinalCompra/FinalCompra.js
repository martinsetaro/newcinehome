import React from 'react'
import '../FinalCompra/finalCompra.scss'
import { useState, useEffect } from 'react';
import { db } from '../../FireBase/FireBase';
import { addDoc, collection } from 'firebase/firestore';
import { useContext } from 'react';
import { contexto } from '../AppContext/AppContext';
import {Link} from 'react-router-dom'


const FinalCompra = () => {

    const [nombreTicket,setNombreTicket]= useState();
    const [telefonoTicket,setTelefonoTicket]= useState();
    const [correoTicket,setCorreoTicket]= useState();
    const [precioTotal,setPrecioTotal] = useState();
    const [idReferencia,setIdReferencia] = useState();
    const [mostrar,setMostrar]=useState(true)
    const {cart,carroVacio} = useContext(contexto)

    useEffect(()=>{
        let result=0;
       for(const carro of cart){
         
         let final = carro.quantity * carro.item.precio;
         result += final
       }
     
      setPrecioTotal(result)
     
     },[cart])


const entradaNombre=(e)=>{
let nombre_ticket =e.target.value;
setNombreTicket(nombre_ticket)
}
const entradaTelefono=(e)=>{
let telefono_ticket =e.target.value;
setTelefonoTicket(telefono_ticket)
}
const entradaCorreo=(e)=>{
let correo_ticket =e.target.value;
setCorreoTicket(correo_ticket)
}
  

const guardarCompra=()=>{

const ordenesCollection = collection(db, "ordenes");
const orden = {
    buyer:{
        name:{nombreTicket},
        phone:{telefonoTicket},
        email:{correoTicket}
    },
    item:{cart},
    date:{fecha},
    total:{precioTotal}

    }


    const consulta = addDoc(ordenesCollection,orden)
    consulta 
    .then((resultado)=>{
     setIdReferencia(resultado.id)
    })
    .catch((err)=>{
   console.log(err)
    })

       setMostrar(false)
}

    let fecha = new Date();
    let day = fecha.getDay();
    let mes = fecha.getMonth();
    let anio = fecha.getFullYear();







  return (
    <div className='contenedor'>
       {mostrar ? (
       <form className='formulario'>
        <h2>Confirmación de datos</h2>
       <label id="nombre">Nombre:</label>
       <input onChange={entradaNombre} type="text" placeholder="Nombre" name='nombre'/>
       <label>Telefono:</label>
       <input onChange={entradaTelefono} type="number" placeholder="Telefono"/>
       <label>Correo Electronico:</label>
       <input onChange={entradaCorreo} type="email" placeholder="Correo"/>
       <input type="submit" onClick={guardarCompra} value="Comprar"/>
</form>):(
<div className='productos_comprados'>
    <h2 className='titulo_ticket'>Gracias por tu compra!!</h2>
    <h3>Nombre:{nombreTicket}</h3>
    <h3>Telefono:{telefonoTicket}</h3>
    <h3>Correo:{correoTicket}</h3>
    <h3>Productos comprados:{cart.length}</h3>
    <h3 className='titulo_ticket'>Total pagado:$ {precioTotal}</h3>
    <h2>Fecha:{day}/0{mes}/{anio}</h2>
    <p>Numero Id: {idReferencia}</p>

<Link to="/"><button className='botonFinalizar' onClick={()=>{carroVacio()}}>ir a pagina principal</button></Link>
</div>)}

    </div>
  )
}

export default FinalCompra