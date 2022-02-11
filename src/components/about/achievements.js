import react, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Avatar from "@mui/material/Avatar";

import "../../stylesheets/about.css";

import codeChef from "../../icons/codeChef.jpg";
import hackerRank from "../../icons/hackerRank.png";

function Achievements(props) {
  const { viewportWidth } = props;
  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
  }, []);
  return (
    <div>
      <div className="container achievements">
        <div
          data-aos={viewportWidth > 696 ? "fade-right" : "fade-up"}
          className="col-md-7"
        >
          <h3 className="achievementsHead">ACHIEVEMENTS</h3>
          <br />
          <ul>
            <li>
              Bagged{" "}
              <a href="https://drive.google.com/file/d/15AfqhB08tDYfII7Itksti8pTg-PQl0Xj/view?usp=sharing">
                346
              </a>{" "}
              AIR (World Rank: 1835) in Google Hashcode 2021 out of 7200+ teams.
            </li>
            <li>
              4 stars on CodeChef with a maximum Rating of{" "}
              <a href="https://www.codechef.com/users/rhythm_28">1808</a>.
            </li>
            <li>
              Secured{" "}
              <a href=" https://drive.google.com/file/d/1QP2y6NwIBT8D7BVXxz-LVKtvN7AW6GvP/view?usp=sharing">
                2148
              </a>{" "}
              rank in Google Kickstart Round H 2021.
            </li>
            <li>
              Secured{" "}
              <a href=" https://drive.google.com/file/d/1QP2y6NwIBT8D7BVXxz-LVKtvN7AW6GvP/view?usp=sharing">
                2305
              </a>{" "}
              rank in Google Kickstart Round G 2021.
            </li>
            <li>
              Secured 782 rank in CodeChef Rated Contest Feb 2021 out of 6100+
              participants.
            </li>
            <li>
              Top 5% out of 938k people in Linked Skill Assessment of CSS.
            </li>
            <li>5 stars in Problem Solving, C++ on Hacker Rank.</li>
            <li>
              Reached{" "}
              <a href="https://www.hackerrank.com/certificates/3c9aa3ade860">
                Intermediate
              </a>{" "}
              Level in C on Hacker Rank.
            </li>
          </ul>
        </div>
        <div
          data-aos={viewportWidth > 696 ? "fade-left" : "fade-up"}
          className="codingProfiles col-md-5"
        >
          <h3 className="codingProfilesHead">Coding profiles</h3>
          <br />
          <div className="profiles">
            <div>
              <Avatar src={codeChef} sx={{ width: "40px", height: "40px" }} />{" "}
              &nbsp;&nbsp;&nbsp;
              <h5>
                <a href="https://www.codechef.com/users/rhythm_28">rhythm_28</a>
              </h5>
            </div>
            <div>
              <Avatar src={hackerRank} sx={{ width: "40px", height: "40px" }} />
              &nbsp;&nbsp;&nbsp;
              <h5>
                <a href="https://www.hackerrank.com/rhythm_28">rhythm_28</a>
              </h5>
            </div>
          </div>
          <br />
          <br />
          <div className="resume">
            <h4>
              Here is my{" "}
              <a href="https://drive.google.com/file/d/1-qEOF3GlkDrAC5hgOvtj96iwhkZN7aOk/view?usp=sharing">
                Resume
              </a>
              &nbsp;!
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Achievements;
