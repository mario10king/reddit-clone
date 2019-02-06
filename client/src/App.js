import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom"
import Header from './Header';
import './App.css';
import Home from './Home';
import SignIn from './Users/SignIn';
import SignUp from './Users/SignUp';
import NewPost from './Posts/NewPost';
import Post from './Posts/Post';
import User from './Users/User';


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header/>
          <div style={{backgroundColor: "#dae0e6"}} >
          <Route path="/" exact component={Home} />
          <Route path="/sign_up" component={SignUp} />
          <Route path="/sign_in" component={SignIn} />
          <Route path="/post" component={NewPost} />
          <Route path="/posts/:id" component={Post} />
          <Route path="/users/:id" component={User} />
        </div>
        </div>
      </Router>
    );
  }
}

export default App;
