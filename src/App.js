import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { debounce } from "lodash";
import { getMoviesList, getPopularMovies, getGenres } from "./api/api";
import "./App.css";
import { Added } from "./components/Added";
import { CardInfo } from "./components/CardInfo";
import { Header } from "./components/Header";
import { MovieList } from "./components/MovieList";
import { GlobalContext } from "./context/state";
import AppReducer from "../src/context/AppReducer";

const initialState = {
  movieList: localStorage.getItem("movieList")
    ? JSON.parse(localStorage.getItem("movieList"))
    : [],
};

const App = () => {
  const [movies, setMovies] = React.useState([]);
  const [totalPages, setTotalPages] = React.useState(null);
  const [pageNumber, setPageNumber] = React.useState(1);
  const [query, setQuery] = React.useState("");
  const [genre, setGenre] = React.useState([]);

  const [state, dispatch] = React.useReducer(AppReducer, initialState);

  React.useEffect(() => {
    localStorage.setItem("movieList", JSON.stringify(state.movieList));
  }, [state]);

  const addMovieToList = (movie) => {
    dispatch({ type: "ADD_MOVIE_TO_LIST", payload: movie });
  };

  const removeMovie = (id) => {
    dispatch({ type: "REMOVE_MOVIE", payload: id });
  };

  React.useEffect(() => {
    getPopularMovies().then((data) => {
      setMovies(data.results);
      setTotalPages(data.total_pages);
    });
    getGenres().then((data) => {
      setGenre(
        Object.fromEntries(data.genres.map(({ id, name }) => [id, name]))
      );
    });
  }, []);

  const debounceUpdateMovies = React.useMemo(
    () =>
      debounce((query, pageNumber) => {
        if (query.length > 0) {
          getMoviesList({ query, pageNumber }).then((data) => {
            setMovies(data.results);
            setTotalPages(data.total_pages);
          });
        } else {
          getPopularMovies({ pageNumber }).then((data) => {
            setMovies(data.results);
            setTotalPages(data.total_pages);
          });
        }
      }, 300),
    []
  );

  const onChange = (e) => {
    e.preventDefault();
    debounceUpdateMovies(e.target.value, pageNumber)
    setQuery(e.target.value);
  };

  const nextPage = () => {
    if (query.length > 0 && pageNumber < totalPages) {
      setPageNumber(pageNumber + 1);
      getMoviesList({ page: pageNumber + 1, query: query }).then((data) => {
        setMovies(data.results);
        setTotalPages(data.total_pages);
      });
    } else if (query.length === 0 && pageNumber < totalPages) {
      setPageNumber(pageNumber + 1);
      getPopularMovies({ page: pageNumber + 1, query: query }).then((data) => {
        setMovies(data.results);
        setTotalPages(data.total_pages);
      });
    }
  };

  const prevPage = () => {
    if (query.length > 0 && pageNumber > 1) {
      setPageNumber(pageNumber - 1);
      getMoviesList({ page: pageNumber - 1, query: query }).then((data) => {
        setMovies(data.results);
        setTotalPages(data.total_pages);
      });
    } else if (query.length === 0 && pageNumber > 1) {
      setPageNumber(pageNumber - 1);
      getPopularMovies({ page: pageNumber - 1, query: query }).then((data) => {
        setMovies(data.results);
        setTotalPages(data.total_pages);
      });
    }
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
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <MovieList
              movies={movies}
              genre={genre}
              prevPage={prevPage}
              nextPage={nextPage}
              query={query}
              onChange={onChange}
            />
          </Route>
          <Route path="/added">
            <Added genre={genre} />
          </Route>
          <Route path="/info/:id">
            <CardInfo movies={movies} genre={genre} />
          </Route>
        </Switch>
      </Router>
    </GlobalContext.Provider>
  );
};

export default App;
