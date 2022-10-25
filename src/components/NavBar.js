import React, {useState} from 'react'
import CartWidget from './CartWidget'


function NavBar() {
 const [cartItems, setCartItems] = useState(0)
 let addItem = () => {
  setCartItems(cartItems + 1)
 }
 let subItem = () => {
  setCartItems(cartItems - 1)
 }
  return (
    <div id='navbar'>
      <a href='#'>RESTÓ</a>
      <a href='#'>MARKET</a>
      <a href='#'>FARMA</a>
      <a href="#">
        <CartWidget
        cartItems={cartItems}
        />
      </a>
      <button
      onClick={addItem}>Add +
      </button>
      <button
      onClick={subItem}>Sub -</button>
    </div>
  )
}

export default NavBar
