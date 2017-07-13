import React from 'react';
import Headroom from 'react-headroom';
import ReactSVG from 'react-svg';
import { Link } from 'react-router-dom';
import SearchForm from './SearchForm/SearchForm';
import reactLogo from '../../assets/images/react-logo.svg'
import {
  Nav,
  NavInner,
  Button,
  Third,
  MenuPanel,
  MenuList
} from './Navbar.styles';

class Navbar extends React.Component{
  render () {
    return (
      <Headroom style={{zIndex: 100}}>
        <Nav>
          <NavInner>
            <Third>
              <Link to='/'>
                <ReactSVG
                  path={reactLogo}
                  callback={svg => console.log(svg)}
                  style={{
                    width: 40,
                    height: 40
                  }}
                />
              </Link>
            </Third>
            <Third>
              <SearchForm />
            </Third>
            <Third />
          </NavInner>
        </Nav>
      </Headroom>
    );
  }
}


export default Navbar;
