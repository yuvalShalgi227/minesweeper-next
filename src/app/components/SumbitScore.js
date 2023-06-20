// src/components/NameModal.js

import React, { useState } from "react";
import Modal from "react-modal";

Modal.setAppElement("#__next"); // replaces '#root'

function NameModal({ isOpen, onRequestClose, onNameSubmit }) {
  const [name, setName] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    onNameSubmit(name);
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Enter Name"
    >
      <h2>Enter Your Name</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your Name"
        />
        <button type="submit">Submit</button>
      </form>
    </Modal>
  );
}

export default NameModal;
