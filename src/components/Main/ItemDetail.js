




const ItemDetail = ({nombre,imagen,info,precio}) => {



  return (
    <div className="descripcion_item">
      <div className="descripcion_item_imagen">
        <div className="descripcion_imagen">
          <img src={imagen} alt={nombre} title={nombre}/>
       </div>
      </div>
      <div className="card_informacion">
        <div className="card_info">
          <h2>{nombre}</h2>
          <p>{info}</p>
          <p className="card_info_protagonistas">Director: Robert Zemeckis - Protagonistas : Michael J. Fox - Christopher Lloyd</p>
          <h4>Año: 1985</h4>
        </div>
        <div className="precio_pago">
          <div className="titulo_precio">
          <h3>Valor ${precio}</h3>
          </div>
          <div className="boton_compra">
          <button className="btn_comprarPeli">Alquilar Pelicula</button>
</div>

        </div>

      </div>
    
    </div>
  )
}

export default ItemDetail