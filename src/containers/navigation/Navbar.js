import React from 'react';
import Headroom from 'react-headroom';
import SearchForm from './SearchForm/SearchForm';
import reactLogo from '../../assets/images/react-logo.svg'
import {
  Nav,
  NavInner,
  FakeThird,
  Logo,
  Svg,
  StyledLink,
  InputContainer
} from './Navbar.styles';

class Navbar extends React.Component{
  render () {
    return (
      <Headroom style={{zIndex: 100}}>
        <Nav>
          <NavInner>
            <Logo>
              <StyledLink to='/'>
                <Svg
                  path={reactLogo}
                />
                Browse
              </StyledLink>
            </Logo>
            <InputContainer>
              <SearchForm />
            </InputContainer>
            <FakeThird />
          </NavInner>
        </Nav>
      </Headroom>
    );
  }
}


export default Navbar;
