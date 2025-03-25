const initState = {
  popular: [],
  upcoming: [],
  newGames: [],
  searched: [],
};

const gamesReducer = (state = initState, action) => {
  switch (action.type) {
    case "FETCH_GAMES":
      return {
        ...state,
        popular: action.payload.popular,
        upcoming: action.payload.upcoming,
        newGames: action.payload.newGames,
      };
    case "SEARCH_GAMES":
      return {
        ...state,
        searched: action.payload.searched,
      };
    case "CLEAR_SEARCH":
      return {
        ...state,
        searched: [], // searched massivini bo'shatadi
      };
    default:
      return { ...state };
  }
};

export default gamesReducer;
