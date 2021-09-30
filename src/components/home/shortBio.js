import react,{useEffect} from "react";
import Aos from "aos";
import "aos/dist/aos.css";

import "../../stylesheets/home.css";
import me from "../../images/me.jpg";

function ShortBio() {
  useEffect(()=>{
    Aos.init({
      duration: 3000
    });
  },[]);
  return (
    <div>
      <div className="container bioDiv">
        <h1 data-aos="fade-right" className="greeting">Hey, I am <span>Rhythm Bhatia</span> !</h1>
        <div data-aos="fade-left" className="bio">
          <div className="briefIntro">
            I am a full-stack web developer who is passionate about creating simple,
            responsive, and seamless online experiences. I am an undergraduate,
            majoring in Information Technology.
          </div>
          <div className="profileImageDiv">
            <img src={me} alt="My image" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShortBio;
