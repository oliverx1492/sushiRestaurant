import React, { useEffect, useState } from "react";
import Header from "./Header";
import { useNavigate } from "react-router-dom";

const Bestellen = () => {

    const navigate = useNavigate()
    const [cart, setCart] = useState([])
    const [menu, setMenu] = useState()
    const [totalPrice, setTotalPrice] = useState(0)

    const getAll = async () => {
        try {
            const response = await fetch("https://sushijson.onrender.com/")

            if (response.ok) {
                const data = await response.json()
                console.log(data)
                setMenu(data)
            }

            else {
                const data = await response.json()
                console.log("Error", data)
            }
        }

        catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getAll()
    }, [])


    useEffect( ()=> {
        
        
    },[cart] )


    // Im Warenkorb werden nur die IDs gespeichert
    const addToCart = (item) => {

        item.anzahl = item.anzahl + 1

        const updatedCart = [...cart, item]
        setCart(updatedCart)

        const updatedPrice = totalPrice + item.preis
        const price = parseFloat(updatedPrice.toFixed(2))
        setTotalPrice(price)

        

    }

    const removeFromCart = (item) => {

        if(item.anzahl > 0) {
            item.anzahl = item.anzahl - 1
        }

        cart.map( (i,index) => {
            if(i.id == item.id) {

                const updatedCart = cart.filter(s => s.id !== item.id)
        setCart(updatedCart)
        

        let updatedPrice = totalPrice - item.preis
        if(updatedPrice < 0) {
            updatedPrice = 0
        }
        const price = parseFloat(updatedPrice.toFixed(2))
        setTotalPrice(price)
                
            }
        } )
    
        



        
        
    }

    const order = () => {
        localStorage.setItem('cart', JSON.stringify(cart))

        setTimeout( ()=> {
            navigate("/checkout")
        },1000 )
    }


    return (
        <div>
            <Header />
            <div className="text-center p-4">
                <p className="text-5xl">Hier können Sie Ihre Bestellung aufgeben</p>
                <p className="text-lg">WICHTIGE INFO: Aktuell bieten wir leider ausschließlich Selbstabholung an</p>
                <div className="p-4"><hr /></div>

                <div className="flex flex-col items-center">
                    {menu && menu.map((item, index) => (
                        <div key={index} className="flex flex-row justify-around items-center    w-screen md:w-2/3 p-4 shadow-sm">
                            <div className="w-1/3">
                                <p className="text-2xl">{item.name}</p>
                            </div>

                            <div className="w-1/3">
                                <p className="text-2xl">{item.preis}</p>
                            </div>

                            <div className="flex flex-row justify-center items-center w-1/3">
                                <button onClick={() => removeFromCart(item)} className="text-3xl m-2">-</button>
                                <p className="text-2xl">{item.anzahl}</p>
                                <button onClick={() => addToCart(item)} className="text-3xl m-2">+</button>
                            </div>


                        </div>
                    ))}

                    <div className="flex flex-row justify-around items-center w-screen md:w-2/3 p-4">
                        <div className="w-1/3">Zusammenfassung</div>
                        <div className="lex flex-row justify-center items-center w-1/3">
                            <p className="text-2xl">{totalPrice}</p></div>
                        <div className="w-1/3">
                            <button onClick={order} className=" bg-blue-500 hover:bg-blue-700 mt-4 text-white font-bold py-2 px-4 rounded">
                                Bestellen
                            </button>
                        </div>
                        
                    </div>

                </div>

            </div>

        </div>
    )
}

export default Bestellen