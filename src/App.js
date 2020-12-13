import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Landing from './pages/Landing/Landing';
import Main from './pages/Main/Main';
import MyProfile from './pages/MyProfile/MyProfile';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

    // load data for main page posts after initial render 
    // pass it to the main page if there is a successful login
    const [posts] = useState([]);

    useEffect(() => {
      fetch("http://localhost:3000/mainposts", {
        method: "get"
      })
        .then(response => response.json())
        .then(postArray => {
          postArray.map(p => (
            posts.push({
              username: p.username,
              imageUrl:'https://hips.hearstapps.com/countryliving.cdnds.net/17/47/1511194376-cavachon-puppy-christmas.jpg',
              title: p.title,
              caption: p.caption
            })
          ))
          console.log(posts);
        })
        .catch(console.log)
    })

  return (
    <Router>
      <div className="App">
        <Switch>
              {/*--Home Page--*/}
              <Route path="/main">
                <Main posts={posts}/>
              </Route>

              {/*--My Profile Page*/}
              <Route path="/myprofile">
                <MyProfile/>
              </Route>

              {/*--Default Landing Page--*/}
              <Route path="/">
                <Landing/>
              </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
