import styled from 'styled-components'
import { tablet, phone } from '../../../../theme/sizes';

export const TrailersContainer = styled.div`
  width: 100%;
  height: 200px;
  padding: 10px 0;
  display: flex;
  flex-direction: row;
  overflow-y: scroll;
  @media (max-width: ${tablet}px){
    width: 100%;
  }
`;

export const TrailerItem = styled.div`
  position: relative;
  height: 180px;
  margin: 0 5px;
  @media (max-width: ${phone}px){
    width: calc(100vw - 20px);
  }
`;
