import React from "react";
import { Container } from "@mui/system";

const Footer = () => {
  return (
    <Container
      className="footer"
      xl={{
        position: "absolute",
        bottom: 0,
        justifyContent: "space-evenly",
        color: "white",
        fontFamily: "Aldrich",
        fontSize: "17px",
        display: "grid",
        gridTemplateColumns: "200px 250px",
      }}
    >
      <h5>Ⓒ Joao Amaral, Julia Lipniewicz, Soumia</h5>
      <h5>Email: info@echoSound.com</h5>
    </Container>
  );
};

export default Footer;
