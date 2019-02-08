import React, {
  Component
} from 'react';
import Preview from './Preview';
import style from './Feed.module.css';

class Feed extends Component {
  render() {
    var posts = this.props.posts.map(
      post => (
        <Preview
          key={
            post.id
          }
          post={
            post
          }
        />
      )
    );
    return (
      <div
        className={
          style.feed
        }
      >
        {
          posts
        }
      </div>
    );
  }
}

export default Feed;
