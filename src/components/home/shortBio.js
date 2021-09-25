import "../../stylesheets/home.css";
import me from "../../images/me.jpg";

function ShortBio() {
  return (
    <div style={{ color: "white" }}>
      <div className="container bioDiv">
        <h2 className="greeting">Hey! I am <span>Rhythm Bhatia</span> !</h2>
        <div className="bio">
          <div className="briefIntro">
            I am a full-stack web developer and am passionate about creating simple,
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
