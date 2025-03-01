import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadGames } from "../redux/actions/gamesAction";
import Game from "../components/Game";
import GameDetail from "../components/GameDetail";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadGames());
  }, [dispatch]);

  const { popular, upcoming, newGames } = useSelector((state) => state.games);
  const { isOpen } = useSelector((state) => state.detail);

  if (popular.length === 0 || upcoming.length === 0 || newGames.length === 0) {
    return <Loading>Loading...</Loading>;
  }

  return (
    <GameList
      initial={{ scale: 0.8 }}
      animate={{ scale: 1 }}
      exit={{ scale: 0.8 }}
      transition={{ duration: 1 }}
    >
      <AnimatePresence>{isOpen && <GameDetail />}</AnimatePresence>
      <h2>Upcoming Games</h2>
      <Games>
        {upcoming.map((game) => (
          <Game
            key={game.id}
            id={game.id}
            name={game.name}
            released={game.released}
            img={game.background_image}
          />
        ))}
      </Games>
      <h2>Popular Games</h2>
      <Games>
        {popular.map((game) => (
          <Game
            key={game.id}
            id={game.id}
            name={game.name}
            released={game.released}
            img={game.background_image}
          />
        ))}
      </Games>
      <h2>New Games</h2>
      <Games>
        {newGames.map((game) => (
          <Game
            key={game.id}
            id={game.id}
            name={game.name}
            released={game.released}
            img={game.background_image}
          />
        ))}
      </Games>
    </GameList>
  );
};

const GameList = styled(motion.div)`
  padding: 0rem 5rem;
  h2 {
    padding: 5rem 0rem;
  }
  @media (max-width: 1300px) {
    padding: 0rem 3rem;
  }
  @media (max-width: 1000px) {
    padding: 0rem 2rem;
  }
  @media (max-width: 500px) {
    padding: 0rem 1rem;
  }
  `;

const Games = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  grid-column-gap: 3rem;
  grid-row-gap: 5rem;
  @media (max-width: 1300px) {
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  }
  @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  }
  @media (max-width: 500px) {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  }
`;

const Loading = styled(motion.div)`
  padding-top: 20rem;
  text-align: center;
  font-size: 2rem;
`;

export default Home;
