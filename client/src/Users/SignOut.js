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
      if(response.ok){
      localStorage.removeItem("loggedIn");
        this.props.reload()
      }
    }).catch((error) => {
      console.log(error)
    })
  }

  render() {

    var style = {position: "absolute", right: "5%", height: "50px", width: "100px",fontSize: "24px"};
    return (
      <button style={style} onClick={this.handleSubmit}>
        LogOut
      </button>
    );
  }
}

export default SignOut;
