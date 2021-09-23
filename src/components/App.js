import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import "../stylesheets/App.css";
import main from "./main.js";
// import home from "./home/home.js";
// import about from "./about/about.js";
// import contact from "./contact/contact.js";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={main} />
          {/* <Route exact path="/home" component={home} />
          <Route exact path="/about" component={about} />
          <Route exact path="/contact" component={contact} /> */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
