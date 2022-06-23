import "./Projecttemp.css";
import React from "react";



function Projecttemp({v1,v2,v3}){

    return(

        <div className="p-box">

                <img src={v1}/>
                <div className="sent-box">

                        {
                            v2.map((item,index)=>(
                                <p> {item}</p>
                            )
                            
                            )
                        }
                </div>

               <div className="but">
                <a href={v3} target="_blank"> <button> VIEW PROJECT</button></a>
                </div>
        </div>
        


    );


}

export default Projecttemp;