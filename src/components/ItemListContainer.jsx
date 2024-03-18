import React from 'react'

function ItemListContainer({greeting}) {
  return (
    <>
      <div className='text-center py-1 bg-warning fw-bold'>
        <p>{greeting}</p>
      </div>
    </>
  )
}

export default ItemListContainer
