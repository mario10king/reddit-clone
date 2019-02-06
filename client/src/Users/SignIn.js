import React, { Component } from 'react';

class SignIn extends Component {
  constructor(props){
    super(props)
    this.state = { username: "", password: ""}
  
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleSubmit(e) {
    e.preventDefault();
    fetch('/sign_in', {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify({username: this.state.username, password: this.state.password})
    }).then(response => { 
      if(response.ok){
      this.setState({username: "", password: ""})
      localStorage.setItem("loggedIn", true);
      this.props.history.push('/')
      }
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
         <input type="submit" value="Sign In"/>
      </form>
    );
  }
}

export default SignIn;
