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
      },
      errorMessage: {
        email_id: '',
        password: '',
      },
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
          let errorMessage = { ...this.state.errorMessage };
          errorMessage.email_id = 'Incorrect email id or password';
          errorMessage.password = 'Incorrect email id or password';
          this.setState({ errorMessage });
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
                <div className="text-place">Email</div>
                <input
                  className="form-control input-box"
                  name="email_id"
                  type="email"
                  placeholder="Email"
                  onChange={this.handleChange}
                  required
                 
                />
              </label>
              <label>
                <div className="text-place">Password</div>
                <input
                  className="form-control input-box"
                  type="password"
                  name="password"
                  placeholder="Password"
                  onChange={this.handleChange}
                  required
                  style={{
                    borderColor: this.state.errorMessage.password ? "red" : "",
                  }}
                />
                <div style={{ color: "red", fontSize: "12px" }}>
                  {this.state.errorMessage.password}
                </div>
              </label>
              <button type="submit" className="bg-dark">
                Sign In
              </button>
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

export default Signin;
