import { useEffect, useState } from "react";
import { Button, Modal } from "rsuite";

const Modals = (props) => {
  const [showModal, setModal] = useState(false);

  const hideModal = () => {
    setModal(false);
    props.updateModalValue(false)
  };

  useEffect(() => {
    // Update the document title using the browser API
    if (props.showModal != showModal) {
        setModal(props.showModal)
    }
  });

  return (
    <div className="modal-container">
      <Modal show={showModal} onHide={hideModal}>
        <Modal.Header>
          <Modal.Title>Modal Title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h1>test</h1>
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
    </div>
  );
};
export default Modals;
