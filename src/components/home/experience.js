import react,{useEffect} from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import "../../stylesheets/home.css";

function Experience(props) {
  const { viewportWidth } = props;
  useEffect(()=>{
    Aos.init({
      duration: 3000
    });
  },[]);
  return (
    <div>
      <div data-aos="fade-zoom-in" className="experience container">
        <h1 className="experienceHead">Work Experience</h1>
        <div>
          <h4 className="company">Shiprocket</h4>
          <div className="roleAndDuration">
            <h5 className="position">Sofware Developer</h5>
            <h5 className="duration">Feb 2022 - May 2022</h5>
          </div>
          <ul>
            <li>
              Worked on database design and implementation for Shiprocket
              Checkout.
            </li>
            <li>
              Rebuilt back-end APIs to improve performance and user experience.
            </li>
            <li>
              Using Winston, I created a custom logger that debugs based on the
              Node Environment.
            </li>
            <li>Tech Stack: Node.js, Sails.js, MySQL.</li>
          </ul>
        </div>
        <br></br>
        <div>
          <h4 className="company">Kylo Apps</h4>
          <div className="roleAndDuration">
            <h5 className="position">React Developer</h5>
            <h5 className="duration">Aug 2021 - Sep 2021</h5>
          </div>
          <ul>
            <li>
              Created the front-end of an e-commerce app from the ground up.
            </li>
            <li>
              Razorpay payment gateway integration and development of various
              endpoints.
            </li>
            <li>Developed the front-end of a legal practice management app.</li>
            <li>Tools used: React.js, Bootstrap.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Experience;
