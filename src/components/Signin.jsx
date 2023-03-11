import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./styles.css"
import Navbar from "./Navbar";
const SignIn = () => {
const navigate = useNavigate();
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");

const handleSignIn = (e) => {
e.preventDefault();
    if (email === "admin@xyz" && password === "password") {
      navigate("/home");
      alert("Sign in successful!");
      
    } else {
      alert("Incorrect email or password!");
    }
 
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