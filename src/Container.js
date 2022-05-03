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
        <Route path="/pelicula/:accion" element={<ItemListContainer/>}/>
        <Route path="/pelicula/:drama" element={<ItemListContainer/>}/>
        <Route path="/pelicula/:cienciaficcion" element={<ItemListContainer/>}/>
        
        <Route path="/contacto" element={<Contacto/>}/>
      </Routes>
    </main>
  )
}

export default Container