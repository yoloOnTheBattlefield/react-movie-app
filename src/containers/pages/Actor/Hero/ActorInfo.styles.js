import styled from 'styled-components';
import {
  phone,
  tablet
} from '../../../theme/sizes';

const gold = '#E1CB96';

export const ActorInfo = styled.div`
  width: 50vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: center;
  @media (max-width: ${tablet}px){
    padding-top: 60px;
    width: 100%;
  }
`;

export const Name = styled.div`
  font-size: 50px;
  line-height: 50px;
  padding: 5px;
  margin-bottom: 10px;
  color: ${gold};
  font-family: 'Cinzel', serif;
  word-wrap: wrap;
  span{
    color: white;
  }
  @media (max-width: ${tablet}px){
    padding: 0;
    margin: 0;
    text-align: center;
  }
`;
