import react, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import "../../stylesheets/home.css";

function Experience(props) {
  const { viewportWidth } = props;
  useEffect(() => {
    Aos.init({
      duration: 3000
    });
  }, []);
  return (
    <div>
      <div data-aos="fade-zoom-in" className="experience container">
        <h1 className="experienceHead">Work Experience</h1>
        <div>
          <h4 className="company">ZS</h4>
          <div className="roleAndDuration">
            <h5 className="position">Technical Associate</h5>
            <h5 className="duration">Sep 2023 - Present</h5>
          </div>
          <ul>
            <li>
              Conducted analyses employing various metrics to assess patient adherence and persistence, subsequently generating comprehensive reports.
            </li>
            <li>
              Detected and rectified several bugs through meticulous debugging and comprehensive analysis.
            </li>
            <li>
              Enhanced existing SQL recipes by implementing best Data Science Studio practices.
            </li>
            <li>Tech Stack: Python, SQL, Dataiku.</li>
          </ul>
        </div>
        <br></br>
        <div>
          <h4 className="company">Signzy</h4>
          <div className="roleAndDuration">
            <h5 className="position">Full Stack Sofware Developer</h5>
            <h5 className="duration">May 2023 - Aug 2023</h5>
          </div>
          <ul>
            <li>
              Developed a comprehensive test suite of over 2000 lines of code for the Pan-V2-Service repository.
            </li>
            <li>
              Identified and resolved multiple bugs within APIs through thorough debugging & analysis.
            </li>
            <li>
              Built a JAR file for a pennyless API that provides encryption and decryption capabilities.
            </li>
            <li>Tech Stack: Node.js, Jest, Python.</li>
          </ul>
        </div>
        <br></br>
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
              Result: 50K+ Monthly Orders, 20+ Live Clients, API uptime 99.99% achieved.
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
