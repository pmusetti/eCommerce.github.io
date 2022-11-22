import React from 'react'
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ItemList from './ItemList'
import { getProductByCategory, getProducts } from "../utils/utils"


function ItemListContainer({ greeting }) {

  const [items, setItems] = useState([])

  const { categoryId } = useParams()

  useEffect(() => {

    if (categoryId) {
      getProductByCategory(categoryId)
        .then(res => {
          setItems(res)
        })
        .catch(err => {
          console.log(err)
        })

    } else {
      getProducts()
        .then((respuesta) => {
          setItems(respuesta)
        })
        .catch((err) => {
          console.log(err)
        })
    }
  }, [categoryId])

  return (
    <section className='main'>
      <h2 className='title'>{greeting}</h2>
      {items.length === 0 ? <h1>Obteniendo productos...</h1> : <ItemList items={items} />}
    </section>
  )
}

export default ItemListContainer
