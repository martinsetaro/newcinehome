import {Link , useParams} from 'react-router-dom'






const Seleccion = ({pelicula}) => {


const {category} = useParams()




  return (
<div className='seleccion_genero'>
    <Link to={`/pelicula/${pelicula.genero}`}><h3>Accion</h3></Link>
    <Link to={`/pelicula/${pelicula.category}`}><h3>Drama</h3></Link>
    <Link to={`/pelicula/${pelicula.category}`}><h3>Ciencia Ficcion</h3></Link>
    





</div>
  )
}

export default Seleccion