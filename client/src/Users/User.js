import React, { Component } from 'react';
import {Link} from "react-router-dom"

class User extends Component {
  constructor(props){
    super(props)
    this.state = {user: []}
  }

  componentDidMount(){
    var id = this.props.match.params.id
    fetch('/users/'+id).then(results => { 
      return results.json()
    }).then(data => {
      this.setState({user: data}) 
    })
  }

  render() {
    return (
      <div>
        {this.state.user.username}
      </div>
    );
  }
}

export default User;
