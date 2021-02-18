import react, { forwardRef, useEffect, useState } from "react";
import { Button, Nav } from "react-bootstrap";
import { LinkContainer } from 'react-router-bootstrap'

const styles = {
  position: "absolute",
  right: 0,
  paddingTop: "20px"
}

const NavigationBar = () => {

  return (
    <div style={styles}>
      <Nav variant="tabs">
        <LinkContainer exact to="/">
          <Nav.Link eventKey="home" >Home</Nav.Link>
        </LinkContainer>
        <LinkContainer to="/rockets">
          <Nav.Link eventKey="rockets" >Rockets</Nav.Link>
        </LinkContainer>
        <LinkContainer to="/launchs">
          <Nav.Link eventKey="launchs">Launchs</Nav.Link>
        </LinkContainer>
      </Nav>
    </div>
  );
};

export default NavigationBar;
