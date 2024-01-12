import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Loginscreen.css";

function Signin({ setUser }) {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const navigate = useNavigate();

  const handleJoinClick = () => {
    // Get existing data from local storage or initialize an empty array
    const existingData = JSON.parse(localStorage.getItem("userData")) || [];

    // Find the user with matching email and password
    const user = existingData.find(
      (user) => user.email === email && user.password === password
    );

    if (user) {
      // Update user state in the parent component
      setUser(user);

      // Navigate to Homescreen
      navigate("/home");
      console.log("navigated to /home");
    } else {
      alert("Invalid email or password");
    }
  };

  return (
    <div>
      <div className="signinform">
        <input
          type="email"
          id="UserEmail"
          value={email}
          placeholder="Enter Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <div className="textfield">
          <input
            type={showPassword ? "text" : "password"}
            id="UserPassword"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter Password"
          />
          <a href="#" onClick={toggleShowPassword}>
            <p>{showPassword ? "Hide" : "Show"}</p>
          </a>
        </div>
        <h4>Forgot Password?</h4>
        <button className="btn" onClick={handleJoinClick}>
          Sign In
        </button>
      </div>
    </div>
  );
}

export default Signin;
