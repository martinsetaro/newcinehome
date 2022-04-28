import {Routes, Route} from 'react-router-dom';
import ItemDetailContainer from './components/Main/ItemDetailContainer';
import Contacto from './components/Contacto/Contacto';
import './estilo.scss';




const Container = () => {
  return (
    <main className='main'>
      <Routes>
        
        <Route path="/" element={<ItemDetailContainer/>}/>
        <Route path="/contacto" element={<Contacto/>}/>
      </Routes>
    </main>
  )
}

export default Container