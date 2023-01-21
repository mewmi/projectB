import React from "react";
import { Link } from "react-router-dom";
import EchoSmall from "../images/EchoSoundSmall.png";
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
      {/*  <Container> */}
      {user && (
        <>
          <Link to="/" style={{ textDecoration: "none" }}>
            <img src={EchoSmall} alt="echosmall" className="echosmall" />
          </Link>

          <div className="navbarLinks">
            <ul>
              <li className="navList">
                <Link to="/songs" style={{ textDecoration: "none" }}>
                  <Button style={{ color: "white", fontFamily: "Aldrich" }}>
                    All Songs
                  </Button>
                </Link>
              </li>
              <li className="navList">
                <Link to="/new-song" style={{ textDecoration: "none" }}>
                  <Button style={{ color: "white", fontFamily: "Aldrich" }}>
                    Add new Song
                  </Button>
                </Link>
              </li>
              <li className="navList">
                <Link to="/account" style={{ textDecoration: "none" }}>
                  <Button style={{ color: "white", fontFamily: "Aldrich" }}>
                    Your account
                  </Button>
                </Link>
              </li>
              <li className="navList">
                <Link to="/" style={{ textDecoration: "none" }}>
                  <Button
                    onClick={handleLogout}
                    style={{ color: "white", fontFamily: "Aldrich" }}
                  >
                    Logout
                  </Button>
                </Link>
              </li>
            </ul>
          </div>
        </>
      )}

      {!user && (
        <>
          <li>
            <Link to="/login" style={{ textDecoration: "none" }}>
              <Button style={{ color: "white", fontFamily: "Aldrich" }}>
                Log In
              </Button>
            </Link>
          </li>
          <li>
            <Link to="/signup" style={{ textDecoration: "none" }}>
              <Button style={{ color: "white", fontFamily: "Aldrich" }}>
                {" "}
                Sign Up
              </Button>
            </Link>
          </li>
        </>
      )}
      {/*  </Container> */}
    </nav>
  );
};

export default Navbar;
