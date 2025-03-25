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

  const { popular, upcoming, newGames, searched } = useSelector(
    (state) => state.games
  );
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

      {/* Qidiruv natijalari - faqat searchTerm bo'lsa ko'rinadi */}
      {searched.length > 0 && (
        <>
          <h2>Qidiruv Natijalari</h2>
          <Games>
            {searched.map((game) => (
              <Game
                key={game.id}
                id={game.id}
                name={game.name}
                released={game.released}
                img={game.background_image}
              />
            ))}
          </Games>
        </>
      )}

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
  padding: 6rem 5rem 0rem; /* Header bilan overlap bo'lmasligi uchun tepadan padding */
  h2 {
    padding: 5rem 0rem;
  }
  @media (max-width: 1300px) {
    padding: 6rem 3rem 0rem;
  }
  @media (max-width: 1000px) {
    padding: 6rem 2rem 0rem;
  }
  @media (max-width: 500px) {
    padding: 6rem 1rem 0rem;
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
