import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Landing from './pages/Landing/Landing';
import Main from './pages/Main/Main';
import MyProfile from './pages/MyProfile/MyProfile';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  // load posts and comments for main page posts after initial render 
  // pass it to the main page if there is a successful login
  const [posts] = useState([]);
  const [comments] = useState([]);

  useEffect(() => {
    // load posts
    fetch("http://localhost:3000/mainposts", {
      method: "get"
    })
      .then(response => response.json())
      .then(postArray => {
        postArray.map(p => (
          posts.push({
            photo_id: p.photo_id,
            username: p.username,
            imageUrl:'https://hips.hearstapps.com/countryliving.cdnds.net/17/47/1511194376-cavachon-puppy-christmas.jpg',
            title: p.title,
            caption: p.caption
          })
        ))
        //console.log(posts);
      })
      .then(() => {
        // load the comments of posts
        fetch("http://localhost:3000/getcomments", {
          method: "get"
        })
          .then(response => response.json())
          .then(commentsArray => {
            commentsArray.map(c => (
              comments.push({
                photo_id: c.photo_id,
                username: c.username,
                comment: c.comment
              })
            ))
          })
          //console.log(comments);
      })
      .catch(console.log)
  }, [posts, comments])

  return (
    <Router>
      <div className="App">
        <Switch>
              {/*--Home Page--*/}
              <Route path="/main">
                <Main posts={posts} comments={comments}/>
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
