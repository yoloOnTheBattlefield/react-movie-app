import axios from 'axios';

const API_KEY = 'api_key=d2788c89c4f55d19e63381c2d04593df';
const ROOT_URL = `https://api.themoviedb.org/3`;

export const loadSuggestions = (query) => {
  const request = axios.get(`${ROOT_URL}/search/multi?${API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`);
  return dispatch =>  {
    dispatch(loadSuggestionsBegin())
    dispatch(updateSuggestions(request))
  };
}

export const updateInputValue = (value) => {
  return {
    type: 'UPDATE_INPUT_VALUE',
    value
  };
}

export const clearSuggestions = () => {
  return {
    type: 'CLEAR_SUGGESTIONS'
  };
}

export const loadSuggestionsBegin = () => {
  return {
    type: 'LOAD_SUGGESTIONS_BEGIN'
  };
}

const updateSuggestions = (data) => {
  return {
    type: 'UPDATE_SUGGESTIONS',
    payload: data
  };
}
