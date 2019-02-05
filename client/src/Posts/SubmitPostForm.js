import React, { Component } from 'react';

class SubmitPostForm extends Component {
  constructor(props){
    super(props)
    this.state = { postText: ""}
  
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleSubmit(e) {
    e.preventDefault();
    fetch('/posts', {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify(this.state.postText)
    }).then(response => { 
      this.setState({postText: ""})
    }).catch((error) => {
      console.log(error)
    })
  }

  handleChange(e) {
    this.setState({postText: e.target.value})
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} >
        <input type="text" name="body" value={this.state.postText} onChange={this.handleChange}/>
        <input type="submit"/>
      </form>
    );
  }
}

export default SubmitPostForm;
