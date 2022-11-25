import React from 'react'
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { db } from "../firebase"
import { collection, where, query, getDocs, getDoc, doc, addDoc } from "firebase/firestore"
import ItemList from './ItemList'
import { getProductByCategory, getProducts } from "../utils/utils"

//const res = collection(db, "productos");

function ItemListContainer({ greeting }) {

  const [items, setItems] = useState([])

  const { categoryId } = useParams()

  useEffect(() => {



    if (categoryId) {

      const productosCollections = collection(db, "productos");
      const filtro = query(productosCollections, where("category", "==", categoryId))
      const consulta = getDocs(filtro);
      consulta
        .then((res) => {
          const productos = res.docs.map(doc => ({ ...doc.data(), id: doc.id }))

          setItems(productos)
        })
        .catch((err) => {
          console.log(err)
        })

    } else {

      const productosCollections = collection(db, "productos");
      const consulta = getDocs(productosCollections)
      consulta
        .then((res) => {
          const productos = res.docs.map(doc => ({ ...doc.data(), id: doc.id }))
          setItems(productos)
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
