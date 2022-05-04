import {Routes, Route} from 'react-router-dom';
import ItemDetailContainer from './components/Main/ItemDetailContainer';
import ItemListContainer from './components/Main/ItemListContainer';
import Contacto from './components/Contacto/Contacto';
import './estilo.scss';





const Container = () => {
  return (
    <main className='main'>
      <Routes>
        <Route path="/" element={<ItemListContainer/>}/>
        <Route path="/pelicula/:id" element={<ItemDetailContainer/>}/>
        <Route path="/peliculas/categoria/:id" element={<ItemListContainer/>}/>
       <Route path="/contacto" element={<Contacto/>}/>
      </Routes>
    </main>
  )
}

export default Container