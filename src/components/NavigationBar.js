import react, { useState } from "react";
import { Nav, Icon } from "rsuite";
import { Link } from "react-router-dom";

const styles = {
  marginBottom: 50,
};

const CustomNav = ({ active, onSelect, ...props }) => {
  return (
    <Nav {...props} activeKey={active} onSelect={onSelect} style={styles}>
      <Link to="/">
        <Nav.Item eventKey="home" icon={<Icon icon="home" />}>
          Home
        </Nav.Item>
      </Link>
      <Link to="/rockets">
        <Nav.Item eventKey="rocket">Rockets</Nav.Item>
      </Link>
      <Link to="/launchs">
        <Nav.Item eventKey="launch">Launchs</Nav.Item>
      </Link>
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
