import styled from 'styled-components';
import { phone, tablet } from '../../../../theme/sizes';

export const TrailerItem = styled.div`
  position: relative;
  width: 360px;
  height: 180px;
  box-shadow: -10px 0 100px #111;
  @media (max-width: ${phone}px){
    width: 100vw;
    height: 40vh;
  }
`;
