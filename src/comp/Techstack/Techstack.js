import React from "react";
import "./Techstack.css";
import c from "../../images/c.png";
import cpp from "../../images/cpp.png";
import html from "../../images/html.png";
import js from "../../images/js.png";
import py from "../../images/py.png";
import java from "../../images/java.png";
import css from "../../images/css.png";
import sql from "../../images/sql.png";
import react from "../../images/react.png";
import Imagecont from "./Imagecont/Imagecont";





function Techstack() {


        const array = [ 
        
                {
                       name:"C",
                       image:c

                },

                {
                        name:"Cpp",
                        image:cpp
 
                 },
                 {
                        name:"Java",
                        image:java
 
                 }
         
                 
 


        ];

        const array2 = [
              {
                     name:"Python",
                     image:py

              },

              {
                      name:"Html",
                      image:html

               },
               {
                      name:"Js",
                      image:js

               }

               

              ];

              const array3 = [
                     {
                            name:"Css",
                            image:css
       
                     },
       
                     {
                             name:"Sql",
                             image:sql
       
                      },
                      {
                             name:"React",
                             image:react
       
                      }
       
                      
       
                     ];
       


    return( <div className="tsd"> 
        
            <div className="icon-cont">

                {
                     array.map((item,index)=>(
                            
                            <Imagecont  image= {item.image}  name = {item.name}/>
                            
                     )
                     
                     
                     
                     
                     )
                }

              </div>

              <div className="icon-cont2">


              {
                     array2.map((item,index)=>{
                            return(
                            <Imagecont  image= {item.image}  name = {item.name}/>
                            );
                     }
                     
                     
                     
                     
                     )
                }
                
            </div>

              <div className="icon-cont3">


                     {
                            array3.map((item,index)=>{
                                   return(
                                   <Imagecont  image= {item.image}  name = {item.name}/>
                                   );
                            }
                            
                            
                            
                            
                            )
                     }

              </div>

        
          </div>);
}
export default Techstack;