import React, { useState } from "react";
import "./LoginApp.css";

const LoginApp = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation example
    if (!username || !password) {
      setErrorMessage("Please enter both username and password");
      return;
    }

    // Handle login logic here
    console.log("Logging in with:", { username, password });

    // Clear form after submit
    setUsername("");
    setPassword("");
    setErrorMessage("");
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="login-form">
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <i className="fa-solid fa-user"></i>
          <input
            className="user"
            type="text"
            id="username"
            placeholder="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="div-password">
          <i className="fa-solid fa-lock"></i>
          <input
            className="password"
            type={showPassword ? "text" : "password"}
            id="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <div>
            <button
              className="show-password"
              type="button"
              onClick={togglePasswordVisibility}
            >
              <i
                className={`fa-solid ${
                  showPassword ? "fa-eye" : "fa-eye-slash"
                }`}
              ></i>
            </button>
          </div>
        </div>

        {errorMessage && <p>{errorMessage}</p>}
        <button className="submit" type="submit">
          Login
        </button>
        <p>Create an account</p>
      </form>
    </div>
  );
};

export default LoginApp;
