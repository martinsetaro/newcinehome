import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer"
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetail from "./components/ItemDetail/ItemDetail";
import './estilo.scss';
import Cart from "./components/Cart/Cart";
import FinalCompra from "./components/FinalCompra/FinalCompra";


const Main = () => {
  return (
      <>
      <ItemDetail/>
      <ItemDetailContainer/>
      <ItemListContainer/>
      <FinalCompra/>
      <Cart/>
      
      
    </>
   
  )
}

export default Main