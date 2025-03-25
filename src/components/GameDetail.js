import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { closeDetail } from "../redux/actions/detailAction";

const GameDetail = () => {
  const dispatch = useDispatch();
  const { game, screen, isOpen } = useSelector((state) => state.detail);

  const closeModalHandler = (e) => {
    if (e.target.classList.contains("shadow")) {
      dispatch(closeDetail());
    }
  };

  if (!isOpen) return null;

  return (
    <CardShadow
      className="shadow"
      onClick={closeModalHandler}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <CardDetail
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0.8 }}
        transition={{ duration: 0.3 }}
      >
        <button className="close-btn" onClick={() => dispatch(closeDetail())}>
          ✖
        </button>
        <div className="stats">
          <h3>{game.name}</h3>
          <p>Rating: {game.rating}</p>
        </div>
        <div className="media">
          <img src={game.background_image} alt={game.name} />
        </div>
        <div className="gallery">
          {screen.results.map((screen) => (
            <img key={screen.id} src={screen.image} alt="screen_image" />
          ))}
        </div>
      </CardDetail>
    </CardShadow>
  );
};

const CardShadow = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
  @media (max-width: 1300px) {
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 10;
  }
  @media (max-width: 1000px) {
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 10;
  }
  @media (max-width: 500px) {
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 10;
  }
`;

const CardDetail = styled(motion.div)`
  background: white;
  padding: 2rem;
  border-radius: 1rem;
  position: relative;
  width: 50%;
  max-height: 80vh;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 0.4rem;
  }
  &::-webkit-scrollbar-thumb {
    background: rgb(251, 158, 65);
    border-radius: 1rem;
  }

  .close-btn {
    position: absolute;
    top: 10px;
    right: 10px;
    font-size: 1.5rem;
    cursor: pointer;
    background: none;
    border: none;
  }
  img {
    width: 100%;
  }
  @media (max-width: 1300px) {
    width: 90%;
    max-height: 80vh;
    overflow-y: scroll;
    &::-webkit-scrollbar {
      width: 0.4rem;
    }
    &::-webkit-scrollbar-thumb {
      background: rgb(251, 158, 65);
      border-radius: 1rem;
    }
    .close-btn {
      position: absolute;
      top: 10px;
      right: 10px;
      font-size: 1.5rem;
      cursor: pointer;
      background: none;
      border: none;
    }
    img {
      width: 100%;
    }
  }
  @media (max-width: 1000px) {
    width: 90%;
    max-height: 80vh;
    overflow-y: scroll;
    &::-webkit-scrollbar {
      width: 0.4rem;
    }
    &::-webkit-scrollbar-thumb {
      background: rgb(251, 158, 65);
      border-radius: 1rem;
    }
    .close-btn {
      position: absolute;
      top: 10px;
      right: 10px;
      font-size: 1.5rem;
      cursor: pointer;
      background: none;
      border: none;
    }
    img {
      width: 100%;
    }
  }
  @media (max-width: 500px) {
    width: 90%;
    max-height: 80vh;
    overflow-y: scroll;
    &::-webkit-scrollbar {
      width: 0.4rem;
    }
    &::-webkit-scrollbar-thumb {
      background: rgb(251, 158, 65);
      border-radius: 1rem;
    }
    .close-btn {
      position: absolute;
      top: 10px;
      right: 10px;
      font-size: 1.5rem;
      cursor: pointer;
      background: none;
      border: none;
    }
    img {
      width: 100%;
    }
  }
`;

export default GameDetail;
