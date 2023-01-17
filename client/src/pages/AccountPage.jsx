import React from "react";
import { useAuthContext } from "../context/authentication";

const AccountPage = () => {
  const { user } = useAuthContext();
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
    </div>
  );
};

export default AccountPage;
