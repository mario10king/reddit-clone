import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom"
import Header from './Header/Header';
import './App.module.css';
import Home from './Home';
import SignIn from './Users/SignIn';
import SignUp from './Users/SignUp';
import SubmitPostForm from './Posts/SubmitPostForm';
import Post from './Posts/Post';
import User from './Users/User';


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header/>
          <Route path="/" exact component={Home} />
          <Route path="/sign_up" component={SignUp} />
          <Route path="/sign_in" component={SignIn} />
          <Route path="/post" component={SubmitPostForm} />
          <Route path="/posts/:id" component={Post} />
          <Route path="/users/:username" component={User} />
        </div>
      </Router>
    );
  }
}

export default App;
