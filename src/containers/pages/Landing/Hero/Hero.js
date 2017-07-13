import React from 'react';
import {
  Hero,
  Backdrop,
  Overlay,
} from './Hero.styles';

export default ({ movie, landing, hero }) => {
  if(!movie){
    return null
  }
  const {
    backdrop_path,
  } = movie;
  return (
    <Hero landing={landing}>
        <Backdrop
          backdrop={`https://image.tmdb.org/t/p/w1000${backdrop_path}`}  />
        <Overlay />
        {/*<MovieWrapper>
          <Poster
            poster={`https://image.tmdb.org/t/p/w500${poster_path}`}
            landing={landing}
            hero={hero}/>
          <MovieDescription>
            <Heading
              landing={landing}
              small
            >
              Featured Movie
            </Heading>
            <Heading>{title}</Heading>
            <Overview>{tagline ? tagline : overview}</Overview>
              {
                landing ?
                <Link to={`/movie/${id}`}>
                  <Button>
                  {title}
                  </Button>
                </Link> : null
              }

          </MovieDescription>
        </MovieWrapper>*/}
    </Hero>
  )
}
