import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import style from './PostPreview.module.css'

class PostPreview extends Component {
  render() {
    var post = this.props.post
    var append = false
    if (post.text.length > 480){
      append = true 
    }
     
    return (
      <div className={style.container}>
        <Link to={"/posts/"+ post.id}>
          <span className={style.title}>{post.title}</span>
          <span className={style.category}>Category: {post.category}</span>
          <span className={style.text}>{post.text.substring(0, 480)}
            {append && "..."}
          </span>
        </Link>
        <Link to={"/users/"+ post.username}>
          <span className={style.username}>Posted by: {post.username}</span>
        </Link>
      </div>
    );
  }
}

export default PostPreview;
