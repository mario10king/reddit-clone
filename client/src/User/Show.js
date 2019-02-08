import React, { Component } from 'react';
import Feed from '../Post/Feed';

class Show extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      username: this.props.match.params.username
    };
  }

  componentDidMount() {
    var username = this.state.username;

    fetch('/users/' + username)
      .then(results => {
        return results.json();
      })
      .then(data => {
        this.setState({
          posts: data
        });
      });
  }

  render() {
    var username = this.state.username;
    return (
      <div>
        <h2 style={{ textAlign: 'center' }}> Posts by {username}</h2>
        <Feed posts={this.state.posts} />
      </div>
    );
  }
}

export default Show;
