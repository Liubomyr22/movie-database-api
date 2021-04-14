 const AppReducer = (state, action) => {
  switch (action.type) {
    case "ADD_MOVIE_TO_LIST":
      return {
        ...state,
        movieList: [action.payload, ...state.movieList],
      };
    case "REMOVE_MOVIE":
      return {
        ...state,
        movieList: state.movieList.filter(
          (movie) => movie.id !== action.payload
        ),
      };
    default:
      return state;
  }
};

export default AppReducer;