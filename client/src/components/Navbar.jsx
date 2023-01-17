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
    <nav className="bg-gardient-to-r from-white to-metal">
      <div className="max-w-md mx-auto dark:bg-black bg-gray-400 flex text-center sm:text-left">
        <ul className="flex flex-col p-2 md:flex-row">
          {user && (
            <>
              <div className="">
                <li>
                  <Link to="/">
                    <img
                      className=" text-center sm:text-left"
                      src={EchoSmall}
                      alt="echosound"
                    />
                  </Link>
                </li>

                <li>
                  <Link to="/songs">
                    <button className="bg-zinc hover:bg-gray text-white font-bold py-2 px-4 border border-blue-700 rounded">
                      All Songs
                    </button>
                  </Link>
                </li>
                <li>
                  <Link to="/new-song">
                    <button className="bg-zinc hover:bg-gray text-white font-bold py-2 px-4 border border-blue-700 rounded">
                      Add new Song
                    </button>
                  </Link>
                </li>

                <li>
                  <Link to="/account">
                    <button className="bg-zinc hover:bg-gray text-white font-bold py-2 px-4 border border-blue-700 rounded">
                      Your account
                    </button>
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <button
                      onClick={handleLogout}
                      className="bg-zinc hover:bg-gray text-white font-bold py-2 px-4 border border-blue-700 rounded"
                    >
                      Logout
                    </button>
                  </Link>
                </li>
              </div>
            </>
          )}

          {!user && (
            <>
              <div>
                <li>
                  <Link to="/login">
                    <button className="bg-slate hover:bg-gray text-white font-bold py-2 px-4 border border-blue-700 rounded">
                      Log In
                    </button>
                  </Link>
                </li>
                <li>
                  <Link to="/signup">
                    <button className="bg-slate hover:bg-gray text-white font-bold py-2 px-4 border border-blue-700 rounded">
                      {" "}
                      Sign Up
                    </button>
                  </Link>
                </li>
              </div>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
