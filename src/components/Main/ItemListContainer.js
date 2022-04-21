import '../Main/itemList.scss';
import ItemList from './ItemList';




const ItemListContainer = (props) => {
  return (
      
      <div className="listContainer">
   <h2>{props.name}</h2>
  <ItemList/>
   
   </div>
   
   
  )
}

export default ItemListContainer;