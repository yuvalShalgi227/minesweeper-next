// src/components/EndGame.js

import React, { useState } from "react";
import SubmitScore from "./SubmitScore";
import { postScore } from "@/utils/api";

const EndGame = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [name, setName] = useState("");

  const handleOpenModal = () => {
    setModalIsOpen(true);
  };

  const handleCloseModal = () => {
    setModalIsOpen(false);
  };

  const handleNameSubmit = async (newName) => {
    setName(newName);
    setModalIsOpen(false);
    await postScore(newName, 10.1);
  };

  return (
    <div>
      <button onClick={handleOpenModal}>Submit your score</button>
      <SubmitScore
        isOpen={modalIsOpen}
        onRequestClose={handleCloseModal}
        onNameSubmit={handleNameSubmit}
      />
    </div>
  );
};

export default EndGame;
