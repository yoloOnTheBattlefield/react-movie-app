import styled from 'styled-components';
import { gradientRed } from '../../../theme/colors';
import { phone } from '../../../theme/sizes';

export const MovieList = styled.div`
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  position: relative;
  @media (max-width: ${phone}px){
    width: 100vw;
  }
`;

export const MovieListHeader = styled.div`
  z-index: 5;
  width: 100%;
  max-width: 1000px;
  height: 60px;
  margin: 0 auto;
  padding: 0px;
  display: flex;
  align-items: center;
  text-align: center;
  h1{
    margin: 0 auto;
    background: ${gradientRed};
    font-size: 32px;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;
