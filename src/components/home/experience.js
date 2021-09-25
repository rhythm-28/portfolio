import react from "react";
import "../../stylesheets/home.css";

function Experience() {
  return (
    <div>
      <div className="experience container">
        <h1 className="experienceHead">Work Experience</h1>
        <div>
          <h4 className="company">Kylo Apps</h4>
          <div className="roleAndDuration">
            <h5 className="position">React Developer</h5>
            <h5 className="duration">Aug 2021 - Sep 2021</h5>
          </div>
          <ul>
            <li>
              Developed front-end of an e-commerce app using React.js from
              scratch.
            </li>
            <li>
              Integrated Razorpay payment gateway into it and developed multiple
              routes.
            </li>
            <li>
              Also developed the front-end of a legal practice management app
              using React.js.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Experience;
