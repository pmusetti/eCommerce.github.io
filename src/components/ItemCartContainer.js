import { React, useContext } from 'react'
import { contexto } from '../components/CustomProvider'
import ItemCartList from './ItemCartList';

function ItemCartContainer() {
  const context = useContext(contexto)
  const products = context.products
  const checkout = context.checkout
  const handleCheckout = context.handleCheckout


  return (
    <>
      <ItemCartList products={products} handleCheckout={handleCheckout} />
      {checkout == false ? <p>false</p> : <p>true</p>}
    </>
  );

}

export default ItemCartContainer
