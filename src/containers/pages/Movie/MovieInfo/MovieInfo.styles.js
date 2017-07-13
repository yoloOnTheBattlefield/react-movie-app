import styled from 'styled-components';
import { tablet } from '../../../theme/sizes';
import { gradientRed } from '../../../theme/colors';

export const Container = styled.div`
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
  position: relative;
  @media (max-width: ${tablet}px){
    flex-direction: column;
    flex-wrap: wrap;
  }
`;

export const Info = styled.div`
  width: 75%;
  display: flex;
  flex-direction: column;
  padding-right: 50px;
  @media (max-width: ${tablet}px){
    width: 100%;
  }
`;


export const Title = styled.div`
  z-index: 5;
  width: 100%;
  max-width: 900px;
  height: 60px;
  margin: 0 auto;
  padding-bottom: 25px;
  display: flex;
  align-items: center;
  text-align: left;
  text-shadow: 10px 10px 10px rgba(157,108,210,0.2);
  h1{
    background: ${gradientRed};
    font-size: 35px;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

export const Overview = styled.div`
  width: 90%;
  font-size: 18px;
  line-height: 25px;
  font-weight: 300;
`;
