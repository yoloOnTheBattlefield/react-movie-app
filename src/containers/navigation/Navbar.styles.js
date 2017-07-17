import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';
import ReactSVG from 'react-svg';
import { tablet, phone } from '../theme/sizes';

export const Nav = styled.nav`
  width: 100%;
  height: 60px;
  z-index: 100;
  background: #111;
`;

export const NavInner = styled.div`
  width: 100%;
  max-width: 900px;
  height: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: ${tablet}px){
    max-width: 610px;
  }
  @media (max-width: ${phone}px){
    width: 90%;
    margin: 0 auto;
  }
`;

const Third = styled.div`
  width: 33.33%;
  display: flex;
  justify-content: space-around;
`;

export const Logo = Third.extend`
  display: flex;
  @media (max-width: ${tablet}px){
    width: 50%;
  }
  @media (max-width: ${phone}px){
    width: 30%;
  }
`;

const rotate360 = keyframes`
	from {
		transform: rotate(0deg);
	}

	to {
		transform: rotate(360deg);
	}
`;


export const Svg = styled(ReactSVG)`
  width: 40px;
  height: 40px;
  margin-right: 10px;
  animation: ${rotate360} 5s linear infinite;
  @media (max-width: ${phone}px){
    width: 35px;
    height: 35px;
  }
`;

export const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  color: rgba(255,255,255,0.8);
  font-size: 20px;
  transition: 0.2s;
  &:hover{
    color: white;
  }
  @media (max-width: ${phone}px){
    font-size: 15px;
    margin-right: 10px;
  }
`;

export const InputContainer = Third.extend`
  @media (max-width: ${tablet}px){
    width: 50%;
  }
  @media (max-width: ${phone}px){
    width: 70%;
  }
`;

export const FakeThird = Third.extend`
  @media (max-width: ${tablet}px){
    display: none;
  }
`;
