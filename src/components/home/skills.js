import react,{useEffect} from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Avatar from "@mui/material/Avatar";

import "../../stylesheets/home.css";

import cPlusPlus from "../../icons/c++.svg";
import c from "../../icons/c.svg";
import js from "../../icons/js.svg";
import html from "../../icons/html.svg";
import css from "../../icons/css.svg";

import mongoDB from "../../icons/mongoDB.svg";
import express from "../../icons/express.png";
import reactIcon from "../../icons/react.svg";
import { DiNodejs } from "react-icons/di";

import bootstrap from "../../icons/bootstrap.svg";
import git from "../../icons/git.svg";
import materialUi from "../../icons/materialUi.svg";
import postman from "../../icons/postman.svg";

function Skills() {
  useEffect(()=>{
    Aos.init({
      duration: 1000
    });
  },[]);
  const viewportWidth = Math.max(
    document.documentElement.clientWidth || 0,
    window.innerWidth || 0
  );
  const skillSizedesktop = {
    width: "100px",
    height: "100px",
  };
  const skillSizeMobile = {
    width: "50px",
    height: "50px",
  };
  return (
    <div>
      <div className="container skills">
        <h1 className="skillsHead">My Toolbox</h1>
        <div className="skillSubHeads">
          <div data-aos="fade-left" className="skillSubDivs">
            <h4>Languages</h4>
            <div className="skillItems">
              <div>
                <Avatar
                  src={cPlusPlus}
                  style={
                    viewportWidth > 696 ? skillSizedesktop : skillSizeMobile
                  }
                />
                <label>C++</label>
              </div>
              <div>
                <Avatar
                  src={c}
                  style={
                    viewportWidth > 696 ? skillSizedesktop : skillSizeMobile
                  }
                />
                <label>C</label>
              </div>
              <div>
                <Avatar
                  src={js}
                  style={
                    viewportWidth > 696 ? skillSizedesktop : skillSizeMobile
                  }
                />
                <label>JavaScript</label>
              </div>
              <div>
                <Avatar
                  src={html}
                  style={
                    viewportWidth > 696 ? skillSizedesktop : skillSizeMobile
                  }
                />
                <label>HTML 5</label>
              </div>
              <div>
                <Avatar
                  src={css}
                  style={
                    viewportWidth > 696 ? skillSizedesktop : skillSizeMobile
                  }
                />
                <label>CSS 3</label>
              </div>
            </div>
          </div>
          <div data-aos="fade-left" className="skillSubDivs">
            <h4>Tech Stack</h4>
            <div className="skillItems">
              <div>
                <Avatar
                  src={mongoDB}
                  style={
                    viewportWidth > 696 ? skillSizedesktop : skillSizeMobile
                  }
                />
                <label>MongoDB</label>
              </div>
              <div>
                <Avatar
                  src={express}
                  style={
                    viewportWidth > 696 ? skillSizedesktop : skillSizeMobile
                  }
                />
                <label>Express.js</label>
              </div>
              <div>
                <Avatar
                  src={reactIcon}
                  style={
                    viewportWidth > 696 ? skillSizedesktop : skillSizeMobile
                  }
                />
                <label>React.js</label>
              </div>
              <div>
                <DiNodejs size={viewportWidth > 696 ? 100 : 50} />
                <label>Node.js</label>
              </div>
            </div>
          </div>
          <div data-aos="fade-left" className="skillSubDivs">
            <h4>Other Web Tools</h4>
            <div className="skillItems">
              <div>
                <Avatar
                  src={bootstrap}
                  style={
                    viewportWidth > 696 ? skillSizedesktop : skillSizeMobile
                  }
                />
                <label>Bootstrap</label>
              </div>
              <div>
                <Avatar
                  src={git}
                  style={
                    viewportWidth > 696 ? skillSizedesktop : skillSizeMobile
                  }
                />
                <label>Git</label>
              </div>
              <div>
                <Avatar
                  src={materialUi}
                  style={
                    viewportWidth > 696 ? skillSizedesktop : skillSizeMobile
                  }
                />
                <label>Material-UI</label>
              </div>
              <div>
                <Avatar
                  src={postman}
                  style={
                    viewportWidth > 696 ? skillSizedesktop : skillSizeMobile
                  }
                />
                <label>Postman</label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
