import React, { Component } from "react";
import "./styles.css";
import Navbar from "./Navbar";
import axios from 'axios';

export default class Signin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loginInfo: {
        email_id: '',
        password: '',
      }
    };
  }
  
  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      loginInfo: {
        ...this.state.loginInfo,
        [name]: value
      }
    });
    console.log(this.state.loginInfo.email_id);
    console.log(this.state.loginInfo.password);
  };
    
  handleSignIn = (e) => {
    e.preventDefault();
    const { email_id, password } = this.state.loginInfo;
    axios.post("http://127.0.0.1:8000/login/", { email_id, password })
      .then((response) => {
        if (response.data.status === "success") {
          window.location.href="/logs"
        }
        else if (response.data.status === "failure") {
          alert("Incorrect email id or password");
          console.log(response.data.reason);
        }
      }).catch((error) => {
        console.log(error);
      });
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
                value={this.state.loginInfo.email_id}
                onChange={this.handleChange}
                required
              />
            </label>
            <label>
              Password:
              <input
                type="password"
                name="password"  
                value={this.state.loginInfo.password}
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
    );
  }
}