import React, { Component } from 'react';
import {Link} from "react-router-dom"
import Posts from './Posts/Posts'
import style from './Home.module.css'

class Home extends Component {
  render() {
    var button  = (
      <Link to="/post">
        <button className={style.button}>
          New Post
        </button>
      </Link>
    )
    return (
      <div>
        {!!localStorage.getItem("username") && button }
        <Posts/>
      </div>
    );
  }
}

export default Home;
