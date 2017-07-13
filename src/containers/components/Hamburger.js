import React from 'react';
import {
  Hamburger,
  Inner,
  TopLine,
  MiddleLine,
  BottomLine,
} from './Hamburger.styles';

export default ({ handleClick, open }) => {
  return(
    <Hamburger onClick={handleClick}>
      <Inner>
        <TopLine open={open} />
        <MiddleLine open={open} />
        <BottomLine  open={open} />
      </Inner>
    </Hamburger>
  )
}
