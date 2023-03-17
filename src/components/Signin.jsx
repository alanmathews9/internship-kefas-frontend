import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./styles.css"
import Navbar from "./Navbar";
import axios from 'axios'
const SignIn = () => {
const navigate = useNavigate();
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");

const handleSignIn = (e) => {
  e.preventDefault();
  axios.post("http://127.0.0.1:8000/login/", {
    email_id: email,
    password: password,
  })
    
 
};
    return (
    <div><Navbar />
        <div className="container">
          <h2>Sign In</h2>
          <form onSubmit={handleSignIn}>
            <label>
              Email:
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </label>
            <label>
              Password:
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
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
};

export default SignIn;