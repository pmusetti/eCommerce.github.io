import { React, useState, createContext } from "react";
import { itemAddedNotify } from "../utils/notifications"

export const contexto = createContext();
const { Provider } = contexto;

function CustomProvider({ children }) {

  const [carrito, setCarrito] = useState([])
  const [total, setTotal] = useState(0)
  const [checkout, setCheckout] = useState(false)

  const vaciarCarrito = () => {
    setCarrito([]);
    setTotal(0)
  }

  const getCarrito = () => {
    const newCarrito = [...carrito]
    vaciarCarrito()
    return newCarrito
  }

  const handleCart = (item, cantidad) => {
    let items = [...carrito]
    const itemFoundInCart = items.find(elem => elem.id === item.id)

    if (itemFoundInCart) {
      const index = items.indexOf(itemFoundInCart)
      items[index].qty += cantidad;
      items[index].stock -= cantidad;

    } else {
      item.qty = cantidad
      item.stock -= cantidad
      items.push(item)
      
    }
    setCarrito(items)
    setTotal(total + cantidad)
    itemAddedNotify()
    
  }

  const handleCheckout = () => {
    const state = checkout
    setCheckout(!state)
  }

 

  let contextValue = {
    products: carrito,
    cartItems: total,
    checkout: checkout,
    handleCheckout: handleCheckout,
    getCarrito: getCarrito,
    handleCart: handleCart
  }

  return (
    <Provider value={contextValue}>
      {children}
    </Provider>
  )
}

export default CustomProvider
