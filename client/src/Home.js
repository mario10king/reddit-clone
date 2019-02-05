import React, { Component } from 'react';
import Posts from './Posts/Posts'
import SubmitPostForm from './Posts/SubmitPostForm'

class Home extends Component {
  render() {
    return (
      <div>
        <SubmitPostForm />
        <Posts/>
      </div>
    );
  }
}

export default Home;
