import styled from 'styled-components';
import { tablet } from '../../../theme/sizes';

export const SideBar = styled.div`
  width: 25%;
  padding-top: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  @media (max-width: ${tablet}px){
    width: 100%;
    padding: 0;
    margin: 0 auto;
    flex-direction: row;
    align-items: start;
  }
`;

export const Content = styled.div`
  width: 100%;
  ul{
    padding: 0;
    list-style: none;
  }

  li{
    padding: 0;
  }
`;
