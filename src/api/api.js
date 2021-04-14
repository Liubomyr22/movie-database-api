import * as axios from "axios";

const URL = "https://api.themoviedb.org/3";

export const get = (endpoint) => (params) => {
  const queryParams = new URLSearchParams({
    ...params,
    api_key: "0ab346b765ddcf3489e15848e91862c8",
  }).toString();

  return axios.get(`${URL}${endpoint}?${queryParams}`).then((res) => res.data);
};

export const getPopularMovies = get("/movie/popular");

export const getGenres = get("/genre/movie/list");

export const getMoviesList = get("/search/movie");

export const getRecommendationsMovie = (id) => {
  return axios
    .get(
      `${URL}/movie/${id}/recommendations?api_key=0ab346b765ddcf3489e15848e91862c8&language=en-US&page=1`
    )
    .then((res) => res.data);
};
