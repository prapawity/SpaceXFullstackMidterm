import react, { useState } from "react";
import { Nav, Icon } from "rsuite";
import { Link } from "react-router-dom";

const styles = {
  position: "absolute",
  right: 0,
  paddingTop: "20px",
};

const CustomNav = ({ active, onSelect, ...props }) => {
  return (
    <Nav {...props} activeKey={active} onSelect={onSelect} style={styles}>
      <Nav.Item eventKey="home" icon={<Icon icon="home" />}>
        <Link to="/">Home</Link>
      </Nav.Item>

      <Nav.Item eventKey="rocket">
        <Link to="/rockets">Rockets</Link>
      </Nav.Item>

      <Nav.Item eventKey="launch">
        <Link to="/launchs">Launchs</Link>
      </Nav.Item>
    </Nav>
  );
};

const NavigationBar = () => {
  const [active, setNav] = useState("home");
  const handleSelect = (value) => {
    setNav(value);
  };
  return (
    <div>
      <CustomNav appearance="tabs" active={active} onSelect={handleSelect} />
    </div>
  );
};

export default NavigationBar;
