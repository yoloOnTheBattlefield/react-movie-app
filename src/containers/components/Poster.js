import styled from 'styled-components';
import {
  tablet,
  phone
} from '../theme/sizes';

const Poster = styled.div`
  width: 300px;
  height: 450px;
  background: url(${props => props.poster});
  background-size: cover;
  background-position: 50%;
  position: relative;
  border-radius: ${props => props.hero ? '5px' : '0'};
  @media (max-width: ${tablet}px){
    width: 300px;
    height: 450px;
  }
  @media (max-width: ${phone}px){
    width: 100vw;
    height: 80vh;
  }
`;

export default Poster;
