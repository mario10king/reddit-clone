import React, { Component } from "react";
import { Link } from "react-router-dom";
import SignOut from "./Users/SignOut";

class Header extends Component {
  constructor(props){
    super(props)
  
    this.reload = this.reload.bind(this)
  }
  reload(){
    this.forceUpdate()
  }
  render() {
    var signin = {height: "50px", marginRight: "10px", width: "100px",fontSize: "24px"};
    var signup = {height: "50px", width: "100px",fontSize: "24px"};
    var button = {position: "absolute", right: "5%", width: "210px", display: "inline-block"}
    var loggedOutButtons = (
      <div style={button}>
        <Link to="/sign_in">
          <button style={signin}>Sign In</button>
        </Link>
        <Link to="/sign_up">
          <button style={signup}>Sign Up</button>
        </Link>
      </div>
    );

    var loggedInButton = (
      <Link to="/">
        <SignOut reload={this.reload} style={signin}/>
      </Link>
    )

    var loggedIn = !!localStorage.getItem("loggedIn")
    var buttons =  loggedIn ? loggedInButton : loggedOutButtons;

    var style = {color: "black", marginTop: "0px", position: "relative", top: "40px"}
    var header = {height: "125px",position: "relative", backgroundColor: "white"}
    return (
      <Link to="/" style={{textDecoration: "none"}}>
        <div className="Header" style={header}>
          <h1 style={style}>
            Reddit Clone
          </h1>      
          {buttons}
        </div>
      </Link>
    );
  }
}

export default Header;
