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
    <nav className="">
      <div className="">
        <ul className="">
          {user && (
            <>
              <div className="">
                <li>
                  <Link to="/">
                    <img className="" src={EchoSmall} alt="echosound" />
                  </Link>
                </li>

                <li>
                  <Link to="/songs">
                    <button className="">All Songs</button>
                  </Link>
                </li>
                <li>
                  <Link to="/new-song">
                    <button className="">Add new Song</button>
                  </Link>
                </li>

                <li>
                  <Link to="/account">
                    <button className="">Your account</button>
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <button onClick={handleLogout} className="">
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
                    <button className="">Log In</button>
                  </Link>
                </li>
                <li>
                  <Link to="/signup">
                    <button className=""> Sign Up</button>
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
