import styled from 'styled-components';
import { Link } from 'react-router-dom';

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
`;

export const MenuPanel = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  background: white;
  transform: ${props => props.open ? 'translate(0)' : 'translate(-100%)'};
  transition: 0.5s ease-in-out;
  z-index: 3;
`;

export const MenuList = styled.ul`
  list-style: none;
  position: absolute;

  left: 10%;
  width: 800px;
  height: 500px;
  margin: 0 auto;
  padding: 0;
  transform: ${props => props.open ? 'translate(0)' : 'translate(-100%)'};
  transition: 0.5s ease-in-out;
  transition-delay: 0.5s;
  li{
    font-size: 45px;
    padding: 20px 0px;
    color: rgba(0,0,0,0.8);
    cursor: pointer;
    &:first-of-type{
      padding-top: 80px;
    }
  }
`;

//

export const Button = styled(Link)`
  height: 60px;
  padding: 5px 10px;
  font-size: 20px;
  line-height: 20px;
  color: white;
  border-bottom: 2px solid #FF220C;
  &:hover{
    color: white;
  }
`;
export const Third = styled.div`
  width: 33.33%;
  display: flex;
  justify-content: space-around;
`;
