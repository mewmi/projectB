import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../context/authentication";
import { signup } from "../services/authentication";

const SignUp = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [errorMessage, setErrorMessage] = useState(undefined);

  const navigate = useNavigate();

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);
  const handleNameChange = (e) => setName(e.target.value);

  const { setUser, setIsLoading, setAuthToken } = useAuthContext();

  const handleFormSubmit = (e) => {
    e.preventDefault();

    signup(email, password, name)
      .then((data) => {
        const { user, authToken } = data;
        setUser(user);
        setAuthToken(authToken);
        navigate("/");
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
    <div className="float-child-two">
      <h1>Create your personal EchoSound space!</h1>
      <p>
        As soon as you sign-up, you will be able to upload your favourite songs,
        edit them and create your EchoSound space.
      </p>
      <h5>
        Your password should have a minimum of 8 charachter (letters & digits)
      </h5>
      <form onSubmit={handleFormSubmit} className="float-child-one">
        <label htmlFor="email" className="inputForm">
          Email
        </label>
        <input
          id="email"
          type="text"
          name="email"
          placeholder="Email"
          value={email}
          onChange={handleEmailChange}
          required
          className="inputForm"
        />

        <label htmlFor="password" className="inputForm">
          Password
        </label>
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
          className="inputForm"
        />

        <label htmlFor="name" className="inputForm">
          Name
        </label>
        <input
          id="name"
          type="text"
          name="name"
          placeholder="Name"
          value={name}
          onChange={handleNameChange}
          required
          className="inputForm"
        />

        {errorMessage && <span>{errorMessage}</span>}
        <div id="submit-button">
          <button
            className="button-86"
            style={{
              maxHeight: "12px",
              maxWidth: "60px",
              textAlign: "right",
            }}
          >
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
