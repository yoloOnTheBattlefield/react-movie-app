import React from 'react';
import Description from './Description';
import {
  Hero,
  Actor,
} from './Hero.styles';


export default ({ actor, backdrop }) => {
  if(!backdrop){
    return null
  }
  return (
    <div >
      <Actor
        poster={`https://image.tmdb.org/t/p/w1000${backdrop}`}
      />
      <Description
        actor={actor}
      />
  </div>
  )
}
