import React from "react";
import { Card } from "./Card";
import ControlPanel from "./ControlPanel";

export const MovieList = ({
  movies,
  genre,
  query,
  onChange,
  nextPage,
  prevPage,
}) => {
  return (
    <>
      <ControlPanel
        prevPage={prevPage}
        nextPage={nextPage}
        query={query}
        onChange={onChange}
      />
      <div className="wrapper">
        {movies.map((elem) => {
          return (    
            <Card
              id={elem.id}
              key={elem.id}
              title={elem.title}
              img={elem.poster_path}
              genre={genre}
              movies={elem}
              genre_ids={elem.genre_ids}
            />
          );
        })}
      </div>
    </>
  );
};
