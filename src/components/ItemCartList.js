
import { React, useContext } from 'react'
import ItemCart from './ItemCart';
import Form from './Form';
import Resume from './Resume'
import { contexto } from '../components/CustomProvider'
import { NavLink } from "react-router-dom";

function ItemCartList({ products }) {
  const context = useContext(contexto)
  const handleDelete = context.deleteCart
  const carrito = context.products

  return (
    <>
      <div className='mainCart--container'>

        <div className='itemsCart--container'>
          {
            products.map((prod) => {
              return <ItemCart key={prod.id} product={prod} />
            })
          }
          <div className='emptyCart--msg'>
            {
            carrito.length !== 0 ?  <button className='deleteCart' onClick={handleDelete}>Vaciar carrito</button> :<NavLink to="/" id='msg'>
            <h2>Carrito vacio! Vamos a llenarlo</h2>
          </NavLink>
            }

          </div>

        </div>
        <div className='resume--container'>
          <Resume />
          <Form />
        </div>
      </div>
    </>
  )
}

export default ItemCartList
