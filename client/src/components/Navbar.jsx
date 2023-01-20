import React from "react";
import { Link } from "react-router-dom";
import EchoSmall from "../images/EchoSmall.png";
import { useAuthContext } from "../context/authentication";
import Button from "@mui/material/Button";
import { Container } from "@mui/system";

const Navbar = () => {
  const { user, setUser, setAuthToken } = useAuthContext();
  const handleLogout = () => {
    setUser(null);
    setAuthToken("");
  };

  return (
    <nav className="navbar">
      <div>
        {/* <Container> */}
        {user && (
          <>
            <Link to="/">
              <img src={EchoSmall} alt="echosmall" className="echosmall" />
            </Link>
            <div className="navbarLinks">
              <li>
                <Link to="/songs">
                  <Button /* variant="contained" size="small" style={{ fontSize: 8 }} */
                  >
                    All Songs
                  </Button>
                </Link>
              </li>
              <li>
                <Link to="/new-song">
                  <Button className="">Add new Song</Button>
                </Link>
              </li>
              <li>
                <Link to="/account">
                  <Button className="">Your account</Button>
                </Link>
              </li>
              <li>
                <Link to="/">
                  <Button onClick={handleLogout} className="">
                    Logout
                  </Button>
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
                  <Button className="">Log In</Button>
                </Link>
              </li>
              <li>
                <Link to="/signup">
                  <Button className=""> Sign Up</Button>
                </Link>
              </li>
            </div>
          </>
        )}
        {/*  </Container> */}
      </div>
    </nav>
  );
};

export default Navbar;
