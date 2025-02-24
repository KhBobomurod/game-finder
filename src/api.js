// Api key - e2dcb4b316f64fc597aaad8efb975c8e

const api_key = "e2dcb4b316f64fc597aaad8efb975c8e";

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
const current_date = `${getCurrentYear}-${getCurrentMonth}-${getCurrentDay}`;
// last date
const lastYear = `${getCurrentYear - 1}-${getCurrentMonth}-${getCurrentDay}`;
// Next year
const nextYear = `${getCurrentYear + 1}-${getCurrentMonth}-${getCurrentDay}`;

// popular games
const popular_games = `games?key=${api_key}&dates=${lastYear},${current_date}&ordering=-rating&page_size=10`;

const popularGames = () => `${base_url}${popular_games}`;
console.log(popularGames());
