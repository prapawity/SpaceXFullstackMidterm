import { useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";

const Modals = (props) => {
  const [showModal, setModal] = useState(false);
  console.log('checkk', props.obj)
  const hideModal = () => {
    setModal(false);
    props.updateModalValue(false)
  };

  const deepLinkToRocket = (id) => {
    props.deepLinkToRocket(id)
  }
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
    return(
      <Modal show={showModal} onHide={hideModal}>
          <Modal.Header >
            <Modal.Title>{props.obj.mission_name}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <ul>
              <li><b>Launch year:</b> {props.obj.launch_year} </li>
              <li><b>Rocket name:</b> {props.obj.rocket.rocket_name} <Link to={`/rockets/${props.obj.rocket.rocket_id}`} onSelect={deepLinkToRocket(props.obj.rocket.rocket_id)}>...See details</Link> </li>
              <li><b>Launch site:</b> {props.obj.launch_site.site_name_long} </li>
              <li><b>Wikipedia:</b> <a href={props.obj.links.wikipedia} target="_blank">Click This!</a> </li>
              <li><b>Article:</b> <a href={props.obj.links.article_link} target="_blank">Click This!</a> </li>
            </ul>
            <p>{props.obj.details}</p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={hideModal}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
    )
  }
};
export default Modals;
