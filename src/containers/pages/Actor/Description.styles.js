import styled from 'styled-components';
import {
  phone,
  tablet
} from '../../theme/sizes';

export const InformationWrapper = styled.div`
  margin: 10% auto;
  width: 100%;
  max-width: 90%;
  padding: 5px 10px;
`;

export const Biography = styled.div`
  margin-top: 10%;
  font-family: 'Raleway', sans-serif;
  font-size: 20px;
  line-height: 25px;
  word-spacing: 2px;
  &:first-letter{
    font-size: 55px;
    display:block;
    float:left;
    margin:3px;
  }
`;
