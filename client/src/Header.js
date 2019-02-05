import React, { Component } from "react";
import { Link } from "react-router-dom";
import SignOut from "./Users/SignOut";

class Header extends Component {
  render() {
    var loggedOutButtons = (
      <div>
        <Link to="/sign_in">
          <button>Sign In</button>
        </Link>
        <Link to="/sign_up">
          <button>Sign Up</button>
        </Link>
      </div>
    );

    var loggedInButton = (
      <Link to="/">
        <SignOut/>
      </Link>
    )

    var loggedIn = !!localStorage.getItem("loggedIn")
    var buttons =  loggedIn ? loggedInButton : loggedOutButtons;

    return (
      <div className="Header">
        <h1>
          <Link to="/">Reddit Clone</Link>
        </h1>
        {buttons}
      </div>
    );
  }
}

export default Header;
