import { useState } from 'react';
import Home from './views/Home';
import Rocket from './views/Rocket';
import Launch from './views/Launch';
import NavigationBar from './components/NavigationBar';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  BrowserRouter,
} from "react-router-dom";
import './App.css';
import LoadingScreen from './components/Loading';
import RocketDetail from './views/RocketDetail';



function App() {
  const [isLoading, setLoading] = useState(false)

  const removeScrollListener = () => document.removeEventListener('scroll', handleScroll, false);
  const addScrollListener = () => document.addEventListener('scroll', handleScroll, false);

  const handleScroll = () => {}

  const setStateLogin = (state) => {
    if (state) {
      removeScrollListener()
    } else {
      addScrollListener()
    }
    setLoading(state)
  }
  let routes = (
    <Switch>
      <Route exact path="/">
        <Home stateLoading={setStateLogin} />
      </Route>
      <Route exact path="/rockets">
        <Rocket stateLoading={setStateLogin} />
      </Route>
      <Route path={`/rockets/:rocketID`} component={RocketDetail} />
      <Route path="/launchs" render={props => <Launch stateLoading={setStateLogin} {...props}/>}/>
    </Switch>
  );

  return (
    <BrowserRouter>
      <div>
        <NavigationBar />
        <LoadingScreen isLoading={isLoading} />
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        {routes}
      </div>
    </BrowserRouter>
  );
}

export default App;