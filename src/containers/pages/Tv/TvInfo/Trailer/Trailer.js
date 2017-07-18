import React from 'react';
import { connect } from 'react-redux';
import getTvTrailer from './actions';
import { TrailerItem, TrailersContainer } from './Trailer.styles';

class Trailer extends React.Component{
  componentWillMount(){
    this.props.getTvTrailer(this.props.id);
  }
  componentDidUpdate(prevProps, prevState) {
    if(prevProps.id !== this.props.id){
      this.props.getTvTrailer(this.props.id);
    }
  }
  render(){
    const { trailers } = this.props;
    if(!trailers){
      return null
    }
    return (
      <div>
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
  trailers: state.getTv.trailers
});

const mapDispatchToProps =  (dispatch) => ({
  getTvTrailer: (movieId) => dispatch(getTvTrailer(movieId))
});

export default connect(mapStateToProps, mapDispatchToProps)(Trailer);
