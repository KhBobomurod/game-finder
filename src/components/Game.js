import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { loadDetail } from "../redux/actions/detailAction";

const Game = ({ name, released, img, id }) => {
  const dispatch = useDispatch();
  const loadDetailHandler = () => {
    dispatch(loadDetail(id));
  };

  return (
    <StyledGame onClick={loadDetailHandler}>
      <h3>{name}</h3>
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
  @media (max-width: 1300px) {
    img {
      width: 100%;
      border-bottom-right-radius: 1rem;
      border-bottom-left-radius: 1rem;
      object-fit: cover;
    }
  }
  @media (max-width: 1000px) {
    img {
      width: 100%;
      border-bottom-right-radius: 1rem;
      border-bottom-left-radius: 1rem;
      
      object-fit: cover;
    }
  } 
`;

export default Game;
