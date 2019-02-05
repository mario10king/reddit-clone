import React, { Component } from 'react';

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
      localStorage.removeItem("loggedIn");
    }).catch((error) => {
      console.log(error)
    })
  }

  render() {
    return (
      <div>
      {localStorage.getItem('loggedIn') && <button onClick={this.handleSubmit}/>}
    </div>
    );
  }
}

export default SignOut;
