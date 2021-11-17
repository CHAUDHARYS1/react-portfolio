// import logo from './logo.svg';
import "antd/dist/antd.css";
import "./App";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Layout } from "antd";

import Nav from "./components/nav";
import Home from "./pages/Home";

function App() {
  return (
    <Layout>
      <Router>
        <Switch>
        <div className="App">
          <Nav />
        </div>
        </Switch>
      </Router>
      <Layout>
        {/* Content goes below */}
        <Router>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/resume" exact component={Resume} />
            <Route path="/project" exact component={Project} />
            <Route path="/contact" exact component={Contact} />
          </Switch>
        </Router>

        {/* Footer goes here before the 2nd </Layout> */}
      </Layout>
    </Layout>
  );
}

export default App;
