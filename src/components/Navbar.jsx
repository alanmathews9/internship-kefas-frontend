import React, { Component } from 'react'
import { Link } from "react-router-dom";
class navbar extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     logoutInfo: {
  //       session_id: '',
  //     }
  //   };
  // }




  // handleLogout = (e) => {
  //   e.preventDefault();
  //   axios.post("http://127.0.0.1:8000/logout/", this.state.logoutInfo )
  //     .then((response) => {
  //       if (response.data.status === "success") {
  //         localStorage.setItem("session_id", response.data.session_id);
  //         localStorage.setItem("email_id", this.state.loginInfo.email_id);
  //         window.location.href="/home"
  //       }
  //       else if (response.data.status === "failure") {
  //         alert("Incorrect email id or password");
  //         console.log(response.data.reason);
  //       }
  //     }).catch((error) => {
  //       console.log(error);
  //     });
  // };
  render() {
    return (
      <div>
        <nav class="navbar bg-dark">
          <div class="container-fluid">           
            <Link to= "/" class="navbar-brand text-white">LOG - MONITOR</Link>
            {localStorage.getItem("session_id") ? (
            <div>
                <text>
                    {this.state.logoutInfo.email_id}
                </text>
              <Link to="/sign-up">
                <button
                    type="button"
                    className="btn btn-sm btn-light"
                    onClick={this.handleLogout}
                  >
                  Logout
                </button>
              </Link>
            </div>
            ): (
                <div>
                  <Link to="/">
                    <button
                    type="button"
                    className="btn btn-sm btn-outline-light me-2"
                    >
                    Sign in
                    </button>
                  </Link>                 
                  <Link to="/sign-up">                  
                    <button type="button" className="btn btn-sm btn-light">                    
                      Sign up                    
                    </button>                  
                  </Link>                 
                </div>               
            )}
          </div>
        </nav>
        </div>
        
    )
  }
}

export default navbar
