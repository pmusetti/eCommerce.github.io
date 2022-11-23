import React from 'react'
import ItemCart from './ItemCart'

function ItemCartList({products}) {
  return (
    <>
    {
    products.map((prod) => {return <ItemCart key={prod.id} product={prod}/>})
    }
    <button>Comprar</button>
    </>
  )
}

export default ItemCartList
