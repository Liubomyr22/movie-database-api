import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { GlobalContext } from "../context/state";

export const Card = ({title, id, img, genre, movies, genre_ids }) => {
  const { addMovieToList, movieList } = useContext(GlobalContext);

  let storedMovie = movieList.find((o) => o.id === movies.id);
  const movieListDisable = storedMovie ? true : false;

  return (
    <>
      <div className="card">
        <h4>{title}</h4>
        <div className="genres">
        {genre_ids.map(id => <span key={id}>{genre[id]}</span>)}
        </div>
        <div>
          <div className="image">
            {img ? (
              <img src={"https://image.tmdb.org/t/p/w200" + img} alt="poster" />
            ) : (
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSS77eBijOyeLSZcsTopPrTvkMjTJVNpF44iA&usqp=CAU"
                alt="poster"
              />
            )}
          </div>
          <div className="cardButtons">
            <button
              disabled={movieListDisable}
              onClick={() => addMovieToList(movies)}
            >
              {movieListDisable ? "Added" : "Add"}
            </button>
            <NavLink to={`/info/${id}`}>Info</NavLink>
          </div>
        </div>
      </div>
    </>
  );
};
