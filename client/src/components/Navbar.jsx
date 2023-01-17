import React from "react";
import { Link } from "react-router-dom";
import EchoSmall from "../images/EchoSmall.png";
import { useAuthContext } from "../context/authentication";

const Navbar = () => {
  const { user, setUser, setAuthToken } = useAuthContext();
  const handleLogout = () => {
    setUser(null);
    setAuthToken("");
  };

  return (
    <div className="w-full dark:bg-black bg-gray-400 flex items-center justify-center">
      <ul className="flex flex-col p-2 md:flex-row">
        {user && (
          <>
            <li>
              <Link to="/">
                <img
                  className=" items-center"
                  src={EchoSmall}
                  alt="echosound"
                />
              </Link>
            </li>

            <li>
              <Link to="/songs">
                <button className="p-2 rounded-xl bg-white shadow-lg">
                  All Songs
                </button>
              </Link>
            </li>
            <li>
              <Link to="/new-song">
                <button className="p-2 rounded-xl bg-white shadow-lg">
                  Add new Song
                </button>
              </Link>
            </li>

            <li>
              <Link to="/account">
                <button className="p-2 rounded-xl bg-white shadow-lg">
                  Your account
                </button>
              </Link>
            </li>
            <li>
              <Link to="/">
                <button
                  onClick={handleLogout}
                  className="p-2 rounded-xl bg-white shadow-lg"
                >
                  Logout
                </button>
              </Link>
            </li>
          </>
        )}

        {!user && (
          <>
            <li>
              <Link to="/login">
                <button className="p-3 rounded-xl bg-white shadow-lg">
                  Log In
                </button>
              </Link>
            </li>
            <li>
              <Link to="/signup">
                <button className="p-3 rounded-xl bg-white shadow-lg">
                  {" "}
                  Sign Up
                </button>
              </Link>
            </li>
          </>
        )}
      </ul>
    </div>
  );
};

export default Navbar;
