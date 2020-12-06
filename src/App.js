import React, {useState} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Landing from './pages/Landing/Landing';
import Main from './pages/Main/Main';
import MyProfile from './pages/MyProfile/MyProfile';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  // state management
  const [userId, setUserId] = useState('');

  function handleUserId(childData) {
    setUserId(childData);
  }

  function printUserId(){
    console.log(userId);
  }

  printUserId();

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
                <Landing handleUserId={handleUserId}/>
              </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
