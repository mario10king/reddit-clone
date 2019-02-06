import React, { Component } from 'react';
import  {Link} from 'react-router-dom';

class PostPreview extends Component {
  render() {
    var style = {height: "150px", position: "relative", margin: "10px auto", border: "solid 1px black", color: "black", backgroundColor: "white"}
    var usernameStyle = {position: "absolute", right: "100px", top: "10px", fontSize: "10px"}
    var titleStyle = {position: "absolute", top: "10px", width: "200px", left: "calc(50% - 100px)", fontSize: "24px"}
    var bodyStyle = {position: "absolute", textAlign: "left", top: "40px", left: "2px", fontSize: "16px"}
    var append = false
    if (this.props.post.body.length > 1000){
      append = true 
    }
    console.log(this.props.post)
    return (
      <Link to={"/posts/"+ this.props.post.id}>
      <div style={style}>
        <span style={titleStyle}>{this.props.post.title}</span>
      <Link to={"/users/"+ this.props.post.username}>
        <span style={usernameStyle}>Posted by: {this.props.post.username}<br/></span>
      </Link>
        <span style={bodyStyle}>{this.props.post.body.substring(0,1000)}
          {append && "..."}
        </span>
      </div>
      </Link>
    );
  }
}

export default PostPreview;
