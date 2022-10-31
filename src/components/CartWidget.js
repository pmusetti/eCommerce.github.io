import React from 'react'

function CartWidget({cartItems}) {
 

    return (
        <>
            <span className="material-symbols-outlined">
                shopping_cart
            </span>
            <span>{cartItems}</span>
            
        </>



    )
}

export default CartWidget
