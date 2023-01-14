import React from "react";
import { Link } from "react-router-dom";
import { useAuthContext } from "../context/authentication";

const Navbar = () => {
  const { user } = useAuthContext();

  return (
    <div>
      <ul>
        <li>
          <Link to="/">Back to HomePage</Link>
        </li>
        <li>
          <Link to="/songs">All Songs</Link>
        </li>
        <li>
          <Link to="/new-song">Add new Song</Link>
        </li>
        {(user && (
          <li>
            <span>{user.name}</span>
          </li>
        )) || (
          <>
            <li>
              <Link to="/login">Log In</Link>
            </li>
            <li>
              <Link to="/signup">Sign Up</Link>
            </li>
          </>
        )}
      </ul>
    </div>
  );
};

export default Navbar;
