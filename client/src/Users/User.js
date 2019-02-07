import React, { Component } from 'react';
import Feed from "../Posts/Feed"

class User extends Component {
  constructor(props){
    super(props)
    this.state = {posts: []}
  }

  componentDidMount(){
    var username = this.props.match.params.username

    fetch('/users/'+username).then(results => { 
      return results.json()
    }).then(data => {
      this.setState({posts: data}) 
    })
  }

  render() {
    return (
      <Feed posts={this.state.posts}/>
    );
  }
}

export default User;
