import react from "react";
import Avatar from "@mui/material/Avatar";

import "../../stylesheets/about.css";

import codeChef from "../../icons/codeChef.jpg";
import hackerRank from "../../icons/hackerRank.png";

function Achievements() {
  return (
    <div>
      <div className="container achievements">
        <div className="col-md-7">
          <h3 className="achievementsHead">ACHIEVEMENTS</h3>
          <br />
          <ul>
            <li>
              Bagged{" "}
              <a href="https://codingcompetitions.withgoogle.com/hashcode/certificate/summary/0000000000435809">
                346
              </a>{" "}
              AIR (World Rank: 1835) in Google Hashcode 2021 out of 7200+ teams.
            </li>
            <li>
              Secured 782 rank in CodeChef Rated Contest Feb 2021 out of 6100+
              participants.
            </li>
            <li>
              Top 5% out of 938k people in Linked Skill Assessment of CSS.
            </li>
            <li>
              Maximum Rating on CodeChef:{" "}
              <a href="https://www.codechef.com/users/rhythm_28">1709</a> (3
              star).
            </li>
            <li>5 stars in Problem Solving on Hacker Rank.</li>
            <li>5 stars in C++ on Hacker Rank.</li>
            <li>
              Reached{" "}
              <a href="https://www.hackerrank.com/certificates/3c9aa3ade860">
                Intermediate
              </a>{" "}
              Level in C on Hacker Rank.
            </li>
          </ul>
        </div>
        <div className="codingProfiles col-md-5">
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
              <a href="https://drive.google.com/file/d/1uoskNPYz7vHZDllD7HPryZZa6xY8g6vF/view?usp=sharing">
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
