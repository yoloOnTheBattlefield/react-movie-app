import styled, { keyframes } from 'styled-components';
import {
  gradientRed
} from '../../../theme/colors'
import {
  phone,
  tablet
} from '../../../theme/sizes';


export const Hero = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
  @media (max-width: ${tablet}px){
    margin-top: -60px;
  }
  @media (max-width: ${phone}px){
    height: 90vh;
    margin-top: 0;
  }
`;

export const Overlay = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background: linear-gradient(rgba(23, 29, 33, 1) 0%, rgba(23, 29, 33, 0.9) 15%, rgba(23, 29, 33, 0.7) 33.3%,  rgba(23, 29, 33, 0.3) 90%, #111 100%);
`;

export const ParalalxWrapper = styled.div`
  display: none;
  @media (max-width: ${tablet}px){
    position: absolute;
    top: 0;
    left: 0;
    display: block;
  }
  @media (max-width: ${phone}px){
    position: relative;
    display: block;
  }
`;

export const ParallaxInner = styled.div`
  background: linear-gradient(rgba(23, 29, 33, 0) 0%, rgba(23, 29, 33, 0.2) 15%, rgba(23, 29, 33, 0.3) 33.3%,  rgba(23, 29, 33, 0.8) 90%, rgba(23, 29, 33, 1) 100%);
  @media (max-width: ${tablet}px){
    width: calc(100vw - 360px);
    min-width: 400px;
    width: 100vw;
    height: 100vh;
  }
  @media (max-width: ${phone}px){
    width: 100vw;
    height: 40vh;
  }
`;

export const TrailerWrapper = styled.div`
  @media (max-width: ${tablet}px){
    position: absolute;
    width: 40vw;
    right: 0;
    left: 0;
    bottom: 50px;
    margin: auto;
    z-index: 11;
    box-shadow: 10px 10px 50px rgba(0,0,0,0.3);
  }
  @media (max-width: ${phone}px){
    width: 100vw;
    height: 50vh;
    bottom: 0;
    position: relative;
  }
`;

export const TrailerTitle = styled.div`
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
    width: 100%;
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
    display: ${props => props.mobile ? 'none' : 'block'};
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
    display: ${props => props.mobile ? 'block' : 'none'};
    h1{
      font-size: 35px;
      letter-spacing: 0px;
      word-spacing: 1px;
    }
  }
`;

export const ActorWrapper = styled.div`
  height: calc(100vh - 180px);
  position: absolute;
  top: 0;
  right: 0;
  padding-top: 60px;
  box-shadow: -10px 0px 80px rgba(0,0,0,0.8);
  @media (max-width: ${tablet}px){
    width: 90vw;
  }
  @media (max-width: ${phone}px){
    display: none;
  }
`;

export const ActorBlur = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: rgba(0,0,0,0.2);
  filter: blur(5px) grayscale(1);
  overflow: hidden;
  opacity: 1;
`;


export const Upcoming = styled.div`

  position: absolute;
  z-index: 2;

  color: white;
  h1 span{
    padding: 0 5px;
    width: auto;
    background: rgba(0,0,0,0.6);
    margin: 0;
    font-size: 25px;
    font-weight: 300;
    line-height: 25px;
  }
  @media (max-width: ${tablet}px){
    width: 200px;
    top: 150px;
    left: -60px;
    transform: rotate(-90deg);
  }
  @media (max-width: ${phone}px){
    width: 100%;
    height: 50px;
    top: 10px;
    left: 10px;
    transform: rotate(0deg);
  }
`;

export const Scroll = styled.div`
  display: none;
  width: 100vw;
  height: 10vh;
  bottom: 0;
  left: 0;
  right: 0;
  overflow: hidden;
  position: absolute;
  &:after{
    width: 100%;
    height: 100%;
    content: '';
    position: absolute;
    z-index: 5;
    background: linear-gradient(#111 0%, transparent 10%, transparent 90%, rgb(17, 17, 17) 100%);
  }
  @media (max-width: ${phone}px){
    display: block;
  }
`;

const animation = keyframes`
	from {
		transform: translatey(-100%);
	}

	to {
		transform: translatey(100%);
    opacity: 0;
	}
`;

export const Line = styled.div`
  width: 1px;
  height: 100px;
  background: rgba(255,255,255, 08);
  position: absolute;
  left: 0;
  right: 0;
  margin: auto;
  animation: ${animation} 2s cubic-bezier(0.17, 0.89, 0.42, 0.94) infinite;
`
