import React from "react";
import { useAuthContext } from "../context/authentication";
import { Link, useNavigate } from "react-router-dom";
import { deleteProfile } from "../services/authentication";
import { useState } from "react";

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
  console.log(user);
  return (
    <div>
      {user && (
        <>
          <div className="text-center">Welcome {user.name}</div>
          <br />
        </>
      )}
      <div className="text-center">
        We are happy you decided to be part of EchoSound. EchoSound is there to
        help you access your favorite music videos at any time of the day.
      </div>
      {deleteConfirm ? (
        <div>
          <Link to="/changeProfile">
            <button>Change profile</button>
          </Link>
          <button onClick={handleDeleteConfirmation}>Delete profile</button>
        </div>
      ) : (
        <div>
          <p>Are you sure?</p>
          <button onClick={handleDeleteProfile}>Yes</button>
          <button onClick={handleDeleteConfirmation}> No</button>
        </div>
      )}
    </div>
  );
};

export default AccountPage;
