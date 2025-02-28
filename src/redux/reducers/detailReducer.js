const initState = { game: {}, screen: {}, isOpen: false };

const detailReducer = (state = initState, action) => {
  switch (action.type) {
    case "GET_DETAIL":
      return {
        ...state,
        game: action.payload.game,
        screen: action.payload.screen,
        isOpen: true,
      };
    case "CLOSE_DETAIL":
      return {
        ...state,
        isOpen: false,
      };
    default:
      return state;
  }
};

export default detailReducer;
