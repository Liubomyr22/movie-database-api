import React, { createContext, useReducer, useEffect } from "react";
import AppReducer from "./AppReducer";

const initialState = {
  movieList: [],
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = (props) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  useEffect(() => {
    localStorage.setItem("movieList", JSON.stringify(state.movieList));
  }, [state]);
  const addMovieToList = (movie) => {
    console.log("ADD_MOVIE_TO_LIST");
    dispatch({ type: "ADD_MOVIE_TO_LIST", payload: movie });
  };
  const removeMovie = (id) => {
    dispatch({ type: "REMOVE_MOVIE", payload: id });
  };

  return (
    <GlobalContext.Provider
      value={{
        movieList: state.movieList,
        added: state.added,
        addMovieToList,
        removeMovie,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};
