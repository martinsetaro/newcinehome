import {Routes, Route} from 'react-router-dom';
import ItemDetailContainer from '../src/components/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from '../src/components/ItemListContainer/ItemListContainer';
import Contacto from './components/Contacto/Contacto';
import './estilo.scss';
import Cart from './components/Cart/Cart';
import FinalCompra from './components/FinalCompra/FinalCompra';





const Container = () => {
  return (
    <main className='main'>
      <Routes>
        <Route path="/" element={<ItemListContainer/>}/>
        <Route path="/pelicula/:id" element={<ItemDetailContainer/>}/>
        <Route path="/peliculas/categorias/:id" element={<ItemListContainer/>}/>
        <Route path="/peliculas/finalizarCompra" element={<FinalCompra/>}/>
        <Route path="/carrito" element={<Cart/>}></Route>
       <Route path="/contacto" element={<Contacto/>}/>
      </Routes>
    </main>
  )
}

export default Container