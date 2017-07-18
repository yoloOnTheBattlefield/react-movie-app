import styled from 'styled-components';
import {
  phone
} from '../../../theme/sizes';

export const Hero = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
  margin-top: -60px;
  @media (max-width: ${phone}px){
    height: 90vh;
    margin-top: 0;
  }
`;
