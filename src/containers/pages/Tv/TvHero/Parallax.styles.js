import styled, { keyframes } from 'styled-components';
import {
  gradientRed
} from '../../../theme/colors'
import {
  phone,
  tablet
} from '../../../theme/sizes';

export const ParalalxWrapper = styled.div`
  @media (max-width: ${tablet}px){
    position: absolute;
    top: 0;
    left: 0;
  }
  @media (max-width: ${phone}px){
    position: relative;
  }
`;

export const ParallaxInner = styled.div`
  background: linear-gradient(rgba(23, 29, 33, 0) 0%, rgba(23, 29, 33, 0.2) 15%, rgba(23, 29, 33, 0.3) 33.3%,  rgba(23, 29, 33, 0.8) 90%, rgba(23, 29, 33, 1) 100%);
  width: 100vw;
  height: 100vh;
`;

export const ParallaxTitle = styled.div`
  position: absolute;
  padding: 10px;
  text-shadow: 0px 10px 10px rgba(157,108,210,0.2);
  text-align: center;
  z-index: 5;

  h1{
    background: ${gradientRed};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  @media (max-width: ${tablet}px){
    width: 80%;
    left: 0;
    right: 0;
    margin: 0 auto;
    height: calc(100% - 205px);
    padding: 0;
    h1{
      position: absolute;
      width: 100%;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      font-size: 40px;
      line-height: 45px;
      letter-spacing: 2px;
      word-spacing: 5px;
    }
  }
  @media (max-width: ${phone}px){
    width: 100vw;
    height: 60px;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    transform: rotate(0deg);
    h1{
      padding: 0 10px;
      font-size: 35px;
      letter-spacing: 0px;
      word-spacing: 1px;
    }
  }
`;

export const Wrapper = styled.div`
  width: 100%;
  position: absolute;
  bottom: 60px;
  left: 0;
  display: flex;
  justify-content: space-between;
`;

export const Container = styled.div`
  width: 80%;
  max-width: 900px;
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
  padding: 0;
  padding-top: 30px;
  flex-wrap: wrap;
  list-style: none;
  div{
    padding: 5px;
    margin-right: 20px;
    color: white;
    font-size: 18px;
    color: rgba(255,255,255, 1);
  }
  div span{
    padding-right: 10px;
    font-size: 15px;
    color: rgba(255,255,255, 0.8);
  }
`;
