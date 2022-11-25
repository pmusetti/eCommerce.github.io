import { React, useContext } from 'react'
import ItemCount from './ItemCount'
import { contexto } from '../components/CustomProvider'

 
function ItemDetails({ item }) {
    let regularPrice = item.price;
    let price = item.price * 0.8;
    const valorDelContexto = useContext(contexto)

    const handleOnAdd= (cantidad) => {
        valorDelContexto.handleCart(item, cantidad)

    }

    return (
        <>
            <div className='details__main__container'>
                <div className='details__img__container'>
                    <img src={item.urlPicture} className="card__img" alt='Imagne de producto'></img>
                </div>
                <div className='details__side__container'>
                    <div className='details__text__container'>
                        <h2 className='details__title'>{item.title}</h2>
                        <p className='details__description'>{item.description}</p>
                    </div>
                    <div className='details__price__container'>
                        <span className='card__regularPrice'> ${regularPrice}</span>
                    </div>
                    <div className='details__price__container'>
                        <span className='card__discountPrice'>${price}</span>
                    </div>
                    <ItemCount
                        handleOnAdd={handleOnAdd}
                        stock = {item.stock}
                        showAddBtn = {true}
                        />
                    
                </div>

            </div>

        </>
    )
}

export default ItemDetails
