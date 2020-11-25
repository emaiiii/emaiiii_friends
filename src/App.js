import React from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

import Landing from './pages/Landing/Landing';
import Main from './pages/Main/Main';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
              {/*--Home Page--*/}
              <Route path="/main">
                <Main/>
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
