import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles.css"
function SignIn() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    // Here, you can replace the hard-coded credentials with your own authentication logic
    const validCredentials = username === "user" && password === "password";

    if (validCredentials) {
      navigate("/home");
    } else {
      alert("Invalid username or password");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Sign In</h2>
      <div>
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} required />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
      </div>
      <button type="submit">Sign In</button>
    </form>
  );
}

export default SignIn;