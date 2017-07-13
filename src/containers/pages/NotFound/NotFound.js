import React from 'react';
import { Link } from 'react-router-dom';
import { Background, Header } from './NotFound.styles';

const SignIn = () => {
  return (
    <div>
      <Background>
        <Header>
          FourOhFour
          <p>Page not found :(</p>
          <Link to='/'>Go Back Home</Link>
        </Header>
      </Background>
    </div>
  )
}

export default SignIn;
