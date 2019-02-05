import React, { Component } from 'react';
import Posts from './Posts/Posts'
import SubmitPostForm from './Posts/SubmitPostForm'
import SignUp from './Users/SignUp'
import SignIn from './Users/SignIn'
import SignOut from './Users/SignOut'

class Home extends Component {
  render() {
    return (
      <div>
        <SubmitPostForm />
        <Posts/>
        <SignUp />
        <SignIn />
        <SignOut />
      </div>
    );
  }
}

export default Home;
