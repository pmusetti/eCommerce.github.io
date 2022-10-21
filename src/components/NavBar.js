import React from 'react'
import CartWidget from './CartWidget'


function NavBar() {
  return (
    <div id='navbar'>
        <a href='#'>RESTÓ</a>
        <a href='#'>MARKET</a>
        <a href='#'>FARMA</a>
        <CartWidget/>
    </div>
  )
}

export default NavBar
