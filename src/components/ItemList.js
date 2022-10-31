import React from 'react'
import Item from './Item'

function ItemList({items}) {
    return (
        <section className="products">
            {
                items.map((item)=>{
                    return <Item key={item.id} item={item}/>
                })
            }
        </section>
    )
}

export default ItemList
