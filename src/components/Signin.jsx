import React, { Component } from "react"
import "./styles.css";
import Navbar from "./Navbar";
import axios from 'axios'
export default class Signin extends Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this);
    this.handleSignIn = this.handleSignIn.bind(this);
    this.state = {
      loginInfo: {
        email_id: this.state.email,
        password: this.state.password,
      }
    }
  }
  handleChange(e) { 
    this.setState({
      email: e.target.value,
      password: e.target.value
    }); 
  }
  // setMail(e){
  //   this.setState({
  //     email: e.target.value
  //   });
    
  // };
  
  // setPassword(e){
  //   this.setState({
  //     password: e.target.value
  //   });
    
  // };
    
  handleSignIn(e) {
  e.preventDefault();
  // const formData = new FormData();
  // formData.append("email_id", this.state.email);
  // formData.append("password", this.state.password);
  
    axios.post("http://127.0.0.1:8000/login/", this.state.loginInfo )
    .then((response) => { 
      if (response.data.status === "success") {
        window.location.href="/logs"
      }
      else if (response.data.status === "failure") {
        alert("Incorrect email id or password");
        console.log(response.data.reason);
      }
    })
  this.setState({email: '', password: ''})
};

  render() {
    return (
      <div>
        <div className="container">
          <h2>Sign In</h2>
          <form onSubmit={this.handleSignIn}>
            <label>
              Email:
              <input
                name="email_id"
                type="email"
                value={this.state.email}
                onChange={this.handleChange}
                required
              />
            </label>
            <label>
              Password:
              <input
                type="password"
                name="password"  
                value={this.state.password}
                onChange={this.handleChange}
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
    )
  }
};