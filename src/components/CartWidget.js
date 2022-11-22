import { React, useContext } from 'react'
import { contexto } from '../components/CustomProvider'

function CartWidget() {
 
    const resultado = useContext(contexto)

    return (
        <>
            <span className="material-symbols-outlined">
                shopping_cart
            </span>
            <span>{resultado.cartItems}</span>
            
        </>



    )
}

export default CartWidget
