import React, { useEffect, useState } from "react";
import Header from "./Header";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
    const navigate = useNavigate()
    const [cart, setCart] = useState()
    const [price, setPrice] = useState(0)
    const [phoneCheck, setPhoneCheck] = useState(true)
    const [number, setNumber] = useState()
    const [message, setMessage] = useState()

    const [completed, setCompleted] = useState(false)

    useEffect(() => {

        const itemsFromLocalStorage = JSON.parse(localStorage.getItem("cart"))
        setCart(itemsFromLocalStorage)
    }, [])

    useEffect(() => {
        let p = 0
        if (cart) {

            cart.map((item, index) => {

                p = p + item.preis
            })
        }

        const pr = parseFloat(p).toFixed(2)
        setPrice(pr)

    }, [cart])

    useEffect(() => {
        console.log("PREIS: ", price)
    }, [price])

    const changeNumber = (event) => {
        setNumber(event.target.value)
    }

    const checkNumber = () => {
        console.log(number)
        const regex = /^[0-9]+$/;
        const isNumber = regex.test(number)


        if (!isNumber) {
            setMessage("Keine gültige Telefonnummer")
        }

        else if ((number.length <= 9) || (number.lenght == 0)) {
            setMessage("Keine gültige Telefonnummer")
        }


        else if (number[0] !== "0") {
            setMessage("Keine gültige Telefonnummer")
        }

        else if (price == 0) {
            setMessage("Keine Bestellung möglich")
        }

        else {
            setMessage("")
           
            sendOrderTOBackend(cart)
            
           
        }
    }

    const sendOrderTOBackend = async (data) => {
        try {
            const response = await fetch("https://sushijson.onrender.com/order", {
                method: "POST",
                headers: {
                    "Content-type":"application/json"
                },
                body: JSON.stringify(data)
            })

            if(response.ok) {
                const data = await response.json()
                console.log(data)

                setTimeout( ()=> {
                    setCompleted(true)
                },1000 )
    
                setTimeout( ()=> {
                    localStorage.removeItem("cart")
                    navigate("/")
                }, 5000 )
            }
            
            else {
                const data = await response.json()
                console.log(data)
                
            }
        }

        catch(error) {
            console.log(error)
        }
    }

    return (
        <div>
            <Header />
            {!completed ? (

                <div className="flex flex-col justify-center items-center p-4 text-center">
                    <div className="w-2/3 ">

                        <p className="text-5xl p-4">Ihre Bestellung</p>
                        {cart && cart.map((item, index) => (
                            <div key={index} className="flex flex-row justify-around items-center p-4 shadow-sm">
                                <div className="w-1/2">
                                    <p className="text-2xl">{item.name}</p>
                                </div>

                                <div className="w-1/2">
                                    <p className="text-2xl">{item.preis}</p>
                                </div>




                            </div>
                        ))}

                        <div className="flex flex-row justify-around items-center p-4">
                            <div className="w-1/2">Gesamtsumme: </div>
                            <div className="lex flex-row justify-center items-center w-1/2">
                                <p className="text-2xl">{price}</p></div>


                        </div>

                    </div>

                    <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block md:w-1/3 w-full p-4 m-4" onChange={changeNumber} type="text" placeholder="Telefonnummer" />
                    {message}


                    <button onClick={checkNumber} className=" bg-blue-500 hover:bg-blue-700 mt-4 text-white font-bold py-2 px-4 rounded">
                        Jetzt bestellen
                    </button>

                </div>

            ) : (
                <div className="text-center p-4">

                    <p className="text-6xl">Vielen Dank für Ihre Bestellung!</p>
                    <p className="text-2xl">Sie erhalten eine SMS wenn Ihre Bestellung abholbereit ist</p>
                    <p className="text-2xl">In der Regel dauert es ca 15 - 30 Minuten</p>
                    <p className="text-lg">Sie werden nun auf die Homepage weitergeleitet</p>

                </div>
            )}


        </div>
    )
}

export default Checkout