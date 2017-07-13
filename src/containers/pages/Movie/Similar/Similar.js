import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import getSimilar from './actions';

import {
  Container,
  ScrollContainer,
  Card,
  Name,
  Title
} from './Similar.styles.js';

class Similar extends React.Component{
  componentWillMount(){
    this.props.getSimilar(this.props.id);
  }
  componentDidUpdate(prevProps, prevState) {
    if(prevProps.id !== this.props.id){
      this.props.getSimilar(this.props.id);
    }
  }

  render(){
    if(!this.props.similar){
      return null;
    }
    return (
      <Container>
        <Title><h1>Similar Movies</h1></Title>
        <ScrollContainer>
        {
          this.props.similar.results ?
            this.props.similar.results.slice(0, 10).map((similarMovie) => {
              return (
                <Link
                  to={`/movie/${similarMovie.id}`}
                  key={similarMovie.id}
                >
                  <Card
                    poster={`https://image.tmdb.org/t/p/w300${similarMovie.poster_path}`}
                  >
                    {similarMovie.title}
                  </Card>
                </Link>
              )
            })
            :
            null
        }
      </ScrollContainer>
      </Container>
    )
  }
}

const mapStateToProps = (state) => ({
  similar: state.getMovie.similar
});

const mapDispatchToProps = (dispatch) => ({
  getSimilar: (id) => dispatch(getSimilar(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(Similar);
