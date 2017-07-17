import React from 'react';
import ActorInfo from './ActorInfo';
import {
  Hero,
  Actor
} from './Hero.styles';


export default ({ actor }) => {
  if(!actor.profile_path){
    return null
  }
  return (
    <Hero >
      <ActorInfo actor={actor} />
      <Actor
        poster={`https://image.tmdb.org/t/p/w1000${actor.profile_path}`}
      />
    </Hero>
  )
}
