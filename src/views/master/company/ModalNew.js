import React, { Component } from "react";
import Text from "./Text";
import Modal from "./Modal";
import "./App.css";

class ModalNew extends Component {
  modalProps = {
    triggerText: "Launch the Modal!"
  };
  modalContent = (
    <React.Fragment>
      <p>
        Press <code>Esc</code> or click Outside the Modal to exit.
      </p>
      <p>
        Pressing Return also exits the Modal if you haven't changed the focus!
      </p>
    </React.Fragment>
  );
  render() {
    return (
      <div className="App">
        <Text />
        <Modal modalProps={this.modalProps} modalContent={this.modalContent} />

        <Text />
        <Text />
        <Text />
        <Text />
      </div>
    );
  }
}

export default ModalNew;
