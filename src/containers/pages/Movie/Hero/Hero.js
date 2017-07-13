import React from 'react';
import HeroDescription from './HeroDescription';
import {
  Hero,
  Backdrop,
  Overlay,
  HeroWrapper,
} from './Hero.styles';

export default ({ movie }) => {
  if(!movie){
    return null;
  }

  return (
    <Hero>
      <Backdrop
        backdrop={`https://image.tmdb.org/t/p/w1000${movie.backdrop_path}`}  />
      <Overlay />
      <HeroWrapper>
        <HeroDescription movie={movie} />
      </HeroWrapper>
    </Hero>
  )
}
