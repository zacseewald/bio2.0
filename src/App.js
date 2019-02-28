import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from './components/Nav/index';
import NavButton from './components/NavButton/index';
import Home from './pages/home';
import Tech from './pages/tech';
import About from './components/About/index';
import Contact from './pages/contact';
import AppCard from './components/AppCard/index';

import './App.css';

export default function App() {
  return (
    <div id="App">
            <Nav />
            <div id="page-wrap">
              <Router>
                <Switch>
                  <Route exact path="/" component={Home} />
                  <Route exact path="/about" component={About} />
                  <Route exact path="/contact" component={Contact} />
                  <Route exact path="/tech" component={Tech} />
                  <Route exact path="/test" component={AppCard} />
                </Switch>
              </Router>
            </div>
        </div>

  );
}
