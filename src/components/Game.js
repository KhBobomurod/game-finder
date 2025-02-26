import React from "react";
// styles
import styled from "styled-components";
import { motion } from "framer-motion";

const Game = ({ name, released, img }) => {
  return (
    <StyledGame>
      <h3>Game name: {name}</h3>
      <p>Released Date: {released}</p>
      <img src={img} alt={name} />
    </StyledGame>
  );
};

const StyledGame = styled(motion.div)`
  min-height: 30vh;
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.2);
  text-align: center;
  border-radius: 1rem;
  cursor: pointer;
  overflow: hidden;
  img {
    width: 100%;
    border-bottom-right-radius: 1rem;
    border-bottom-left-radius: 1rem;
    height: 40vh;
    object-fit: cover;
  }
`;

export default Game;
