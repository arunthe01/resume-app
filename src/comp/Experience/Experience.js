import React from "react";
import c from "../../images/c.png";
import cpp from "../../images/cpp.png";
import html from "../../images/html.png";
import js from "../../images/js.png";
import py from "../../images/py.png";
import java from "../../images/java.png";
import css from "../../images/css.png";
import sql from "../../images/sql.png";
import react from "../../images/react.png";
import Explogic from "./Explogic/Explogic";
import "./Experience.css";

function Experience() {

    const array=[react,css,html,js,c];
    const array2 = [py,react,cpp,c,sql];
    const array3 =[java,sql,html,c,cpp]


    




    return(
        <div className="me">
               
                    <Explogic company = "AMAZON" desg="SDE" years="2019 - TILLDATE " techused={array}/>
               
              
                    <Explogic company = "FLIPKART" desg="SDE" years="2017 - 2019" techused={array2}/>
              
             
                    <Explogic company = "GOOGLE" desg="SDE" years="2016 - 2019" techused={array3}/>
             
                
     </div>
    );
}

export default Experience;