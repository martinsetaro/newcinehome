
import { useParams } from "react-router-dom";



const ItemDetail = ({peliculas}) => {
  const { id } = useParams();
  const ides= id-1;



  return (
    <div className="descripcion_item">
      <div className="descripcion_item_imagen">
        <div className="descripcion_imagen">
          <img src={peliculas[ides].imagen} alt={peliculas[ides].nombre} title={peliculas[ides].nombre}/>
       </div>
      </div>
      <div className="card_informacion">
        <div className="card_info">
          <h2>{peliculas[ides].nombre}</h2>
          <p>{peliculas[ides].info}</p>
          <p className="card_info_protagonistas">Protagonistas: {peliculas[ides].protagonistas}</p>
          <h4>Fecha de estreno: {peliculas[ides].anio}</h4>
        </div>
        <div className="precio_pago">
          <div className="titulo_precio">
          <h3>Valor ${peliculas[ides].precio}</h3>
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