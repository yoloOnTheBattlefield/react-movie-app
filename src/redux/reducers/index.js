import { combineReducers } from 'redux';
import upcomingMovies from './upcomingMoviesReducer';
import inTheatres from './theatreMoviesReducer';
import getMovie from './getMovieReducer';
import getActor from './getActorReducer';

import suggestions from './autosuggestionReducer';

const collections = combineReducers({
  upcomingMovies,
  inTheatres,
});

export default combineReducers({
  collections,
  getMovie,
  getActor,
  suggestions
});
