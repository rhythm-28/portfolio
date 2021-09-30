import react, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import "../../stylesheets/about.css";
import bigMe from "../../images/bigMe.jpg";

function LongBio() {
  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
  }, []);
  return (
    <div>
      <div className="container longBioDiv">
        <h2 data-aos="fade-right" className="longGreeting">
          HELLO, THERE!
        </h2>
        <div className="longBio">
          <div data-aos="fade-right" className="longIntro">
            <p>
              I am a full-stack web developer with a keen interest in UI design.
              Also, a self-motivated person who likes to work in high-paced
              environments.
            </p>
            <p>
              I am passionate about creating simple, responsive, and seamless
              online experiences that people love to visit again and again.
            </p>
            <p>
              When I am not coding, you can find me watching anime or playing
              with my dog, Maddy!
            </p>
            <br />
            <div data-aos="fade-up" >
              <h3 className="education">EDUCATION</h3>
              <div className="collegeAndBatch">
                <h5 className="college">
                  Maharaja Agrasen Institute of Technology (MAIT)
                </h5>
                <h5 className="batch">(Aug 2019 - July 2023)</h5>
              </div>
              <p>
                I am a pre-final year student pursuing my Bachelor's of
                Technology in Information Technology.
              </p>
            </div>
          </div>
          <div data-aos="fade-left" className="longProfileImageDiv">
            <img src={bigMe} alt="My image" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default LongBio;
