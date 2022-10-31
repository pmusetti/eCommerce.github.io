import React from 'react'

function ItemDetails({ item }) {
    return (
        <>
            <div className='details__main__container'>
                <div className='details__img__container'>
                    <img src={item.urlPicture} className="card__img"></img>
                </div>
                <div className='details__side__container'>
                    <div className='details__text__container'>
                        <h2 className='details__title'>{item.title}</h2>
                        <p className='details__description'>{item.description}</p>
                    </div>
                    <div className='details__price__container'>
                        <span className='details__price'>${item.price}</span>
                    </div>
                    <div className="details__btn__container">
                    <button className='details__btn'>COMPRAR</button>
                    </div>
                </div>

            </div>

        </>
    )
}

export default ItemDetails
