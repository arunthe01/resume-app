import "./Projects.css";
import React from "react";
import Projecttemp from "./Projecttemp/Projecttemp";
import instagram from "../../images/instagram.png";

function Projects(){

    const arr=[
        {

            image: "https://c4.wallpaperflare.com/wallpaper/538/723/588/the-avengers-avengers-age-of-ultron-superhero-lines-wallpaper-preview.jpg",
    
            content: [ "What is Lorem Ipsum", "What is Lorem Ipsum","What is Lorem Ipsum","What is Lorem Ipsum","What is Lorem Ipsum","What is Lorem Ipsum","What is Lorem Ipsum","What is Lorem Ipsum"],
    
            link:"https://www.instagram.com/"
    
           },




       {

        image: "https://c4.wallpaperflare.com/wallpaper/857/457/204/iron-man-artwork-comic-books-superhero-wallpaper-preview.jpg",

        content: [ "What is Lorem Ipsum", "What is Lorem Ipsum","What is Lorem Ipsum","What is Lorem Ipsum","What is Lorem Ipsum","What is Lorem Ipsum","What is Lorem Ipsum","What is Lorem Ipsum"],

        link:"https://www.instagram.com/"

       },

       {



        image:"https://c4.wallpaperflare.com/wallpaper/93/298/371/steampunk-3d-artwork-eyes-wallpaper-preview.jpg"    ,

        content: [ "What is Lorem Ipsum", "What is Lorem Ipsum","What is Lorem Ipsum","What is Lorem Ipsum","What is Lorem Ipsum","What is Lorem Ipsum","What is Lorem Ipsum","What is Lorem Ipsum"],

        link:"https://www.instagram.com/"

       },

       {

        image:"https://wallpaperaccess.com/full/210938.jpg",

        content: [ "What is Lorem Ipsum", "What is Lorem Ipsum","What is Lorem Ipsum","What is Lorem Ipsum","What is Lorem Ipsum","What is Lorem Ipsum","What is Lorem Ipsum","What is Lorem Ipsum"],

        link:"https://www.instagram.com/"

       }
    
    
    ];

    return(

        <div className="projects-cont">

                {
                    arr.map((item,index)=>(
                            
                        <Projecttemp v1={item.image} v2={item.content} v3={item.link}/>

                    )
                    
                    
                    )
                }

        </div>


    );
}

export default Projects;