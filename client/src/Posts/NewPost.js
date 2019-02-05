import React, { Component } from 'react';

class SubmitPostForm extends Component {
  constructor(props){
    super(props)
    this.state = { title: "", body: ""}
  
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleSubmit(e) {
    e.preventDefault();
    fetch('/posts', {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify({title: this.state.title, body: this.state.body})
    }).then(response => { 
      this.setState({title: "", body: ""})
    }).catch((error) => {
      console.log(error)
    })
  }

  handleChange(e, type) {
    if(type === "title"){ 
    this.setState({title: e.target.value})
    } else if(type === "body"){ 
    this.setState({body: e.target.value})
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} >
        <input type="text" name="title" value={this.state.title} onChange={(e) => this.handleChange(e, "title")}/>
        <input type="text" name="body" value={this.state.body} onChange={(e) => this.handleChange(e, "body")}/>
        <input type="submit"/>
      </form>
    );
  }
}

export default SubmitPostForm;
