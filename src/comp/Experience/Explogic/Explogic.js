import React from "react";
import "./Explogic.css";

function Explogic({company , desg, years, techused}) {

    return(
    <div className="main">

             
                <p > COMPANY: {company} </p>
                
                <p> DESIGNATION: {desg} </p>
                
                <p> TIME SPAN: {years} </p>
                
                <p className="ttext">TECHNOLOGIES USED</p>
               
                    <div className="imgs">
                        {
                            techused.map((item, index)=>{
                                
                                    return (
                                        
                                            <img src={item}/>
                                        
                                    );
                            
                                    }
                            )
                        }
                    </div>
                    

            
    </div>
    );
}

export default Explogic;