import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import "../stylesheets/App.css";
import home from "./home/home.js";
import about from "./about/about.js";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={home} />
          <Route exact path="/about" component={about} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
