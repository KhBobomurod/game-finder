import { motion } from "framer-motion";
import React from "react";
// styles
import styled from "styled-components";
// import { motion } from "framer-motion";
// redux
import { useSelector } from "react-redux";

const GameDetail = () => {
  // DATA
  const { game, screen } = useSelector((state) => state.detail);

  return (
    <CardShadow>
      <CardDetail>
        <div className="stats">
          <div className="rating">
            <h3>{game.name}</h3>
            <p>Rating: {game.rating}</p>
          </div>
          <div className="info">
            <h3>Platforms</h3>
            <div className="platforms">
              {game.platforms.map((data) => (
                <h2 key={data.platform.id}>{data.platform.name}</h2>
              ))}
            </div>
          </div>
        </div>
        <div className="media">
          <img src={game.background_image} alt="game.background_image" />
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

// styled component
const CardShadow = styled(motion.div)`
  width: 100%;
  height: 100vh;
  overflow-y: scroll;
  position: fixed;
  background: rgba(0, 0, 0, 0.5);
  top: 0;
  left: 0;
  &::-webkit-scrollbar {
    width: 0.4rem;
  }
  &::-webkit-scrollbar-thumb {
    background: #123456;
  }
`;

const CardDetail = styled(motion.div)`
  width: 90%;
  border-radius: 1rem;
  padding: 2rem 20rem;
  position: absolute;
  background: #fff;
  left: 5%;
  color: #000;
  img {
    width: 100%;
  }
`;

export default GameDetail;
