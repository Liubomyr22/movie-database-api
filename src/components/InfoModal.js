import React from "react";
import {getRecommendationsMovie} from '../api/api'

 const InfoModal = ( {...props} ) => {
     const [recommendationsMovies,setRecommendationsMovies] = React.useState([])
     const elem = props.match.params
     console.log({props})

     React.useEffect(() => {
        getRecommendationsMovie(elem.movieID)
        .then((data) => {
            setRecommendationsMovies(data.results)
        })
     },[])
     
    console.log(recommendationsMovies)
     
     
  return (
    <div className="x">
   
      <h1>{elem.title}</h1>
      <p>{elem.rating}</p> 
       <p>{elem.description}</p>
       {/* <span>{elem.genre.map((element) => {
           return <p>{element}</p>
       })}</span> */}
      {/* <img src={img} alt="poster" /> */}
      <div className="image">
            {elem.image ? (
              <img src={'https://image.tmdb.org/t/p/w200' + elem.image} alt="poster" />
            ) : (
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSS77eBijOyeLSZcsTopPrTvkMjTJVNpF44iA&usqp=CAU"
                alt="poster"
              />
            )}
          </div>
          <span>{elem.release}</span>
          {recommendationsMovies.map((e) => {
        return <p>{e.title}</p>
    })}
    </div>
  );
};

export default InfoModal;
