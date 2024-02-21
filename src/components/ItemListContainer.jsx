import React from 'react'

function ItemListContainer({className}) {
  return (
    <>
    <div className='itemListContainer d-none d-md-block'>
        <ul id="itemsContainer"className={className}>
            <li>Inicio</li>
            <li>Servicios</li>
            <li>Shop</li>
            <li>Pedidos</li>
            <li>Delivery</li>
        </ul>
    </div>
    </>
  )
}

export default ItemListContainer
