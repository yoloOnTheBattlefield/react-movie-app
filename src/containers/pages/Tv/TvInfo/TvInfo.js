import React from 'react';
import Trailer from './Trailer/Trailer';
import {
  Container,
  Info,
  Title,
  Overview
} from './TvInfo.styles';

import SideBar from './SideBar';

export default ({ tv }) => {
  console.log(tv);
  return (
    <Container>
      <Info>
        <Overview>{tv.overview}</Overview>
        <Trailer id={tv.id} />
      </Info>
      <SideBar tv={tv} />
    </Container>
  )
}
