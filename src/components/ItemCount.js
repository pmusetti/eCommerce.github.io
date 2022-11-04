import {React, useState} from 'react';

  // const  [ count, setCount] = useState(0);


function ItemCount({addItem, subItem, count}) {

    return (
        <div className='counter__container'>
            <button className='item__count' onClick={subItem}>-</button>
            <span className='item__count__output'>{count}</span>
            <button className='item__count' onClick={addItem}>+</button>
        </div>
    )
}

export default ItemCount
