import React from 'react';
import { Parallax } from 'react-parallax';
import { Link } from 'react-router-dom';
import {
  Container,
  Title,
} from './MovieCard.styles';

const MovieCard = ({ movie }) => {
  return(
    <Container>
      <Title>
        <h1><span>{movie.title}</span></h1>
      </Title>
      <Link to={`/movie/${movie.id}`}>
        <Parallax
          strength={100}
          bgWidth='300px'
          bgHeight='450px'
          bgImage={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} >
            <div style={{width: 300, height: 450}} />
        </Parallax>
      </Link>
    </Container>
  )
}

export default MovieCard;
