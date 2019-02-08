import React, { Component } from 'react';
import {Link} from "react-router-dom"
import style from "./Post.module.css"
import Delete from "./Delete"

class Post extends Component {
  constructor(props){
    super(props)

    this.state = {post: {}}
  }

  componentDidMount(){
    var id = this.props.match.params.id

    fetch('/posts/'+id).then(results => { 
      return results.json()
    }).then(data => {
      this.setState({post: data}) 
    })
  }

  render() {
    var post = this.state.post
    var username = localStorage.username

    var action = (
      <div className={style.action}>
        <Link to={"/posts/"+post.id+"/edit"}>
          <button className={style.edit}>
            Edit 
          </button>
        </Link>
        <Delete id={post.id}/>
      </div>
    )

    return (
      <div className={style.container}>
        <span className={style.category}>Category: {post.category}</span>
        <span className={style.title}>{post.title}</span>
        <Link to={"/users/"+ post.username}>
          <span className={style.username}>Posted by: {post.username}</span>
        </Link> <br/>
        <span className={style.text}>{post.text}</span>
        { username === post.username && action}
      </div>
    );
  }
}

export default Post;
