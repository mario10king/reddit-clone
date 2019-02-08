import React, { Component } from 'react';
import Feed from './Feed';

class Index extends Component {
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
    return (
      <Feed posts={this.state.posts}/> 
    );
  }
}

export default Index;
