import React, { Component } from 'react';
import { isEmailValid } from './helpers/helpers'
import { Modal, Button } from 'react-bootstrap';

class Overlay extends Component {
  constructor(props) {
    super(props);
    this.pressGo = this.pressGo.bind(this);
  }

  pressGo() {
    debugger;
    const { submitEmail } = this.props;
    const emailString = this.textInput.value;
    if (isEmailValid(emailString)) {
      submitEmail(emailString)
    }
  }

  render() {   
    const {showModal, toggleModalOff, optionMostRecentlyClicked} = this.props;
    const modalHeading = optionMostRecentlyClicked === null ? "" : optionMostRecentlyClicked.modalHeading;
    const modalImg = optionMostRecentlyClicked === null ? "" : optionMostRecentlyClicked.img;
    const modalBodyFirstSentence = optionMostRecentlyClicked === null ? "" : optionMostRecentlyClicked.modalBodyFirstSentence;
    return (
      <Modal show={showModal} onHide={toggleModalOff}>
        <Modal.Header closeButton>
          <Modal.Title><img src={modalImg} className="drawer-option-icon"/> {modalHeading}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>{ modalBodyFirstSentence }</p>
          <input 
            placeholder="Email"
            label="Email"
            className="email-input"
            name="email"
            type="email"
            ref={input => { this.textInput = input; }}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button bsStyle="primary" onClick={this.pressGo}>Go</Button>
        </Modal.Footer>
      </Modal>
    )
  }
}
export default Overlay;