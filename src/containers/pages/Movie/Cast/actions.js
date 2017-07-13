import axios from 'axios';

const API_KEY = 'api_key=d2788c89c4f55d19e63381c2d04593df';
const ROOT_URL = `https://api.themoviedb.org/3/movie`;

export const getCast = (movieId) => {
  const request = axios.get(`${ROOT_URL}/${movieId}/credits?${API_KEY}`);
  return {
    type: 'GET_CAST',
    payload: request
  }
}

export default getCast;
