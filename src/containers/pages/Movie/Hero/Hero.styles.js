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
  height: 100vh;
  box-shadow: 0px 50px 100px rgba(0,0,0,0.8);
  overflow: hidden;
  margin-bottom: 150px;
  position: relative;
`;

export const Backdrop = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background: url(${props => props.backdrop});
  background-size: cover;
  background-position: 50%;

`;

export const Overlay = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background: linear-gradient(rgba(23, 29, 33, 1) 0%, rgba(23, 29, 33, 0.9) 15%, rgba(23, 29, 33, 0.7) 33.3%,  rgba(86, 90, 93, 0.3) 90%, rgba(0,0,0,0.8) 100%);
`;

export const HeroWrapper = styled.div`
  width: 100%;
  height: 450px;
  position: absolute;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  background: linear-gradient(to top, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0) 90%);
`;
