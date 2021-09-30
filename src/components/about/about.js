import react from "react";

import LongBio from "./longBio.js";
import Achievements from "./achievements.js";

import "../../stylesheets/about.css";

function About(props) {
  const { viewportWidth } = props;
  return (
    <div>
      <div className="about">
        <LongBio viewportWidth={viewportWidth}/>
        <Achievements viewportWidth={viewportWidth}/>
      </div>
    </div>
  );
}

export default About;
