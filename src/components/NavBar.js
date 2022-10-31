import React, {useState} from 'react'
import CartWidget from './CartWidget'
import { NavLink } from "react-router-dom"


function NavBar() {
  return (
    <div id='navbar'>
      <NavLink to='/category/restaurante'>RESTAURANTE</NavLink>
      <NavLink to='/category/supermercado'>SUPERMERCADO</NavLink>
      <NavLink to='/category/farmacia'>FARMACIA</NavLink>
      <NavLink to="carrito">
        <CartWidget
        cartItems={0}
        />
      </NavLink>
    </div>
  )
}

export default NavBar
