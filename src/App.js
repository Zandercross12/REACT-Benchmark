import Logolink from "./Logolink";
import Content from "./Content";
import JavascriptList from "./JavascriptList";
import Contact from "./Contact";
import NotFound from "./NotFound";
import Homelink from "./Homelink";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/contact">
            <Homelink />
            <Contact />
          </Route>
          <Route exact path="/">
            <Logolink />
            <Content />
            <JavascriptList />
          </Route>
          <Route path="/">
            <Logolink />
            <div className="error">
              <NotFound />
            </div>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
