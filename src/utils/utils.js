import products from '../products.json';


const generatePromise = (operation, time = 500) => {
    return new Promise((res, rej) => {
        res(operation)
    }, time)
}



export const getProducts = () => generatePromise(products) 

export const getProductById = (productId) => generatePromise(products.find(item => item.id == productId))

export const getProductByCategory = (category) => generatePromise(products.filter(item => item.category == category))
    
