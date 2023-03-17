import React, { Component } from 'react'

class navbar extends Component {
  render() {
    return (
      <div>
            <nav class="navbar navbar-expand-lg bg-body-tertiary bg-dark" data-bs-theme="dark">
                <div class="container-fluid">
                    <a class="navbar-brand" href="http://localhost:3000/">LOG - MONITOR</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    </div>
                    <div>
                      <form class="d-flex" role="search">
                        <div class="navbar-nav">
                          <a class="nav-link active" aria-current="page" href="http://localhost:3000/sign-in">Sign-In</a>
                        </div>
                      </form>
                    </div>
                    <div>
                      <form class="d-flex" role="search">
                        <div class="navbar-nav">
                          <a class="nav-link active" aria-current="page" href="http://localhost:3000/sign-up">Sign-Up</a>
                        </div>
                      </form>
                    </div>
                </div>
            </nav>
        </div>
        
    )
  }
}


export default navbar