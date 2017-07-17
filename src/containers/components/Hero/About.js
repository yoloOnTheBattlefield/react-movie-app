import React from 'react';
import { Rating } from 'semantic-ui-react';
import Trailer from './Trailer/Trailer'
import {
  About,
  Poster,
  Text,
} from './About.styles';

export default ({ movie, landing }) => {
  const {
    poster_path,
    overview
  } = movie;
  return (
    <About>
      <Poster
        poster={`https://image.tmdb.org/t/p/w500${poster_path}`}
        shadow
      />
      {
        landing ?
          <Trailer movieId={movie.id} />
          :
          null
      }

    </About>
  )
}
