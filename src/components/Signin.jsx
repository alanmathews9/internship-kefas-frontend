import React, { Component } from "react"
import "./styles.css";
import Navbar from "./Navbar";
import axios from 'axios'
export default class Signin extends Component {
  constructor(props) {
    super(props)
    this.setMail = this.setMail.bind(this);
    this.setPassword = this.setPassword.bind(this);
    this.handleSignIn = this.handleSignIn.bind(this);
    this.state = {
      email: '',
      password: '',
    }
  }
  setMail(e){
    this.setState({
      email: e.target.value
    });
    
  };
  
  setPassword(e){
    this.setState({
      password: e.target.value
    });
    
  };
    
  handleSignIn(e) {
  e.preventDefault();
  const formData = new FormData();
  formData.append("email_id", this.state.email);
  formData.append("password", this.state.password);
  
  axios.post("http://127.0.0.1:8000/login/", formData)
    .then((response) => { 
      if (response.data.status === "success") {
        window.location.href="/logs"
      }
      else if (response.data.status === "failure") {
        alert("login failed");
      }
    })
  this.setState({email: '', password: ''})
};

  render() {
    return (
      <div>
      <div><Navbar />
        <div className="container">
          <h2>Sign In</h2>
          <form onSubmit={this.handleSignIn}>
            <label>
              Email:
              <input
                name="email_id"
                type="email"
                value={this.state.email}
                onChange={this.setMail}
                required
              />
            </label>
            <label>
              Password:
              <input
                type="password"
                name="password"  
                value={this.state.password}
                onChange={this.setPassword}
                required
              />
            </label>
            <button type="submit">Sign In</button>
          </form>
          <p>
            Don't have an account? <a href="/sign-up">Sign Up</a>
          </p>
        </div>
        </div>
        </div>
    )
  }
};