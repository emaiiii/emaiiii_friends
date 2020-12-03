import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Landing from './pages/Landing/Landing';
import Main from './pages/Main/Main';
import MyProfile from './pages/MyProfile/MyProfile';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  const componentDidMount = () => {
    fetch("http://localhost:3000")
      .then(response => response.json())
      .then(console.log)
  };

  componentDidMount();
  
  return (
    <Router>
      <div className="App">
        <Switch>
              {/*--Home Page--*/}
              <Route path="/main">
                <Main/>
              </Route>

              {/*--My Profile Page*/}
              <Route path="/myprofile">
                <MyProfile/>
              </Route>

              {/*--DefaultLanding Page--*/}
              <Route path="/">
                <Landing/>
              </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
