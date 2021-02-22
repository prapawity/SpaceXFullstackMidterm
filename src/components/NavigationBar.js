import { useCallback, useEffect, useState } from "react";
import { Nav } from "react-bootstrap";
import { LinkContainer } from 'react-router-bootstrap'
import { useLocation } from "react-router-dom";

const styles = {
  position: "absolute",
  right: 0,
  paddingTop: "20px"
}

const NavigationBar = (props) => {
  const [active, setActive] = useState(null)
  const location = useLocation()
  const newLocation = location.pathname.split("/")[0]

  if (newLocation != active) {
    setActive(newLocation)
  }


  return (
    <div style={styles}>
      <Nav activeKey={active} variant="tabs" onSelect={setActive}>
        <LinkContainer eventKey="home" exact to="/">
          <Nav.Link>Home</Nav.Link>
        </LinkContainer>
        <LinkContainer eventKey="rockets" to="/rockets">
          <Nav.Link>Rockets</Nav.Link>
        </LinkContainer>
        <LinkContainer eventKey="launchs" exact to="/launchs">
          <Nav.Link>Launchs</Nav.Link>
        </LinkContainer>
      </Nav>
    </div>
  );
};

export default NavigationBar;
