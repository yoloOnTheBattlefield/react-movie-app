import React from 'react';
import About from './About';
import {
  Container,
  Title,
  ContainerInner
} from './HeroDescription.styles';

export default ({ movie }) => {
  const {
    release_date,
    runtime,
    title,
} = movie;
  return (
    <Container>
      <Title><h1>{title}</h1></Title>
      <ContainerInner>
        <div><span>Release Date</span>{release_date}</div>
        <div><span>Run Time</span>{runtime}min</div>
      </ContainerInner>
      <ContainerInner>
        <About movie={movie} />
      </ContainerInner>
    </Container>
  )
}
