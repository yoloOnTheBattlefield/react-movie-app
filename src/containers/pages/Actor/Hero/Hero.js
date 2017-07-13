import React from 'react';
import Description from './Description';
import {
  Hero,
  Actor,
} from './Hero.styles';


export default class extends React.Component {
  render(){
    const { actor, backdrop, fixed } = this.props;
    if(!backdrop){
      return null;
    }
    return (

      <Hero >
        <Actor
          poster={`https://image.tmdb.org/t/p/w1000${backdrop}`}
          fixed={fixed}
        />
        <Description
          actor={actor}
          checkFixed={(bool) => this.checkFixed(bool)}
        />
      </Hero>

    )
  }
}
