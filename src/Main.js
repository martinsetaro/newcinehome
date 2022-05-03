import ItemDetailContainer from "./components/Main/ItemDetailContainer"
import ItemListContainer from '../src/components/Main/ItemListContainer'
import ItemDetail from "./components/Main/ItemDetail";
import './estilo.scss';


const Main = () => {
  return (
      <>
      <ItemDetail/>
      <ItemDetailContainer/>
      <ItemListContainer/>
      
      
    </>
   
  )
}

export default Main