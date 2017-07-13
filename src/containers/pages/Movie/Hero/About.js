import React from 'react';
import { Rating } from 'semantic-ui-react'
import {
  About,
  Poster,
  Text,
  RatingContainer
} from './About.styles';

export default ({ movie }) => {
  const {
    poster_path,
    overview,
    vote_average,
    vote_count
  } = movie;
  return (
    <About>
      <Poster
        poster={`https://image.tmdb.org/t/p/w500${poster_path}`}
        shadow
      />
      <Text>
        {overview ? overview : ''}
      </Text>
      <RatingContainer>
        <div>
          <h2>{vote_average} <Rating icon='star' defaultRating={1} disabled /></h2>
        </div>
        <div>
          <h2>{vote_count} <Rating icon='heart' defaultRating={1} disabled /></h2>
        </div>
      </RatingContainer>
    </About>
  )
}
