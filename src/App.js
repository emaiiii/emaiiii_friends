import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";

import SignIn from './components/SignIn/SignIn';
import SignUp from './components/SignUp/SignUp';
import Footer from './components/Footer/Footer';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>

              {/*--Home Page--*/}
              <Route path="/signup">
                  <SignUp/>
              </Route>

              {/*--Home Page--*/}
              <Route path="/">
                  {/*--Top Region of The Landing Page--*/}
                  <div className="flex-container">
                    <div className="banner_background text-center">
                      <h1 className="banner_fontHeader">Welcome to Friends</h1>
                      <p className="banner_fontBody">Connect with friends and the world around you.</p>
                    </div>
                    <div>
                      <SignIn/>
                    </div>
                  </div>

                  <Footer/>
              </Route>

        </Switch>
      </div>
    </Router>
  );
}

export default App;
