import { React, useContext } from 'react'
import { contexto } from '../components/CustomProvider'
import ItemCartList from './ItemCartList';

function ItemCartContainer() {
  const context = useContext(contexto)
  const products = context.products


    return (
      <ItemCartList products ={ products } />
    );
  
}

export default ItemCartContainer
