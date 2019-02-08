import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom"
import Header from './Header/Header';
import './App.module.css';
import Home from './Home';
import SignIn from './Users/SignIn';
import SignUp from './Users/SignUp';
import NewPost from './Post/New';
import ShowPost from './Post/Show';
import EditPost from './Post/Edit';
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
          <Route path="/post" component={NewPost} />
          <Route path="/post/:id" exact component={ShowPost} />
          <Route path="/post/:id/edit" component={EditPost} />
          <Route path="/users/:username" component={User} />
        </div>
      </Router>
    );
  }
}

export default App;
