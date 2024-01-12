import React, { useState } from "react";
import "./Loginscreen.css";

function Signup() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [userEmail, setUserEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const handleJoinClick = () => {
    // Check if passwords match
    if (userEmail || password || confirmPassword == "") {
      alert("Please Enter Required Fields");
    }
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    // Get existing data from local storage or initialize an empty array
    const existingData = JSON.parse(localStorage.getItem("userData")) || [];

    // Add new user data to the array
    const newData = [...existingData, { email: userEmail, password }];

    // Save the updated array to local storage
    localStorage.setItem("userData", JSON.stringify(newData));

    // Optionally, you can clear the form after submission
    setUserEmail("");
    setPassword("");
    setConfirmPassword("");
  };

  return (
    <>
      <div>
        <div className="form">
          <input
            type="email"
            id="UserEmail"
            value={userEmail}
            onChange={(e) => setUserEmail(e.target.value)}
            placeholder="Enter Email"
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
          <div className="textfield">
            <input
              type={showConfirmPassword ? "text" : "password"}
              id="UserConfirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirm Password"
            />
            <a href="#" onClick={toggleConfirmPassword}>
              <p>{showConfirmPassword ? "Hide" : "Show"}</p>
            </a>
          </div>
          <div>
            <a href="">Sign In</a>
          </div>
          <div className="chechboxes">
            <div>
              <input
                type="checkbox"
                id="vehicle1"
                name="vehicle1"
                value="Bike"
              />
              <label htmlFor="vehicle1"> I'm an Expert</label>
            </div>

            <div>
              <input
                type="checkbox"
                id="vehicle2"
                name="vehicle2"
                value="Car"
              />
              <label htmlFor="vehicle2"> I'm an Organization in Africa</label>
            </div>
          </div>
          <button className="btn" onClick={handleJoinClick}>
            Join PANDA
          </button>
        </div>
      </div>
    </>
  );
}

export default Signup;
