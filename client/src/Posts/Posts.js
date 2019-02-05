import React, { Component } from 'react';
import  Post from './Post';
import  {Link} from 'react-router-dom';

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
      return <Link to={"/posts/"+ post.id} id={post.id}><li key={post.id}>
        {post.body}
        </li>
      </Link>
    })
    return (
      <ul>
        {posts}
      </ul>
    );
  }
}

export default Posts;
