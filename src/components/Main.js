import React, {useState, useEffect} from 'react';
import ItemListContainer from "./ItemListContainer";
import ItemCartContainer from './ItemCartContainer';
import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import ItemDetailsContainer from './ItemDetailsContainer';

function Main() {
    return (
        <main>
            <Routes>
                {/* Todos los productos */}
                <Route path='/' element={<ItemListContainer greeting="Todos nuestros productos" />}/>
                {/* Producto por categoria pasada por parametro en URL */}
                <Route path='category/:categoryId' element={<ItemListContainer greeting="Hoy no se cocina, pedilo y YA!" />}/>
                {/* Detalle del producto elegido segun Id pasada por parametro en URL */}
                <Route path='item/:elementId' element={<ItemDetailsContainer/>}/>
                {/* Carrito */}
                <Route path='carrito' element={<ItemCartContainer/>}/>

            </Routes>
            
        </main>
    )
}

export default Main
