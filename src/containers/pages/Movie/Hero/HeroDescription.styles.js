import styled from 'styled-components';
import {
  gradientRed
} from '../../../theme/styles';

export const Container = styled.div`
  width: 100%;
  max-width: 1000px;
  display: flex;
  margin: 0 auto;
  flex-direction: column;
`;

export const Title = styled.div`
  z-index: 5;
  width: 100%;
  max-width: 900px;
  height: 60px;
  margin: 0 auto;
  padding: 0px;
  display: flex;
  align-items: center;
  text-align: center;
  text-shadow: 10px 10px 10px rgba(157,108,210,0.2);
  h1{
    background: ${gradientRed};
    font-size: 45px;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

export const ContainerInner = styled.div`
  width: 100%;
  max-width: 900px;
  display: flex;

  margin: 0 auto;
  list-style: none;
  padding: 0;
  padding-top: 30px;
  div{
    padding: 5px;
    margin-right: 20px;
    color: white;
    font-size: 18px;
    color: rgba(255,255,255, 0.8);
  }
  div span{
    padding-right: 10px;
    font-size: 15px;
    color: rgba(255,255,255, 1);
  }
`;
