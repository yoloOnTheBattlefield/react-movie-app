import styled, { keyframes } from 'styled-components';
import {
  gradientRed
} from '../../theme/colors'
import {
  phone,
  tablet
} from '../../theme/sizes';


export const Hero = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
  margin-top: -60px;
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



export const TrailerWrapper = styled.div`
  display: none;
  @media (max-width: ${tablet}px){
    display: block;
    position: absolute;
    width: 450px;
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
