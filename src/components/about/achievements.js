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
              Achieved{" "}
              <a href="https://www.codechef.com/users/rhythm_28">4 stars</a> on
              CodeChef with a rating of 1810 .
            </li>
            <li>
              Among the <a href="https://leetcode.com/rhythm_28/">top 6%</a> of
              users on LeetCode with a maximum rating of 1832.
            </li>
            <li>
              Among{" "}
              <a href="https://drive.google.com/file/d/1_-Xe3uV9ppNnTCvxFFWoag2wq_7yAZ2x/view?usp=sharing">
                top 30 finalists
              </a>{" "}
              in AthenaHack Hackathon out of 800+ participants.
            </li>
            <li>
              Secured{" "}
              <a href="https://drive.google.com/file/d/15AfqhB08tDYfII7Itksti8pTg-PQl0Xj/view?usp=sharing">
                AIR 346
              </a>{" "}
              (World Rank: 1835) in Google Hashcode 2021 out of 7200+ teams.
            </li>
            <li>
              Secured{" "}
              <a href="https://www.codechef.com/users/rhythm_28">
                global rank 782
              </a>{" "}
              in CodeChef Rated Contest Feb 2021 out of 6100+ participants.
            </li>
            <li>
              Secured{" "}
              <a href="https://leetcode.com/rhythm_28/">global rank 1477</a> out
              of 22000+ participants in LeetCode Weekly Contest 313.
            </li>
            <li>
              Secured{" "}
              <a href="https://leetcode.com/rhythm_28/">global rank 1686</a> out
              of 25000+ participants in LeetCode Weekly Contest 311.
            </li>
            <li>
              Achieved a maximum rating of{" "}
              <a href="https://codeforces.com/profile/rhythm_28">1308</a> on
              Codeforces and solved 200+ problems.
            </li>
            <li>
              Solved <a href="https://leetcode.com/rhythm_28/">500+ problems</a>{" "}
              on LeetCode
            </li>
            <li>
              Achieved{" "}
              <a href="https://www.hackerrank.com/rhythm_28?hr_r=1">5 stars</a>{" "}
              in Problem Solving & C++ on Hacker Rank.
            </li>
          </ul>
        </div>
        <div
          data-aos={viewportWidth > 696 ? "fade-left" : "fade-up"}
          className="codingProfiles col-md-5"
        >
          <h3 className="codingProfilesHead">LINKS</h3>
          <br />
          <ul>
            <li>
              <a href="https://drive.google.com/file/d/1X-nLc_f9wjOrKeqp9xyW7VpmseVzOIqj/view?usp=sharing">
                Resume
              </a>
            </li>
            <li>
              <a href="https://github.com/rhythm-28">GitHub</a>
            </li>
            <li>
              <a href="https://www.codechef.com/users/rhythm_28">CodeChef</a>
            </li>
            <li>
              <a href="https://leetcode.com/rhythm_28/">LeetCode</a>
            </li>
            <li>
              <a href="https://codeforces.com/profile/rhythm_28">Codeforces</a>
            </li>
            <li>
              <a href="https://www.hackerrank.com/rhythm_28?hr_r=1">
                HackerRank
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Achievements;
