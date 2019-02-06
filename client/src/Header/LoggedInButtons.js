import React, { Component } from 'react';
import { Link } from "react-router-dom";
import SignOut from "../Users/SignOut";

class LoggedInButtons extends Component {
  render() {
    return (
      <Link to="/">
        <SignOut reload={this.props.reload}/>
      </Link>
    );
  }
}

export default LoggedInButtons;
