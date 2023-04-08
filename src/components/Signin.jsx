import React, { Component } from "react";
import "./styles.css";
import axios from 'axios';

class Signin extends Component {
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
    let loginInfo  = { ...this.state.loginInfo };
    loginInfo[e.target.name] = e.target.value;
    this.setState({ loginInfo });
    console.log(this.state.loginInfo.email_id);
    console.log(this.state.loginInfo.password);
  };
    
  handleSignIn = (e) => {
    e.preventDefault();
    console.log(this.state.loginInfo);
    axios.post("http://127.0.0.1:8000/login/", this.state.loginInfo )
      .then((response) => {
        if (response.data.status === "success") {
          localStorage.setItem("session_id", response.data.session_id);
          localStorage.setItem("email_id", this.state.loginInfo.email_id);
          window.location.href="/home"
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
    if (localStorage.getItem("session_id")) {
      window.location.href = "/home";
    }
    else {
      return (
        <div>
          <div className="container">
            <h2>Sign In</h2>
            <form method="POST" onSubmit={this.handleSignIn}>
              <label>
                Email:
                <input
                  name="email_id"
                  type="email"
                  // value={this.state.loginInfo.email_id}
                  onChange={this.handleChange}
                  required
                />
              </label>
              <label>
                Password:
                <input
                  type="password"
                  name="password"
                  // value={this.state.loginInfo.password}
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
}

export default Signin