import React, { useEffect, useRef, useState } from "react";
import Header from "./Header";
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import sushi1 from "/sushi1.jpg"
import sushi2 from "/sushi2.jpg"
import sushi3 from "/sushi3.jpg"
import sushi4 from "/sushi4.jpg"
import sushi5 from "/sushi5.jpg"
import sushi6 from "/sushi6.jpg"

const Home = () => {

    //Image Slider

    const images = ["https://images.pexels.com/photos/357756/pexels-photo-357756.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", "https://images.pexels.com/photos/858508/pexels-photo-858508.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", "https://images.pexels.com/photos/3147493/pexels-photo-3147493.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"]


    const slide = () => {
        const len = images.length


    }
    const secondPageRef = useRef(0)
    const scrollToSecondPage = () => {
        secondPageRef.current.scrollIntoView({ behavior: 'smooth' });
       
    };

    setInterval(slide, 4000)
    return (
        <>
            <Header />
            <div className="">

                <Slide>
                    {images.map((item, index) => (

                        <div key={index} className="each-slide-effect">

                            <img className=" w-full h-60 md:h-96 object-cover shadow-md translate-x-3" src={item} alt="sushi-bilder" />


                        </div>
                    ))}
                </Slide>
                <div className="p-4 text-center">
                    <h1 className="text-8xl font-bold">Sakado Sushi</h1>
                    <div className="text-xl"></div>
                    <div className="flex justify-center p-4 cursor-pointer">
                        <svg onClick={scrollToSecondPage} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3" />
                        </svg>
                    </div>


                </div>

                <div className="mt-20 h-screen text-center" ref={secondPageRef}>


                    <div className="flex flex-col md:flex md:flex-row p-6 ">
                        <div className="w-full md:w-2/5  h-min overflow-hidden rounded-xl">
                            <img className="h-80 object-cover rounded-xl hover:scale-125 transition-all duration-1000" src="https://images.pexels.com/photos/271715/pexels-photo-271715.jpeg?auto=compress&cs=tinysrgb&w=600" alt="sushi_iamge" />
                        </div>
                        <div className="w-full md:w-2/5 text-2xl flex items-center m-4">Entdecken Sie die perfekte Balance von Geschmack,
                            Textur und Ästhetik in unseren handgefertigten Sushi-Gerichten.
                            Jedes Stück ist eine Meisterleistung der kulinarischen Kunst,
                            die Sie mit jedem Bissen genießen können</div>
                        <div className="1/5"></div>
                    </div>

                    <div className="flex flex-col-reverse md:flex md:flex-row p-6 reverse">
                        <div className="w-1/5 md:w-1/5"></div>

                        <div className="w-full md:w-2/5 text-2xl flex items-center m-2">Tauchen Sie ein in die Vielfalt der japanischen Küche
                            mit unseren frisch zubereiteten Sushi-Spezialitäten. Von klassischen Maki-Rollen
                            bis hin zu innovativen Nigiri-Variationen - wir bieten Ihnen ein Geschmackserlebnis
                            der besonderen Art</div>
                        <div className="w-full md:w-2/5  h-min overflow-hidden rounded-xl">
                            <img className=" h-80 object-cover rounded-xl hover:scale-125 transition-all duration-1000" src="https://images.pexels.com/photos/1683545/pexels-photo-1683545.jpeg?auto=compress&cs=tinysrgb&w=600" alt="sushi_iamge" />
                        </div>
                    </div>

                

                <div className="flex flex-col md:flex md:flex-row p-6 ">
                    <div className="w-full md:w-2/5  h-min overflow-hidden rounded-xl">
                        <img className="h-80 object-cover rounded-xl hover:scale-125 transition-all duration-1000" src="https://images.pexels.com/photos/1409050/pexels-photo-1409050.jpeg?auto=compress&cs=tinysrgb&w=600" alt="sushi_iamge" />
                    </div>
                    <div className="w-full md:w-2/5 text-2xl flex items-center m-4">Erleben Sie die Kunst des Sushi-Handwerks.
                        Unsere Meisterköche zaubern aus den feinsten Zutaten kunstvolle
                        Sushi-Kreationen, die nicht nur den Gaumen, sondern auch die
                        Augen erfreuen</div>

                    <div className="1/5"></div>
                </div>
                </div>
            </div>


        </>
    )
}


export default Home