import React, { Component } from 'react';
import style from './SignOut.module.css'

class SignOut extends Component {
  constructor(props){
    super(props)
  
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit() {
    fetch('/sign_out', {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
    }).then(response => { 
      if(response.ok){
        localStorage.removeItem("loggedIn");
        this.props.reload()
      }
    }).catch((error) => {
      console.log(error)
    })
  }

  render() {
    return (
      <button className={style.button}onClick={this.handleSubmit}>
        LogOut
      </button>
    );
  }
}

export default SignOut;
