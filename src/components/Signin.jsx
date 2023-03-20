import React, { Component } from "react";
import { useNavigate } from "react-router-dom";
import "./styles.css"
import Navbar from "./Navbar";
import axios from 'axios'

class Signin extends Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleChange.bind(this);
    this.state = {
      email: '',
      password: '',
    }
  }
  handleChange = (e) => {
    this.setState({
      email: e.target.value,
      password: e.target.value,
    });
  };
    
  navigate = useNavigate();
    
  handleSignIn = (e) => {
    e.preventDefault();
    axios.post("http://127.0.0.1:8000/login/", {
      email_id: this.state.email,
      password: this.state.password,
    })
      .then((response) => { 
        if (response.data.status === "success") {
          navigate("/logs");
        }
        else if (response.data.status === "failure") {
          console.log("Login failed:", response.data.reason);
          navigate("/home");
        }
        else { 
          console.log("weeee");
        }
      })
  };
  render() {
    return (
      <div><Navbar />
        <div className="container">
          <h2>Sign In</h2>
          <form onSubmit={this.handleSignIn}>
            <label>
              Email:
              <input
                type="email"
                value={email}
                onChange={this.handleChange}
                required
              />
            </label>
            <label>
              Password:
              <input
                type="password"
                value={password}
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
}

  


export default Signin;