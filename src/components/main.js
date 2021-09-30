import { react, useState } from "react";
import Home from "./home/home.js";
import About from "./about/about.js";
import Contact from "./contact/contact.js";
import Footer from "./footer.js";

function Main() {
  const [current, setCurrent] = useState("home");
  const viewportWidth = Math.max(
    document.documentElement.clientWidth || 0,
    window.innerWidth || 0
  );
  return (
    <div>
      {current === "home" && <Home viewportWidth={viewportWidth} />}
      {current === "about" && <About viewportWidth={viewportWidth} />}
      {current === "contact" && <Contact viewportWidth={viewportWidth} />}
      <Footer current={current} setCurrent={setCurrent} />
    </div>
  );
}

export default Main;
