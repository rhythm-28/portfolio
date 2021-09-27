import react from "react";

import LongBio from "./longBio.js";
import Achievements from "./achievements.js";

import "../../stylesheets/about.css";

function About() {
  return (
    <div>
      <div className="about">
        <LongBio />
        <Achievements />
      </div>
    </div>
  );
}

export default About;
