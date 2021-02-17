import react, { forwardRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Nav, Icon, Navbar } from "rsuite";

const styles = {
  position: "absolute",
  right: 0,
  paddingTop: "20px",
  backgroundColor: "transparent",
};

const navStyles = {
  color: "white !important",
};
const MyLink = forwardRef((props, ref) => {
  const { to, as, ...rest } = props;
  return (
    <Link to={to} as={as} style={navStyles}>
      <a style={navStyles} ref={ref} {...rest} />
    </Link>
  );
});
const NavBarLink = (props) => (
  <Nav.Item componentClass={MyLink} to={props.to} eventKey={props.name}>
    {props.name}
  </Nav.Item>
);
const NavBarInstance = ({ onSelect, activeKey, ...props }) => {
  return (
    <Navbar style={styles} {...props}>
      <Navbar.Body>
        <Nav onSelect={onSelect} activeKey={activeKey}>
          <Nav.Item componentClass={Link} to="/" eventKey="Home">
            Home
          </Nav.Item>
          <Nav.Item componentClass={Link} to="/rockets" eventKey="Rocket">
            Rockets
          </Nav.Item>
          <Nav.Item componentClass={Link} to="/launchs" eventKey="Launch">
            Launchs
          </Nav.Item>
        </Nav>
      </Navbar.Body>
    </Navbar>
  );
};

const NavigationBar = (props) => {
  const handleState = (state) => {
    props.updateState(state);
    console.log(state);
  };

  console.log(props, "check");

  return (
    <div>
      <NavBarInstance
        appearance="inverse"
        activeKey={props.state}
        onSelect={handleState}
      />
    </div>
  );
};

export default NavigationBar;
