import React from 'react';
import {
  ActorInfo,
  Name
} from './ActorInfo.styles';

export default ({ actor }) => {
  return (
    <ActorInfo>
      <Name>{actor.name}</Name>
    </ActorInfo>
  )
}
