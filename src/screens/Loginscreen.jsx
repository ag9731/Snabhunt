import React, { useState } from "react";
import "./Loginscreen.css";
// import { useNavigate } from "react-router-dom";
import Signup from "./Signup";
import Signin from "./Signin";

function Loginscreen() {
  const [showSignIn, setShowSignIn] = useState(true);
  const [showSignUp, setShowSignUp] = useState(false);
  //   const navigate = useNavigate();

  const showSignInForm = () => {
    setShowSignIn(true);
    setShowSignUp(false);
  };

  const setUser = (user) => {
    // Logic to set user in your app's state
    console.log("Setting user:", user);
  };

  const showSignUpForm = () => {
    setShowSignIn(false);
    setShowSignUp(true);
  };

  return (
    <>
      <div className="LoginContainer">
        <div className="loginleft">
          <img src="/images/loginbanner.png" alt="" />
          <h1>Welcome to PANDA</h1>
        </div>
        <div className="loginright">
          <div className="loginhead">
            <a href="#" id="signup" onClick={showSignUpForm}>
              <h3>Join Panda</h3>
            </a>
            <p>or</p>
            <a href="#" className="signin" onClick={showSignInForm}>
              <h3>Sign In</h3>
            </a>
          </div>
          {/* banner */}
          <div className="loginbanner">
            <div>
              <img src="/images/Union.svg" alt="" />
            </div>

            {showSignUp ? (
              <div className="text">
                <h2>Create your free account</h2>
                <h3>
                  Takes less than
                  <span style={{ color: "#A95454" }}> 5 minutes ...</span>
                </h3>
              </div>
            ) : null}
            {showSignIn ? (
              <div className="text">
                <h2>Sign In</h2>
              </div>
            ) : null}

            {showSignUp ? (
              //   signup
              <Signup />
            ) : null}
            {showSignIn ? (
              //   signin
              <Signin setUser={setUser} />
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
}

export default Loginscreen;
