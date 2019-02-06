import React, { Component } from "react";
import { Link } from "react-router-dom";
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
      <Link to="/" className={style.link}>
        <div className={style.header}>
          <h1 className={style.title}>
            Reddit Clone
          </h1>      
          {buttons}
        </div>
      </Link>
    );
  }
}

export default Header;
