import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Switch } from 'react-router';
import './App.module.css';
import ShowHeader from './Header/Show';
import Home from './Home';
import ShowUser from './User/Show';
import NewUser from './User/New';
import SignInUser from './User/SignIn';
import NewPost from './Post/New';
import ShowPost from './Post/Show';
import EditPost from './Post/Edit';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <ShowHeader />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/user/new" component={NewUser} />
            <Route path="/user/sign_in" component={SignInUser} />
            <Route path="/user/:username" component={ShowUser} />
            <Route path="/post" exact component={NewPost} />
            <Route path="/post/:id" exact component={ShowPost} />
            <Route path="/post/:id/edit" component={EditPost} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
