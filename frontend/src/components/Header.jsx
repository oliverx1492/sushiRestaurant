import React from "react";
import { Link } from "react-router-dom";

const Header = () => {

    
    return(
        <>
            <div className=" w-full  md:w-full md:h-24 md:flex md:flex-row shadow-xl">
                        
                
                <div className="text-center md:w-1/2 md:flex md:justify-around md:items-center">
                    <Link to="/"><div className="text-2xl">Home</div></Link>
                </div>
                


                <div className="text-center  md:w-1/2 md:flex md:justify-around md:items-center">   
                    <Link to="/speisekarte"><div className="text-2xl">Speisekarte</div></Link>
                    <Link to="/about"><div className="text-2xl">Über uns</div></Link>
                    <Link to="/bestellen"><div className="text-2xl">Bestellen</div></Link>
                   
                    
                </div>
            </div>
        </>
    )
}

export default Header