import styled from 'styled-components'
import { tablet } from '../../../../theme/sizes';

export const TrailersContainer = styled.div`
  width: 100%;
  height: 200px;
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
`;
