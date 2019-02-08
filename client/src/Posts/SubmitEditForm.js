import React, { Component } from 'react';
import PostEdit from './PostEdit'

class SubmitEditForm extends Component {
  constructor(props){
    super(props)
    this.state = { authorized: true, post: {}}

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleSuccess = this.handleSuccess.bind(this)
    this.handleFailure = this.handleFailure.bind(this)
  } 

  componentDidMount(){
    var id = this.props.match.params.id

    fetch('/posts/'+id).then(results => { 
      return results.json()
    }).then(data => {
      this.setState({post: data}) 
    })

  }

  handleSuccess() {
    var id = this.props.match.params.id
    this.props.history.push('/posts/'+ id)
  }

  handleFailure() {
    this.setState({authorized: false}) 
  }

  handleSubmit(e, input) {
    e.preventDefault();
    var id = this.props.match.params.id

    fetch('/posts/'+ id, {
      method: 'PUT',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify(input)
    }).then(response => { 
      if(response.ok){
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
        {!this.state.authorized && <h3 style={{color: "red"}}>Not Authorized to Edit This Post</h3>}
        <PostEdit post={this.state.post} handleSubmit={this.handleSubmit} />
      </div>
    );
  }
}

export default SubmitEditForm;
