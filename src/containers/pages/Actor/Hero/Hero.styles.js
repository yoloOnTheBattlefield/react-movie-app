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
  width: 100vw;
  min-height: 100vh;
  box-shadow: 0px 50px 100px rgba(0,0,0,0.8);
  position: relative;
`;

export const Actor = styled.div`
  width: 40%;
  height: 100vh;
  position: ${props => props.fixed ? 'fixed' : 'absolute'};
  top: ${props => props.fixed ? '0' : '100%'};

  right: 0;
  background: url(${props => props.poster});
  background-size: cover;
  background-position: 50%;
  filter: grayscale(1);
`;
