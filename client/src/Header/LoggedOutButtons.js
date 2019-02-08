import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import style from './LoggedOutButtons.module.css';

class LoggedOutButtons extends Component {
  render() {
    return (
      <div className={style.loggedOutButtons}>
        <Link to="/user/sign_in">
          <button className={style.button}>Sign In</button>
        </Link>
        <Link to="/user/new">
          <button className={style.button}>Sign Up</button>
        </Link>
      </div>
    );
  }
}

export default LoggedOutButtons;
