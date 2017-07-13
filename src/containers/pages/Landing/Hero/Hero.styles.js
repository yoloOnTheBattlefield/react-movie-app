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
  @media (max-width: ${phone}px){
    height: 90vh;
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
  position: relative;
  @media (max-width: ${phone}px){
    display: block;
  }
`;

export const ParallaxInner = styled.div`
  width: 100vw;
  height: 40vh;
  background: linear-gradient(rgba(23, 29, 33, 0) 0%, rgba(23, 29, 33, 0.2) 15%, rgba(23, 29, 33, 0.3) 33.3%,  rgba(23, 29, 33, 0.8) 90%, rgba(23, 29, 33, 1) 100%);
`;

export const TrailerWrapper = styled.div`
  height: 50vh;
  width: 100vw;
  position: relative;
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
    font-size: 35px;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

export const Upcoming = styled.div`
  width: 100%;
  height: 50px;
  position: absolute;
  z-index: 2;
  top: 10px;
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
`;

export const Scroll = styled.div`
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
    background: linear-gradient(#111 0%, transparent 10%, transparent 90%, #111 100%);
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
  animation: ${animation} 2s ease-in-out infinite;
`
