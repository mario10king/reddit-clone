import React, { Component } from 'react';
import {Link} from "react-router-dom"
import Posts from './Posts/Posts'

class Home extends Component {
  render() {
    var button  = (
      <Link to="/post">
        <button>
          Post
        </button>
      </Link>
    )
    return (
      <div>
        {!!localStorage.getItem("loggedIn") && button }
        <Posts/>
      </div>
    );
  }
}

export default Home;
