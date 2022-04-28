




const Item = ({nombre,imagen,info}) => {


//   const [inform1, setIform1] = useState("");

//   function mostrar(e){

//     const seleccionImagen = e.target.parentElement.querySelector('h2').textContent;
    
 
//     setTimeout(()=>{
//     switch (seleccionImagen) {
//        case "Volver al futuro":
//          setIform1(Peliculas[0].info);
//          break;
//        case "El padrino":
//          setIform1(Peliculas[1].info);
//          break;
//        case "Rambo First Blood":
//          setIform1(Peliculas[2].info);
//          break;
 
 
//    }
//     },2000)
//  }
  


  return (
    <div className="cardPeliculas" >
     
        <h2>{nombre}</h2>
        <img src={imagen} alt={nombre}/>
        
        
        
    </div>
  )
}

export default Item






  