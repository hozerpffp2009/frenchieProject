import React, { Component} from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from "./pages/Home";
import Menace from "./pages/Menace"
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Merchandise from "./pages/Merchandise";
import ContactUs from './pages/ContactUs';
import Frenchie from "./pages/Frenchie";

class App extends Component {
  render () {
    return (
      <Router>
        <div>
          <Nav />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/menace" component={Menace} />
            <Route path="/merchandise" component={Merchandise} />
            <Route path="/contactUs" component={ContactUs} />
            <Route path="/frenchie" component={Frenchie} />
          </Switch>
          <Footer />
        </div>
      </Router>
    )
  }
}

export default App;
