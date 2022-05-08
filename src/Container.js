import {Routes, Route} from 'react-router-dom';
import ItemDetailContainer from '../src/components/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from '../src/components/ItemListContainer/ItemListContainer';
import Contacto from './components/Contacto/Contacto';
import './estilo.scss';
import Cart from './components/Cart/Cart';





const Container = () => {
  return (
    <main className='main'>
      <Routes>
        <Route path="/" element={<ItemListContainer/>}/>
        <Route path="/pelicula/:id" element={<ItemDetailContainer/>}/>
        <Route path="/peliculas/categoria/:id" element={<ItemListContainer/>}/>
        <Route path="/carrito" element={<Cart/>}></Route>
       <Route path="/contacto" element={<Contacto/>}/>
      </Routes>
    </main>
  )
}

export default Container