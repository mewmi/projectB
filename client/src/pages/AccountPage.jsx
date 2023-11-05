import React from "react";
import { useAuthContext } from "../context/authentication";
import { Link, useNavigate } from "react-router-dom";
import { deleteProfile } from "../services/authentication";
import { useState } from "react";
import echosound from "../images/EchoSoundNew.png";

const AccountPage = () => {
  const [deleteConfirm, setDeleteConfirm] = useState(true);
  const { user, setUser, authToken, setAuthToken } = useAuthContext();
  const navigate = useNavigate();
  const handleDeleteConfirmation = () => {
    setDeleteConfirm(!deleteConfirm);
  };

  const handleDeleteProfile = () => {
    deleteProfile(authToken);
    setUser(null);
    setAuthToken("");
    navigate("/");
  };

  return (
    <div>
      {user && (
        <>
          <div
            /* className="text-center" */ className="welcome"
            style={{ fontFamily: "Aldrich", padding: "20px" }}
          >
            Welcome {user.name.charAt(0).toUpperCase() + user.name.slice(1)}
          </div>
          <br />
        </>
      )}
      <div className="welcome" style={{ paddingBottom: "40px" }}>
        We are happy you decided to be part of EchoSound. EchoSound is there to
        help you access your favorite music videos at any time of the day.
      </div>
      <img src={echosound} alt="echosound" className="logo" />
      {deleteConfirm ? (
        <div className="button-group">
          <Link to="/changeProfile">
            <button style={{}} className="button-86" id="profileChange">
              Change profile
            </button>
          </Link>
          <button
            onClick={handleDeleteConfirmation}
            style={{}}
            className="button-86"
            id="profileDelete"
          >
            Delete profile
          </button>
        </div>
      ) : (
        <div className="button-group">
          <p style={{ margin: "5px", marginLeft: "15px" }}>Are you sure?</p>
          <button
            onClick={handleDeleteProfile}
            className="button-86"
            style={{}}
          >
            Yes
          </button>
          <button
            onClick={handleDeleteConfirmation}
            className="button-86"
            style={{}}
          >
            {" "}
            No
          </button>
        </div>
      )}
    </div>
  );
};

export default AccountPage;
