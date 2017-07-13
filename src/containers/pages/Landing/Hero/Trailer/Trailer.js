import React from 'react';
import { connect } from 'react-redux';
import getMovieTrailer from './actions';
import { TrailerItem } from './Trailer.styles';

class Trailer extends React.Component{
  componentWillMount(){
    this.props.getMovieTrailer(this.props.movieId);
  }
  componentDidUpdate(prevProps, prevState) {
    if(prevProps.movieId !== this.props.movieId){
      this.props.getMovieTrailer(this.props.movieId);
    }
  }
  render(){
    const { trailers } = this.props;
    if(!trailers.results){
      return null
    }
    return (
        <TrailerItem>
          <iframe
              src={`https://www.youtube.com/embed/${trailers.results[0].key}?ecver=2`}
              title={trailers.results[0].key}
              style={{
                position: 'relative',
                left: 0,
                width: '100%',
                height: '100%'
              }}
              frameBorder="0"
              allowFullScreen
          />
        </TrailerItem>
    )
  }
}

const mapStateToProps = (state) => ({
  trailers: state.getMovie.trailers
});

const mapDispatchToProps =  (dispatch) => ({
  getMovieTrailer: (movieId) => dispatch(getMovieTrailer(movieId))
});

export default connect(mapStateToProps, mapDispatchToProps)(Trailer);
