import React from 'react';
import ItemListContainer from "./ItemListContainer";
import ItemCartContainer from './ItemCartContainer';
import { Routes, Route } from "react-router-dom";
import Cart from "../Pages/Cart";
import ItemDetailsContainer from './ItemDetailsContainer';

function Main() {
    return (
        <main>
            <Routes>
                <Route path='/' element={<ItemListContainer greeting="Todos nuestros productos" />}/>
                <Route path='category/:categoryId' element={<ItemListContainer greeting="" />}/>
                <Route path='item/:elementId' element={<ItemDetailsContainer/>}/>
                <Route path='cart' element={<ItemCartContainer/>}/>
                <Route path='checkout' element={<Cart/>}/>
                <Route path='*' element={<h1>Falso 404</h1>}/>
            </Routes>
            
        </main>
    )
}

export default Main
