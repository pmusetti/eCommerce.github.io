import React from 'react'
import CartWidget from './CartWidget'
import { NavLink } from "react-router-dom"
import products from '../products.json'

let categories = products.map(item => item.category)
let uniqueCategories = [...new Set(categories)]

function NavBar() {
  return (
    <div id='navbar'>
      {uniqueCategories.map((item) => {
        return (
          <NavLink to={`/category/${item}`} key={item}>
            {item.toUpperCase()}
          </NavLink>
        )
      })}
      <NavLink to="cart">
        <CartWidget />
      </NavLink>
    </div>
  )
}

export default NavBar
