import React from 'react';
import Parallax from './Parallax';
import {
  Hero
} from './TvHero.styles';

export default ({ tv, large }) => {
  return (
    <Hero>
      <Parallax tv={tv} large={large} />
    </Hero>
  )
}
