import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { loadDetail } from "../redux/actions/detailAction";
import {
  addToFavorites,
  removeFromFavorites,
} from "../redux/actions/gamesAction";

const Game = ({ name, released, img, id, rating }) => {
  const dispatch = useDispatch();
  const { favorites } = useSelector((state) => state.games);
  const isFavorite = favorites.some((game) => game.id === id);

  const loadDetailHandler = () => {
    dispatch(loadDetail(id));
  };

  const toggleFavorite = () => {
    if (isFavorite) {
      dispatch(removeFromFavorites(id));
    } else {
      dispatch(addToFavorites({ id, name, released, img, rating }));
    }
  };

  return (
    <StyledGame onClick={loadDetailHandler}>
      <h3>{name}</h3>
      <p>Released Date: {released}</p>
      <Rating rating={rating}>
        {Array(5)
          .fill(0)
          .map((_, i) => (i < Math.round(rating) ? "★" : "☆"))}
        <span>{rating}/5</span>
      </Rating>
      <img src={img} alt={name} />
      <FavoriteButton
        onClick={(e) => {
          e.stopPropagation();
          toggleFavorite();
        }}
      >
        {isFavorite ? "❤️ O'chirish" : "🤍 Saqlash"}
      </FavoriteButton>
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
  background: ${({ theme }) => theme.cardBg};
  color: ${({ theme }) => theme.text};
  img {
    width: 100%;
    height: 40vh;
    object-fit: cover;
    border-bottom-right-radius: 1rem;
    border-bottom-left-radius: 1rem;
  }
  @media (max-width: 500px) {
    min-height: 20vh;
    img {
      height: 30vh;
    }
  }
`;

const Rating = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  color: ${({ rating }) =>
    rating >= 4 ? "#4caf50" : rating >= 3 ? "#ff9800" : "#f44336"};
`;

const FavoriteButton = styled.button`
  padding: 0.5rem;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1rem;
  color: ${({ theme }) => theme.text};
`;

export default Game;
