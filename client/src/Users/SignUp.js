import React, { Component } from 'react';

class SignUp extends Component {
  constructor(props){
    super(props)
    this.state = { email: "", password: ""}
  
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleSubmit(e) {
    e.preventDefault();
    fetch('/users', {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify({username: this.state.email, password: this.state.password})
    }).then(response => { 
      this.setState({email: "", password: ""})
    }).catch((error) => {
      console.log(error)
    })
  }

  handleChange(e, type) {
    if (type === "email"){
      this.setState({email: e.target.value})
    }else if(type === "password"){
      this.setState({password: e.target.value})
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} >
        <input type="email" name="email" value={this.state.email} onChange={(e) => this.handleChange(e, "email")}/>
        <input type="password" name="password" value={this.state.password} onChange={(e) => this.handleChange(e, "password")}/>
        <input type="submit"/>
      </form>
    );
  }
}

export default SignUp;
