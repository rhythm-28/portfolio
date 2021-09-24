import "../../stylesheets/home.css";
import me from "../../images/me.jpg";

function ShortBio() {
  return (
    <div style={{color: 'white'}}>
      <div className="container shortBio">
        <div>
          <h2 className="greeting">Hey! I am Rhythm Bhatia.</h2>
          <img src={me} className="myImg" alt="My image" />
        </div>
      </div>
      <p className="container briefIntro">
        A full-stack web developer. I am passionate about creating simple,
        responsive, and seamless online experiences. I am an undergraduate,
        majoring in Information Technology.
      </p>
    </div>
  );
}

export default ShortBio;
