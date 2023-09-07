import React, { Component } from "react";
import "./styles.css";
import axios from 'axios';

class Signin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loginInfo: {      // loginInfo state to store email id and password
        email_id: '',
        password: '',
      },
      errorMessage: {   // errorMessage state to store error message
        email_id: '',
        password: '',
      },
    };
  }
  
  handleChange = (e) => {                           // function to handle change in input fields
    let loginInfo  = { ...this.state.loginInfo };   // loginInfo state is copied to loginInfo variable
    loginInfo[e.target.name] = e.target.value;      // value of input field is stored in loginInfo state
    this.setState({ loginInfo });                   // loginInfo state is set to loginInfo variable
    console.log(this.state.loginInfo.email_id);     
    console.log(this.state.loginInfo.password);
  };
    
  handleSignIn = (e) => {                         // function to handle sign in
    e.preventDefault();
    console.log(this.state.loginInfo);
    axios.post("http://127.0.0.1:8000/login/", this.state.loginInfo ) // email id and password is passed to login
      .then((response) => {
        if (response.data.status === "success") {
          localStorage.setItem("session_id", response.data.session_id); // session id is stored in local storage
          localStorage.setItem("email_id", this.state.loginInfo.email_id);
          window.location.href="/home"
        }
        else if (response.data.status === "failure") {
          let errorMessage = { ...this.state.errorMessage };  // errorMessage state is copied to errorMessage variable
          errorMessage.email_id = 'Incorrect email id or password';
          errorMessage.password = 'Incorrect email id or password';
          this.setState({ errorMessage });                    // errorMessage state is set to errorMessage variable
        }
      }).catch((error) => {
        console.log(error);
      });
  };

  
  render() {
    if (localStorage.getItem("session_id")) {   // if session id present, logged in user is redirected to home page
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
                  onChange={this.handleChange}  // function to handle change in input fields
                  required
                  style={{
                    borderColor: this.state.errorMessage.email_id ? "red" : "",    // if error message is present, border color is set to red 
                  }}
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
                <div style={{ color: "red", fontSize: "16px" }}>
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
