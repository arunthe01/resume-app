import Navbar from "./comp/Navbar/Navbar";
import Homepage from "./comp/Homepage/Homepage";
import Techstack from "./comp/Techstack/Techstack";
import Experience from "./comp/Experience/Experience";
import copyrights from "./images/copyrights.png";
import Projects from "./comp/Projects/Projects";
import "./App.css";
function App() {



  return (
    <div>
     
      
           <Navbar />
           <img className="myimg" src="https://raw.githubusercontent.com/arunthe01/pic/main/world.png" />
           <Homepage/>
           <p className="tech-head"> TECH-STACK </p>
           <Techstack/>
           {/* <p className="exp-head"> Experience </p> */}
           {/* {/* <Experience/> */}

           <p className="tech-head"> PROJECTS </p>

           <Projects/> 


            

              <div className="cpy">
                 
                  <img src ={copyrights} alt="copy-rights"/>
                  <p> DESIGN BY ARUN EMMIDI</p>
                 
              </div>
             
          
           
    </div>
  );
}

export default App;