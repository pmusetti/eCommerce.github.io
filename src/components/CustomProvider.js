import { React, useState, createContext } from "react";
import { itemAddedNotify } from "../utils/notifications"

export const contexto = createContext();
const { Provider } = contexto;

function CustomProvider({ children }) {

  const [carrito, setCarrito] = useState([])
  const [itemsInCart, setItemsInCart] = useState(0)
  const [order, setOrder] = useState([]);
  const deleteCart = () => {
    setCarrito([]);
    setItemsInCart(0)
  }

  const getCarrito = () => {
    const newCarrito = [...carrito]
    deleteCart()
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
    setItemsInCart(itemsInCart + cantidad)
    itemAddedNotify()

  }

  const deleteItem = (item) => {
    let totalInCart = 0
    const newCarrito = carrito.filter((elem) => {

      if (elem.id !== item.id) {
        totalInCart += elem.qty
        return elem
      }

    })
    setCarrito(newCarrito)
    setItemsInCart(totalInCart)
  }

  let contextValue = {
    products: carrito,
    cartItems: itemsInCart,
    order: order,
    deleteItem: deleteItem,
    setOrder: setOrder,
    getCarrito: getCarrito,
    deleteCart: deleteCart,
    handleCart: handleCart
  }

  return (
    <Provider value={contextValue}>
      {children}
    </Provider>
  )
}

export default CustomProvider
