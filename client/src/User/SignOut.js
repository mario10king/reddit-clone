import React, { Component } from 'react';
import style from './SignOut.module.css'

class SignOut extends Component {
  constructor(props){
    super(props)

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleSuccess = this.handleSuccess.bind(this)
  }

  handleSuccess(){
    localStorage.removeItem("username");
    this.props.reload()
  }

  handleSubmit() {
    fetch('/sign_out', {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
    }).then(response => { 
      if(response.ok) {
        this.handleSuccess()
      }
    }).catch((error) => {
      console.log(error)
    })
  }

  render() {
    return (
      <button className={style.button} onClick={this.handleSubmit}>
        LogOut
      </button>
    );
  }
}

export default SignOut;
