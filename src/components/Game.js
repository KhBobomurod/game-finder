import React from "react";
// styles
import styled from "styled-components";
import { motion } from "framer-motion";

const Game = ({ name, released, img }) => {
  return (
    <div>
      <h3>Game name: {name}</h3>
      <p>Released Date: {released}</p>
      <img src={img} alt={name} width="300px" />
    </div>
  );
};

export default Game;
