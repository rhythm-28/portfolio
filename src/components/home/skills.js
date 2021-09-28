import react from "react";
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
          <div className="skillSubDivs">
            <h4>Languages</h4>
            <div className="skillItems">
              <Avatar
                src={cPlusPlus}
                style={viewportWidth > 696 ? skillSizedesktop : skillSizeMobile}
              />
              <Avatar
                src={c}
                style={viewportWidth > 696 ? skillSizedesktop : skillSizeMobile}
              />
              <Avatar
                src={js}
                style={viewportWidth > 696 ? skillSizedesktop : skillSizeMobile}
              />
              <Avatar
                src={html}
                style={viewportWidth > 696 ? skillSizedesktop : skillSizeMobile}
              />
              <Avatar
                src={css}
                style={viewportWidth > 696 ? skillSizedesktop : skillSizeMobile}
              />
            </div>
          </div>
          <div className="skillSubDivs">
            <h4>Tech Stack</h4>
            <div className="skillItems">
              <Avatar
                src={mongoDB}
                style={viewportWidth > 696 ? skillSizedesktop : skillSizeMobile}
              />
              <Avatar
                src={express}
                style={viewportWidth > 696 ? skillSizedesktop : skillSizeMobile}
              />
              <Avatar
                src={reactIcon}
                style={viewportWidth > 696 ? skillSizedesktop : skillSizeMobile}
              />
              <DiNodejs size={viewportWidth > 696 ? 110 : 50} />
            </div>
          </div>
          <div className="skillSubDivs">
            <h4>Other Web Tools</h4>
            <div className="skillItems">
              <Avatar
                src={bootstrap}
                style={viewportWidth > 696 ? skillSizedesktop : skillSizeMobile}
              />
              <Avatar
                src={git}
                style={viewportWidth > 696 ? skillSizedesktop : skillSizeMobile}
              />
              <Avatar
                src={materialUi}
                style={viewportWidth > 696 ? skillSizedesktop : skillSizeMobile}
              />
              <Avatar
                src={postman}
                style={viewportWidth > 696 ? skillSizedesktop : skillSizeMobile}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
