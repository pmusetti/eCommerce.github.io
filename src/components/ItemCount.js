import { React, useState } from 'react';

function ItemCount({ handleOnAdd, stock}) {

    const [count, setCount] = useState(1);

    const addItem = () => {
        if (count < stock){
            setCount(count + 1);
        }
    }

    const subItem = () => {
        if (count > 1) {
            setCount(count - 1);
        }
    }

    const buyItem = () => {
        if(count != 0){

            handleOnAdd(count)
            //Avisar al usuario que se agrego el producto al carrito
            setCount(0)
        }else{
            //Avisar que no hay stock disponible
        }
    }


    return (
        <>
        <div className='counter__container'>
            <button className='item__count' onClick={subItem}>-</button>
            <span className='item__count__output'>{count}</span>
            <button className='item__count' onClick={addItem}>+</button>
        </div>
            <div className="details__btn__container">
                <button className='details__btn'onClick={buyItem}>Confirmar</button>
            </div>
            {stock>0? <p>Stock disponible: {stock} </p> : <h3>NO HAY STOCK</h3>}
        </>
    )
}

export default ItemCount
