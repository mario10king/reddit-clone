import React, { Component } from 'react';

class SignUp extends Component {
  constructor(props){
    super(props)
    this.state = { username: "", password: ""}
  
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleSubmit(e) {
    e.preventDefault();
    fetch('/users', {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify({username: this.state.username, password: this.state.password})
    }).then(response => { 
      localStorage.setItem("loggedIn", true)
      this.setState({username: "", password: ""})
    }).catch((error) => {
      console.log(error)
    })
  }

  handleChange(e, type) {
    if (type === "username"){
      this.setState({username: e.target.value})
    }else if(type === "password"){
      this.setState({password: e.target.value})
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} >
        Username:
        <input type="input" name="username" value={this.state.username} onChange={(e) => this.handleChange(e, "username")}/>
        Password:
        <input type="password" name="password" value={this.state.password} onChange={(e) => this.handleChange(e, "password")}/>
        <input type="submit" value="Sign Up"/>
      </form>
    );
  }
}

export default SignUp;
