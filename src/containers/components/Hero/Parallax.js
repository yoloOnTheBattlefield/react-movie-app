import React from 'react';
import { Parallax } from 'react-parallax';
import About from './About';
import {
  ParalalxWrapper,
  ParallaxInner,
  ParallaxTitle,
  Upcoming,
  ShowLargeWrapper,
  Container,
  Title,
  ContainerInner
} from './Parallax.styles';

export default ({ movie, large, landing }) => {
  if(!movie.poster_path || !movie.backdrop_path){
    return null;
  }
  return (
    <ParalalxWrapper>
      {
        landing ?
          <Upcoming><h1><span>Featured Movie</span></h1></Upcoming>
          :
          null
      }
      <Parallax
        strength={200}
        bgImage={`https://image.tmdb.org/t/p/w1000${large ? movie.backdrop_path : movie.poster_path}`}
      >
        {
          !large ?
            <ParallaxTitle><h1>{movie.title}</h1></ParallaxTitle>
            :
            null
        }
        <ParallaxInner/>
      </Parallax>
      <ShowLargeWrapper>
        <Container>
          <Title><h1>{movie.title}</h1></Title>
          <ContainerInner>
            <div><span>Release Date</span>{movie.release_date}</div>
            <div><span>Run Time</span>{movie.runtime}min</div>
          </ContainerInner>
          <ContainerInner>
            <About movie={movie} landing={landing} />
          </ContainerInner>
        </Container>
      </ShowLargeWrapper>
    </ParalalxWrapper>
  )
}
