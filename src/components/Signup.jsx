import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./styles.css"
const SignUp = () => {
const navigate = useNavigate();
const [email, setEmail] = useState("");
const [name, setName] = useState("");
const [password, setPassword] = useState("");

const handleSignUp = () => {
// logic for signing up the user
navigate("/home"); // redirect to home page
};

return (
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
);
};

export default SignUp;