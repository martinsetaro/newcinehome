

const Item = ({nombre,imagen,info}) => {
  return (
    <div className="cardPeliculas">
        <h2>{nombre}</h2>
        <img src={imagen} alt={nombre}/>
        <p className="cardPeliculas-info">{info}</p>
        
    </div>
  )
}

export default Item






  