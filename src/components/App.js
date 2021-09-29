import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";

import "../stylesheets/App.css";
import main from "./main.js";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={main} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
