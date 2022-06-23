import "./Imagecont.css";
import React from "react";
function Imagecont({name, image}) {
    return(

        <div className="image-printer">

            <img src={image}/>
            <p> {name}</p>
            
        </div>
        
    );
}
export default Imagecont;