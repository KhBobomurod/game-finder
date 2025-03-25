import axios from "axios";
import {
  popularGamesURL,
  upcomingGamesURL,
  newGamesURL,
  searchGamesURL,
} from "../../api";

// O'yinlarni yuklash
export const loadGames = () => async (dispatch) => {
  const popularGamesData = await axios.get(popularGamesURL());
  const upcomingGamesData = await axios.get(upcomingGamesURL());
  const newGamesData = await axios.get(newGamesURL());

  dispatch({
    type: "FETCH_GAMES",
    payload: {
      popular: popularGamesData.data.results,
      upcoming: upcomingGamesData.data.results,
      newGames: newGamesData.data.results,
    },
  });
};

// Qidiruv funksiyasi
export const searchGames = (query) => async (dispatch) => {
  try {
    const searchGamesData = await axios.get(searchGamesURL(query));
    dispatch({
      type: "SEARCH_GAMES",
      payload: {
        searched: searchGamesData.data.results,
      },
    });
  } catch (error) {
    console.error("Qidiruvda xatolik:", error);
  }
};

// Qidiruvni tozalash
export const clearSearch = () => ({
  type: "CLEAR_SEARCH",
});