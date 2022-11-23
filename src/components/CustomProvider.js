import { React, useState, createContext } from "react";
import { itemAddedNotify } from "../utils/notifications"

export const contexto = createContext();
const { Provider } = contexto;

function CustomProvider({ children }) {

  const [carrito, setCarrito] = useState([])
  const [total, setTotal] = useState(0)

  const vaciarCarrito = () => {
    setCarrito([]);
    setTotal(0)
  }

  const handleCart = (item, cantidad) => {

    const itemFoundInCart = carrito.find(elem => elem === item)
    let items = carrito

    if (itemFoundInCart) {
      const index = items.indexOf(item)
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

 

  let contextValue = {
    products: carrito,
    cartItems: total,
    vaciarCarrito: vaciarCarrito,
    handleCart: handleCart
  }

  return (
    <Provider value={contextValue}>
      {children}
    </Provider>
  )
}

export default CustomProvider
