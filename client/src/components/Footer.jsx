import React from "react";
import { Container } from "@mui/system";

const Footer = () => {
  return (
    <Container
      maxWidth="xl"
      sx={{
        background: "#fff",
        display: "flex",
        justifyContent: "space-evenly",
      }}
    >
      <h5>Julia Lipniewicz</h5>
      <h5>Soumia </h5>
      <h5>Joao Amaral</h5>
    </Container>
  );
};

export default Footer;
