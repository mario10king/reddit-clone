import React, { Component } from 'react';
import {withRouter} from 'react-router-dom'
import style from "./Show.module.css"

class Delete extends Component {
  constructor(props){
    super(props)
    
    this.handleDelete = this.handleDelete.bind(this)
    this.handleSuccess = this.handleSuccess.bind(this)
  }

  handleSuccess() {
    this.props.history.push('/users/' + localStorage.username)
  }

  handleDelete(id) {
    fetch('/posts/'+id, {
      method: 'DELETE',
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
      <button className={style.delete} onClick={() => this.handleDelete(this.props.id)}>
        Delete
      </button>
    );
  }
}

export default withRouter(Delete);
