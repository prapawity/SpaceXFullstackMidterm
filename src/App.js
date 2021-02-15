import React from 'react';
import logo from './logo.svg';
import Home from './views/Home';
import Rocket from './views/Rocket';
import Launch from './views/Launch';
import NavigationBar from './components/NavigationBar';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import './App.css';
import 'rsuite/dist/styles/rsuite-default.css';

function App() {
  let routes = (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/rockets">
        <Rocket />
      </Route>
      <Route path="/launchs">
        <Launch />
      </Route>
    </Switch>
  );

  return (
    <Router>
      <div>
        <NavigationBar />
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        {routes}
      </div>
    </Router>
  );
}

export default App;
