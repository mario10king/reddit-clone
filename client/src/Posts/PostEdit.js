import React, { Component } from 'react';
import style from './NewPostForm.module.css'

class PostEdit extends Component {
  constructor(props){
    super(props)
    this.state = { title: '', text: '', category: ''}

    this.handleChange = this.handleChange.bind(this)
  }

  componentWillReceiveProps(props) {
    var post = props.post
    this.setState({ title: post.title, text: post.text, category: post.category})
  }

  handleChange(e, type) {
    if(type === "title"){ 
      this.setState({title: e.target.value})
    } else if(type === "text"){ 
      this.setState({text: e.target.value})
    } else if(type === "category"){ 
      this.setState({category: e.target.value})
    }
  }

  render() {
    return (
      <div className={style.form}>
        <h1 className={style.title}> Edit Post </h1>
        <form  onSubmit={(e) => this.props.handleSubmit(e, this.state)} >
          <input className={style.input} type="text" placeholder="Title" name="title" required value={this.state.title} onChange={(e) => this.handleChange(e, "title")}/><br/>
          <input className={style.input} type="text" placeholder="Category" name="category" required value={this.state.category} onChange={(e) => this.handleChange(e, "category")}/><br/>
          <textarea className={style.text} type="text" placeholder="Text" name="text" required value={this.state.text} onChange={(e) => this.handleChange(e, "text")}/><br/>
          <input className={style.button} type="submit" value="Update"/><br/>
        </form>
      </div>
    );
  }
}

export default PostEdit;
