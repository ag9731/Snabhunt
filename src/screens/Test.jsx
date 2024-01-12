import React, { useState } from "react";
import "./Test.css";

function Test() {
  const [showSignIn, setShowSignIn] = useState(true);
  const [showSignUp, setShowSignUp] = useState(false);

  const showSignInForm = () => {
    setShowSignIn(true);
    setShowSignUp(false);
  };

  const showSignUpForm = () => {
    setShowSignIn(false);
    setShowSignUp(true);
  };

  return (
    <>
      <div className="toggle">
        <a href="#" onClick={showSignInForm}>
          <p>signin</p>
        </a>
        <a href="#" onClick={showSignUpForm}>
          <p>signup</p>
        </a>
        {showSignIn ? (
          <div className="signin">
            <input placeholder="email" type="email" id="" />
            <input placeholder="password" type="password" id="" />
            <button>signin</button>
          </div>
        ) : null}
        {showSignUp ? (
          <div className="signup">
            <input placeholder="email" type="email" id="" />
            <input placeholder="password" type="password" id="" />
            <button>signup</button>
          </div>
        ) : null}
      </div>
    </>
  );
}

export default Test;
