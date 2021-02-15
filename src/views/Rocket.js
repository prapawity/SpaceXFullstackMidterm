import Card from "../components/Card";
import Modal from "../components/Modals";
import { Button, ButtonToolbar } from "rsuite";
import { useState } from "react";

const divStyle = {
  backgroundColor: "black",
  height: "100vh",
  paddingTop: "60px",
};

const Rocket = () => {
  const [stateShowModal, setShowModal] = useState(false);

  const setShouldUpdateModal = () => {
    setShowModal(!stateShowModal)
  }

  return (
    <div style={divStyle}>
      <h1>Rocket Page</h1>
      <div>
        {/* {elements} */}
        <Card />
      </div>
      <ButtonToolbar>
        <Button onClick={setShouldUpdateModal}> Open</Button>
      </ButtonToolbar>
      <Modal showModal={stateShowModal} updateModalValue={setShowModal}/>
    </div>
  );
};

export default Rocket;
