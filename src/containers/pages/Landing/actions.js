import axios from 'axios';

const API_KEY = 'api_key=d2788c89c4f55d19e63381c2d04593df';
const ROOT_URL = `https://api.themoviedb.org/3`;

var date = new Date();
var currentYear = date.getFullYear();

export const fetchUpcomingMovies = () => {
  const request = axios.get(`${ROOT_URL}/movie/upcoming?${API_KEY}`);
  return {
    type: 'FETCH_UPCOMING_MOVIES',
    payload: request,
  }
}

export const fetchTheaterMovies = () => {
  const request = axios.get(`${ROOT_URL}/discover/movie?${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&primary_release_date.gte=${currentYear}`);
  return {
    type: 'FETCH_IN_THEATRES',
    payload: request
  }
}
