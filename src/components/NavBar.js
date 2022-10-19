import React from 'react'
import CartWidget from './CartWidget'


function NavBar() {
  return (
    <div>
        <a href='#'>Item 1</a>
        <a href='#'>Item 2</a>
        <a href='#'>Item 3</a>
        <CartWidget/>
    </div>
  )
}

export default NavBar
