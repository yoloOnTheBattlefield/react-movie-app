import axios from 'axios';

const API_KEY = 'api_key=d2788c89c4f55d19e63381c2d04593df';
const ROOT_URL = `https://api.themoviedb.org/3/movie`;

const getMovieTrailer = (movieId) => {
  const request = axios.get(`${ROOT_URL}/${movieId}/videos?${API_KEY}&language=en-US`);
  return {
    type: 'GET_MOVIE_TRAILER',
    payload: request
  }
}

export default getMovieTrailer;
