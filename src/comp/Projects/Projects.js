import "./Projects.css";
import React from "react";
import Projecttemp from "./Projecttemp/Projecttemp";
import instagram from "../../images/instagram.png";
import moviebox from "../../images/moviebox.jpg";
import todoapp from "../../images/todoapp.jpg";
import resumeapp from "../../images/resumeapp.jpg";

function Projects(){

    const arr=[
        {

            image: moviebox,
    
            content: [ "This project is actually just a Netflix clone, which has user authentication also i have used an online api to fetch the movies data.", "and the website is fully responsive."," check it out by clicking the button below. "],
    
            link:"https://aruns-movie-app.herokuapp.com/"
    
           },




       {

        image: todoapp,

        content: [ "This project is a task noting website which helps us to remove the risk of forgetting important things.", "This website is fully responsive."," check it out by clicking the button below."],

        link:"https://todo-app-arun.herokuapp.com/"

       },

       {



        image: resumeapp,

        content: [ "This project is my personal website to advertise my skills,projects, and my social media", "This website is fully responsive." ,"check it out by clicking the button below."],

        link:"https://resume-arun.herokuapp.com/"

       },

    //    {

    //     image:"https://wallpaperaccess.com/full/210938.jpg",

    //     content: [ "What is Lorem Ipsum", "What is Lorem Ipsum","What is Lorem Ipsum","What is Lorem Ipsum","What is Lorem Ipsum","What is Lorem Ipsum","What is Lorem Ipsum","What is Lorem Ipsum"],

    //     link:"https://www.instagram.com/"

    //    }
    
    
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