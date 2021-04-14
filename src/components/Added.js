import React from "react";
import { GlobalContext } from "../context/state";

export const Added = ({ genre }) => {
  const { removeMovie, movieList } = React.useContext(GlobalContext);
  return (
    <div className="wrapper">
      {movieList.map((elem, index) => {
        return (
          <div key={index} className="card">
            <h4>{elem.title}</h4>
            <div className="genres">
              {elem.genre_ids.map((id) => (
                <span key={id}>{genre[id]}</span>
              ))}
            </div>
            <div className="image">
              {elem.poster_path ? (
                <img
                  src={"https://image.tmdb.org/t/p/w200" + elem.poster_path}
                  alt="poster"
                />
              ) : (
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSS77eBijOyeLSZcsTopPrTvkMjTJVNpF44iA&usqp=CAU"
                  alt="poster"
                />
              )}
              <button
                onClick={() => removeMovie(elem.id)}
                className="removeButton"
              >
                Remove
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};
