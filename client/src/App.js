import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom"
import Header from './Header';
import './App.css';
import Home from './Home';
import SignIn from './Users/SignIn';
import SignUp from './Users/SignUp';
import NewPost from './Posts/NewPost';
//import User from './Users/Users';
//import Post from './Posts/Post';


class App extends Component {
  render() {
          //<Route path="/user/:id" component={User} />
          //<Route path="/post/:id" component={Post} />
    return (
      <Router>
        <div className="App">
          <Header/>
          <Route path="/" exact component={Home} />
          <Route path="/sign_up" component={SignUp} />
          <Route path="/sign_in" component={SignIn} />
          <Route path="/post" component={NewPost} />
        </div>
      </Router>
    );
  }
}

export default App;
