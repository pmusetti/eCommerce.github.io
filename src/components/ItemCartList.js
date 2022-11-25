
import ItemCart from './ItemCart';
import FormItem from './FormItem';

function ItemCartList({ products, handleCheckout }) {

  return (
    <>
      <div className='mainCart--container'>

        <div className='itemsCart--container'>
          {
            products.map((prod) => {
              return <ItemCart key={prod.id} product={prod} />
            })
          }
        </div>
        <FormItem/>
      </div>
    </>
  )
}

export default ItemCartList
