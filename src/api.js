// Api key - 0f0ac39a2e3e4280ac2a70bd73f9d7a8

const api_key = "0f0ac39a2e3e4280ac2a70bd73f9d7a8";

// base url
const base_url = "https://api.rawg.io/api/";

// getting the data
const getMonth = () => {
  const month = new Date().getMonth() + 1;
  if (month < 10) {
    return `0${month}`;
  } else {
    return month;
  }
};

const getDay = () => {
  const day = new Date().getDate();
  if (day < 10) {
    return `0${day}`;
  } else {
    return day;
  }
};

// current date
const getCurrentYear = () => new Date().getFullYear();
const getCurrentMonth = () => getMonth();
const getCurrentDay = () => getDay();
// current date
const currentDate = `${getCurrentYear()}-${getCurrentMonth()}-${getCurrentDay()}`;
// last year
const lastYear = `${
  getCurrentYear() - 1
}-${getCurrentMonth()}-${getCurrentDay()}`;
// next year
const nextYear = `${
  getCurrentYear() + 1
}-${getCurrentMonth()}-${getCurrentDay()}`;

// popular games
const popular_games = `games?key=${api_key}&dates=${lastYear},${currentDate}&ordering=-rating&page_size=10`;
// upcoming games
const upcoming_games = `games?key=${api_key}&dates=${currentDate},${nextYear}&ordering=-added&page_size=12`;
// new games
const newGames = `games?key=${api_key}&dates=${lastYear},${currentDate}&ordering=-released&page_size=10`;

export const popularGamesURL = () => `${base_url}${popular_games}`;
export const upcomingGamesURL = () => `${base_url}${upcoming_games}`;
export const newGamesURL = () => `${base_url}${newGames}`;

// game details
export const GameDetailsURL = (game_id) =>
  `${base_url}games/${game_id}?key=${api_key}`;

// screenshots
export const gameScreenshotURL = (game_id) =>
  `${base_url}games/${game_id}/screenshots?key=${api_key}`;