import React from "react";
import { useParams } from "react-router-dom";
import { GlobalContext } from "../context/state";
import { getRecommendationsMovie } from "../api/api";

export const CardInfo = ({ movies, genre }) => {
  const [recommendationsMovies, setRecommendationsMovies] = React.useState([]);

  const { id } = useParams();
  const { addMovieToList, movieList } = React.useContext(GlobalContext);

  let storedMovie = movieList.find((o) => o.id === +id);
  const movieListDisable = storedMovie ? true : false;

  React.useEffect(() => {
    window.scrollTo(0, 0);
    getRecommendationsMovie(id).then((data) => {
      setRecommendationsMovies(data.results);
    });
  }, [id]);

  return (
    <>
      {movies
        .filter((card) => card.id === +id)
        .map((card, index) => {
          return (
            <div key={index}>
              <h1 style={{ textAlign: "center", margin: "50px 0" }}>
                {card.title}
              </h1>
              <div className="infoWrapper">
                <div className="infoImage">
                  {card.poster_path ? (
                    <img
                      src={"https://image.tmdb.org/t/p/w200" + card.poster_path}
                      alt="poster"
                    />
                  ) : (
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSS77eBijOyeLSZcsTopPrTvkMjTJVNpF44iA&usqp=CAU"
                      alt="poster"
                    />
                  )}
                  <button
                    disabled={movieListDisable}
                    onClick={() => addMovieToList(card)}
                  >
                    {movieListDisable ? "Added" : "Add"}
                  </button>
                </div>
                <div className="infoDetails">
                  <span className="release">
                    <b>Release at : </b>
                    {card.release_date}
                  </span>
                  <hr />
                  <span style={{ display: "flex", flexWrap: "wrap" }}>
                    <b>Genre : </b>
                    {card.genre_ids.map((id) => (
                      <span style={{ marginLeft: "10px" }} key={id}>
                        {genre[id]}
                      </span>
                    ))}
                  </span>
                  <hr />
                  <span>
                    <b>Description : </b>
                    {card.overview}
                  </span>
                  <hr />
                  <span>
                    <b>Rating : </b>
                    {card.vote_average}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      <div>
        <h2 style={{ textAlign: "center", margin: "200px 0 100px" }}>
          Recommendation movies
        </h2>
        <div className="wrapper">
          {recommendationsMovies.map((elem, index) => {
            return (
              <div key={index} className="card">
                <h4>{elem.title}</h4>
                <span className="genres">
                  {elem.genre_ids.map((id) => (
                    <span style={{ marginLeft: "10px" }} key={id}>
                      {genre[id]}
                    </span>
                  ))}
                </span>
                <div>
                  {elem.poster_path ? (
                    <img
                      style={{ width: "98%", height: "310px", padding: "3px" }}
                      src={"https://image.tmdb.org/t/p/w300" + elem.poster_path}
                      alt="poster"
                    />
                  ) : (
                    <img
                      style={{ width: "98%", height: "310px", padding: "3px" }}
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSS77eBijOyeLSZcsTopPrTvkMjTJVNpF44iA&usqp=CAU"
                      alt="poster"
                    />
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
