import { addDoc, collection } from 'firebase/firestore'
import { db } from '../firebase'
import products from '../products.json'


export const bulk = () => {
    const productsCollection = collection(db, "productos")
    products.forEach(element => {
        const consulta = addDoc(productsCollection, element)
    });
}

