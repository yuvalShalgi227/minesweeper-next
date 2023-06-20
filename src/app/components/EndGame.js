// src/components/EndGame.js

import React, { useState } from "react";
import SubmitScore from "./SubmitScore";
import { postScore } from "@/utils/api";

const EndGame = ({ scoreSumbit, score }) => {
  const [modalIsOpen, setModalIsOpen] = useState(true);
  const [name, setName] = useState("");

  const handleCloseModal = () => {
    setModalIsOpen(false);
  };

  const handleNameSubmit = async (newName) => {
    setName(newName);
    setModalIsOpen(false);
    const res = score;
    await postScore(newName, res);
    scoreSumbit();
  };

  return (
    <div>
      <h2>score: {score}</h2>
      <SubmitScore
        isOpen={modalIsOpen}
        onRequestClose={handleCloseModal}
        onNameSubmit={handleNameSubmit}
      />
    </div>
  );
};

export default EndGame;
