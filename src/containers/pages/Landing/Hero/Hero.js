import React from 'react';
import { Link } from 'react-router-dom';
import { Parallax } from 'react-parallax';
import Trailer from './Trailer/Trailer';
import {
  Hero,
  Overlay,
  ParalalxWrapper,
  ParallaxInner,
  TrailerWrapper,
  TrailerTitle,
  ActorWrapper,
  ActorBlur,
  Upcoming,
  Scroll,
  Line
} from './Hero.styles';

export default class extends React.Component{
  render(){
    const { movie } = this.props;
    if(!movie){
      return null
    }
    const {
      poster_path,
      id,
      title
    } = movie;
    return (
      <Hero>
        <Overlay />
        <Link to={`/movie/${id}`}>
          <ParalalxWrapper>
            <Upcoming><h1><span>Featured Movie</span></h1></Upcoming>
            <Parallax
              strength={200}
              bgImage={`https://image.tmdb.org/t/p/w1000${poster_path}`}
            >
              <TrailerTitle mobile><h1>{title}</h1></TrailerTitle>
              <ParallaxInner/>
            </Parallax>
          </ParalalxWrapper>
        </Link>
        <ActorWrapper>
          <ActorBlur />
          <div style={{width: '100%', height: '100px', zIndex: 2}}>
            <TrailerTitle><h1>{title}</h1></TrailerTitle>
          </div>
        </ActorWrapper>
        <TrailerWrapper>
          <Trailer movieId={id} />
          <Scroll>
            <Line />
          </Scroll>
        </TrailerWrapper>
      </Hero>
    )
  }
}
