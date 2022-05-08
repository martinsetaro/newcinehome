import ItemDetailContainer from "./components/Main/ItemDetailContainer"
import ItemListContainer from '../src/components/Main/ItemListContainer'
import ItemDetail from "./components/Main/ItemDetail";
import './estilo.scss';
import Cart from "./components/Cart/Cart";


const Main = () => {
  return (
      <>
      <ItemDetail/>
      <ItemDetailContainer/>
      <ItemListContainer/>
      <Cart/>
      
      
    </>
   
  )
}

export default Main