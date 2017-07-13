import styled from 'styled-components';
import {
  gradientRed
} from '../theme/colors'
import {
  phone,
  tablet
} from '../theme/sizes';

const heroHeight = '100vh';

export const Hero = styled.div`
  width: 100vw;
  height: 100vh;
  @media (max-width: ${tablet}px){
    height: ${heroHeight};
  }
  @media (max-width: ${phone}px){
    display: ${props => props.landing ? 'none' : 'block'}
  }
`;

export const Backdrop = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background: url(${props => props.backdrop});
  background-size: cover;
  background-position: 50%;
  filter: brightness(120%) grayscale(1);
  @media (max-width: ${tablet}px){
    height: ${heroHeight};
  }
`;

export const Overlay = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-image: radial-gradient(at 10% 30%, #1e272c 0%, #445761 100%);
  opacity: 0.8;
  @media (max-width: ${tablet}px){
    height: ${heroHeight};
  }
`;

export const MovieWrapper = styled.div`
  width: 80%;
  max-width: 800px;
  height: 450px;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  display: flex;
  justify-content: space-between;
  @media (max-width: ${tablet}px){
    width: 90%;
    justify-content: center;
    align-items: center;
  }
`;


export const MovieDescription = styled.div`
  width: calc(100% - 300px);
  height: 100%;
  padding-left: 20px;
  @media (max-width: ${tablet}px){
    height: auto;
    padding: 0;
    position: absolute;
    width: 100vh;
    text-align: center;

    transform: translatex(28%);
  }
`;

export const Heading = styled.h1`
  font-size: ${props => props.small ? '15px' : '30px'};
  font-weight: ${props => props.small ? '100' : '500'};
  display: ${props => props.landing ? 'block' : 'none'};
  color: white;
  margin: 0;
  padding-bottom: ${props => props.small ? '5px' : '20px'};
  @media (max-width: ${tablet}px){
    display: ${props => props.small ? 'none' : 'block'};
    font-size: 30px;
    font-weight: 300;
    transform: rotate(90deg);
  }
`;

export const Overview = styled.p`
  font-size: 20px;
  color: white;
  margin: 0;
  font-weight: 300;
  margin: 15px auto;
  line-height: 30px;
  @media (max-width: ${tablet}px){
    display: none;
  }
`;

export const Rating = styled.div`
  width: 35px;
  height: 30px;
  bottom: 0;
  position: absolute;
  h2{
    background: ${gradientRed};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  @media (max-width: ${tablet}px){
    display: none;
  }
`;
