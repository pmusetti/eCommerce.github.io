import productList from '../products.json';
let products = []

products = productList.map((item) => {
    return item
})

export const getProducts = () => {
    let getAllProducts = new Promise((res) => {
        setTimeout(() => {
            res(products)
        }, 500)
    })
    return getAllProducts

}



export const getProductByCategory = (category) => {
    let getByCategory = new Promise((res) => {
        setTimeout(() => {
            res(products.filter((item) => {
                return item.category == category
            }
            ))
        }, 500)
    })

    return getByCategory
}


export const getProductById = (productId) => {
    let getById = new Promise((res) => {
        setTimeout(() => {
            res(products.find(item => item.id == productId))
        }, 500)
    })
    return getById
}
