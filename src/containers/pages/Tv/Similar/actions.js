import axios from 'axios';

const API_KEY = 'api_key=d2788c89c4f55d19e63381c2d04593df';
const ROOT_URL = `https://api.themoviedb.org/3/tv`;

export const getSimilar = (movieId) => {
  const request = axios.get(`${ROOT_URL}/${movieId}/similar?${API_KEY}`);
  return {
    type: 'GET_TV_SIMILAR',
    payload: request
  }
}

export default getSimilar;
