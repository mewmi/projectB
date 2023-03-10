import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../context/authentication";
import { changeProfile, login } from "../services/authentication";
export function ChangeProfile() {
  /*
1º find a way to receive information about the user
2º create a form to send new information
3º use the new information and call the backend route
*/
  const { user, authToken, setUser } = useAuthContext();
  const [formData, setFormData] = useState(user);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const reqBody = { ...formData };
    changeProfile(
      reqBody.email,
      reqBody.password,
      reqBody.name,
      authToken
    ).then((response) => {
      login(reqBody.email, reqBody.password).then((response) => {
        console.log(response);
        setUser(response.user);
        navigate("/account");
      });
    });
  };
  const handleChange = (event) => {
    const inputValue = event.target.value;
    const inputName = event.target.name;
    setFormData({ ...formData, [inputName]: inputValue });
  };

  return (
    <div className="float-child-two">
      {user && user.name.charAt(0).toUpperCase() + user.name.slice(1)}
      <form onSubmit={handleSubmit} className="float-child-one">
        <label className="inputForm">Name</label>
        <input
          type="text"
          name="name"
          value={formData.name || ""}
          onChange={handleChange}
          className="inputForm"
        />

        <label className="inputForm">Email</label>
        <input
          type="email"
          name="email"
          value={formData.email || ""}
          onChange={handleChange}
          className="inputForm"
        />

        <label className="inputForm">Password</label>
        <input
          type="password"
          name="password"
          value={formData.password || ""}
          onChange={handleChange}
          className="inputForm"
        />
        <div id="submit-button">
          <button
            type="submit"
            className="button-86"
            style={{
              maxHeight: "12px",
              maxWidth: "60px",
              textAlign: "right",
            }}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
