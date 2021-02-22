import { useEffect, useState } from "react";
import { Nav } from "react-bootstrap";
import { LinkContainer } from 'react-router-bootstrap'

const styles = {
  position: "absolute",
  right: 0,
  paddingTop: "20px"
}

const NavigationBar = (props) => {
  const [active, setActive] = useState(null)

  if (props.isDeepLink != null) {
    setActive("rockets")
    props.setDeepLinkToRocket(null)
  }

  useEffect(() => {

  }, [active])

  return (
    <div style={styles}>
      <Nav activeKey={active} variant="tabs">
        <LinkContainer exact to="/">
          <Nav.Link eventKey="home" onSelect={setActive} >Home</Nav.Link>
        </LinkContainer>
        <LinkContainer to="/rockets">
          <Nav.Link eventKey="rockets" onSelect={setActive} >Rockets</Nav.Link>
        </LinkContainer>
        <LinkContainer exact to="/launchs">
          <Nav.Link eventKey="launchs" onSelect={setActive} >Launchs</Nav.Link>
        </LinkContainer>
      </Nav>
    </div>
  );
};

export default NavigationBar;
