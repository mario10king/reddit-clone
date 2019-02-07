import React, { Component } from 'react';
import PostPreview from './PostPreview';
import style from './Feed.module.css'

class Feed extends Component {
  render() {
    var posts = this.props.posts.map(post => <PostPreview key={post.id} post={post}/>)
    return (
      <div className={style.feed}>
        {posts}
      </div>
    );
  }
}

export default Feed;
