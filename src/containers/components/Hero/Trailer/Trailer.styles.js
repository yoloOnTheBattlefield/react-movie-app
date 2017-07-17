import styled from 'styled-components';
import { phone, tablet } from '../../../theme/sizes';

export const TrailerItem = styled.div`
  position: relative;
  width: 450px;
  height: 235px;
  @media (max-width: ${phone}px){
    width: 100vw;
    height: 40vh;
  }
`;
