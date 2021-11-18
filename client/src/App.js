// import logo from './logo.svg';
import "antd/dist/antd.css";
import "./App";
import "./App.css"
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Layout } from "antd";

import Nav from "./components/nav";
import Footers from "./components/footer";
import Home from "./pages/Home";
// import Resume from "./pages/Resume";
import Project from "./pages/Project";
import Contact from "./pages/Contact";

const { Header } = Layout;

function App() {
  return (
    <Layout className="wrapper">
         {/* Content goes below */}
         <Router>
        <Nav />
          <Switch>
          <Layout className="margin-top-50 margin-left-50">

            <Route exact path="/"  component={Home} />
            {/* <Route exact path="/resume" component={Resume} /> */}
            <Route exact path="/project" component={Project} />
            <Route exact path="/contact" component={Contact} />

        {/* Footer goes here before the 2nd </Layout> */}
        <Footers></Footers>
        </Layout>

          </Switch>
        </Router>
        
        
    </Layout>
  );
}

export default App;
