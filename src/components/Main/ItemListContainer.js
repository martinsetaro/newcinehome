import '../Main/itemList.scss';
import ItemCount from '../Main/ItemCount';


const ItemListContainer = (props) => {
  return (
      
      <div className="listContainer">
   <h2>{props.name}</h2>
   <ItemCount stock='5' initial='1'/>
   </div>
   
   
  )
}

export default ItemListContainer;