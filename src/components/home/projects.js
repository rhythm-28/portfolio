import "../../stylesheets/home.css";

import Carousel from "./carousel.js";

import homeSaveMore from "../../images/saveMore/home.PNG";
import signupSaveMore from "../../images/saveMore/signup.PNG";
import productSaveMore from "../../images/saveMore/product.PNG";

import homeCamouflaged from "../../images/camouflaged/home.PNG";
import home2Camouflaged from "../../images/camouflaged/home2.PNG";
import composeCamouflaged from "../../images/camouflaged/compose.PNG";

import homeTindog from "../../images/tindog/home.PNG";
import pricingTindog from "../../images/tindog/pricing.PNG";
import testimonialTindog from "../../images/tindog/testimonial.PNG";

function Projects() {
  return (
    <div className="container">
      <h1 className="projectsHead" style={{ color: "white" }}>Personal Projects</h1>
      <div className="row">
        <div className="card col-4 project" style={{ width: "18rem" }}>
          <Carousel
            img1={homeSaveMore}
            img2={signupSaveMore}
            img3={productSaveMore}
            id={1}
          />
          <div className="card-body projectBody">
            <h4 className="card-title">Save More</h4>
            <p className="card-text">
              An e-commerce site where customers can buy products added by
              sellers.
            </p>
            <h6>Tech Stack:</h6>
            <div className="techUsed">
              <span>React.js</span>
              <span>Material-UI</span>
              <span>Bootstrap</span>
              <span>Razorpay</span>
            </div>
            <div className="projectButtons">
              <a
                href="https://github.com/RidamGarg/SaveMore"
                class="btn btn-primary"
              >
                Source Code
              </a>
              <a
                href="https://save-more.herokuapp.com/"
                class="btn btn-primary"
              >
                Live Demo
              </a>
            </div>
          </div>
        </div>

        <div className="card col-4 project" style={{ width: "18rem" }}>
          <Carousel
            img1={homeCamouflaged}
            img2={home2Camouflaged}
            img3={composeCamouflaged}
            id={2}
          />
          <div className="card-body projectBody">
            <h4 className="card-title">Camouflaged</h4>
            <p className="card-text">
              A web app used by people to publish their secrets anonymously.wefewfewf
            </p>
            <h6>Tech Stack:</h6>
            <div className="techUsed">
              <span>Node.js</span>
              <span>MongoDB</span>
              <span>EmbeddedJS</span>
              <span>Bootstrap</span>
            </div>
            <div className="projectButtons">
              <a
                href="https://github.com/rhythm-28/Camouflaged"
                class="btn btn-primary"
              >
                Source Code
              </a>
              <a
                href="https://camouflaged.herokuapp.com/"
                class="btn btn-primary"
              >
                Live Demo
              </a>
            </div>
          </div>
        </div>

        <div className="card col-4 project" style={{ width: "18rem" }}>
          <Carousel
            img1={homeTindog}
            img2={pricingTindog}
            img3={testimonialTindog}
            id={3}
          />
          <div className="card-body projectBody">
            <h4 className="card-title">Tindog</h4>
            <p className="card-text">
              A completely responsive clone of the user interface of Tinder. The
              catch: it's just for dogs.
            </p>
            <h6>Tech Stack:</h6>
            <div className="techUsed">
              <span>HTML5</span>
              <span>CSS3</span>
              <span>Bootstrap</span>
            </div>
            <div className="projectButtons">
              <a
                href="https://github.com/rhythm-28/TinDog"
                class="btn btn-primary"
              >
                Source Code
              </a>
              <a
                href="https://rhythm-28.github.io/TinDog/"
                class="btn btn-primary"
              >
                Live Demo
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
