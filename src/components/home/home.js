import '../../stylesheets/home.css';
import ShortBio from "./shortBio.js";
import Projects from "./projects.js";
import Experience from "./experience.js";
import Skills from "./skills.js";
import Footer from "../footer.js";

function Home() {
  return (
    <div>
      <ShortBio />
      {/* <Projects />
      <Experience />
      <Skills /> */}
    </div>
  );
}

export default Home;