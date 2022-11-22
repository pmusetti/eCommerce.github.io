import React from 'react'
import { Link } from 'react-router-dom'
import IconoRestaurante from '../images/iconoRestaurante.png'
import IconoSupermercado from '../images/iconoSupermercado.png'
import IconoFarmacia from '../images/iconoFarmacia.png'

function IconsMenu() {
  return (
    <div id='menuIcons'>
    <Link to="/category/resto/restaurante">
      <img src={IconoRestaurante} className="categoryIcon" alt='Icono restaurante'></img>
    </Link>
    <Link to="/category/market/supermercado">
      <img src={IconoSupermercado} className="categoryIcon" alt='Icono supermercado'></img>
    </Link>
    <Link to="/category/farma/farmacia">
      <img src={IconoFarmacia} className="categoryIcon" alt='Icono farmacia'></img>
    </Link></div>
  )
}

export default IconsMenu
