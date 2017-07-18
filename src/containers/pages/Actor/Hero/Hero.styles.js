import styled from 'styled-components';
import {
  gradientRed
} from '../../../theme/colors'
import {
  phone,
  tablet
} from '../../../theme/sizes';

const heroHeight = '100vh';
const gold = '#E1CB96';

export const Hero = styled.div`
  position: relative;
  width: 100vw;
  padding: 0 10px;
  display: flex;
  align-items: center;
  @media (max-width: ${tablet}px){
    flex-wrap: wrap;
  }
`;

export const Actor = styled.div`
  width: 400px;
  height: 600px;
  margin: auto;
  background-image: url(${props => props.poster});
  background-size: cover;
  background-position: 50%;
  filter: grayscale(0.5);
  position: relative;
  @media (max-width: ${tablet}px){
    width: 300px;
    height: 450px
  }
`;
