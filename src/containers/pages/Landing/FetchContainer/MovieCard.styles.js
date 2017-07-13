import styled from 'styled-components';
import { phone, tablet } from '../../../theme/sizes';

export const Container = styled.div`
  width: 300px;
  height: 450px;
  margin: 20px 5px;
  position: relative;
  @media (max-width: ${tablet}px){
    width: 300px;
  }
  @media (max-width: ${phone}px){
    width: 100vw;
    margin: 25px 5px;
  }
`;


export const Title = styled.div`
  width: 100%;
  height: 50px;
  position: absolute;
  z-index: 2;
  top: 10px;
  left: 10px;
  h1 span{
    padding: 0 5px;
    width: auto;
    background: rgba(0,0,0,0.5);
    margin: 0;
    font-size: 25px;
    font-weight: 300;
    line-height: 25px;
  }
`;
