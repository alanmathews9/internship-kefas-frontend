import React, { Component } from 'react'
import { Link } from "react-router-dom";
class navbar extends Component {
  render() {
    return (
      <div>
        <nav class="navbar bg-dark">
          <div class="container-fluid">           
            <Link to= "/" class="navbar-brand text-white">LOG - MONITOR</Link>
            
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
          </div>
            </nav>
        </div>
        
    )
  }
}

export default navbar