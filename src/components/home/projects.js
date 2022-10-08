import react,{useEffect} from "react";
import Aos from "aos";
import "aos/dist/aos.css";

import "../../stylesheets/home.css";

import Carousel from "./carousel.js";

import homeSaveMore from "../../images/saveMore/home.PNG";
import signupSaveMore from "../../images/saveMore/signup.PNG";
import productSaveMore from "../../images/saveMore/product.PNG";

import homeCamouflaged from "../../images/camouflaged/home.jpeg";
import home2Camouflaged from "../../images/camouflaged/home2.jpeg";
import composeCamouflaged from "../../images/camouflaged/compose.PNG";

import homeTindog from "../../images/tindog/home.PNG";
import pricingTindog from "../../images/tindog/pricing.PNG";
import testimonialTindog from "../../images/tindog/testimonial.PNG";

import login from "../../images/chatify/login.jpeg";
import chat from "../../images/chatify/chat.jpeg";
import group from "../../images/chatify/group.jpeg";

function Projects(props) {
  const { viewportWidth } = props;
  useEffect(()=>{
    Aos.init({
      duration: 1400
    });
  },[]);
  return (
    <div className="container">
      <h1 className="projectsHead">Personal Projects</h1>
      <div className="allProjects row">
        <div
          data-aos={viewportWidth > 696 && "fade-up"}
          className="projectWrapperDiv col-md-6"
        >
          <div className="card project">
            <Carousel
              img1={homeSaveMore}
              img2={signupSaveMore}
              img3={productSaveMore}
              id={1}
            />
            <div className="card-body projectBody">
              <h4 className="card-title projectTitle">Save More</h4>
              <p className="card-text">
                A full-fledged e-commerce web application with features
                including user registration, product publishing, add-to-cart,
                and payment choices. It does CRUD operations on both the buyer
                and seller panels. Transactions are processed using the Razorpay
                payment gateway.
              </p>
              <h6 className="techUsedHead">Tech Stack:</h6>
              <div className="techUsed">
                <span>React.js</span>
                <span>Node.js</span>
                <span>MongoDB</span>
                <span>Material-UI</span>
              </div>
              <div className="projectButtons">
                <a
                  href="https://github.com/RidamGarg/SaveMore"
                  class="btn btn-primary glow-on-hover"
                >
                  Source Code
                </a>
                <a
                  href="https://save-more.herokuapp.com/"
                  class="btn btn-primary glow-on-hover"
                >
                  Live Demo
                </a>
              </div>
            </div>
          </div>
        </div>

        <div data-aos="fade-up" className="projectWrapperDiv col-md-6">
          <div className="card project">
            <Carousel img1={login} img2={chat} img3={group} id={4} />
            <div className="card-body projectBody">
              <h4 className="card-title projectTitle">Chatify</h4>
              <p className="card-text">
                A web application that enables users to chat in real time with
                one another. Users can communicate both one-on-one and in
                groups. It contains features including message alerts, searching
                for members, creating a group chat, renaming groups, and
                adding/removing people from groups.
              </p>
              <h6 className="techUsedHead">Tech Stack:</h6>
              <div className="techUsed">
                <span>Node.js</span>
                <span>React.js</span>
                <span>MongoDB</span>
                <span>Socket.io</span>
              </div>
              <div className="projectButtons">
                <a
                  href="https://github.com/rhythm-28/Chatify"
                  class="btn btn-primary glow-on-hover"
                >
                  Source Code
                </a>
                <a
                  href="https://rhythm-chatify.herokuapp.com/"
                  class="btn btn-primary glow-on-hover"
                >
                  Live Demo
                </a>
              </div>
            </div>
          </div>
        </div>

        <div data-aos="fade-up" className="projectWrapperDiv col-md-6">
          <div className="card project">
            <Carousel
              img1={homeCamouflaged}
              img2={home2Camouflaged}
              img3={composeCamouflaged}
              id={2}
            />
            <div className="card-body projectBody">
              <h4 className="card-title projectTitle">Camouflaged</h4>
              <p className="card-text">
                A web application that caters to the features of a
                secret-sharing app by posting users’ secrets anonymously. It is
                utilised by people to disclose secrets without fear of being
                criticized.
              </p>
              <h6 className="techUsedHead">Tech Stack:</h6>
              <div className="techUsed">
                <span>Node.js</span>
                <span>MongoDB</span>
                <span>Express.js</span>
                <span>EmbeddedJS</span>
              </div>
              <div className="projectButtons">
                <a
                  href="https://github.com/rhythm-28/Camouflaged"
                  class="btn btn-primary glow-on-hover"
                >
                  Source Code
                </a>
                <a
                  href="https://camouflaged.herokuapp.com/"
                  class="btn btn-primary glow-on-hover"
                >
                  Live Demo
                </a>
              </div>
            </div>
          </div>
        </div>

        <div data-aos="fade-up" className="projectWrapperDiv col-md-6">
          <div className="card project">
            <Carousel
              img1={homeTindog}
              img2={pricingTindog}
              img3={testimonialTindog}
              id={3}
            />
            <div className="card-body projectBody">
              <h4 className="card-title projectTitle">Tindog</h4>
              <p className="card-text">
                A clone of the user interface of Tinder. But it's just for dogs.
                At Tindog, we are here to motivate, empower, and help all pet
                owners and their pets live a healthier, more fulfilling life.
              </p>
              <h6 className="techUsedHead">Tech Stack:</h6>
              <div className="techUsed">
                <span>HTML 5</span>
                <span>CSS 3</span>
                <span>Bootstrap</span>
              </div>
              <div className="projectButtons">
                <a
                  href="https://github.com/rhythm-28/TinDog"
                  class="btn btn-primary glow-on-hover"
                >
                  Source Code
                </a>
                <a
                  href="https://rhythm-28.github.io/TinDog/"
                  class="btn btn-primary glow-on-hover"
                >
                  Live Demo
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
