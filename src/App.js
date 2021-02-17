import React, { useState, useEffect } from 'react';
import Home from './views/Home';
import Rocket from './views/Rocket';
import Launch from './views/Launch';
import NavigationBar from './components/NavigationBar';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import './App.css';
import 'rsuite/dist/styles/rsuite-default.css';



function App() {
  const [active, setNav] = useState("home");
  
  const updateNav = (state) => {
    setNav(state)
    console.log(state, "check")
  }

  useEffect(() => {
    const stateNav = localStorage.getItem("state-nav")
    setNav(stateNav)
  }, [])

  useEffect(() => {
    localStorage.setItem("state-nav", active)
  }, [active])

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
        <NavigationBar state={active} updateState={updateNav} />
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        {routes}
      </div>
    </Router>
  );
}

export default App;