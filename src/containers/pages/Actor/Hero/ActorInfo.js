import React from 'react';
import {
  ActorInfo,
  Name
} from './ActorInfo.styles';

export default ({ actor }) => {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <ActorInfo>
      <Name>{actor.name}</Name>
      <h2>
        {
          actor.deathday ?
            Number(actor.deathday.slice(0,4)) - Number(actor.birthday.slice(0,4)) + ' deceased'
            :
            year - Number(actor.birthday.slice(0,4)) + ' years old'
        }
      </h2>
      <h2>
        {actor.place_of_birth}
      </h2>
    </ActorInfo>
  )
}
