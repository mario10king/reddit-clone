import React, { Component } from 'react';
import style from './Form.module.css';

class Form extends Component {
  constructor(props){
    super(props)
    this.state = { username: "", password: ""}

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e, type) {
    if (type === "username"){
      this.setState({username: e.target.value})
    }else if(type === "password"){
      this.setState({password: e.target.value})
    }
  }

  render() {
    return (
      <div className={style.form}>
        <h1 className={style.title}> {this.props.value} </h1>
        <form onSubmit={(e) => this.props.handleSubmit(e, this.state)} >
          <input placeholder="Username" required className={style.input} type="input" name="username" value={this.state.username} onChange={(e) => this.handleChange(e, "username")}/><br/>
          <input placeholder="Password" required className={style.input} type="password" name="password" value={this.state.password} onChange={(e) => this.handleChange(e, "password")}/><br/>
          <input className={style.button} type="submit" value={this.props.value}/>
        </form>
      </div>
    );
  }
}

export default Form;
