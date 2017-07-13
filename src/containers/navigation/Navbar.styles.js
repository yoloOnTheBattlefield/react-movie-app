import styled from 'styled-components';
import { Link } from 'react-router-dom';
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
  @media (max-width: ${phone}px){
    width: 300px;
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
    width: 33.33%;
  }
  @media (max-width: ${phone}px){
    width: 20%;
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
`;

export const InputContainer = Third.extend`
  @media (max-width: ${tablet}px){
    width: 66.66%;
  }
  @media (max-width: ${phone}px){
    width: 80%;
  }
`;

export const FakeThird = Third.extend`
  @media (max-width: ${tablet}px){
    display: none;
  }
`;
