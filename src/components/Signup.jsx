import React, { useState , Component} from "react";
import "./styles.css"
import axios from "axios"
import Navbar from "./Navbar";

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      signinInfo: {
        name: '',
        email_id: '',
        password: '',
      }
    };
  }

  handleChange = (e) => {
    let signinInfo = { ...this.state.signinInfo };
    signinInfo[e.target.name] = e.target.value;
    this.setState({ signinInfo });
    console.log(this.state.signinInfo.name);
    console.log(this.state.signinInfo.email_id);
    console.log(this.state.signinInfo.password);
  };
    
handleSignUp = (e) =>{
  e.preventDefault();
  axios.post("http://127.0.0.1:8000/register_user/", this.state.signinInfo)
    .then((response) => { 
      if (response.data.status === "success") {
        alert("User Register Successfully")
        window.location.href="/sign-in"
      }
      else if (response.data.status === "failure") {
        alert("User already exists");
        console.log(response.data.reason);
      }

    }).catch((error) => {
        console.log(error);
      });
  };
  
  render() {
    return (
      <div>
        <div>
          <div className="container">
            <h2>Sign Up</h2>
            <form method="POST" onSubmit={this.handleSignUp}>
              <label>
                Name:
                <input
                  name="name"
                  type="text"     
                  onChange={this.handleChange}
                  required
                />
              </label>
              <label>
                Email:
                <input
                  name="email_id"
                  type="email"
                  onChange={this.handleChange}
                  required
                />
              </label>
              <label>
                Password:
                <input
                  type="password"
                  name="password"
                  onChange={this.handleChange}
                  required
                />
              </label>
              <button type="submit">Sign Up</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
};

export default Signup;