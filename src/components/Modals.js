import { useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap";

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
            <Modal.Header closeButton>
              <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={hideModal}>
                Close
          </Button>
              <Button variant="primary" onClick={hideModal}>
                Save Changes
          </Button>
            </Modal.Footer>
          </Modal>

        </div>
      )
    } else if (props.state == 'isLaunch') {
      return (
        <Modal show={showModal} onHide={hideModal}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={hideModal}>
              Close
          </Button>
            <Button variant="primary" onClick={hideModal}>
              Save Changes
          </Button>
          </Modal.Footer>
        </Modal>

      )
    }
  }
};
export default Modals;
