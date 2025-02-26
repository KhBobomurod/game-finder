import axios from "axios";
import { GameDetailsURL, gameScreenshotURL } from "../../api";

export const loadDetail = (id) => async (dispatch) => {
  const detailData = await axios.get(GameDetailsURL(id));
  const screenshotsData = await axios.get(gameScreenshotURL(id));

  dispatch({
    type: "GET_DETAIL",
    payload: {
      game: detailData.data,
      screenshots: screenshotsData.data,
    },
  });
};
