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
    <Container maxWidth="xl" sx={{ background: "#fff" }}>
      {user && (
        <>
          <Link to="/">
            <img src={EchoSmall} alt="echosmall" className="echosmall" />
          </Link>

          <Link to="/songs">
            <Button
              variant="contained"
              color="secondary"
              size="small"
              style={{ fontSize: 8 }}
            >
              All Songs
            </Button>
          </Link>

          <Link to="/new-song">
            <Button className="">Add new Song</Button>
          </Link>

          <Link to="/account">
            <Button className="">Your account</Button>
          </Link>

          <Link to="/">
            <Button onClick={handleLogout} className="">
              Logout
            </Button>
          </Link>
        </>
      )}

      {!user && (
        <>
          <div>
            <Link to="/login">
              <Button className="">Log In</Button>
            </Link>

            <Link to="/signup">
              <Button className=""> Sign Up</Button>
            </Link>
          </div>
        </>
      )}
    </Container>
  );
};

export default Navbar;
