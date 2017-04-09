import React from 'react';

import { Modal } from 'react-bootstrap';
const Overlay = ({showModal, toggleModal, buttonMostRecentlyClicked}) => {
  return (
    <Modal show={showModal} onHide={toggleModal}>
      <Modal.Header closeButton>
        <Modal.Title>{buttonMostRecentlyClicked}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>Modal body</p>
      </Modal.Body>
    </Modal>
  )
}
export default Overlay;