import React from 'react';
import ItemListContainer from "./ItemListContainer";
import ItemCartContainer from './ItemCartContainer';
import { Routes, Route } from "react-router-dom";
//import Home from "../Pages/Home";
import ItemDetailsContainer from './ItemDetailsContainer';

function Main() {
    return (
        <main>
            <Routes>
                <Route path='/' element={<ItemListContainer greeting="Todos nuestros productos" />}/>
                <Route path='category/:categoryId' element={<ItemListContainer greeting="" />}/>
                <Route path='item/:elementId' element={<ItemDetailsContainer/>}/>
                <Route path='cart' element={<ItemCartContainer/>}/>
            </Routes>
            
        </main>
    )
}

export default Main
