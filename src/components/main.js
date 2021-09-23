import {react,useState} from "react";
import Home from "./home/home.js";
import About from "./about/about.js";
import Contact from "./contact/contact.js";
import Footer from "./footer.js";

function Main(){
    const [current,setCurrent] = useState("home");
    return (
        <div>
            {current==="home" && <Home />}
            {current==="about" && <About />}
            {current==="contact" && <Contact />}
            <Footer 
                current = {current}
                setCurrent = {setCurrent}
            />
        </div>
    );
}

export default Main;
