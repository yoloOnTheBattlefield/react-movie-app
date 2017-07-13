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
    width: 40vw;
    min-width: 360px;
    height: 180px;
    position: absolute;
    bottom: 0;
    right: 0;
  }
  @media (max-width: ${phone}px){
    width: 100vw;
    height: 50vh;
    position: relative;
  }
`;

export const TrailerTitle = styled.div`
  width: 100vw;
  height: 60px;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  padding: 10px;
  text-shadow: 10px 10px 10px rgba(157,108,210,0.2);
  text-align: center;
  z-index: 5;
  h1{
    background: ${gradientRed};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  @media (max-width: ${tablet}px){
    width: 100%;
    padding: 50px;
    h1{
      font-size: 60px;
      letter-spacing: 2px;
      word-spacing: 5px;
      transform: rotate(-90deg) translatey(-280%);
    }
  }
  @media (max-width: ${phone}px){
    h1{
      font-size: 35px;
      transform: rotate(0deg) translatey(0);

    }
  }
`;

export const ActorWrapper = styled.div`
  width: 100vw;
  max-width: 360px;
  height: calc(100vh - 180px);
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding-top: 100px;
  overflow-y: scroll;
  box-shadow: 4px 0px 80px rgba(0,0,0,0.8);
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
  background: url(${props => props.bgImage});
  background-position: top right;
  filter: blur(5px);
  overflow: hidden;
  opacity: 0.6;
`;

export const Actor = styled.div`
  width: 100px;
  height: 150px;
  background: red;
  margin: 5px;
  z-index: 2;
`;

export const Upcoming = styled.div`
  width: 100%;
  height: 50px;
  position: absolute;
  z-index: 2;
  left: 10px;
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
    top: 60px;
  }
  @media (max-width: ${phone}px){
    top: 10px;
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
