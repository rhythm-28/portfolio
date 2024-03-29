import react,{useEffect} from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Avatar from "@mui/material/Avatar";

import "../../stylesheets/contact.css";

import linkedIn from "../../icons/linkedIn.png";
import github from "../../icons/github.svg";
import twitter from "../../icons/twitter.svg";

function Contact(props) {
  const { viewportWidth } = props;
  useEffect(()=>{
    Aos.init({
      duration: 1000
    });
  },[]);
  return (
    <div>
      <div data-aos={viewportWidth > 696 && "fade-right"} className="contactHead">
        <h1>Contact Me</h1>
      </div>
      <div data-aos={viewportWidth > 696 && "fade-left"} className="contactDiv container">
        <div className="row">
          <div className="col-md-5 contactInfo">
            <h5>
              Whether you want to hire me, or are looking to collaborate or just have a 
              conversation, get in touch.
            </h5>
          </div>
          <div className="col-md-4 emailDiv contactInfo">
            <h4>Send me an e-mail!</h4>
            <h5 className="eMailId">rhythmbhatia28@gmail.com</h5>
          </div>
          <div className="col-md-3 social">
            <h4>Or connect with me here:</h4>
            <br />
            <div>
              <Avatar src={linkedIn} /> &nbsp;&nbsp;&nbsp;
              <a href="https://www.linkedin.com/in/rhythm-bhatia/">
                rhythm-bhatia
              </a>
            </div>
            <div>
              <Avatar src={github} />
              &nbsp;&nbsp;&nbsp;
              <a href="https://github.com/rhythm-28">rhythm-28</a>
            </div>
            <div>
              <Avatar src={twitter} />
              &nbsp;&nbsp;&nbsp;
              <a href="https://twitter.com/rhythmb28">rhythmb28</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
