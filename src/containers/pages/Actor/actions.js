import axios from 'axios';

const API_KEY = 'api_key=d2788c89c4f55d19e63381c2d04593df';
const ROOT_URL = `https://api.themoviedb.org/3`;

export const getActorById = (actorId) => {
  const request = axios.get(`${ROOT_URL}/person/${actorId}?${API_KEY}`);
  return {
    type: 'GET_ACTOR',
    payload: request
  }
}

export const getActorImages = (actorId) => {
  const request = axios.get(`${ROOT_URL}/person/${actorId}/images?${API_KEY}`);
  return {
    type: 'GET_ACTOR_IMAGES',
    payload: request
  }
}
