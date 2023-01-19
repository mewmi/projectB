import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../services/authentication";
import { useAuthContext } from "../context/authentication";

const LogIn = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(undefined);

  const navigate = useNavigate();

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  const { setUser, setIsLoading, setAuthToken } = useAuthContext();

  const handleFormSubmit = (e) => {
    e.preventDefault();

    login(email, password)
      .then((data) => {
        const { user, authToken } = data;
        setUser(user);
        setAuthToken(authToken);
        navigate("/account");
      })
      .catch((error) => {
        console.log(error);
        setErrorMessage("Authentication error.");
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="text"
          name="email"
          placeholder="Email"
          value={email}
          onChange={handleEmailChange}
          required
        />

        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          name="password"
          placeholder="Password"
          required
          minLength={8}
          value={password}
          onChange={handlePasswordChange}
          pattern="(?=.*\d)(?=.*[a-zA-Z]).*"
        />
        {errorMessage && <span>{errorMessage}</span>}
        <button>Log In</button>
      </form>
    </div>
  );
};

export default LogIn;
