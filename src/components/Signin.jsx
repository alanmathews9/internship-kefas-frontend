import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./styles.css"
const SignIn = () => {
const navigate = useNavigate();
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");

const handleSignIn = () => {
// logic for signing in the user
navigate("/home"); // redirect to home page
};

return (
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
);
};

export default SignIn;