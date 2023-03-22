import React, { useState , Component} from "react";
import "./styles.css"
import axios from "axios"
import Navbar from "./Navbar";

export default class Signup extends Component {
  constructor(props) {
    super(props)
    this.setName = this.setName.bind(this);
    this.setMail = this.setMail.bind(this);
    this.setPassword = this.setPassword.bind(this);
    this.handleSignIn = this.handleSignIn.bind(this);
    this.state = {
      name: '',
      email: '',
      password: '',
    }
  }
  setName(e){
    this.setState({
      name: e.target.value
    });
    
  };
  
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
    formData.append("name", this.state.name);
    formData.append("email_id", this.state.email);
    formData.append("password", this.state.password);
  axios.post("http://127.0.0.1:8000/register_user/", formData)
    .then((response) => { 
      if (response.data.status === "success") {
        alert("User Register Successfully")
        window.location.href="/sign-in"
      }
      else if (response.data.status === "failure") {
        alert("User already exists");
      }
    })
  this.setState({name: '',email: '', password: ''})
};
  render() {
    return (
      <div>
      <div>
        <div className="container">
          <h2>Sign In</h2>
            <form onSubmit={this.handleSignIn}>
            <label>
              Name:
              <input                 
                type="text"                 
                value={this.state.name}           
                onChange={this.setName}         
                required      
              />
            </label>
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
        </div>
        </div>
        </div>
    )
  }
};
