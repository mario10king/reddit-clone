import React, { Component } from 'react';
import Form from './Form'

class SignIn extends Component {
  constructor(props){
    super(props)
    this.state = {wrongData: false}

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleSuccess = this.handleSuccess.bind(this)
    this.handleFailure = this.handleFailure.bind(this)
  }

  handleSuccess() {
    localStorage.setItem("loggedIn", true);
    this.props.history.push('/')
  }

  handleFailure() {
    this.setState({wrongData: true}) 
  }

  handleSubmit(e, data) {
    e.preventDefault();
    fetch('/sign_in', {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify(data)
    }).then(response => { 
      if(response.ok) {
        this.handleSuccess()
      } else {
        this.handleFailure()
      }
    }).catch((error) => {
      console.log(error)
    })
  }

  render() {
    return (
      <div style={{textAlign: "center"}}>
        {this.state.wrongData && <h3 style={{color: "red"}}>Username and/or Password are Incorrect</h3>}
        <Form handleSubmit={this.handleSubmit} value={"Sign In"}/>
      </div>
    );
  }
}

export default SignIn;
