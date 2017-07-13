import React from 'react';
import Trailer from './Trailer/Trailer';
import {
  Container,
  Info,
  Title,
  SubTitle,
  Overview
} from './MovieInfo.styles';

import SideBar from './SideBar';

export default ({ movie }) => {
  return (
    <Container>
      <Info>
        <Title><h1>{movie.tagline ? movie.tagline.slice(0, 100) : movie.title}</h1></Title>
        <Overview>{movie.overview}</Overview>
        <Trailer movieId={movie.id} />
      </Info>
      <SideBar movie={movie} />
    </Container>
  )
}
