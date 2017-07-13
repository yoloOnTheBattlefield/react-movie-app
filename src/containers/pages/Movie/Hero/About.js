import React from 'react';
import FontAwesome from 'react-fontawesome'
import {
  About,
  Poster,
  Text,
  Rating
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
      <Rating>
        <div>
          <h4>Vote Average</h4>
          <h5>{vote_average} <FontAwesome name='star' /></h5>
        </div>
        <div>
          <h4>Vote Count</h4>
          <h5>{vote_count} <FontAwesome name='user-circle' /></h5>
        </div>
      </Rating>
    </About>
  )
}
