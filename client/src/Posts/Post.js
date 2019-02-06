import React, { Component } from 'react';
import {Link} from "react-router-dom"

class Post extends Component {
  constructor(props){
    super(props)

    this.state = {posts: []}
  }

  componentDidMount(){
    var id = this.props.match.params.id
    fetch('/posts/'+id).then(results => { 
      return results.json()
    }).then(data => {
      this.setState({posts: data}) 
    })
  }

  render() {
        //{this.state.posts.category}
    return (
      <div>
        Title: {this.state.posts.title} <br/>
        Body: {this.state.posts.body}<br/>
        Username: {this.state.posts.username}<br/>
      </div>
    );
  }
}

export default Post;
