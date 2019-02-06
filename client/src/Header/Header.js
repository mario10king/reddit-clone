import React, { Component } from "react";
import { Link } from 'react-router-dom'
import LoggedOutButtons from "./LoggedOutButtons";
import LoggedInButtons from "./LoggedInButtons";
import style from "./Header.module.css";

class Header extends Component {
  constructor(props){
    super(props)

    this.reload = this.reload.bind(this)
  }

  reload() {
    this.forceUpdate()
  }

  render() {
    var loggedIn = !!localStorage.getItem("loggedIn")
    var buttons =  loggedIn ? <LoggedInButtons reload={this.reload}/> : <LoggedOutButtons/>;

    return (
      <div className={style.header}>
        <Link to='/' className={style.link}>
          <h1 className={style.title}>
            Reddit Clone
          </h1>      
        </Link>
        {buttons}
      </div>
    );
  }
}

export default Header;
