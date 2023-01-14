import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
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
        <li>
          <Link to="/login">Log In</Link>
        </li>
        <li>
          <Link to="/signup">Sign Up</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
