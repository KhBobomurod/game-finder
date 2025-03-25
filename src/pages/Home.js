import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadGames } from "../redux/actions/gamesAction";
import Game from "../components/Game";
import GameDetail from "../components/GameDetail";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";

const Home = () => {
  const dispatch = useDispatch();
  const [platform, setPlatform] = React.useState("");
  const [page, setPage] = React.useState(1);
  const [sortBy, setSortBy] = React.useState("name");

  useEffect(() => {
    let params = "";
    if (platform) params += `&platforms=${platform}`;
    params += `&page=${page}`;
    dispatch(loadGames(params));
  }, [dispatch, platform, page]);

  const { popular, upcoming, newGames, searched, favorites } = useSelector(
    (state) => state.games
  );
  const { isOpen } = useSelector((state) => state.detail);

  const sortGames = (games) => {
    return [...games].sort((a, b) => {
      if (sortBy === "name") return a.name.localeCompare(b.name);
      if (sortBy === "rating") return b.rating - a.rating;
      if (sortBy === "released")
        return new Date(b.released) - new Date(a.released);
      return 0;
    });
  };

  const sortedPopular = sortGames(popular);
  const sortedUpcoming = sortGames(upcoming);
  const sortedNewGames = sortGames(newGames);
  const sortedSearched = sortGames(searched);
  const sortedFavorites = sortGames(favorites);

  const isLoading =
    popular.length === 0 && upcoming.length === 0 && newGames.length === 0;

  return (
    <GameList
      initial={{ scale: 0.8 }}
      animate={{ scale: 1 }}
      exit={{ scale: 0.8 }}
      transition={{ duration: 1 }}
    >
      <AnimatePresence>{isOpen && <GameDetail />}</AnimatePresence>

      <Controls>
        <Filter>
          <FilterIcon>🎮</FilterIcon>
          <select
            value={platform}
            onChange={(e) => setPlatform(e.target.value)}
          >
            <option value="">Barcha platformalar</option>
            <option value="4">PC</option>
            <option value="187">PS5</option>
            <option value="1">Xbox</option>
          </select>
        </Filter>
        <Sort>
          <SortIcon>📊</SortIcon>
          <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
            <option value="name">Nom bo'yicha</option>
            <option value="rating">Reyting bo'yicha</option>
            <option value="released">Chiqish sanasi bo'yicha</option>
          </select>
        </Sort>
      </Controls>

      {isLoading ? (
        <Loading>
          <Spinner />
          Yuklanmoqda...
        </Loading>
      ) : (
        <>
          {sortedSearched.length > 0 && (
            <>
              <h2>Qidiruv Natijalari</h2>
              <Games>
                {sortedSearched.map((game) => (
                  <Game
                    key={game.id}
                    id={game.id}
                    name={game.name}
                    released={game.released}
                    img={game.background_image}
                    rating={game.rating}
                  />
                ))}
              </Games>
            </>
          )}

          {sortedFavorites.length > 0 && (
            <>
              <h2>Saqlangan O'yinlar</h2>
              <Games>
                {sortedFavorites.map((game) => (
                  <Game
                    key={game.id}
                    id={game.id}
                    name={game.name}
                    released={game.released}
                    img={game.background_image}
                    rating={game.rating}
                  />
                ))}
              </Games>
            </>
          )}

          <h2>Upcoming Games</h2>
          <Games>
            {sortedUpcoming.map((game) => (
              <Game
                key={game.id}
                id={game.id}
                name={game.name}
                released={game.released}
                img={game.background_image}
                rating={game.rating}
              />
            ))}
          </Games>

          <h2>Popular Games</h2>
          <Games>
            {sortedPopular.map((game) => (
              <Game
                key={game.id}
                id={game.id}
                name={game.name}
                released={game.released}
                img={game.background_image}
                rating={game.rating}
              />
            ))}
          </Games>

          <h2>New Games</h2>
          <Games>
            {sortedNewGames.map((game) => (
              <Game
                key={game.id}
                id={game.id}
                name={game.name}
                released={game.released}
                img={game.background_image}
                rating={game.rating}
              />
            ))}
          </Games>

          <Pagination>
            <button
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              disabled={page === 1}
            >
              Oldingi
            </button>
            <span>Sahifa {page}</span>
            <button onClick={() => setPage((p) => p + 1)}>Keyingi</button>
          </Pagination>
        </>
      )}
    </GameList>
  );
};

const GameList = styled(motion.div)`
  padding: 6rem 5rem 0rem;
  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
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

const Controls = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin: 6rem 5rem 1rem; /* Marginni kamaytirdik */
  @media (max-width: 500px) {
    flex-direction: row; /* Mobil qurilmalarda gorizontal joylashuv */
    flex-wrap: wrap;
    gap: 0.5rem;
    margin: 6rem 1rem 1rem;
  }
`;

const Filter = styled.div`
  position: relative;
  select {
    padding: 0.4rem 2rem 0.4rem 2.5rem; /* Ikonka uchun joy ochish */
    border: 1px solid #ccc;
    border-radius: 20px; /* Yumaloqroq dizayn */
    background: ${({ theme }) => theme.cardBg};
    color: ${({ theme }) => theme.text};
    font-size: 0.9rem;
    cursor: pointer;
    transition: all 0.3s ease;
    &:hover {
      border-color: #ff7676;
      box-shadow: 0 0 5px rgba(255, 118, 118, 0.3);
    }
  }
`;

const FilterIcon = styled.span`
  position: absolute;
  left: 0.8rem;
  top: 50%;
  transform: translateY(-50%);
  font-size: 1rem;
  color: ${({ theme }) => theme.text};
`;

const Sort = styled.div`
  position: relative;
  select {
    padding: 0.4rem 2rem 0.4rem 2.5rem;
    border: 1px solid #ccc;
    border-radius: 20px;
    background: ${({ theme }) => theme.cardBg};
    color: ${({ theme }) => theme.text};
    font-size: 0.9rem;
    cursor: pointer;
    transition: all 0.3s ease;
    &:hover {
      border-color: #ff7676;
      box-shadow: 0 0 5px rgba(255, 118, 118, 0.3);
    }
  }
`;

const SortIcon = styled.span`
  position: absolute;
  left: 0.8rem;
  top: 50%;
  transform: translateY(-50%);
  font-size: 1rem;
  color: ${({ theme }) => theme.text};
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

const Pagination = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin: 2rem 0;
  button {
    padding: 0.5rem 1rem;
    background: #ff7676;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    &:hover {
      background: #ff5555;
    }
    &:disabled {
      background: #ccc;
      cursor: not-allowed;
    }
  }
`;

const Loading = styled(motion.div)`
  padding-top: 20rem;
  text-align: center;
  font-size: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

const Spinner = styled.div`
  width: 2rem;
  height: 2rem;
  border: 4px solid #ff7676;
  border-top: 4px solid transparent;
  border-radius: 50%;
  animation: spin 1s linear infinite;
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export default Home;
