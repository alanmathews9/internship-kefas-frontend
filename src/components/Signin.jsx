import React, { Component } from "react";
import { useNavigate } from "react-router-dom";
import "./styles.css"
import Navbar from "./Navbar";
import axios from 'axios'
export function Navigate(props) { 
  const navigate = useNavigate();
  return (<Signin navigate={navigate}></Signin>)
}
class Signin extends Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this);
    this.handleSignIn = this.handleSignIn.bind(this);
    this.state = {
      email: '',
      password: '',
    }
  }
  handleEmailChange = (e) => {
    this.setState({
      email: e.target.value
    });
  };
  handlePasswordChange = (e) => {
    this.setState({
      password: e.target.value
    });
  };

  
    
  handleSignIn = (e) => {
    e.preventDefault();
    axios.post("http://127.0.0.1:8000/login/", {
      email_id: this.state.email,
      password: this.state.password,
    })
      .then((response) => { 
        if (response.data.status === "success") {
          this.props.navigate("/logs");
        }
        else if (response.data.status === "failure") {
          console.log("Login failed:", response.data.reason);
          this.props.navigate("/home");
        }
        else { 
          console.log("weeee");
        }
      })
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
                type="email"
                value={this.state.email}
                onChange={this.handleEmailChange}
                required
              />
            </label>
            <label>
              Password:
              <input
                type="password"
                value={this.state.password}
                onChange={this.handlePasswordChange}
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

export default Signin;