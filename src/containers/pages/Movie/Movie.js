import React from 'react';
import { connect } from 'react-redux';
import { getMovieById } from './actions';
import { Loader } from 'semantic-ui-react';
import Hero from '../../components/Hero/Hero';
import MovieInfo from './MovieInfo/MovieInfo';
import Cast from './Cast/Cast';
import Similar from './Similar/Similar';

class Movie extends React.Component {
  componentWillMount(){
    this.props.getMovieById(this.props.match.params.id);
  }
  componentDidUpdate(prevProps, prevState) {
    if(prevProps.match.params.id !== this.props.match.params.id){
      this.props.getMovieById(this.props.match.params.id);
    }
  }
  render(){
    const { movie } = this.props;

    if(!movie){
      return <Loader size='massive' active inline='centered' />
    }
    return(
      <div>
        <Hero movie={movie}/>
        <MovieInfo movie={movie} />
        <Cast id={movie.id} />
        <Similar id={movie.id} />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  movie: state.getMovie.movie
});

const mapDispatchToProps = (dispatch) => ({
  getMovieById: (id) => dispatch(getMovieById(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(Movie);
