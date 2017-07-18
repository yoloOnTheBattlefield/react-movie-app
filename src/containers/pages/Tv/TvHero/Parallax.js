import React from 'react';
import { Parallax } from 'react-parallax';
// import About from './About';
import {
  ParalalxWrapper,
  ParallaxInner,
  ParallaxTitle,
  Upcoming,
  Wrapper,
  Container,
  Title,
  ContainerInner
} from './Parallax.styles';

export default ({ tv, large }) => {
  if(!tv.poster_path || !tv.backdrop_path){
    return null;
  }
  return (
    <ParalalxWrapper>
      <Parallax
        strength={200}
        bgImage={`https://image.tmdb.org/t/p/w1000${large ? tv.backdrop_path : tv.poster_path}`}
      >
        <ParallaxInner/>
      </Parallax>
      <Wrapper>
        <Container>
          <Title><h1>{tv.name}</h1></Title>
          <h3>{tv.status}</h3>
          <ContainerInner>
            <div><span>First Air Date</span>{tv.first_air_date}</div>
            <div>{tv.number_of_episodes}<span> Episodes</span></div>
            <div>{tv.number_of_seasons}<span> Seasons</span></div>
          </ContainerInner>
        </Container>
      </Wrapper>
    </ParalalxWrapper>
  )
}
