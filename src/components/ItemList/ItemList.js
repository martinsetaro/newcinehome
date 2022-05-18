
import Item from '../Item/Item'
import React from 'react'
import '../ItemList/itemList.scss'





const ItemList = ({nombre,imagen,peliculas}) => {

  

  return (
    <div className="cardPeliculas">
      <Item nombre={nombre} imagen={imagen} peliculas={peliculas}/>
      
    </div>
  )
}

export default ItemList