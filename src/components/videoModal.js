import React from 'react';
import {Modal, Button} from 'react-bootstrap';

const videoModal = (props) => {
    const handleClose = () => {
        return 0;
    }
    return (  
        <>
        <Modal onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>{props.url}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      </>
    );
}
 
export default videoModal;