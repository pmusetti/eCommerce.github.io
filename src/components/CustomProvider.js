import { React, useState, createContext } from "react";

export const contexto = createContext();
const { Provider } = contexto;

function CustomProvider( { children }) {

    const [carrito, setCarrito] = useState([])
  const [total, setTotal] = useState(0)

  const vaciarCarrito = () => {
    setCarrito([]);
    setTotal(0)
  }

  const agregarAlCarrito = (item, cantidad) => {
        //Verificar si el item esta en el carrito y agregar cantidad
        item.qty === undefined ? item.qty = cantidad : item.qty += cantidad;
        item.stock -= item.qty;
        let items = carrito;
        items.push(item)
        setCarrito(items)
        setTotal(total + cantidad)
        console.log(carrito)
  }

  let contextValue = {
    products : carrito,
    cartItems : total,
    vaciarCarrito: vaciarCarrito,
    agregarAlCarrito: agregarAlCarrito
  }

  return (
    <Provider value = {contextValue}>
        {children}
    </Provider>
  )
}

export default CustomProvider
