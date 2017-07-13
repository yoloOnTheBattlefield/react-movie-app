import React from 'react';
import { connect } from 'react-redux';
import getMovieTrailer from './actions';
import { TrailerItem, TrailersContainer } from './Trailer.styles';

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
    if(!trailers){
      return null
    }
    return (
      <div>
        <h2>Trailers</h2>
        <TrailersContainer>
          {
            trailers.results ?
              trailers.results.map(trailer => {
                return(
                  <TrailerItem key={trailer.id}>
                    <iframe
                      src={`https://www.youtube.com/embed/${trailer.key}?ecver=2`}
                      title={trailer.key}
                      frameBorder="0"
                      style={{
                        position: 'relative',
                        left: 0,
                        width: 360,
                        height: 180
                      }}
                      allowFullScreen
                      />
                    </TrailerItem>
                  )

                }
              )
              :
              null
          }
        </TrailersContainer>
      </div>
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
