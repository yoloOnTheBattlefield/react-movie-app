import styled from 'styled-components';
import { tablet } from '../../../theme/sizes';
import { gradientRed } from '../../../theme/colors';

export const Container = styled.div`
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
  justify-content: space-around;
  position: relative;
`;

export const ScrollContainer = styled.div`
  width: 100%;
  height: 225px;
  display: flex;
  flex-direction: row;
  overflow-y: scroll;
`;

export const Title = styled.div`
  z-index: 5;
  width: 100%;
  height: 60px;
  padding: 0px;
  display: flex;
  align-items: center;
  text-shadow: 10px 10px 10px rgba(157,108,210,0.2);
  h1{
    background: ${gradientRed};
    font-size: 45px;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

export const Card = styled.div`
  width: 150px;
  height: 225px;
  position: relative;
  margin: 5px;
  overflow: hidden;
  &:before{
    width: 100%;
    height: 100%;
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    background: url(${props => props.member });
    background-size: cover;
    background-position: 50%;
    transform: scale(1.1);
    transition: 0.2s ease-in-out;
  }
  &:after{
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    transition: 0.2s;
  }
  &:hover:before{
    transform: scale(1);
  }
`;

export const Name = styled.div`
  width: 100%;
  position: absolute;
  left: 0;
  bottom: 0;
  background: rgba(0,0,0,0.5);
  padding: 10px 0;
  text-align: center;
  color: white;
`;
