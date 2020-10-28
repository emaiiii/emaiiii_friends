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
                  <SignIn/>
                  <Footer/>
              </Route>

        </Switch>
      </div>
    </Router>
  );
}

export default App;
