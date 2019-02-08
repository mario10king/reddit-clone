import React, {
  Component
} from 'react';
import { Link } from 'react-router-dom';
import IndexPosts from './Post/Index';
import style from './Home.module.css';

class Home extends Component {
  render() {
    var button = (
      <Link to="/post">
        <button
          className={
            style.button
          }
        >
          New
          Post
        </button>
      </Link>
    );
    return (
      <div
      >
        {!!localStorage.getItem(
          'username'
        ) &&
          button}
        <IndexPosts />
      </div>
    );
  }
}

export default Home;
