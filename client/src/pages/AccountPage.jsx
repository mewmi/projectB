import React from "react";
import { useAuthContext } from "../context/authentication";
import { Link } from "react-router-dom";

const AccountPage = () => {
  const { user } = useAuthContext();
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
      <Link to="/changeProfile">
        <button>Change profile</button>
      </Link>
    </div>
  );
};

export default AccountPage;
