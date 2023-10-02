import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import MetaComponent from "../../../utils/MetaComponent";
import "./Login.scss";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSignIn = () => {
    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    // Basic password validation
    if (password.length < 6) {
      alert("Password must be at least 6 characters.");
      return;
    }

    // Implement your sign-in logic here using 'email' and 'password'
    // For example, you can make an API request to authenticate the user.
    // Ensure that both email and password are provided
    if (email && password) {
      // You can send the email and password to your authentication API here
      // If the authentication is successful, navigate to the dashboard
      navigate("/dashboard");
    } else {
      // Handle the case where either email or password is missing
      alert("Please enter both email and password.");
    }
  };

  return (
    <div>
      <div className="Landing">
        <MetaComponent
          title="Sign In Page"
          description="This is the sign-in page description"
          keywords="sign in, authentication, frontend template, frontend template by antino"
          location={window.location}
          image="og_image.png"
        />
        <div className="Landing--SignIn" id="signin">
          <div className="Landing--SignInContent">
            <h1 className="Landing--SubTitle">Sign In to Your Account</h1>
            <div className="Landing--SignInForm">
              <div className="Landing--FormElement">
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={handleEmailChange}
                />
              </div>
              <div className="Landing--FormElement">
                <label htmlFor="password">Password:</label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={handlePasswordChange}
                />
              </div>
              <button className="Landing--SignInButton" onClick={handleSignIn}>
                Sign In
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
