import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./styles.css"
import Navbar from "./Navbar";

const SignUp = () => {
const navigate = useNavigate();
const [email, setEmail] = useState("");
const [name, setName] = useState("");
const [password, setPassword] = useState("");

const handleSignUp = (e) => {
e.preventDefault();
    navigate("/home"); // redirect to home page
    alert("Signed up successfully!");
    
};

  return (
    <div><Navbar />
<div className="container">
<h2>Sign Up</h2>
<form onSubmit={handleSignUp}>
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
Name:
<input
type="text"
value={name}
onChange={(e) => setName(e.target.value)}
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
<button type="submit">Sign Up</button>
</form>
      </div>
      </div>
      
);
};

export default SignUp;