import axios from "axios";
import { GameDetailsURL, gameScreenURL } from "../../api";

export const loadDetail = (id) => async (dispatch) => {
  const detailData = await axios.get(GameDetailsURL(id));
  const screenData = await axios.get(gameScreenURL(id));

  dispatch({
    type: "GET_DETAIL",
    payload: {
      game: detailData.data,
      screen: screenData.data,
      isOpen: true,
    },
  });
};

export const closeDetail = () => ({
  type: "CLOSE_DETAIL",
});
