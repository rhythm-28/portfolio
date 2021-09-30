import "../../stylesheets/home.css";

import ShortBio from "./shortBio.js";
import Projects from "./projects.js";
import Experience from "./experience.js";
import Skills from "./skills.js";

function Home(props) {
  const { viewportWidth } = props;
  return (
    <div>
      <ShortBio viewportWidth={viewportWidth} />
      <Projects viewportWidth={viewportWidth} />
      <Experience viewportWidth={viewportWidth} />
      <Skills viewportWidth={viewportWidth} />
    </div>
  );
}

export default Home;
