import React, { useContext, useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { addDoc, collection, serverTimestamp, Timestamp } from 'firebase/firestore'
import { db } from '../firebase'
import { contexto } from '../components/CustomProvider';
function FormItem() {
   
    const context = useContext(contexto)
    const handleCheckout = context.handleCheckout
    const getCarrito = context.getCarrito
    const [validEmail, setValidEmail] = useState(false)

    const refName = useRef()
    const refEmail = useRef()
    const refConfEmail = useRef()
    const refAddress = useRef()

    const emailValidation = () => {
        const emailRegex = /^([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})$/i;
        const email1 = refEmail.current.value;
        const email2 = refConfEmail.current.value
        if ((email1 !== email2) && !emailRegex.test(email1)) {
            setValidEmail(true)
        } else
            setValidEmail(false)
        console.log("email invalido")
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("Funciona")
    }

    const confirmarPedido = () => {
        const carrito = getCarrito()
        console.log(carrito)
        const date = serverTimestamp();
        const hora = new Date()
        const orderNumber = hora.getTime()

        const orden = {
            ordenNr: orderNumber,
            date: date,
            carrito: carrito
        }
        const ordersCollection = collection(db, "ordenes")
        const consulta = addDoc(ordersCollection, orden)

        //guardar la orden en el contexto para mostrar datos en pagina de checkout

    }



    return (
        <div className='form--container'>
            <form noValidate onSubmit={handleSubmit}>
                <div>
                    <input required ref={refName} type="text" placeholder="Juan Perez" />
                    <label>Nombre y Apellido</label>
                </div>
                <div>
                    <input ref={refAddress} type="address" placeholder="Av Millan 1234" required />
                    <label>Direccion de envío</label>
                </div>
                <div>
                    <input ref={refEmail} onChange={emailValidation} type="email" placeholder="fulano@email.com" required />
                    <label>Email</label>
                </div>
                <div>
                    <input ref={refConfEmail} onChange={emailValidation} type="email" placeholder="fulano@email.com" required />
                    <label>Confirme email</label>
                </div>
                {validEmail ? <NavLink to="/checkout"><button onClick={confirmarPedido}>Confirmar pedido</button></NavLink> : <p>Email no valido o no coincide</p>}
            </form>
            <hr></hr>
        </div>
    )
}

export default FormItem
