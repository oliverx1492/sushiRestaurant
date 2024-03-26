import React, { useEffect, useState } from "react";
import Header from "./Header";
import { Link } from "react-router-dom";

const Speisekarte = () => {

    const [menu, setMenu] = useState()

    const filterSpeisekarte = async (item) => {
        try {
            const response = await fetch("https://sushijson.onrender.com/filter", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ "item": item })
            })

            if (response.ok) {
                console.log("Reponse ok")
                const data = await response.json()
                console.log("DATEN GEFILTERT ", data)
                setMenu(data)
            }

            else {
                console.log("Reponse nicht ok")
                const data = await response.json()
                console.log(data)
            }
        }

        catch (error) {
            console.log("error")
        }
    }

    useEffect(() => {

        filterSpeisekarte()
    }, [])

    


    return (
        <div>
            <Header />
            <div className="text-center p-5">
                <div className="flex justify-around items-center">
                <p></p>
                <p className="text-6xl">Unsere Speisekarte</p>
                <Link to="/bestellen"><p className="text-xl">Jetzt bestellen</p></Link>
                </div>
                <div className="p-4"><hr /></div>

                <div className="flex flex-col md:flex md:flex-row h-auto">

                    <div className="shadow-md w-full md:w-1/5">
                        <p onClick={() => filterSpeisekarte("Maki")} className="text-3xl p-5 m-2 cursor-pointer"> Maki</p>
                        <p onClick={() => filterSpeisekarte("Sushi")} className="text-3xl p-5 m-2 cursor-pointer">Sushi</p>
                        <p onClick={() => filterSpeisekarte("Spezialitäten")} className="text-3xl p-5 m-2 cursor-pointer">Spezialitäten</p>
                        <p onClick={() => filterSpeisekarte("Getränke")} className="text-3xl p-5 m-2 cursor-pointer">Getränke</p>
                    </div>
                    <div className=" w-full md:w-4/5 ">
                        {menu && menu.map((item, index) => (
                            <div key={index} className="">
                                <div className="p-4 flex justify-around">
                                    <div className="w-1/2">
                                        <p className="text-4xl">{item.name}</p>
                                        <p className="text-xl">{item.details}</p>
                                    </div>
                                    <div className="w-1/2">
                                        <p className="text-3xl">{item.preis}</p>
                                    </div>    
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Speisekarte