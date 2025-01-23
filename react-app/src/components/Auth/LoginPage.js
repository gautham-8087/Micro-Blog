import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/Auth.css";
const LoginPage = () => {}
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Logged in with:", { email, password });
      navigate("/");
  };
  return (
    <div className="auth-container">
       <h2>Login</h2>
       <form onSubmit={handleLogin}>
         <input
           type="email"
           placeholder="Email"
           value={email}
           onChange={(e) => setEmail(e.target.value)}
           required
           />
            <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required/>
             <button type="submit" className="btn btn-primary">Login</button>
              </form>
              <p>Don't have an account? <a href="/signup">Sign Up</a></p>
              </div>
               );
  export default LoginPage;