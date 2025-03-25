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
        initial={{ y: "-100vh" }}
        animate={{ y: 0 }}
        exit={{ y: "-100vh" }}
        transition={{ duration: 0.5, type: "spring", stiffness: 120 }}
      >
        <CloseButton onClick={() => dispatch(closeDetail())}>✖</CloseButton>
        <Stats>
          <h3>{game.name}</h3>
          <Rating rating={game.rating}>
            {Array(5)
              .fill(0)
              .map((_, i) => (i < Math.round(game.rating) ? "★" : "☆"))}
            <span>{game.rating}/5</span>
          </Rating>
          <p>
            <strong>Tavsif:</strong> {game.description_raw || "Ma'lumot yo'q"}
          </p>
          <p>
            <strong>Platformalar:</strong>{" "}
            {game.platforms?.map((p) => p.platform.name).join(", ") ||
              "Noma'lum"}
          </p>
        </Stats>
        <Media>
          <img src={game.background_image} alt={game.name} />
        </Media>
        <Gallery>
          {screen.results.map((screen) => (
            <img key={screen.id} src={screen.image} alt="screen_image" />
          ))}
        </Gallery>
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
  z-index: 20;
`;

const CardDetail = styled(motion.div)`
  background: ${({ theme }) => theme.cardBg};
  color: ${({ theme }) => theme.text};
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
    background: #ff7676;
    border-radius: 1rem;
  }
  img {
    width: 100%;
    border-radius: 0.5rem;
  }
  @media (max-width: 500px) {
    width: 90%;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 1.5rem;
  cursor: pointer;
  background: none;
  border: none;
  color: ${({ theme }) => theme.text};
`;

const Stats = styled.div`
  margin-bottom: 1rem;
  p {
    margin: 0.5rem 0;
  }
`;

const Rating = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: ${({ rating }) =>
    rating >= 4 ? "#4caf50" : rating >= 3 ? "#ff9800" : "#f44336"};
`;

const Media = styled.div`
  margin-bottom: 1rem;
`;

const Gallery = styled.div`
  display: grid;
  gap: 1rem;
`;

export default GameDetail;
