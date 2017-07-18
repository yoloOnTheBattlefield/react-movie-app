import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import getSimilar from './actions';

import {
  Container,
  ScrollContainer,
  Card,
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
        <Title><h1>Similar Series</h1></Title>
        <ScrollContainer>
        {
          this.props.similar.results ?
            this.props.similar.results.slice(0, 10).map((similar) => {
              return (
                <Link
                  to={`/tv/${similar.id}`}
                  key={similar.id}
                >
                  <Card
                    poster={`https://image.tmdb.org/t/p/w300${similar.poster_path}`}
                  >
                    {similar.name}
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
  similar: state.getTv.similar
});

const mapDispatchToProps = (dispatch) => ({
  getSimilar: (id) => dispatch(getSimilar(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(Similar);
