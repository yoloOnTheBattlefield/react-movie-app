import React from 'react';
import { Link } from 'react-router-dom';
import Parallax from './Parallax';
import Trailer from './Trailer/Trailer';
import {
  Hero,
  Overlay,
  TrailerWrapper,
  Scroll,
  Line
} from './Hero.styles';


export default class extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      large: false
    }
  }
  checkWidth = () => {
    this.setState({
      large: window.innerWidth > 768 ? true : false
    })
  }
  componentDidMount(){
    this.checkWidth();
    window.addEventListener('resize', (e) => {
      this.checkWidth();
    })
  }
  render(){
    const { movie, landing } = this.props;
    if(!movie){
      return null
    }
    const {
      id
    } = movie;
    const { large } = this.state;
    return (
      <Hero>
        <Overlay />
        <Link to={`/movie/${id}`}>
          <Parallax large={large} landing={landing} movie={movie} />
        </Link>
        <TrailerWrapper>
          {
            large ?
              null
              :
              <Trailer movieId={id} />
          }
          <Scroll>
            <Line />
          </Scroll>
        </TrailerWrapper>
      </Hero>
    )
  }
}
