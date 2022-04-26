
import Item from './Item'

const ItemList = ({nombre,imagen,info}) => {



  return (
    <div className="cardPeliculas">
      <Item nombre={nombre} imagen={imagen} info={info}/>
    </div>
  )
}

export default ItemList