import React from "react";
import "./Homepage.css"
import instagram from "../../images/instagram.png";
import linkedin from "../../images/linkedin.png";
import mail from "../../images/mail.png";

function Homepage() {
    return(

    <div className="main-home"> 
        <div className="homepage">
            <div className="homepage-cont">
                <p className="p1"> Hey there! My self <span className="name"> Arun Emmidi,</span> </p>
                <p className="p2"> I am a <span>Passionaite programmer </span>from India, </p>
                <p className="p3"> I am currently pursuing B.tech <span>(CSE)</span> from Lovely Professional 
                University , Punjab.</p>
            </div>

            <div className="homepage-img">

                <img src="https://img.icons8.com/external-icongeek26-outline-gradient-icongeek26/128/external-coding-uxui-icongeek26-outline-gradient-icongeek26.png"/>
                
            </div> 
        
        </div>
        <p className="social-head"> SOCIAL-MEDIA </p>
        <div className="social">
           
            <a href="https://github.com/arunthe01" target="_blank"> <img src="https://img.icons8.com/nolan/344/github.png"/></a>
            <a href="https://www.linkedin.com/in/emmidi-arun-b146461b7/?originalSubdomain=in" target="_blank"><img src={linkedin} /></a>
            <a  href="mailto:djdjdjaaa999@gmail.com"> <img src = {mail}/></a>
            <a href="https://www.instagram.com/arunthe01" target="_blank"><img src={instagram} /></a>
        </div>

        
    </div>

    


    );
}
export default Homepage;