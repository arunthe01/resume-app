import REACT from "react";
import "./Navbar.css"

function Navbar() {
    return(

        <div className= "nav-cont">

             <p> THE01 </p>
              <div className="links">
                <a href="#"> Home</a>
                <a href="#"> Projects</a>
                <a href="#"> Experience</a>
              </div>
        </div>
    );
}

export default Navbar;