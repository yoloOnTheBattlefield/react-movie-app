import styled from 'styled-components';
import {
  gradientRed
} from '../../../theme/colors'
import {
  phone,
  tablet
} from '../../../theme/sizes';

const heroHeight = '100vh';

export const Hero = styled.div`
  position: relative;
  width: 100vw;
  box-shadow: 0px 50px 100px rgba(0,0,0,0.8);
  @media (max-width: ${tablet}px){
    height: calc(100vh - 60px);
    margin-top: -60px;
    padding-top: 60px;
  }
`;

export const Actor = styled.div`
  position: absolute;
  width: 50%;
  height: 100%;
  top: 0;
  left: 0;
  background: url(${props => props.poster});
  background-size: cover;
  background-position: 50%;
  filter: grayscale(1);
`;
