import React, { Component } from 'react';
import  Post from './Post';
import  PostPreview from './PostPreview';

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
    console.log(this.state)
    var posts = this.state.posts.map(function(post) {
      return <PostPreview post={post}/>
    })
    return (
      <div style={{width: "60%", margin: "10px auto"}}>
        {posts}
      </div>
    );
  }
}

export default Posts;
