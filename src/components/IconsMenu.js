import React from 'react'
import { Link } from 'react-router-dom'
import IconoRestaurante from '../images/iconoRestaurante.png'
import IconoSupermercado from '../images/iconoSupermercado.png'
import IconoFarmacia from '../images/iconoFarmacia.png'

function IconsMenu() {
  return (
    <div id='menuIcons'>
    <Link to="/category/resto/restaurante">
      <img src={IconoRestaurante} className="categoryIcon"></img>
    </Link>
    <Link to="/category/market/supermercado">
      <img src={IconoSupermercado} className="categoryIcon"></img>
    </Link>
    <Link to="/category/farma/farmacia">
      <img src={IconoFarmacia} className="categoryIcon"></img>
    </Link></div>
  )
}

export default IconsMenu
