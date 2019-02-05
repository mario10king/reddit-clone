import React, { Component } from 'react';

class Posts extends Component {
  constructor(props){
    super(props)
    this.state = {posts: []}
  }

  componentDidMount(){
    fetch('/posts').then(results => { 
      return results.json()
    }).then(data => {
      this.setState({posts: data}) 
    })
  }

  render() {
    var posts = this.state.posts.map(function(post) {
      return <li key={post.id}>{post.body}</li>
    })
    return (
      <ul>
        {posts}
      </ul>
    );
  }
}

export default Posts;
