import { useEffect, useState } from "react";
import { Button, Modal } from "rsuite";

const Modals = (props) => {
  const [showModal, setModal] = useState(false);
  console.log('checkk', props.obj)
  const hideModal = () => {
    setModal(false);
    props.updateModalValue(false)
  };

  useEffect(() => {
    // Update the document title using the browser API
    if (props.showModal.state != showModal) {
      setModal(props.showModal.state)
    }
  });

  console.log(props.obj)
  if (props.state == null) {
    return (
      <div></div>
    )
  } else {
    if (props.state == 'isRocket') {
      return (
        <div>
        <Modal show={showModal} onHide={hideModal}>
          <Modal.Header>
            <Modal.Title>{props.obj.rocket_name}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {props.obj.description}
          </Modal.Body>
        </Modal>
        </div>
      )
    } else if (props.state == 'isLaunch') {
      return (
        <Modal show={showModal} onHide={hideModal}>
          <Modal.Header>
            <Modal.Title>{props.obj.mission_name}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {props.obj.details}
            Launch year: {props.obj.launch_year}
            Rocket Name: {props.obj.rocket.rocket_name}
          </Modal.Body>
          <Modal.Footer></Modal.Footer>
        </Modal>
      )
    }
  }
};
export default Modals;
