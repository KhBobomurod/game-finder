import axios from "axios";
import {
  popularGamesURL,
  upcomingGamesURL,
  newGamesURL,
  searchGamesURL,
} from "../../api";

export const loadGames =
  (params = "") =>
  async (dispatch) => {
    try {
      console.log("Params:", params); // So'rov parametrlarini tekshirish
      const popularGamesData = await axios.get(popularGamesURL() + params);
      const upcomingGamesData = await axios.get(upcomingGamesURL() + params);
      const newGamesData = await axios.get(newGamesURL() + params);

      console.log("Popular Games:", popularGamesData.data.results); // Ma'lumot kelganini tekshirish
      dispatch({
        type: "FETCH_GAMES",
        payload: {
          popular: popularGamesData.data.results || [],
          upcoming: upcomingGamesData.data.results || [],
          newGames: newGamesData.data.results || [],
        },
      });
    } catch (error) {
      console.error("O'yinlarni yuklashda xatolik:", error);
      dispatch({
        type: "FETCH_GAMES",
        payload: {
          popular: [],
          upcoming: [],
          newGames: [],
        },
      }); // Xatolik bo'lsa bo'sh massivlar yuboriladi
    }
  };

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

export const clearSearch = () => ({
  type: "CLEAR_SEARCH",
});

export const addToFavorites = (game) => ({
  type: "ADD_TO_FAVORITES",
  payload: game,
});

export const removeFromFavorites = (id) => ({
  type: "REMOVE_FROM_FAVORITES",
  payload: id,
});
